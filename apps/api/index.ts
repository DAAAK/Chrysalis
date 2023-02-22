import express from "express";
import connect from "./db/connect";
import routes from "./src/routes/routes";
import cors from "cors";
import cookieSession from "cookie-session";

import { config } from "./src/utils/env";

const PORT = 3001;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_SECRET],
  })
);

connect();

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
