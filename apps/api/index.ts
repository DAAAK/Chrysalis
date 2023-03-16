import express from "express";
import connect from "./src/utils/database";
import routes from "./src/routes/routes";
import cors from "cors";
import cookieSession from "cookie-session";

import { env } from "./src/utils";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [env.COOKIE_SECRET],
  })
);

connect();

app.use("/api", routes);

app.listen(env.PORT, () => {
  console.log(`Server listening on ${env.HOST}:${env.PORT}`);
});
