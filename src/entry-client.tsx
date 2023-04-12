import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

declare global {
  interface Window {
    __assets__: any;
  }
}

ReactDOM.hydrateRoot(
  document,
  <BrowserRouter>
    <App assets={window.__assets__ || []} />
  </BrowserRouter>
);

console.log("hydrateRoot");
