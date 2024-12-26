import { Request, Response } from 'express';
import Movie from '../models/movie';

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });

  }
};

export const searchMovies = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { genre: { $regex: q, $options: 'i' } }
      ]
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });

  }
};

export const addMovie = async (req: Request, res: Response) => {
  try {
    const { title, genre, rating, streamingLink } = req.body;
    const newMovie = new Movie({ title, genre, rating, streamingLink });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });

  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });

  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let dm=await Movie.findByIdAndDelete(id);
    res.status(204).json(dm);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });

  }
};
