'use strict'

class ProjectController {
    async index({ auth }) {
        const user = await auth.getUser();
        console.log(user);
        return {
            message: 'WHy just why',
        }

    }
}

module.exports = ProjectController
