import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";
import { CiMenuBurger } from "react-icons/ci";
import { CSSTransition } from "react-transition-group";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollPosition = useScroll();
  const location = useLocation();
  const { isMobile } = useWindowSize();
  const [activeLink, setActiveLink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (location.pathname) {
      setActiveLink(location.pathname);
    }
  }, [location.pathname]);
  return !isMobile ? (
    <nav
      className={`flex items-start w-full justify-between text-xl text-red relative z-[100] transition-all duration-500 sticky top-0 max-w-[1920px] m-auto ${
        scrollPosition > window.innerHeight ? "lg:px-20 md:px-10" : "px-0"
      }`}
    >
      <h1 className="font-bold leading-none xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.9rem] transition-all duration-300">
        URBAN
        <span className="lg:hidden ">
          <br />
        </span>{" "}
        SHUTTERS
      </h1>
      <div className="flex flex-col items-end font-light p-2 text-lg lg:leading-5">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={700}
          className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={700}
          className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
        >
          GALLERY
        </Link>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
        >
          CONTACTS
        </Link>
      </div>
    </nav>
  ) : (
    <nav
      className={`flex items-start w-full justify-between text-xl relative z-[100] transition-all duration-300 sticky top-0 ${
        scrollPosition > 90 ? "bg-black" : "bg-transparent"
      } ${isModalOpen ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <h1 className="font-bold leading-none text-5xl text-red">
        URBAN SHUTTERS
      </h1>
      <button
        type="button"
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="text-3xl text-red mt-1 mr-1"
      >
        <CiMenuBurger />
      </button>
      <CSSTransition
        in={isModalOpen === true}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <ul className="w-full flex-col absolute top-[100%] left-0 bg-white p-1 text-black flex">
          <div className="flex flex-col items-end font-light text-lg lg:leading-5 text-red">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
            >
              HOME
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={700}
              className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
            >
              ABOUT
            </Link>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
            >
              GALLERY
            </Link>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className={`transition-all duration-300 focus:outline-none hover:font-bold hover:cursor-pointer`}
            >
              CONTACTS
            </Link>
          </div>
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
