import React, { Component } from 'react'
import UserList from './UsersList'
import fetchUsers from '../../service/User-service'
import GridList from '../Users/UserGridList'


export default class UsersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGrid: false,
            users: []
        }
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = () => {
        fetchUsers()
            .then((users) => this.setState({ users: users }))
    }

    changeLayout = () => {
        this.setState(prevState => {
            return {
                isGrid: !prevState.isGrid
            };
        });
    };


    render() {
        return (
            <div>
                <h1>Users</h1>
                <a href="#" onClick={this.changeLayout}><i class="material-icons">view_module</i></a>
                <a onClick={this.loadUsers}><i class="material-icons">refresh</i></a>

                {/* <ActionButtons onReload={this.loadUsers} onLayoutChange={this.changeLayout} /> */}

                {
                    this.state.isGrid
                        ? <GridList users={this.state.users} sdlfkjsf={this.changeLayout} />
                        : <UserList users={this.state.users} />
                }
            </div >
        )
    }
}