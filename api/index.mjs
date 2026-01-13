import { createServer } from "./server.mjs";

const server = createServer();
await server.listen({ host: "0.0.0.0", port: 3000 });
 

