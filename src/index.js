import Koa from 'koa';
import { server as serverOptions, enabledModules } from '../config';

const app = new Koa();

enabledModules.forEach((mod) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const route = require(`./${mod}`);
  app.use(route);
});

app.listen(serverOptions);
console.log(new Date());
