import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(`${req.method} ${req.path}`);
    console.log(req.body)
    next();
  }
}
