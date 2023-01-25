import { Request, Response, NextFunction } from 'express';
import statusCode from '../utils/status.code';

const message = 'All fields must be filled';

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(statusCode.badRequest).json({ message });
  }
  next();
};

export default loginValidate;
