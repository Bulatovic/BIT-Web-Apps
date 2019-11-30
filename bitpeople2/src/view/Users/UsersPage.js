import React, { Component } from 'react'
import UserList from './UsersList'
import fetchUsers from '../../service/User-service'
import GridList from '../Users/UserGridList'


export default class UsersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGrid: false,
            query: "",
            users: []
        }
        //this.onChange = this.onChange
    }
    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        })
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
        const filteredUsers = this.state.users.filter(a => a.name.toLowerCase().includes(this.state.query));

        return (
            <div>
                <h1>Users</h1>
                <a href="#" onClick={this.changeLayout}><i class="material-icons">view_module</i></a>
                <a onClick={this.loadUsers}><i className="material-icons">refresh</i></a>
                <input type="text" className="input" placeholder="Search" value={this.state.inputValue} onChange={this.handleInputChange} />
                {/* <a href="sass.html"><i type="submit" value="search" className="material-icons"></i></a> */}
                {/* <ActionButtons onReload={this.loadUsers} onLayoutChange={this.changeLayout} /> */}

                {
                    this.state.isGrid
                        ? <GridList users={filteredUsers} />
                        : <UserList users={filteredUsers} />
                }
            </div >
        )
    }
}