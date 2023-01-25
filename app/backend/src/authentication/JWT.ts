import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions, JsonWebTokenError } from 'jsonwebtoken';
import IUser from '../interfaces/user';

export default class JWT {
  private _secret: Secret = process.env.JWT_SECRET || 'jwt_secret';
  private _config: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

  public createToken(data: IUser): string {
    const token = jwt.sign({ role: data.role, id: data.id }, this._secret, this._config);
    return token;
  }

  public verifyToken(token: string): string | object | JsonWebTokenError | null {
    try {
      const decoded = jwt.verify(token, this._secret);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
