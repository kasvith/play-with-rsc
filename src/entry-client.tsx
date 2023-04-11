import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.hydrateRoot(
  document,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

console.log("hydrateRoot");
