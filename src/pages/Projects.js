import React, {useState} from 'react'
import Clipper from '../components/Clipper.js'
import ClickHere from '../components/ClickHere.js'
import goodcookiePreview from '../previews/goodcookie-preview.png'
import storyPreview from '../previews/story-preview.png'

export default props => {

    const [displayClick, setDisplayClick] = useState(false)

    const goodcookieDeets = {
        main: 'https://nick.pink/goodcookie',
        title: 'goodcookie',
        blurb: 'Battling \'click here to enable cookies\' notifications using, well . . . cookies',
        github: 'https://github.com/nullxix/goodcookie-site',
    }

    const storyDeets = {
        main: 'https://mywebsitecanbeatupyour.website/story',
        title: 'Coactive Book',
        blurb: 'Cooperative story-writing that only allows single-word submissions',
        github: 'https://github.com/nullxix/story-front'
    }

    setTimeout(() => {
        setDisplayClick(true)
    }, 2500)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <ClickHere display={displayClick}></ClickHere>
            <Clipper props={props} imgSrc ={goodcookiePreview} data={{i: 0, left: true, deets: goodcookieDeets}}/>
            <Clipper props={props} imgSrc ={storyPreview} data={{i: 1, deets: storyDeets}}/>
            {/* <Clipper props={props} imgSrc ={'https://source.unsplash.com/ruJm3dBXCqw'} data={{i: 2, deets: goodcookieDeets}}/>
            <Clipper props={props} imgSrc ={'https://source.unsplash.com/V2OyJtFqEtY'} data={{i: 3, deets: goodcookieDeets}}/>
            <Clipper props={props} imgSrc ={'https://source.unsplash.com/a4GET0s82rI'} data={{i: 4, deets: goodcookieDeets}}/> */}
        </div>
        
    )
}