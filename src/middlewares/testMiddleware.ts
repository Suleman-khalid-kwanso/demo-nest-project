import { Request, Response } from 'express';

export function testMiddleware(req: Request, res: Response, next: Function) {
  console.log(`Request...`);
  next();
};
