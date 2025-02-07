import { ServerConfig } from "./config";//19
import {
  redirectRouter,
  routerV1,
  routerV2,
  //authRouter,
  //routerV2Docs
} from "./routes";

async function main() {
  const PORT = process.env.PORT || 3000;
  const server = new ServerConfig({
    port: PORT,
    // middleware: [],
    routers: [redirectRouter, routerV1, routerV2]
  });

  server.listen();
}

main();
