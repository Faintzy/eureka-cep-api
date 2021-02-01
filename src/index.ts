import "reflect-metadata";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import routes from "./routes/index";
import { createConnection } from "typeorm";

const app = express();

createConnection();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(3030);
