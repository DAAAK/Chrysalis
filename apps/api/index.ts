import express, { Request, Response, NextFunction } from 'express';
import routes from './src/routes/routes';
import cors from 'cors';
import { parse } from 'url';
import cookieParser from 'cookie-parser';

import { env, initDatabase } from './src/tools';

const app = express();

app.options('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', [
    'X-Requested-With',
    'content-type',
    'credentials',
  ]);
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.status(200);
  next();
});

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use((req: Request, _res: Response, next: NextFunction) => {
  const url = parse(req.url);
  console.log(`${req.method} ${url.pathname} ${url.query || ''}`);
  next();
});

app.use('/api', routes);

initDatabase();

app.listen(env.PORT, () => {
  console.log(`Server listening on ${env.HOST}:${env.PORT}`);
});
