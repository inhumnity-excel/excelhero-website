# Excel Hero

Source for [excelhero.de](https://excelhero.de), the German Excel education site. The app is TanStack Start on Vite and React. Production builds use the Nitro `vercel` preset configured in `vite.config.ts`.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://localhost:8080](http://localhost:8080).

## Build

```bash
npm run build
```

That is the Vercel build command. It runs `vite build` (Nitro preset `vercel`, which writes the Build Output API to `.vercel/output`) and then `npm run db:migrate`.

Set the Vercel project framework to TanStack Start, or to Other if the dashboard does not list it. Leave the build command as `npm run build`. Do not set a static output directory such as `dist`; Nitro's Vercel preset publishes `.vercel/output`.

## Environment variables

A public content deploy builds and serves without secrets.

| Variable | Required | Notes |
| --- | --- | --- |
| `DATABASE_URL` | No | Postgres connection string. When unset, `db:migrate` skips and the app uses embedded PGLite. Set this only if you want a hosted database (for example persisted sign-in). |
| `VITE_AUTH_ENABLED` | No | Set to `false` to keep the bundled Better Auth / Grok sign-in UI off. Unset or `true` shows sign-in. The public lessons do not need accounts. |
| `BETTER_AUTH_SECRET` | Only with auth | Session signing secret. Without it, the server falls back to an ephemeral preview secret. |
| `BETTER_AUTH_URL` | Only with auth | Public origin, for example `https://excelhero.de`. |
| `GROK_AUTH_ISSUER` | Only with Grok federated sign-in | Auth broker issuer. Defaults to the bundled preview issuer. |
| `GROK_AUTH_CLIENT_ID` | Only with Grok federated sign-in | Per-app OAuth client id. |
| `GROK_AUTH_CLIENT_SECRET` | Only with Grok federated sign-in | Per-app OAuth client secret. |

Do not commit `.env` files. None of the variables above are required for `npm run build` to succeed.
