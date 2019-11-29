import User from '../entiteti/Users'

const fetchUsers = () => {
    const url = 'https://randomuser.me/api/?results=15'

    return fetch(url)
        .then(res => res.json())
        .then(userData => {
            return userData.results.map(user => new User(user))
        })
}

export default fetchUsers
