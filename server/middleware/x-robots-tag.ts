/**
 * Global `X-Robots-Tag: noindex` on Nitro-handled responses (SSR, API routes,
 * preview). Static assets on Vercel also get the header via `vercel.json`;
 * dev uses `scripts/x-robots-tag-plugin.mjs`.
 */
const X_ROBOTS_TAG = "noindex";

export default async function xRobotsTagMiddleware(
  _event: unknown,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (result instanceof Response) {
    const headers = new Headers(result.headers);
    headers.set("X-Robots-Tag", X_ROBOTS_TAG);
    return new Response(result.body, {
      status: result.status,
      statusText: result.statusText,
      headers,
    });
  }
  return result;
}
