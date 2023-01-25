import { Request, Response, NextFunction } from 'express';
import statusCode from '../utils/status.code';
import JWT from '../authentication/JWT';

const jwt = new JWT();

const authorizationValidate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(statusCode.unauthorized).json({ message: 'Unauthorized' });
  }
  const token = jwt.verifyToken(authorization);
  if (!token) {
    return res.status(statusCode.unauthorized).json({ message: 'Unauthorized' });
  }
  req.body.user = token as string;
  next();
};

export default authorizationValidate;
