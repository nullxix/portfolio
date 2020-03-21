import React, {useState} from 'react';
import { CSSTransition, transit } from "react-css-transition";
import '../styles/clipper.css'
import Title from './styled/Title.js'
import Github from './styled/Github.js'
import MainLink from './styled/MainLink.js'
import Blurb from './styled/Blurb.js'
import FadeIn from './styled/FadeIn.js'

export default ({props, imgSrc, data}) => {
    const defaultHeight = 98
    const bigMod = 0.89
    const littleMod = 0.11
    const activeFactor = 1.8
    const activeBigMod = 1 - ((1 - bigMod) / activeFactor)
    const activeLittleMod = 1 - ((1 - littleMod / activeFactor))
    const previewRef = React.useRef()
    const deets = data.deets

    const scrollThisThing = () => {
        previewRef.current.scrollIntoView({
            behavior: 'smooth',
        })
            // window.scrollTo({
            //     top: ref.offsetTop + activeFactor * -0.2 * realHeight,
            //     behavior: 'smooth',
            //   })
    }

    const [height, _setHeight] = useState(defaultHeight) //percent)
    const setHeight = args => {
        _setHeight(args)
        _setBig(args * bigMod)
        _setLittle(args * littleMod)
    }
    const [width, _setWidth] = useState(100) //percent <--- tends to be off center if you change this)
    const [outerWidth, _setOuterWidth] = useState(100) //percent)
    const [polyBig, _setBig] = useState(defaultHeight * bigMod)
    const [polyLittle, _setLittle] = useState(defaultHeight * littleMod)

    const [realHeight, _setRealHeight] = useState(300)
    const setRealHeight = args => {
        _setRealHeight(args)
    }

    const [moveX, setMoveX] = useState(0)
    const [moveY, setMoveY] = useState(0)
    const [active, setActive] = useState(false)

    const toggleEverything = event => {
        if(active){
            _setBig(defaultHeight * bigMod)
            _setLittle(defaultHeight * littleMod)
        } else {
            _setBig(defaultHeight * activeBigMod)
            _setLittle(defaultHeight * activeLittleMod)
            scrollThisThing()
        }
        //ref.scrollIntoView({behavior: 'smooth'})
        setActive(!active)
    }
    return (
        <div
            ref={previewRef}
            style={{
                width: '100%',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{
                position: 'relative'
            }}>

                {/* <Blurb>{deets.blurb}</Blurb>
                <Title>{deets.title}</Title>
                <Github>{deets.github}</Github>
                <MainLink>{deets.main}</MainLink> */}
                
                    <CSSTransition
                        defaultStyle={{
                            clipPath: data.i % 2 === 0 ? 
                                `polygon(0 0, 0 ${height}%, ${width}% ${polyBig}%, ${width}% ${polyLittle}%)` : 
                                `polygon(0 ${polyLittle}%, 0 ${polyBig}%, ${width}% ${height}%, ${width}% 0)`,
                                height: `${realHeight}px`,
                        }}
                        activeStyle={{
                            clipPath: data.i % 2 === 0  ? 
                                `polygon(0 0, 0 ${height}%, ${width}% ${polyBig}%, ${width}% ${polyLittle}%)` : 
                                `polygon(0 ${polyLittle}%, 0 ${polyBig}%, ${width}% ${height}%, ${width}% 0)`,
                                height: `${realHeight*activeFactor}px`,
                        }}
                        active={active}
                    >
                        <CSSTransition
                            component='div'
                            style={{
                                width: `${outerWidth}%`,
                                height: '100%',  
                            }}
                            defaultStyle = {{
                                background: `linear-gradient(
                                    rgba(50, 0, 109, 0), 
                                    rgba(50, 0, 109, 0.0)
                                  ), url(${imgSrc})`,
                            }}
                            activeStyle = {{
                                background: `linear-gradient(
                                    rgba(50, 0, 109, 0), 
                                    rgba(50, 0, 109, 0.25)
                                  ), url(${imgSrc})`,
                            }}
                            onClick={toggleEverything}
                            active={active}
                        >
                        </CSSTransition>
                            {/* <div
                                style={{
                                    width: `${outerWidth}%`,
                                    height: '100%',
                                    background: `linear-gradient(
                                        rgba(255, 0, 0, 0.45), 
                                        rgba(255, 0, 0, 0.45)
                                      ), url(${imgSrc})`,
                                }}
                                onClick={toggleEverything}
                            /> */}

                            
                                <img
                                    src={imgSrc}
                                    style={{
                                        // clipPath: 'inherit',
                                        // width: `${outerWidth}%`,
                                        width: '80vw',
                                        objectFit: 'cover',
                                    }}
                                    onClick={toggleEverything}
                                />
                                    {(() => {
                                        if(active){
                                        return (
                                            <FadeIn>
                                                {deets.title && <Title>{deets.title}</Title>}
                                                {deets.github && <Github href={deets.github}></Github>}
                                                {deets.blurb && <Blurb>{deets.blurb}</Blurb>}
                                                {deets.main && <MainLink href={deets.main}>➤  visit website</MainLink>}
                                            </FadeIn>
                                        )}
                                    })()}
                </CSSTransition>
            </div>
        </div>
    )   
}