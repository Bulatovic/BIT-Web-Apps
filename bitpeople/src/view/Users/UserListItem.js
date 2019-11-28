import React from 'react'

const UserListItem = (props) => {

    return (
        <li className="collection-item avatar">
            <img src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="" className="circle responsive-img" />
            <span className="title">{props.user.name}</span>
            <p>First Line <br />
                Second Line
      </p>
        </li>
    )
}
export default UserListItem