import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { close, menu, logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [t, i18n] = useTranslation();
  const screensize = useSelector((state) => state.screensize);
  let navLinks = t("lng.Const.navLinks", { returnObjects: true });

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.2,
    yoyo: 1,
  });

  useGSAP(() => {
    timeline.to("#logo", {
      opacity: 0.5,
      x: -10,
      y: 7,
      ease: "power1.in",
      duration: 2.5,
    });

    timeline.to("#logo", {
      opacity: 0.5,
      x: 30,
      y: -8,
      ease: "power1.in",
      duration: 6.5,
    });

    timeline.to("#logo", {
      opacity: 0.5,
      x: 10,
      y: 7,
      ease: "elastic",
      duration: 2.5,
    });

    timeline.to("#logo", {
      opacity: 0.5,
      x: 7,
      y: 2,
      ease: "bounce.in",
      duration: 3.5,
    });

    gsap.from("#nav", {
      opacity: 0,
      y: -30,
      ease: "power1.in",
      delay: 5.4,
      duration: 0.5,
    });
  }, []);

  return (
    <nav
      id="nav"
      style={{ backdropFilter: "blur(8px)" }}
      className={`${styles.paddingX} w-full flex items-center justify-center  py-2 h-[50px]
        fixed top-0 z-20 bg-transparent sm:opacity-[0.97] backNav max-md:bg-eerieBlack rounded-3xl mt-4`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto my-[50px]">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            id="logo"
            className="rounded-3xl w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 lg:gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate-200" : "text-gray-500"
              } hover:text-taupe text-[10px] lg:text-[11px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {!screensize.isMobile && (
          <div className="">
            <LanguageSwitcher />
          </div>
        )}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div className="fixed top-0 left-0 w-full h-full bg-flashWhite z-50">
              <div className="p-4 flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="flex flex-col items-center justify-center h-[100vh] gap-8 bg-slate-100">
                <li className="absolute top-20">
                  {screensize.isMobile && (
                    <div className="">
                      <LanguageSwitcher />
                    </div>
                  )}
                </li>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } text-[24px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
