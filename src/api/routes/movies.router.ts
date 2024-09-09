import { Router, json } from 'express';

import { getMovie, getMovies } from '../controllers';

export const router: Router = Router();

router.get(
  '/',
  json(),
  getMovies
)

router.get(
  '/:id',
  json(),
  getMovie
)