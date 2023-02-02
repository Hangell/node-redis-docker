const {Router} = require('express');

const routes = Router();

routes.get('health', (req, res) => {
    return res.send('Is On...');
});

module.exports = routes;