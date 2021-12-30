import express from 'express';
import {createVandor, getVandorByID, getVandors,  } from '../controllers'
const router = express.Router();


router.post('/new',createVandor);
router.get('/:id',getVandorByID);
router.get('/all',getVandors);



export { router as VandorRoutes }