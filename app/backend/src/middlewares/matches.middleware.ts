import { Request, Response, NextFunction } from 'express';
import statusCode from '../utils/status.code';
import JWT from '../utils/JWT';

const jwt = new JWT();

const authorizationValidate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(statusCode.unauthorized).json({ message: 'Token must be a valid token' });
  }
  const token = jwt.verifyToken(authorization);
  if (!token) {
    return res.status(statusCode.unauthorized).json({ message: 'Token must be a valid token' });
  }
  req.body.user = token as string;
  next();
};

const idTeamsValidate = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res
      .status(statusCode.unprocessableEntity)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  next();
};

export { authorizationValidate, idTeamsValidate };
