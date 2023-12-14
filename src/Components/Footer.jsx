/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px] ">
                    <img
                      src="./logo1.png"
                      alt="logo"
                      className="max-h-[60px] max-w-[60px] px-4 pb-2"
                    />
                  </div>
                  <div className="text-white font-sans font-bold text-[150%] ml-[-13%]">
                    <h2>
                      <span>Guide</span>
                      <span>4</span>
                      <span>Carrer</span>
                    </h2>
                  </div>
                </div>
              </NavLink>
              <p className="w-[350px] md:w-[400px] lg:w-[300px] text-justify overflow-hidden md:text-md">
                A career guide acts as a compass, providing valuable insights
                and direction for those seeking professional fulfillment. It
                begins with self-reflection, encouraging individuals to identify
                their strengths, interests, and aspirations. Setting
                well-defined goals and continually developing relevant skills
                are pivotal steps in the journey. Networking and seeking
                mentorship offer opportunities for growth, while staying
                informed about industry trends ensures relevance.
              </p>
            </div>
          </div>
          <div className=" grid grid:cols-2 gap-8 sm:grid:cols-3 md:grid:cols-3 lg:cols-span-2">
            <div className="text-center">
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
                    to="/student"
                  >
                    For Students
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/institutes"
                  >
                    For Institutes
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/offerings"
                  >
                    Resource Treasure
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/contacts"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center  max-sm:hidden sm:text-left">
            <p className="md:text-[120%] text-[90%] hover:text-white font-medium text-gray-400">
              Contact Us
            </p>
            <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
              <li className="flex items-center hover:text-white text-gray-600  gap-1.5 justify-start ">
                <a href="mailto:info@testknock.com" className="gap-1.5 flex ">
                  <IoMdMail />
                  <h>info@testknock.com</h>
                </a>
              </li>

              <li className="flex items-center hover:text-white text-gray-600  gap-1.5 justify-start ">
                <a href="tel:9953617456" className="gap-1.5 flex ">
                  <IoMdCall />
                  <span>9953617456</span>
                </a>
              </li>

              <li className="flex items-start hover:text-white text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <IoMdPin />
                <h className="-mt-0.5 flex-1 not-italic mr-[60px]">
                  Office No. - 42, Durga Vihar, Near Amrapali Saphhire,
                  Sec-45, Noida , 201301
                </h>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="sm:hidden block text-center mt-[6vw] ">
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
        </div> */}

      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; Copyright {updatedDate} | Guide4Careers | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
