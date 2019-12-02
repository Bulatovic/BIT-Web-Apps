import React from 'react'

const UserListItem = (props) => {

    return (
        <li className="collection-item avatar ">
            <img src={props.user.picture} alt="" className="circle responsive-img" />
            <span className="title"> <i class="tiny material-icons">person</i>  {props.user.getFullName()}</span>
            <p> <i class="tiny material-icons">cake</i>  {props.user.getBirthday()}</p>
            <p> <i class="tiny material-icons">mail</i>  {props.user.getEmail()}</p>
        </li>
    )
}
export default UserListItem
