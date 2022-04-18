import React from 'react'
import cs from './LinkText.module.css'
import PropTypes from 'prop-types'

const LinkText = (props) => {
  return (
    <div className={cs.LinkText}>
            <p>{props.text}</p>
            <p>{'>'}</p>
        </div>
  )
}

LinkText.propTypes = {
  text: PropTypes.string
}

export default LinkText