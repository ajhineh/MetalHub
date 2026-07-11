# ADR 2: Event-Driven Translation Pipeline using BullMQ and Redis

## Status
Accepted

## Context
The platform requires dynamic localization for 9 European languages. Performing synchronous translations (calling OpenAI API) during database save transactions in Strapi is highly problematic:
1. **Request Timeouts**: Database transactions would hang waiting for OpenAI's HTTP response, blocking admin actions.
2. **Failure Handling**: If the translation API fails, the entire database transaction rolls back, or localized pages remain empty without retry options.

## Decision
We implemented an **asynchronous event-driven queue** using Redis and BullMQ:
1. **Strapi Lifecycles**: Strapi's database lifecycle hooks (`afterCreate`, `afterUpdate`) intercept English draft saves, packaging data and pushing a lightweight job request to a Redis queue.
2. **Exponential Backoff**: The dispatcher specifies a maximum of 5 attempts (`attempts: 5`) with a 1000ms exponential delay to survive API rate-limiting or network drops.
3. **Isolated Translation Worker**: A dedicated Node process (BullMQ worker) consumes queue jobs, invokes the OpenAI chat completion API with B2B metallurgical prompts, writes localized drafts to Strapi, and fires Next.js cache revalidation triggers.
4. **Error Telemetry**: The worker registers a global `worker.on('failed')` listener to log errors without causing main thread process crashes.

## Consequences
* **Decoupled Performance**: Strapi save operations are instantaneous (latency < 50ms), ensuring a smooth dashboard experience.
* **Resilience**: Temporary OpenAI outages are handled gracefully by BullMQ's automatic exponential retry cycles.
* **Architecture overhead**: Requires a persistent Redis instance running alongside the CMS.
