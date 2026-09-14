const LEGACY_FEED_TYPES = new Set(["rss", "atom"]);

export function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.searchParams.get("format") === "feed" &&
    LEGACY_FEED_TYPES.has(url.searchParams.get("type"))
  ) {
    return new Response("Gone", {
      status: 410,
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  return context.next();
}
