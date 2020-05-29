import React, {useState} from 'react'


export default props => {

    const [displayArrow, setDisplayArrow] = useState(false)

    if(props.display)
        setTimeout(() => {
            setDisplayArrow(true)
        }, 350)

    return (
        <div
            style={{
                opacity: props.display ? '1' : '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div>click</div>
            <div
                style={{
                    opacity: displayArrow ? '1' : '0',
                    color: 'hsl(48, 8%, 65%)',
                    fontSize: '10px',
                    padding: 'none',
                    margin: 'none',
                }}
            >v</div>
        </div>
    )
}