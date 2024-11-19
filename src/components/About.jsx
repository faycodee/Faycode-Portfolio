import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Who Faycal ??</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Hello! My name is Faycal and I enjoy creating things that live on the
        internet. My interest in web development started as a fun game, where
        you find many issues and when I find the solution I am very happy, the
        more complex the issue, the happier I am. 
        <br />
        Fast forward to today, I am studying at
        {/* had the opportunity to work with ---------------, it was a great experience
        while */}
          <a style={{color:"blau"}} href="https://www.ofppt.ma/"> https://www.ofppt.ma/</a> for two years, which enabled me
        to acquire many skills and languages, most importantly MERN (MongoDB,
        Express, React, and Node. js.) . <br />

         Here are some of the technologies I've
        been working with recently: <br /> JavaScript (ES6+) , React ,tailwind, Node.js
        laravel , sql .
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
