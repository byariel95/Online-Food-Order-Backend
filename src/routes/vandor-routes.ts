import express from 'express';
import {createVandor } from '../controllers'
const router = express.Router();


router.get('/',createVandor);



export { router as VandorRoutes }