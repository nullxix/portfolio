import React from 'react'
import withClipper from '../components/withClipper.js'
import goodcookiePreview from '../previews/goodcookie-preview.png'

export default props => {

    const goodcookieDeets = {
        main: 'https://nick.pink/goodcookie',
        title: 'goodcookie',
        blurb: 'Battling \'click here to enable cookies\' notifications using, well . . . cookies',
        github: 'none',
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {withClipper(props => <img {...props} src={goodcookiePreview}/>, {i: 0, left: true, deets: goodcookieDeets})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/35sVnCCynWA'/>, {i: 1, deets: goodcookieDeets})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/ruJm3dBXCqw'/>, {i: 2, deets: goodcookieDeets})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/V2OyJtFqEtY'/>, {i: 3, deets: goodcookieDeets})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/a4GET0s82rI'/>, {i: 4, deets: goodcookieDeets})}
        </div>
        
    )
}