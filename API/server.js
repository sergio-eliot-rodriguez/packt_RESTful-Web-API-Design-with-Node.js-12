import { ServerConfig } from "./config";
import { contactsV1, groupsV1, redirectRouter, contactsV2 } from "./routes";

async function main() {
  const PORT = process.env.PORT  || 3001;
  const server = new ServerConfig({
    port: PORT,
    // middleware: [],
     routers: [contactsV1, groupsV1, redirectRouter, contactsV2]
  });  

  server.listen();
}

main();

