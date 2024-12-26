import express from 'express';
import { addMovie, getMovies, updateMovie, deleteMovie } from '../controllers/movieController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/movies', addMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);
router.get('/movies', getMovies)

export default router; 
