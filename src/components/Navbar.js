import React from 'react'
import Title from './Title.js'
import NavItem from './NavItem.js'
import {Link} from 'react-router-dom'
export default props => {

    return (
        <div
            style={{
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                paddingTop: '40px',
                marginBottom: '110px',
            }}
        >
            
            <Link to="/"><Title/></Link>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    width: '60%',
                    margin: '20px',
                }}
            >
                <NavItem style={{transitionDelay: "0.54s"}}>{''} ← writes code  {''}</NavItem>
                {/* <Link to='/projects'><NavItem>Projects</NavItem></Link>
                {/* <Link to='/websites'><NavItem>Websites</NavItem></Link> */}
                {/* <Link to='/hire'><NavItem>Hire</NavItem></Link> */} 
                {/* <Link to='/else'><NavItem>Everything Else</NavItem></Link> */}
            </div>
        </div>
    )
}