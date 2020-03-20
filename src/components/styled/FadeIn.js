import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

export default styled.div`
    animation-name: ${animation};
    animation-duration: 1.5s;
`