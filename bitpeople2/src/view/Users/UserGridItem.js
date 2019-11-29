import React from 'react'

const GridItem = (props) => {
    return (

        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src={props.user.picture} />
                    <span class="card-title">{props.user.name}</span>
                </div>
                <div class="card-content">
                    <p><i class="tiny material-icons">email</i> {props.user.getEmail()}</p>
                    <p><i class="tiny material-icons">cake</i> {props.user.getBirthday()}</p>
                </div>

            </div>
        </div>

    )
}
export default GridItem