
require("golden-layout/src/css/goldenlayout-base.css");
require("golden-layout/src/css/goldenlayout-dark-theme.css");
import "../styles.scss";

import "../lib/goldenLayout/goldenLayout-dependencies";

if (typeof window === 'undefined') {
  global.window = {}
}


export default function ({ Component, pageProps }) {
  return <Component {...pageProps} />
}