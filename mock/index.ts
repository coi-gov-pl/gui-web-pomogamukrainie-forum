import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { acommodationsPost, cityGet } from './operations';

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

router.get('/api/dictionaries/city', cityGet).post('/api/secure/accommodations', acommodationsPost);

app.use(router);

// different port, run:
// PORT=9999 npm run start:mock
app.listen(port).on('error', (err) => {
  console.log('ERROR MOCK SERVER ', err);
  process.exit(1);
});
console.log('Mock Listening on:', port);
