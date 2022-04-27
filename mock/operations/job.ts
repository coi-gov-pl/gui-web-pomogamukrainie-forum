import * as express from 'express';
import { jobOffer, jobsList } from '../data';

export function jobPost(req: express.Request, res: express.Response): express.Response {
  return res.json(jobOffer(req.body));
}
export function jobsListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(jobsList);
}
export function jobGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const job = jobsList.content?.find((el) => el.id === Number(id));
  if (job) {
    return res.json(job);
  } else {
    res.status(404);
    return res.send();
  }
}
