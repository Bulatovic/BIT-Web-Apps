import React from 'react'
import UserList from './UsersList'

const users = [{ name: "Bla1" }, { name: "Bla2" }, { name: "Bla3" }]


const UserPage = (props) => {
    return (
        <div>
            <h1>Users</h1>
            <UserList users={users} />
        </div>
    )
}
export default UserPage