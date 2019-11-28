import React from 'react'
import UserList from './UsersList'
import fetchUsers from '../../service/User-service'



export default class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    loaddsdfsdf() {
        fetchUsers()
            .then((users) => this.setState({ users: users }))
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <button onClick={() => { this.loaddsdfsdf() }}>Dugme</button>
                <UserList users={this.state.users} />
            </div>
        )
    }
}



// const UserPage = (props) => {
//     return (
//         <div>
//             <h1>Users</h1>
//             <UserList users={users} />
//         </div>
//     )
// }