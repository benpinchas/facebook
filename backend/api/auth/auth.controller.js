const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await authService.login(email, password)
        req.session.user = user;
        console.log("new session:", req.session.user.username);
        res.json(user)
    } catch (err) {
        res.status(409).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const user = req.body
        logger.debug(user.email + ", " + user.username)
        const addedUser = await authService.signup(user)
        // logger.debug(`auth.route - new user created: ` + JSON.stringify(user))
        // req.session.user = user
        res.status(200).send(addedUser)
    } catch (err) {
        logger.error('[SIGNUP] ' + err)
        if (err === 'User Already Exist') return res.status(409).send({ error: 'User already exist' })
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

module.exports = {
    login,
    signup,
    logout
}