import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import  '../index.css';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';
import { motion } from "framer-motion";
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const toggelMenu = (e)=>{
// ----------------------------------------------------
    e.target.classList.toggle("srcChange")
    let divListLinks = document.getElementById("divListLinks")
    
    divListLinks.classList.toggle("translate")
    
    }
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <motion.img
            key={10}
            whileInView={{translateY:["-40px","10px","0px"]}}
            transition={{duration:3 ,times:[0,.5,1]}}
            src={logo}
            alt="logo"
            style={{borderRadius:"50%"}}
            className="sm:w-[50p]  sm:h-[50px] w-[45px] h-[45px] object-contain "

          />

          { <motion.h2 key={0} whileInView={{scaleX:1 ,opacity:1 }}
            transition={{duration:1 ,delay:2 }} style={{ scaleX:0,transformOrigin:"left",color:"black",translateX:"-10px" }}  className={` cursor-pointer  font-beckman`}>FayCode</motion.h2>  }
         
        </Link>
        <ul className="list-none flex flex-row gap-14 mt-2 max-lg:hidden ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
        <img src={menu} className="w-11 transition ease-in-out duration-500 
         " onClick={(e)=>toggelMenu(e)} />

          <div id='divListLinks' className='divListLinks translate-x-40 w-11 transition ease-in-out duration-500  '>
          <ul className="list-none absolute bg-white py-full h-[100vh]
           px-[50px]  flex flex-col gap-14 mt-2 
           items-center pt-20 rounded-xl">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>

        
       
      </div>
    </nav>
  );
};

export default Navbar;
