import HttpService from './HttpService.js'

export default {
    login,
    logout,
    signup,
    getLoggedInUser,
    getUsers,
    getById,
    update,
    query
}

const USER_KEY = 'loggedInUser11'
var loggedInUser = (sessionStorage.getItem(USER_KEY) === 'undefined') ? null : JSON.parse(sessionStorage.getItem(USER_KEY))

function getLoggedInUser() {
    return loggedInUser
}

async function login(userCred) {
    try {
        let user = await HttpService.post('api/auth/login', userCred)
        loggedInUser = user
        sessionStorage.setItem(USER_KEY, JSON.stringify(loggedInUser))
        
        return loggedInUser
    } catch (err) {
        console.log('err');
    }

}

async function signup(userCred) {
    return await HttpService.post('api/auth/signup', userCred)
}

function logout() {
    loggedInUser = null
    sessionStorage.setItem(USER_KEY, null)
    HttpService.post('api/auth/logout')
        .then(res => {
            console.log(res)
        })
}



async function query(filterBy) {
    return HttpService.get('api/user', filterBy)
}

async function getUsers() {
    return HttpService.get('api/user')
}

async function getById(userId) {
    return HttpService.get(`api/user/${userId}`)
}

async function update(user) {
    let updatedUser = await HttpService.put(`api/user/`, user)
    loggedInUser = updatedUser
    sessionStorage.setItem(USER_KEY, JSON.stringify(loggedInUser))
    return loggedInUser
}


