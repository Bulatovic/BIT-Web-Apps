import React from 'react'
import GridItem from './UserGridItem'

const GridList = (props) => {
    return (
        <div className="row">
            {props.users.map(user => <GridItem user={user} />)}
        </div>
    )
}
export default GridList