import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions, JwtPayload, JsonWebTokenError } from 'jsonwebtoken';
import IUser from '../interfaces/user';

export default class JWT {
  private _secret: Secret = process.env.JWT_SECRET || 'jwt_secret';
  private _config: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

  public createToken(data: IUser): string {
    const token = jwt.sign({ ...data }, this._secret, this._config);
    return token;
  }

  public verifyToken(token: string): string | JwtPayload | JsonWebTokenError {
    try {
      const decoded = jwt.verify(token, this._secret);
      return decoded as string | JwtPayload;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        return error;
      }
      throw error;
    }
  }
}
