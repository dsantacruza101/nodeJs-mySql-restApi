import { Router } from "express";

const router = Router();
import { register, login }  from '../controllers/auth.controller.js';


router.post('/login', login);
router.post('/registro', register);


export default router