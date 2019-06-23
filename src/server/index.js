import Express from 'express';
import handleRender from './handleRender';
import api from './api';

// this is a very simple express app designed only for the purpose of this repo
const app = Express();
const port = process.env.PORT;

// server static content
app.use('/dist', Express.static('dist'));
app.use('/api', api);

// register route handler
app.use(handleRender);
// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});
