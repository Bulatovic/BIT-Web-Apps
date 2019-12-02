import React, { Component } from 'react'
import UserList from './UsersList'
import fetchUsers from '../../service/User-service'
import GridList from '../Users/UserGridList'
import Loading from '.././components/Loading/loading'
import User from '../../entiteti/Users'


export default class UsersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGrid: false,
            query: "",
            users: [],
            loading: true
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
        this.setState({ loading: true })
        fetchUsers()
            .then((users) => this.setState({ users: users, loading: false }))

    }

    changeLayout = () => {
        this.setState(prevState => {
            return {
                isGrid: !prevState.isGrid
            };
        });
    };


    render() {
        if (this.state.loading === true) {
            return <Loading />
        }

        const filteredUsers = this.state.users.filter(a => a.name.toLowerCase().startsWith(this.state.query)
            || a.lastName.toLowerCase().startsWith(this.state.query));     //moze i includes(this.state.query)

        const male = filteredUsers.filter(element => element.gender === "male").length;
        const female = filteredUsers.filter(element => element.gender === "female").length;

        return (

            <div>
                <h1>Users</h1>
                <a href="#" onClick={this.changeLayout}><i class="material-icons">view_module</i></a>
                <a onClick={this.loadUsers}><i className="material-icons">refresh</i></a>
                <input type="text" className="input" placeholder="Search" value={this.state.inputValue} onChange={this.handleInputChange} />
                <p>{`Male: ${male} Female: ${female}`}</p>
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