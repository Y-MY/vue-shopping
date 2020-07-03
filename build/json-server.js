const jsonServer = require('json-server');

var apiServer = jsonServer.create();
var apiRouter = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
apiServer.use(middlewares);
apiServer.use('/api', apiRouter);
apiServer.listen(8083, function () {
  console.log('JSON SERVER IS RUNNING')
});

module.exports = {
  apiServer: apiServer
};
