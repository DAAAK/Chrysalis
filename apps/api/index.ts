import express, { Request, Response, NextFunction } from "express";
import routes from "./src/routes/routes";
import cors from "cors";
import { parse } from "url";
import cookieParser from 'cookie-parser';

import { env, initDatabase } from "./src/tools";

const app = express();

app.use(cors({ origin: [env.WEB_URL], credentials: true }));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use((req: Request, _res: Response, next: NextFunction) => {
  const url = parse(req.url);
  console.log(`${req.method} ${url.pathname} ${url.query || ""}`);
  next();
});

app.use("/api", routes);

initDatabase();

app.listen(env.PORT, () => {
  console.log(`Server listening on ${env.HOST}:${env.PORT}`);
});
