import React from 'react'
import cs from './Footer.module.css'
import Animate from 'react-animate-on-scroll'

const Footer = () => {
  return (
    <Animate
      animateIn='btt'
      duration={0.8}
      animateOnce
      offset={10}
     className={cs.Footer}>
        <div className={cs.FooterC}>

        </div>
    </Animate>
  )
}

export default Footer