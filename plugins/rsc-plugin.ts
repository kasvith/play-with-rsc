import path from "node:path";
import { fileURLToPath } from "node:url";
import { Plugin } from "vite";

export function mySSRPlugin(): Plugin {
  let server;
  const assets = new Set<string>();
  const __dirname = process.cwd()

  return {
    name: "my-ssr",
    configureServer(_server) {
      server = _server;
      server.__assets__ = assets;
    },
    transform(code:any, id:any, options:any) {

      if (id.endsWith(".css")) {
        assets.add(id.replace(__dirname, ''));
      }
      
      // console.log("code", code);
      return code;
    },
  };
}
