import express from 'express';

import { getMovies } from '../controllers/movies.js';
//addComment

const router = express.Router();

//all routes in here are starting with /movies
router.get('/', getMovies);
// router.patch('/:id', addComment);

export default router;