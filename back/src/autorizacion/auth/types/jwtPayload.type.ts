export type JwtPayload = {
  usuario: string;
  sub: number;
  exp?: number;
  iat?: number;
};
