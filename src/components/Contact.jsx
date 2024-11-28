import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import emailjs from '@emailjs/browser';
// import { send, sendHover } from '../assets';

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const video = document.getElementById("vid0");
  useGSAP(() => {
    gsap.from("#vid0", {
      opacity: 0,
      duration: 4,
      onUpdate: (self) => {
        requestAnimationFrame(() => {
          video.currentTime = video.duration * self.progress;
        });
      },
      scrollTrigger: {
        trigger: "#vid0",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {" "}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        {" "}
        <motion.video
          id="vid0"
          src="./vid0.mp4"
          alt=""
          autoPlay
          style={{ zIndex: -5 }}
          loop
          muted
          className="absolute inset-0   w-full sm:block hidden  h-full object-cover"
        ></motion.video>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <div className="mt-10">
          <p className="font-bold">Email:</p>
          <a
            href="mailto:faysaloumzil1@gmail.com"
            className="text-blue-400 underline"
          >
            faysaloumzil1@gmail.com
          </a>
          <p className="text-blue-400 underline">
            AV ORAN 27 RUE LAGOS ZOHOUR 1 FES MOROCCO
          </p>
          <p className="font-bold mt-4">Phone Number:</p>
          <a
            href="https://wa.me/+212613487814"
            className="text-blue-400 underline"
          >
            +212 6 13 48 78 14
          </a>
        </div>
        <div className="flex gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/faycal-oumzil-b97888250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/faycodee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://profile.indeed.com/?hl=en_MA&co=MA&from=gnav-jobseeker-profile--profile-one-frontend"
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

export default SectionWrapper(Contact, "contact");

// import { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import { styles } from '../styles';
// import { SectionWrapper } from '../hoc';
// import { slideIn } from '../utils/motion';
// import { send, sendHover } from '../assets';

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // sign up on emailjs.com (select the gmail service and connect your account).
//     //click on create a new template then click on save.
//     emailjs
//       .send(
//         'serviceID', // paste your ServiceID here (you'll get one when your service is created).
//         'templateID', // paste your TemplateID here (you'll find it under email templates).
//         {
//           from_name: form.name,
//           to_name: 'YourName', // put your name here.
//           from_email: form.email,
//           to_email: 'youremail@gmail.com', //put your email here.
//           message: form.message,
//         },
//         'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert('Thank you. I will get back to you as soon as possible.');

//           setForm({
//             name: '',
//             email: '',
//             message: '',
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.log(error);
//           alert('Something went wrong. Please try again.');
//         }
//       );
//   };

//   return (
//     <div
//       className="-mt-[8rem] xl:flex-row flex-col-reverse
//       flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className="flex-[0.75] bg-jet p-8 rounded-2xl">
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-10 flex flex-col gap-6 font-poppins">
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">
//               Your Message
//             </span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What's your message?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium resize-none"
//             />
//           </label>

//           <button
//             type="submit"
//             className="live-demo flex justify-center sm:gap-4
//             gap-3 sm:text-[20px] text-[16px] text-timberWolf
//             font-bold font-beckman items-center py-5
//             whitespace-nowrap sm:w-[130px] sm:h-[50px]
//             w-[100px] h-[45px] rounded-[10px] bg-night
//             hover:bg-battleGray hover:text-eerieBlack
//             transition duration-[0.2s] ease-in-out"
//             onMouseOver={() => {
//               document
//                 .querySelector('.contact-btn')
//                 .setAttribute('src', sendHover);
//             }}
//             onMouseOut={() => {
//               document.querySelector('.contact-btn').setAttribute('src', send);
//             }}>
//             {loading ? 'Sending' : 'Send'}
//             <img
//               src={send}
//               alt="send"
//               className="contact-btn sm:w-[26px] sm:h-[26px]
//               w-[23px] h-[23px] object-contain"
//             />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, 'contact');
