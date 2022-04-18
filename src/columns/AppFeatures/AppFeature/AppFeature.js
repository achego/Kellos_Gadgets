import React from 'react'
import cs from './AppFeature.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import scrollIds from '../../../utils/scrolIds'
import Animate from 'react-animate-on-scroll'

const AppFeature = (props) => {

    let content_style = {}
    // if (props.alternate) {
    //     content_style = {marginRight: '6rem'}
    // }
    if (props.content_pad) {
        content_style = {padding:props.content_pad}
    }
  return (
    <div className={cs.AppFeature}
        style={{
            paddingTop: props.pt?props.pt:'3.5rem',
        }}>
        <div className={[cs.AppFeatureC, props.alternate&&cs.flexdir, props.colr&&cs.colrev].join(' ')} style={{
            alignItems: props.alignBtm&&'flex-end'
        }}>

        <Animate 
            animateIn='btt'
            animateOnce
            duration={0.8}
            offset={10} 
            className={cs.img}>
            <div 
                className={cs.img}
                >
                {props.imageElement}
            </div>
        </Animate>

        <Animate 
            animateIn='btt'
            animateOnce
            duration={0.8}
            offset={10} >
            <div className={[cs.content, props.alternate?cs.mr:cs.ml].join(' ')}
                style={content_style}
                >
                <p className={cs.title}>{props.title}</p>
                <p className={cs.heading}>{props.heading}</p>
                <p className={cs.description}>{props.description}</p>

                <Link 
                    to={scrollIds.GetApp}
                    offset={-80}
                    smooth>
                    {props.element}
                </Link>
            </div>
        </Animate>
        
        </div>
    </div>
  )
}


AppFeature.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    alternate: PropTypes.bool,
    background: PropTypes.bool,
    height: PropTypes.string,
    element: PropTypes.element,
    content_pad: PropTypes.string,
    imageElement: PropTypes.string,
}

export default AppFeature