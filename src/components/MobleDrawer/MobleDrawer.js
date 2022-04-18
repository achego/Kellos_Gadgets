import React from 'react'
import cs from './MobleDrawer.module.css'
import NavItem from '../NavBar/NavItem/NavItem'
import scrollIds from '../../utils/scrolIds'
import Button from '../Button/Button'
import { Link } from 'react-scroll'

const MobleDrawer = (props) => {

  return (
    <div 
    className={[cs.MobleDrawer, props.drawerOpen?cs.open:cs.close].join(' ')}
    >
        <p 
        onClick={props.toogleDrawer}
        className={cs.closebtn}>close</p>
        <div className={cs.MobleDrawerC}>
        <div 
        onClick={props.toogleDrawer}
        className={cs.navs}>
            <NavItem onClick={props.toogleDrawer} to={scrollIds.RecentAwards} >features</NavItem>
            <NavItem onClick={props.toogleDrawer} to={scrollIds.AppFeatures} >about</NavItem>
            <NavItem onClick={props.toogleDrawer} to={'#'}>pricing</NavItem>
            <NavItem onClick={props.toogleDrawer} to={'#'}>reviews</NavItem>
            <NavItem onClick={props.toogleDrawer} to={scrollIds.ContactUs}>contact</NavItem>
        </div>

        <div 
            className={cs.toogleNight}
            onClick={() => {
              props.toogleDrawer(); props.toogleDarkMode()
             }}>
            {props.isDark ? <p>light</p>: <p>dark</p>}
          </div>

        </div>
        <Link 
        onClick={props.toogleDrawer}
            to={scrollIds.GetApp}
            smooth>
            <Button className={cs.btn}>Get the app</Button>
          </Link>
          
    </div>
  )
}

export default MobleDrawer