const githubAPI = require('../services/githubApi');

async function listAllRepositoriesByUser(req, res) {
    try {
        const { users } = req.params;

        const { data } = await githubAPI.get(`/users/${users}/repos`);

        const { id, login, avatar_url } = data[0].owner
        const userData = { id, login, avatar_url };

        const formattedRepositoriesData = [];

        for (const repos of data) {
            formattedRepositoriesData.push({
                id: repos.id,
                name: repos.name,
                private: repos.private,
                url: repos.url,
                created_at: repos.created_at,
                language: repos.language,
            });
        }

        return res.status(200).json({
            user: userData,
            repos: formattedRepositoriesData
        });
    } catch (error) {
        return res.status(400).json({
            message: "Failed to list all repositories!"
        })
    }
}

module.exports = { listAllRepositoriesByUser };