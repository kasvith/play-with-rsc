import ReactDOMServer from "react-dom/server";
import { App } from "./App";

export function render(url: string, res: any, ctx: any = {}) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <App assets={ctx?.assets} />,
    {
      bootstrapModules: ["/src/preamble.js", "/src/entry-client.tsx"],
      bootstrapScriptContent: `window.__assets__ = ${JSON.stringify(
        ctx?.assets
      )};`,
      onShellReady() {
        res.setHeader("Content-Type", "text/html");
        pipe(res);
      },
    }
  );
}
