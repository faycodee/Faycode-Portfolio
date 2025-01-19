import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";
import { frontend, backend, datamanagement } from "../assets";

const iconMap = {
  frontend: frontend,
  backend: backend,
  datamanagement: datamanagement,
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[200px] mb-[50px] h-[100px] w-full card-gradient rounded-[20px]
       shadow-card my-[70px] max-md:h-[30px]  max-md:mt-[100px] max-md:mx-[10px]  max-md:w-[25%] "
    >
      <div className="bg-jetLight rounded-[20px] px-12 min-h-[200px] flex justify-evenly items-center flex-col max-sm:h-[40px] max-sm:px-0">
        <img
          src={iconMap[icon]}
          alt={title}
          className="w-10 h-10 object-contain"
        />
        <h3 className="text-taupe text-[15px] max-sm:w-[70%] max-sm:text-[10px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchedServices = t("lng.Const.services", { returnObjects: true });
    if (Array.isArray(fetchedServices)) {
      setServices(fetchedServices);
      console.log(fetchedServices);
    } else {
      console.error("Services data missing or invalid:", fetchedServices);
      setServices([]); // Avoid rendering issues
    }
  }, [i18n.language, t]);

  return (
    <div>
      <div className="-mt-[12rem] conti h-[100vh]">
        <motion.div>
          <p className={`${styles.sectionSubText} max-sm:mt-[40px]`}>
            {t("lng.Titles.about1")}
          </p>
          <h2 className={styles.sectionHeadText}>{t("lng.Titles.about2")}</h2>
        </motion.div>
        <motion.p className="text-taupe text-[13px] max-w-3xl leading-[30px] max-sm:leading-[20px] max-sm:mt-[10px]">
          {t("lng.Titles.about3")}
        </motion.p>
        <div
          className="mt-10 flex flex-wrap gap-10 
        max-md:w-[100vw]
        max-md:gap-0 
        max-md:flex-row

        
        
        "
        >
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
