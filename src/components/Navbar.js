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
                alignItems: 'center',
                flexDirection: 'row',
                padding: '20px',
                paddingTop: '40px',
                marginBottom: '110px',
            }}
        >
            
            <Link to="/"><Title/></Link>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    width: '60%',
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