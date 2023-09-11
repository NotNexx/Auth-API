const mainRoute = require('./main');
const authRoute = require('./auth/router');
const adminRoute = require('./admin/index');

const routes = (server) => {
    server.use('/', mainRoute);
    server.use('/auth', authRoute);
    server.use('/admin', adminRoute);
}

module.exports = routes;