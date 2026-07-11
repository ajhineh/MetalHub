# ADR 1: Direct-to-S3 RFQ Upload with Client-Side Binary Verification

## Status
Accepted

## Context
The B2B RFQ portal allows users to upload heavy CAD engineering drawing files (up to 30MB) in formats such as PDF, DWG, STEP, and DXF. 
Previously, file payload buffering was routed through the Next.js server middleware. This presented two challenges:
1. **Memory Exhaustion**: Buffering 30MB files in Next.js API serverless function memory could lead to container crashes under high concurrent load.
2. **Security Leakage**: Unverified binary streams arriving on execution memory allowed malicious payloads (e.g. renamed executables) to reach the server scope.

## Decision
We decided to refactor the architecture to a **Direct-to-S3 upload model** using AWS S3 Presigned PUT URLs, coupled with **client-side binary header verification**:
1. **Client-side Verification**: Before requesting an upload slot, the browser reads the first 100 bytes of the file via the `FileReader` API. It checks the Magic Number signatures (e.g., `%PDF` = `25 50 44 46`, DWG = `AC10`, STEP = `ISO-10303`, DXF = `SECTION`). Malicious or mismatched files are rejected instantly at the user interface level.
2. **Presigned PUT URL Gateway**: A lightweight API route at `/api/rfq/presigned` utilizes the official AWS SDK (`@aws-sdk/s3-request-presigner`) to issue a secure PUT URL with a strict 3600-second expiration (`expiresIn: 3600`), bound directly to the file's mimeType and extension.
3. **Direct Upload**: The client browser issues a HTTP `PUT` request directly to the S3 bucket, bypassing Next.js server memory entirely.

## Consequences
* **Zero Server Footprint**: Next.js server memory utilization remains constant regardless of the file size uploaded, scaling effortlessly.
* **Hardened Security**: Renamed executables and malicious streams are blocked before any bytes are transmitted to the cloud.
* **CORS Dependency**: Requires an explicit S3 CORS configuration permitting `PUT` methods from the target web origins.
