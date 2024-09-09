import { Router, Application } from 'express';

import config from '../../config';
import { router as moviesRouter } from './movies.router';

export const routerApi: Function = (app: Application) => {
  const router = Router();
  app.use(config.api.prefix, router);
  router.use('/movies', moviesRouter);
}