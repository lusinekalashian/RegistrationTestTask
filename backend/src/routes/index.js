import express from 'express';
import usersRouter from './userRouter.js';

export default () => {
  const router = express.Router();
  router.use('/', usersRouter);

  return router;
};
