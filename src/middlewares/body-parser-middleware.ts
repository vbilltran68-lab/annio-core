import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response} from 'express';
import * as bodyParser from 'body-parser';

@Injectable()
export class BodyParserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    if (req.headers['allow-secure'] && req.headers['allow-secure'].includes("true")) {
      bodyParser.text()(req, res, next);
    } else {
      bodyParser.json()(req, res, next);
    }
  }
}
