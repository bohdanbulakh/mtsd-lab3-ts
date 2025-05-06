import { CookieOptions, Request, Response } from 'express';

type TokenOptions = {
  accessExpires: number,
}

export class CookieUtils {
  static getRequestJwt (token: string) {
    return [
      (req: Request) => {
        const cookies = req.cookies;
        return cookies?.[`${token}_token`];
      },
    ];
  }

  static setResponseCookie (
    res: Response,
    tokenName: string,
    token: string,
    options?: CookieOptions,
  ) {
    res.cookie(tokenName, token, {
      httpOnly: true,
      secure: true,
      ...options,
    });
  }

  static setResponseJwt (
    res: Response,
    accessToken: string,
    { accessExpires }: TokenOptions,
  ) {
    CookieUtils.setResponseCookie(res, 'access_token', accessToken, {
      expires: new Date(accessExpires),
    });
  }

  static clearResponseCookie (res: Response) {
    CookieUtils.setResponseJwt(res, '', {
      accessExpires: 0,
    })
  }
}
