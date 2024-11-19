import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { fay, bwmap, worldmap } from '../assets';
import './style/Hero.css' ;


const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className=''>
            <h1
              className={`${styles.heroHeadText}  text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray max-sm:text-[80px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                   Faycal
              </span>
            </h1>
            <p style={{fontFamily:"Poppins" ,fontSize:"14px"}}  className={`${styles.heroSubText} mt-2 text-eerieBlack ` }>
                I am a fullStack devloper I master <span style={{color:"#45EFFF"}}className="font-">M.E.R.N</span> 
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

        
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            
          </a>
        </div>

        
        <div className='max-md:hidden'>
          <img
            className="absolute bottom-0 ml-[20vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh] heroMe "
            src={fay}
            
            alt="Faycal"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
