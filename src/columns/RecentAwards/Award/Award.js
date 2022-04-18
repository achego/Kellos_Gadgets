import React from 'react'
import LinkText from '../../../components/LinkText/LinkText'
import cs from './Award.module.css'

const Award = () => {
  return (
    <div className={[cs.Award, 'card' ].join(' ')}>
        <div className={cs.title}>
            <div className={cs.icon}></div>
            <p>Awwwards</p>
        </div>
        <p className={cs.sub}>Best of trendy design in 2024 on Awwwards</p>
        <p className={cs.desc}>Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.</p>
        <LinkText text='Go to Awards'/>
    </div>
  )
}

export default Award