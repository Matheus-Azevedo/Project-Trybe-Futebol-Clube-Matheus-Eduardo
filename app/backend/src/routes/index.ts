import { Router } from 'express';
import UserRouter from './user.router';

const router = Router();

router.use('/user', UserRouter);

export default router;
