import * as dotenv from "dotenv";

import server from "./config/server.config";

dotenv.config();

import "./config/database.config";

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
