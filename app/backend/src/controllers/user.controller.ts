import { Request, Response } from 'express';
import UserService from '../services/user.service';
import JWT from '../authentication/JWT';
import statusCode from '../utils/status.code';

class UserController {
  private _userService = new UserService();
  private _jwt = new JWT();

  constructor() {
    this.login = this.login.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await this._userService.validateUser(email, password);
      if (user instanceof Error) {
        return res.status(statusCode.badRequest).json({ message: user.message });
      }
      const token = this._jwt.createToken(user);
      return res.status(statusCode.ok).json({ token });
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };

  public authenticate = async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(statusCode.created).json({ message: 'Unauthorized' });
      }
      const user = await this._userService.authenticateLogin(authorization);
      if (user instanceof Error) {
        return res.status(statusCode.unauthorized).json({ message: user.message });
      }
      return res.status(statusCode.ok).json({ user });
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default UserController;
