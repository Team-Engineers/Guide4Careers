import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo1.png";

import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black overflow-hidden ">
      <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="grid justify-center ">
            <div className=" flex justify-center gap-6 lg:justify-start text-[#063970] ">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className=" mb-[-12px] ">
                    <img
                      src={logo}
                      alt="Logo"
                      className="max-h-[180px] max-w-[180px] left-[100px] relative pb-2"
                    />
                  </div>
                  <div className="text-white font-sans font-bold text-[150%] ml-[-13%]">
                    <h2>
                      <span>guide</span>
                      <span>4</span>
                      <span>career</span>
                    </h2>
                  </div>
                </div>
              </NavLink>
            </div>
            <p className="mt-6 text-justify md:text-[100%] text-[80%] hover:text-white leading-[1.4em] text-gray-600 lg:max-w-xs ml-[100px] mr-[10px] ">
              Guide4Career is the most-advanced website for online career assessment, career guidance and career counselling in India, designed for school students and graduates. Guide4Career helps you discover your perfect career through its 5- dimensional career assessment, and revolutionary approach to career counselling and career guidance. Get your career into safe hands with Guide4Career, today! 
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:col-span-3">
            <div className="text-center w-[100%]">
              <p className="md:text-[120%] text-[90%] text-gray-400 hover:text-white ">
                Company
              </p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/team"
                  >
                    Our Team
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/offerings"
                  >
                    Offerings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="text-center w-[70%] ">
              <p className="md:text-[120%] text-[90%] hover:text-white  text-gray-400 whitespace-nowrap">
                Whom We Serve
              </p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li>
                  <p className="text-gray-600 transition hover:text-white whitespace-nowrap">
                    School Students
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition hover:text-white whitespace-nowrap">
                    College Students
                  </p>
                </li>

                <li>
                  <p className="text-gray-600  transition hover:text-white whitespace-nowrap">
                    Educational Institutions
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition  hover:text-white whitespace-nowrap">
                    Private Schools
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 transition  hover:text-white whitespace-nowrap">
                    Private Colleges
                  </p>
                </li>
              </ul>
            </div>
            <div className="text-center w-[80%] max-sm:hidden sm:text-left">
              <p className="md:text-[120%] text-[90%] hover:text-white font-medium text-gray-400">
                Contact Us
              </p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li className="flex items-center hover:text-white text-gray-600  gap-1.5 justify-start ">
                  <a href="mailto:info@testknock.com" className="gap-1.5 flex ">
                  <IoMdMail />
                  <h >
                    info@testknock.com
                  </h>
                  </a>
                </li>

                <li className="flex items-center hover:text-white text-gray-600  gap-1.5 justify-start ">
                  <a href="tel:9953617456" className="gap-1.5 flex ">
                    <IoMdCall />
                    <span>9953617456</span>
                  </a>
                </li>

                <li className="flex items-start hover:text-white text-gray-600 text-justify gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdPin />
                  <h className="-mt-0.5 flex-1 not-italic">
                    Office No. - 42, Durga Vihar, Near Amrapali Saphhire,
                    Sec-45, Noida , 201301
                  </h>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:hidden text-center mt-[6vw] ">
          <h className="text-[110%] font-medium text-gray-400">Contact Us</h>
          <ul className="mt-8  space-y-4 text-[80%]">
            <li className="flex items-center text-gray-600 justify-center gap-1.5 ">
              <a href="mailto:info@testknock.com">
                <h className="flex items-center text-gray-600 justify-center gap-1.5 ">
                  <IoMdMail />
                  <span className="flex-1 hover:text-white text-gray-600">
                    info@testknock.com
                  </span>
                </h>
              </a>
            </li>
            <li className="flex items-center text-gray-600 justify-center gap-1.5 ">
              <a href="tel:9953617456">
                <h className="flex items-center text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdCall />

                  <span className="flex-1 hover:text-white text-gray-600">
                    9953617456
                  </span>
                </h>
              </a>
            </li>
            <li className="flex mx-auto w-[300px] relative text-ellipsis text-gray-600 justify-center items-center">
              <h className="flex  text-gray-600 justify-center gap-1.5 ">
                <IoMdPin className="relative top-[3px] left-[16px]" />
                <span className="flex-1 hover:text-white text-gray-600">
                  {" "}
                  Office No. - 42, Durga Vihar, Near Amrapali Saphhire, Sec-45,
                  Noida, 201301
                </span>
              </h>
            </li>
          </ul>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6 ml-[20px] mr-[20px]">
          <div className="text-center sm:flex justify-between sm:text-left">
            <p className="block text-gray-400 sm:inline">
              All rights reserved.
            </p>
            <p className="flex sm:flex-row flex-col  gap-[10px] max-md:justify-center  md:text-[100%] text-[90%] ">
              <NavLink
                className=" whitespace-nowrap  text-[#063970] underline transition hover:text-blue-800"
                to="/"
              >
                Terms & Conditions
              </NavLink>
              <p className="md:block hidden  text-gray-400 sm:inline"> | </p>
              <NavLink
                className="whitespace-nowrap text-[#063970] underline transition hover:text-blue-800"
                to="/"
              >
                Privacy Policy
              </NavLink>
            </p>
            <p className="mt-4 md:text-[100%] text-[90%] text-gray-400 sm:order-first sm:mt-0">
              &copy; {updatedDate} Guide4Career
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;