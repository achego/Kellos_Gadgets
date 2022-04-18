import React from 'react'
import Heading from '../../components/Heading/Heading'
import HiwItem from './HiwItem/HiwItem'
import cs from './HowItWorks.module.css'
import Animate from 'react-animate-on-scroll'

const HowItWorks = () => {
  return (
    <div className={[cs.HowItWorks, 'd_padding'].join(' ')}>
        <Heading 
            title='How it Works?'
            description='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'/>

            <Animate 
              animateIn='btt'
              duration={0.8}
              animateOnce
              offset={10}
              className={cs.hiwItems}>
                <HiwItem />
                <HiwItem />
                <HiwItem />
            </Animate>
    </div>
  )
}

export default HowItWorks