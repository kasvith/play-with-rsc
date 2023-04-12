import { Counter } from "./Counter";
import { PostPage } from "./components/Post";
import "./index.css";
import "./App.css";

export function App({ assets = [] }) {
  console.log(assets);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {assets.map((stylePath: any) => (
          <link rel="stylesheet" href={stylePath} key={stylePath}></link>
        ))}
        <title>My app</title>
      </head>
      <body>
        <div id="app">
          <div className="app">
            <PostPage />
          </div>
        </div>
      </body>
    </html>
  );
}
