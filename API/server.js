import { ServerConfig } from "./config";
import { redirectRouter, routerV1, routerV2 } from "./routes";

async function main() {
  const PORT = process.env.PORT  || 3001;
  const server = new ServerConfig({
    port: PORT,
    // middleware: [],
     routers: [routerV1, routerV2, redirectRouter]
  });  

  server.listen();
}

main();

