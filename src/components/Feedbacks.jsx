import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { testimonials } from "../constants/constant";
import { fadeIn, textVariant } from "../utils/motion";


const FeedbackCards = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="'blue-text-gradient">@</span>
              {name}
            </p>

            <p>
              {designation} of {company}
            </p>
          </div>
          <img
          src={image}
          alt={`feedback_by-${name}`}
         className='w-10 h-10 rounded-full object-cover'
        />
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>What others say</p>
          <h3 className={styles.sectionHeadText}>Testimonials</h3>
        </motion.div>
      </div>

      {<div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCards
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>}
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')