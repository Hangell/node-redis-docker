const {Router} = require('express');
const { listAllRepositoriesByUser } = require('./controllers/RepositoriesController')

const routes = Router();

routes.get('health', (req, res) => {
    return res.send('Is On...');
});

routes.get('/repositories/:users', listAllRepositoriesByUser);

module.exports = routes;