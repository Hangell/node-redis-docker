const githubAPI = require('../services/githubApi');

async function listAllRepositoriesByUser(req, res) {
    const {users} = req.params;

    const {data} = await githubAPI.get(`/users/${users}/repos`);

    return res.status(200).json(data);
}

module.exports = { listAllRepositoriesByUser };