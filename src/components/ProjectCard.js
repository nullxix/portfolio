import React from 'react'
import Clipper from './withClipper'
export default props => {

    return (
        <Clipper child={props.preview} left={props.i % 2 === 0}>
            
        </Clipper>
    )
}