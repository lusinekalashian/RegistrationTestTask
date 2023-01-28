import { Router } from 'express';
import UsersController from '../controllers/userController.js'
import { registration } from "../middlewares/validator.js";
const router = Router();

router.post('/registration', registration,UsersController.registration);

export default router;
