import express from "express";
const server = express();
const PORT = process.ev.PORT  || 3000;

async function main() {
  // TODO: register middlewares (CORS...)
  
  // TODO: use router

  // TODO: default express error handling middleware

  server.listen(PORT, () => console.log(`listening for requests on port ${PORT}`));
}

main();

