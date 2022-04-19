import express from 'express';
import bodyParser from 'body-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import {
  accommodationDelete,
  accommodationGet,
  accommodationsListGet,
  accommodationsPost,
  cityGet,
  materialAidDelete,
  materialAidGet,
  materialAidListGet,
  materialAidPost,
  meGet,
  messagePost,
  myOffersGet,
  transportDelete,
  transportGet,
  transportListGet,
  transportPost,
  jobPost,
  healthGet,
  healthListGet,
  lawGet,
  lawListGet,
} from './operations';

const port = process.env['PORT'] || 3000;
const app: express.Express = express();
const router: express.Router = express.Router();

// start proxy docker api
if (process.argv.includes('--proxy')) {
  // target: https://github.com/coi-gov-pl/pomocua-ogloszenia
  app.use('*', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true, secure: false }));
} else {
  app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
}

const baseHref: string = '/ogloszenia/api';

router
  .get(`${baseHref}/dictionaries/city`, cityGet)
  .get(`${baseHref}/accommodations`, accommodationsListGet)
  .get(`${baseHref}/accommodations/:id`, accommodationGet)
  .get(`${baseHref}/material-aid`, materialAidListGet)
  .get(`${baseHref}/material-aid/:id`, materialAidGet)
  .get(`${baseHref}/transport`, transportListGet)
  .get(`${baseHref}/transport/:id`, transportGet)
  .get(`${baseHref}/secure/me`, meGet)
  .get(`${baseHref}/secure/my-offers`, myOffersGet)
  .get(`${baseHref}/health-care`, healthListGet)
  .get(`${baseHref}/health-care/:id`, healthGet)
  .get(`${baseHref}/law`, lawListGet)
  .get(`${baseHref}/law/:id`, lawGet)
  .post(`${baseHref}/secure/accommodations`, accommodationsPost)
  .post(`${baseHref}/secure/material-aid`, materialAidPost)
  .post(`${baseHref}/secure/transport`, transportPost)
  .post(`${baseHref}/secure/job`, jobPost)
  .post(`${baseHref}/message`, messagePost)
  .delete(`${baseHref}/secure/transport/:id`, transportDelete)
  .delete(`${baseHref}/secure/accommodations/:id`, accommodationDelete)
  .delete(`${baseHref}/secure/material-aid/:id`, materialAidDelete);

app.use(router);

// different port, run:
// PORT=9999 npm run start:mock
app.listen(port).on('error', (err) => {
  console.log('ERROR MOCK SERVER ', err);
  process.exit(1);
});
console.log('Mock Listening on:', port);
