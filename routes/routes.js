import express from 'express';
import { getMovies, getCharacters } from '../controllers/controller.js';
const router = express.Router();


router.get('/movies', getMovies);
router.get('/characters', getCharacters);


export default router;