import React from 'react'
import styled from 'styled-components'
import Octocat from '../Octocat.png'

const Git = styled.a`
    display: block;
    text-decoration: none;
    font-size: 30px;
    position: absolute;
    color: black;
    left: 12%;
    bottom: 10%;
`
const Cat = styled.img`
    max-height: 1.1em;
    max-width: 1.1em;
    display: inline-block;
`

export default props => {

    return (
        <Git href={props.href} target="_blank">
            <Cat src={Octocat}/> view github
        </Git>
    )
}