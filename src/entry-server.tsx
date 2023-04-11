import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

const VITE_REACT_SSR_PREAMBLE = `
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true

console.log("Vite React: injected client preamble.")
`;

export function render(url: string, res: any) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
    bootstrapModules: ["/src/preamble.js", "/src/entry-client.tsx"],
    onShellReady() {
      res.setHeader("Content-Type", "text/html");
      pipe(res);
    },
  });
}
