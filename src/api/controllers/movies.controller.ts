import { NextFunction, Request, Response } from 'express';

export const getMovies = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const movies: any = [];
    return res
      .status(200)
      .json(movies)
  } catch(err) {
    return next(err);
  }
}

export const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log('id', id)
    const movie = {
      id: 1,
      name: 'The Shawshank Redemption',
      year: 1994,
      rating: 9.2,
      genres: ['Drama']
    }
    return res
      .status(200)
      .json(movie)
  } catch(err) {
    return next(err);
  }
}