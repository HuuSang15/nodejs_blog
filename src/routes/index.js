const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // Action  --> Dispatcher --> Functions Handler
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
