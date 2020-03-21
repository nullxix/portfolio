import React from 'react'

export default props => {

    return (
        <div
            style = {{
                textAlign: 'center',
            }}
        >
            {props.children}
        </div>
    )
}