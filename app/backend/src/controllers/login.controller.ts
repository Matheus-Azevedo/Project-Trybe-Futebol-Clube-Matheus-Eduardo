import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import statusCode from '../utils/status.code';

class LoginController {
  constructor(private _userService = new LoginService()) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await this._userService.login(email, password);
      if (!result) {
        return res.status(statusCode.unauthorized).json({ message: 'Incorrect email or password' });
      }
      return res.status(statusCode.ok).json(result);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };

  public validate = async (req: Request, res: Response) => {
    try {
      const { user } = req.body;
      const result = await this._userService.validate(user);
      return res.status(statusCode.ok).json(result);
    } catch (error: unknown) {
      return res.status(statusCode.internalServerError).json({ message: error });
    }
  };
}

export default LoginController;
