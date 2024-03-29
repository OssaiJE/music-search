import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import nocache from 'nocache';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './config/swaggerDef';
import deezerRoute from './routes/deezerRoute';

const app: Application = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(nocache());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to The Music Project API.`);
});
app.get('/api/v1', (req: Request, res: Response) => {
  res.send(`Welcome to The Music Project API.`);
});

app.get('/api-docs.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

const options = {
  swaggerOptions: {
    url: '/api-docs.json'
  }
};

app.use(
  '/api/v1/docs',
  swaggerUI.serveFiles({}, options),
  swaggerUI.setup(swaggerSpec, options)
);

app.set('trust proxy', true);

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../public/views'));

app.use('/api/v1', deezerRoute);

app.use('/no-route', (req: Request, res: Response, next: NextFunction) => {
  next();
});

app.use('*', (req: Request, res: Response) => {
  return res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL'
  });
});

export default app;
