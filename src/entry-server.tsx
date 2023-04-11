import ReactDOMServer from "react-dom/server";
import { App } from "./App";

export function render(url: string, res: any) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
    bootstrapModules: ["/src/preamble.js", "/src/entry-client.tsx"],
    onShellReady() {
      res.setHeader("Content-Type", "text/html");
      pipe(res);
    },
  });
}
