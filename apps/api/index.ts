import express, { Request, Response, NextFunction } from 'express';
import routes from './src/routes/routes';
import cors from 'cors';
import { parse } from 'url';
import cookieParser from 'cookie-parser';

import { env, initDatabase } from './src/tools';
import session from 'express-session';
import * as sib from '@sendinblue/client';

const apiInstance = new sib.AccountApi();

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: env.JWT_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

apiInstance.setApiKey(sib.AccountApiApiKeys.apiKey, env.MAIL_API_KEY);

apiInstance.getAccount().then(
  function () {
    console.log('Succesfully connected to Brevo server.');
  },
  function (error) {
    console.error(error);
  }
);

app.use((req: Request, _res: Response, next: NextFunction) => {
  const url = parse(req.url);
  console.log(`${req.method} ${url.pathname} ${url.query || ''}`);
  next();
});

initDatabase();

app.use('/api', routes);

app.listen(env.PORT, () => {
  console.log(`Server listening on ${env.HOST}:${env.PORT}.`);
});
