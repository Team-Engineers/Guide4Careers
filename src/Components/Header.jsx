/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo1.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollNav.current) {
        let windowScroll = window.scrollY > 100;
        scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
        scrollNav.current.classList.toggle("sticky", windowScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li className={`menu-item `}>
                      <a href="/">Home</a>
                    </li>
                    <li className={`menu-item whitespace-nowrap`}>
                      <a href="#">For Students</a>
                    </li>
                    <li className={`menu-item whitespace-nowrap`}>
                      <a href="#">For Institutes</a>
                    </li>
                    <li className={`menu-item whitespace-nowrap`}>
                      <a href="#">Resource Treasure</a>
                    </li>
                    <li className="menu-item">
                      <a href="/blog-standard">Blog</a>
                    </li>
                    <li className="menu-item whitespace-nowrap">
                      <Link to={"/contacts"}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
