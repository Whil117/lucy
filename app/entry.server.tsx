import { CacheProvider } from "@emotion/react";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import createEmotionCache from "styles/createEmotionCache";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <CacheProvider value={createEmotionCache()}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
