import express from "express";
import cors from "cors";
import helmet from "helmet";
import setRoutes from "./routes.config";

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

setRoutes(server);

export default server;
