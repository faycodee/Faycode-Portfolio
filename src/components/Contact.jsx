
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { send, sendHover } from '../assets';

const Contact = () => {
  
  return (
<div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
  <motion.div
    variants={slideIn('left', 'tween', 0.2, 1)}
    className="flex-[0.75] bg-jet p-8 rounded-2xl"
  >
    <p className={styles.sectionSubText}>Get in touch</p>
    <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
    <div className="mt-10">
      <p className="font-bold">Email:</p>
      <a href="mailto:faysalomzil5@gmail.com" className="text-blue-400 underline">
        faysalomzil5@gmail.com
      </a>
      <p className="text-blue-400 underline">
      AV ORAN 27 RUE LAGOS ZOHOUR 1 FES 
      </p>
      <p className="font-bold mt-4">Phone Number:</p>
      <a href="https://wa.me/+212613487814" className="text-blue-400 underline">
        +212 6 13 48 78 14
      </a>
    </div>

    <div className="flex gap-6 mt-10">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-blue-400"
      >
        <FaLinkedin />
      </a>
      {/* GitHub Icon */}
      <a
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-blue-400"
      >
        <FaGithub />
      </a>
      {/* Indeed Icon */}
      <a
        href="https://www.indeed.com/profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-blue-400"
      >
        {/* Custom Indeed SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M17 0c-3.95 0-7.146 3.196-7.146 7.146 0 3.216 2.064 6.99 7.146 6.99 0.953 0 2.23-0.084 2.998-0.202l-0.113 0.953c-1.086 0-1.952 0.024-3.444 0.024-4.22 0-7.62-3.056-7.62-7.812 0-4.41 3.214-7.88 7.62-7.88s7.856 3.602 7.856 7.88c0 4.578-3.92 7.652-8.274 7.652-1.718 0-3.05-0.094-4.442-0.214l0.098-0.806h0.098l1.616 0.084c1.514 0.084 3.234-0.098 3.234-1.15 0-0.854-0.63-1.006-1.548-1.17l-0.962-0.166c-1.514-0.25-3.072-0.906-3.072-3.064 0-2.202 1.8-3.494 4.024-3.494 1.594 0 2.53 0.404 3.364 0.63l-0.404 2.13c-1.61-0.6-2.644-0.916-3.582-0.916-1.148 0-1.944 0.542-1.944 1.48 0 0.816 0.648 1.01 1.6 1.14l0.998 0.13c1.81 0.218 3.048 0.906 3.048 3.202 0 2.186-1.972 3.444-4.634 3.444-2.25 0-3.53-0.51-4.56-0.73v-0.73h-0.144l-0.98 0.17-0.314 0.998 0.074 0.73h2.126c4.95 0 7.62-3.23 7.62-7.884 0-4.582-3.286-7.806-7.62-7.806z"></path>
        </svg>
      </a>
    </div>
  </motion.div>
</div>
  );
};

export default SectionWrapper(Contact, 'contact');
