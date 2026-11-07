/**
 * Dev-server `X-Robots-Tag: noindex` on every response. Production static
 * assets use `vercel.json`; SSR/API use `server/middleware/x-robots-tag.ts`.
 */
export const X_ROBOTS_TAG_VALUE = "noindex";

export function xRobotsTagPlugin() {
  return {
    name: "app-builder:x-robots-tag",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((_req, res, next) => {
        res.setHeader("X-Robots-Tag", X_ROBOTS_TAG_VALUE);
        next();
      });
    },
  };
}
