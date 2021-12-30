import express from 'express';
import {createAdmin } from '../controllers'

const router = express.Router();

router.get('/',createAdmin)

export { router as AdminRoutes };