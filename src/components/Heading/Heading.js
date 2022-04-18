import React from 'react'
import cs from './Heading.module.css'
import PropTypes from 'prop-types'
import Animate from 'react-animate-on-scroll'

const Heading = (props) => {
  return (
   <Animate
    animateIn='btt'
    animateOnce
    offset={10}
     className={cs.Heading}>
      <div className={cs.heading}>
        <h1>
          {props.title}
        </h1>
        <p>{props.description}</p>
      </div>
   </Animate>
  )
}


Heading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Heading