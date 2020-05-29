import React from 'react'

export default props => {

    return (
        <div
            style = {{
                textAlign: 'center',
            }}
            {...props}
        >
            {props.children}
        </div>
    )
}