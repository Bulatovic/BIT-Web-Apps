import React from 'react'
import UserListItem from './UserListItem'
const UserList = (props) => {


    const usersList = props.users.map(user => <UserListItem user={user} />)

    return (
        <ul className="collection">
            {usersList}
        </ul>
    )
}
export default UserList