import React from 'react'
import Heading from '../../components/Heading/Heading'
import cs from './ContactUs.module.css'
import LabelInput from './LabelInput/LabelInput'
import Button from '../../components/Button/Button'
import scrollIds from '../../utils/scrolIds'
import Animate from 'react-animate-on-scroll'

const ContactUs = () => {
  return (
    <div id={scrollIds.ContactUs} className={[cs.ContactUs, 'd_padding'].join(' ')}>
      <Heading 
        title='Need Any Help?'
        description='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'/>
      <Animate
        animateIn='btt'
        duration={0.8}
        animateOnce
        offset={10}
         className={cs.form}>
        <div className={cs.grid}>
        <LabelInput 
          label="First Name"
          placeholder='enter First Name' />
        <LabelInput 
          label="Last Name"
          placeholder='enter Last Name' />
        <LabelInput 
          label="Business email"
          placeholder='enter your email' />
        <LabelInput 
          label="Phone number"
          placeholder='enter Phone number' />
        </div>
        <LabelInput 
          t
          label="What are you looking for?"
          placeholder='enter your message'
          rows={7}
           />
          <div className={cs.btn}>
          <Button width='12rem'>Send message</Button>
          </div>
      </Animate>
    </div>
  )
}

export default ContactUs