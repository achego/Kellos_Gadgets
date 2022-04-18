import React from 'react'
import cs from './NavItem.module.css'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'

const NavItem = (props) => {
  return (
    
      <li 
      onClick={props.onClick}
      className={cs.NavItem}>
        <Link
          onClick={props.onClick}
          to={props.to}
          offset={props.offset}
          duration={props.duration}
          smooth={props.smooth}
          activeClass={cs.active}
          spy={true}
          hashSpy={true}>
          {props.children}
        </Link>
      </li>
  )
}

NavItem.propTypes = {
  to: PropTypes.string,
  offset: PropTypes.number,
  duration: PropTypes.number,
  smooth: PropTypes.bool,
  activeClass: PropTypes.string,
}

NavItem.defaultProps = {
  smooth: true,
  // offset: -80,
}

export default NavItem