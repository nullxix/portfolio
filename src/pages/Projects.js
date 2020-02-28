import React from 'react'
import withClipper from '../components/withClipper.js'

export default props => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {withClipper(props => <img {...props} src='https://source.unsplash.com/8uZPynIu-rQ'/>, {i: 0, left: true})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/35sVnCCynWA'/>, {i: 1})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/ruJm3dBXCqw'/>, {i: 2})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/V2OyJtFqEtY'/>, {i: 3})}
            {withClipper(props => <img {...props} src='https://source.unsplash.com/a4GET0s82rI'/>, {i: 4})}
        </div>
        
    )
}