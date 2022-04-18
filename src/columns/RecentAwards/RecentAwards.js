import React from 'react'
import Heading from '../../components/Heading/Heading'
import scrollIds from '../../utils/scrolIds'
import Award from './Award/Award'
import cs from './RecentAwards.module.css'
import Animate from 'react-animate-on-scroll'

const RecentAwards = () => {
  return (
    <div 
      id={scrollIds.RecentAwards}
      className={[cs.RecentAwards, 'd_padding'].join(' ')}>
        <Heading 
            title='Our Recent Awards'
            description='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'/>

            <Animate
              animateIn='btt'
              animateOnce
              offset={10}
              className={cs.awards}>
                <Award />
                <Award />
                <Award />
            </Animate>
    </div>
  )
}

export default RecentAwards