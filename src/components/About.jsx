import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { services } from '../constants/constant';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full shadow-card green-pink-gradient p-[1px] rounded-[20px]">
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="icon" className='w-16 h-10 object-contain'/>
          <p className='text-center text-[20px] text-bold'>{title}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <>
      <div className='mt-12'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p variants={fadeIn('', '', '0.1', '1')} className="mt-4 text-[17px] text-secondary leading-30px max-w-3xl">
          I'm a skilled software developer with experience in
          JavaScript, and expertise in frameworks like React and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");