import bcrypt = require('bcryptjs');
import IUser from '../interfaces/user';
import JWT from '../authentication/JWT';
import Users from '../database/models/User';

class LoginService {
  private _jwt;
  private _users;

  constructor() {
    this._jwt = new JWT();
    this._users = Users;
  }

  login = async (email: string, password: string): Promise<string | object | null> => {
    const user = await this._users.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }
    const token = this._jwt.createToken(user);
    return { token };
  };

  validate = async (user: IUser): Promise<string | object | null> => {
    const result = await this._users.findOne({ where: { id: user.id } });
    return { role: result?.role };
  };
}

export default LoginService;
