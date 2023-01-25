import bcrypt = require('bcryptjs');
import JWT from '../authentication/JWT';
import Users from '../database/models/User';

class UserService {
  private _jwt = new JWT();
  private _users = Users;

  authenticateLogin = async (authorization: string) => {
    const jwt = this._jwt.verifyToken(authorization);
    if (jwt instanceof Error) {
      return jwt;
    }
    const user = await this._users.findOne({ where: { email: jwt } });
    if (!user) {
      return new Error('User not found');
    }
    return user;
  };

  validateUser = async (email: string, password: string) => {
    if (!email || !password) {
      return new Error('Email and password are required');
    }
    const user = await this._users.findOne({ where: { email } });
    if (!user) {
      return new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Error('Invalid password');
    }
    return user;
  };
}

export default UserService;
