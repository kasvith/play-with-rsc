import { Counter } from "./Counter";

export function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/src/index.css"></link>
        <title>My app</title>
      </head>
      <body>
        <div id="app">
          <Counter />
        </div>
      </body>
    </html>
  );
}
