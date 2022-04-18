import React from "react";
import Button from "../Button/Button";
import cs from "./NavBar.module.css";
import NavItem from "./NavItem/NavItem";
import Logo from "../Logo/Logo";
import { Link } from 'react-scroll'
import scrollIds from "../../utils/scrolIds";
import Animate from 'react-animate-on-scroll'

const NavBar = (props) => {

  return (
    <div 
      className={cs.NavBar}>
      <Animate 
        animateIn='btt'
        animateOnce
        offset={0}
      className={[cs.NavBarC, "d_padding"].join(" ")}>
        <Logo />
        <nav>
          <ul>
            <NavItem to={scrollIds.RecentAwards} >features</NavItem>
            <NavItem to={scrollIds.AppFeatures} >about</NavItem>
            <NavItem to={'#'}>pricing</NavItem>
            <NavItem to={'#'}>reviews</NavItem>
            <NavItem to={scrollIds.ContactUs}>contact</NavItem>
          </ul>
          <Link 
            to={scrollIds.GetApp}
            smooth>
            <Button className={cs.btn}>Get the app</Button>
          </Link>
          <div 
            className={cs.toogleNight}
            onClick={props.onClick}>
            {props.isDark ? <p>light</p>: <p>dark</p>}
          </div>

          <div 
            className={cs.menu}
            onClick={props.toogleDrawer}>
            men
          </div>
        </nav>
      </Animate>
    </div>
  );
};

export default NavBar;
