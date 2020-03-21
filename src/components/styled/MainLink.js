import React from 'react'
import styled from 'styled-components'

const Styled = styled.a`
    display: block;
    text-decoration: none;
    font-size: 30px;
    position: absolute;
    color: black;
    left: 12%;
    bottom: 18%;
`

export default props => {

    return (
        <Styled href={props.href} target="_blank">
            {props.children}
        </Styled>
    )
}