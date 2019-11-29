import React from 'react'
import UserList from './UsersList'
import fetchUsers from '../../service/User-service'
import GridList from '../Users/UserGridList'


export default class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {

        fetchUsers()
            .then((users) => this.setState({ users: users }))
    }


    render() {
        if (this.props.isGrid) {
            return <GridList users={this.state.users} />
        } else {
            return (
                <div>
                    <h1>Users</h1>
                    <UserList users={this.state.users} />
                </div>
            )
        }
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