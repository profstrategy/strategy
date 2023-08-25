import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import Button from './Button';
import { close } from '../assets';



const Contact = () => {

  const formRef = useRef()
  const [successmsg, setSuccessmsg] = useState(false)
  const [errormsg, setErrormsg] = useState(false)
  const [loadingbtn, setLoadingbtn] = useState(false)

  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  )

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target;

    setForm(
      { ...form, [name]: value }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoadingbtn(true)
    emailjs.send(
      'service_zphwxjg',
      'template_4uw3076',
      {
        from_name: form.name,
        to_name: "Ismail Abdulrahman",
        from_email: form.email,
        to_email: "ismailabdulrahman555@gmail.com",
        message: form.message,
      },
      '1RBkWfje2i2e6bJ4j'
    ).then(() => {
      setLoadingbtn(false);
      setSuccessmsg(!successmsg)

    }, (error) => {
      setLoadingbtn(false);
      console.error(error);
      setErrormsg(!errormsg)
    })

    setForm(
      {
        name: '',
        message: '',
        email: ''
      }
    )
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.heroSubText}`}>Get in touch</p>
        <h3 className={`${styles.heroHeadText}`}>Contact.</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-1'>Your Name</span>

            <input
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-6'
              type='text'
              placeholder='What is your name'
              name='name'
              value={form.name}
              required
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-1'>Your Email</span>

            <input
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-6'
              type='email'
              placeholder='What is your Web address'
              name='email'
              value={form.email}
              required
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-1'>Message</span>

            <textarea
              rows={7}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-6'
              placeholder='What do you have for me'
              name='message'
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loadingbtn ? <Button /> : 'send'}
          </button>

          <div className={` bg-lime-500 h-20 rounded-sm ${successmsg ? 'block' : 'hidden'}`}>
            <div className='flex flex-1 justify-end'>
              <img src={close} className='w-[28px] h-[28px] object-contain pe-2 transition
               duration-150 ease-out hover:ease-in hover:bg-lime-900'
                onClick={()  => {setSuccessmsg(!successmsg)}}
               />
            </div>
            <p className='text-white font-small text-center'>Thank you. I will get back to you as soon as possible.</p>
          </div>

          <div className={` bg-red-500 h-20 rounded-sm ${errormsg ? 'block' : 'hidden'}`}>
            <div className='flex flex-1 justify-end'>
              <img src={close} className='w-[28px] h-[28px] object-contain pe-2 transition duration-150 ease-out hover:ease-in hover:bg-red-900'
              onClick={() => {
                setErrormsg(!errormsg)
              }}
               />
            </div>
            <p className='text-white font-small text-center'>Ahh, something went wrong. Please try again.</p>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')