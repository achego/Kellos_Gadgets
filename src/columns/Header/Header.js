import React from 'react'
import Button from '../../components/Button/Button'
import scrollIds from '../../utils/scrolIds'
import cs from './Header.module.css'
import img from '../../assets/images/hero/hero-image-2.svg'
import Animate from 'react-animate-on-scroll'

const Header = () => {
  return (
    <div id={scrollIds.Header} className={[cs.Header, ''].join(' ')}>
        <div className={[cs.hero, 'container card'].join(' ')}>
            <Animate
                animateIn='btt'
                animateOnce
                offset={10}
                className={cs.hero_text}>
                <h1>Tailwind CSS Template for Apps and Software</h1>
                <p>All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.</p>
                <div className={cs.OS}>
                    <Button >Explore</Button>
                    <div className={cs.btn2}>
                        <div>play</div>
                        <h3>watch intro</h3>
                    </div>
                </div>
            </Animate>
            <Animate
                animateIn='btt'
                animateOnce
                offset={10}
                className={cs.hero_image}>
                <img src={img} alt='ga'/>
            </Animate>
        </div>
    </div>
  )
}

export default Header