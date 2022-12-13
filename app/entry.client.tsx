import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

import createEmotionCache from "styles/createEmotionCache";

hydrate(
  <CacheProvider value={createEmotionCache()}>
    <RemixBrowser />
  </CacheProvider>,
  document
);
