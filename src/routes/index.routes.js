import { Router } from 'express';
import { ping } from '../controllers/index.controller.js';

const router = Router();
import subRoute from './sub.routes.js';

router.use('/auth', subRoute);
router.get('/ping', ping);

export default router