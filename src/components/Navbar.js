import React from 'react'
import Title from './Title.js'
import NavItem from './NavItem.js'
import {Link} from 'react-router-dom'
export default props => {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px'
            }}
        >
            <Link to="/"><Title/></Link>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '70%',
                    paddingTop: '24px'
                }}
            >
                <NavItem>( web developer )</NavItem>
                {/* <Link to='/projects'><NavItem>Projects</NavItem></Link>
                {/* <Link to='/websites'><NavItem>Websites</NavItem></Link> */}
                {/* <Link to='/hire'><NavItem>Hire</NavItem></Link> */} 
                {/* <Link to='/else'><NavItem>Everything Else</NavItem></Link> */}
            </div>
        </div>
    )
}