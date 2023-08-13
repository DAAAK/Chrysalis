import express, { Request, Response, NextFunction } from 'express';
import routes from './src/routes/routes';
import cors from 'cors';
import { parse } from 'url';
import cookieParser from 'cookie-parser';

import { env, initDatabase } from './src/tools';
import session from 'express-session';

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
