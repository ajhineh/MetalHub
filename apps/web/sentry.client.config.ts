import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || "https://mock-sentry-key@o0.ingest.sentry.io/mock-proj",
  tracesSampleRate: 0.1, // Adjust in production
  debug: false,
});
