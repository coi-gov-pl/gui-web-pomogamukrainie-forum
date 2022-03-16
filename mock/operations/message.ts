import * as express from 'express';

export function messagePost(req: express.Request, res: express.Response): express.Response {
  return res.status(204);
}
