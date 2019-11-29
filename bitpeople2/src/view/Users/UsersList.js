import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {
    return (
        <ul className="collection">
            {props.users.map(user => <UserListItem user={user} />)}
        </ul>
    )
}
export default UserList