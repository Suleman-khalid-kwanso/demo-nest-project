import { ExpressAdapter } from '@nestjs/platform-express';
import { Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: Function) => {
  console.log(res);
  next();
};
