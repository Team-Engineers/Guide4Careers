import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faUsers,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

import "./ourservices.css";

const Ourservices = () => {
  const [activeService, setActiveService] = useState(null);

  const handleButtonClick = (serviceName) => {
    setActiveService(serviceName);
  };

  const renderServiceComponent = () => {
    switch (activeService) {
      case "Counsellors":
        return <CounsellorsComponent />;
      case "Working-Professionals":
        return <WorkingProfessionalsComponent />;
      case "For Collage":
        return <ForCollageComponent />;
      case "Class 11 & 12":
        return <Class1112Component />;
      case "Class 10":
        return <Class10Component />;
      case "Class 8 & 9":
        return <Class89Component />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2 className="column-title mx-auto text-center flex justify-center">
        Career Exploration Workshops
      </h2>
      <div className="relative md:flex justify-center grid max-md:grid-cols-2  gap-4 mx-auto">
        <button
          className="services"
          onClick={() => handleButtonClick("Counsellors")}
        >
          Counsellors
        </button>
        <button
          className="services"
          onClick={() => handleButtonClick("Working-Professionals")}
        >
          Working Professionals
        </button>
        <button
          className="services"
          onClick={() => handleButtonClick("For Collage")}
        >
          For Collage
        </button>
        <button
          className="services"
          onClick={() => handleButtonClick("Class 11 & 12")}
        >
          Class 11 & 12
        </button>
        <button
          className="services"
          onClick={() => handleButtonClick("Class 10")}
        >
          Class 10
        </button>
        <button
          className="services"
          onClick={() => handleButtonClick("Class 8 & 9")}
        >
          Class 8 & 9
        </button>
      </div>

      {renderServiceComponent()}

      <p className="my-6 text-justify ">{/* Your existing content */}</p>

      {/* Your existing grid of components */}
    </div>
  );
};

// Dummy component examples (replace with your actual components)
const CounsellorsComponent = () => (
  <div>
    <div className="max-w-[1240px] justify-center max-md:h-[700px] mx-auto flex flex-wrap max-md:overflow-scroll gap-6">
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "
            src={require("../../assets/images/assessment/assessment4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images//assessment/assessment5.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images//assessment/assessment5.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images/assessment/assessment4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images/assessment/assessment5.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images/assessment/assessment4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
    </div>
  </div>
);

const WorkingProfessionalsComponent = () => (
  <div>
    <div className="max-w-[1240px] justify-center max-md:h-[700px] mx-auto flex flex-wrap max-md:overflow-scroll gap-6">
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "
            src={require("../../assets/images/assessment/assessment4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>

      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images//assessment/assessment5.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images/assessment/assessment4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images/assessment/assessment5.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
                      className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "

            src={require("../../assets/images/assessment/assessment4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ForCollageComponent = () => (
  <div>
    <div className="max-w-[1240px] justify-center max-md:h-[700px] mx-auto flex flex-wrap max-md:overflow-scroll gap-6">
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  rounded-2xl mt-3  "
            src={require("../../assets/images/assessment/collage5.png")}
            alt=""
          />

          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black ">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <a href="Workshop">
            <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
              View Program
            </button>
          </a>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] bg-gray-100 border border-2px rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto   rounded-2xl mt-3   "
            src={require("../../assets/images/assessment/collage7.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "
            src={require("../../assets/images//assessment/collage1.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "
            src={require("../../assets/images/assessment/collage3.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto rounded-2xl mt-3  "
            src={require("../../assets/images/assessment/collage4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px] my-4 sm:w-[350px] max-sm:w-[90%] border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="md:max-w-[300px] h-[300px] max-md:w-[90%]  mx-auto   rounded-2xl mt-3  "
            src={require("../../assets/images/assessment/collage6.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-8">
            Guidance for<br></br>
            <span className="text-[#41cece]">Course and College Selection</span>
          </p>
          <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
            Explore
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Class1112Component = () => (
  <div>
    <div className="max-w-[1240px] justify-center max-md:h-[700px] mx-auto flex flex-wrap max-md:overflow-scroll gap-6">
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] max-md:w-[95%] h-[200px] mx-auto rounded-2xl  mt-3 "
            src={require("../../assets/images/assessment/class11-3.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold text-xl">
            CAREER CLARITY SERVICE FOR SCIENCE(MATH)
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 bg-gray-100 border border-2px rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] max-md:w-[95%] h-[200px] mx-auto rounded-2xl  mt-3 "
            src={require("../../assets/images/assessment/class11-4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold  text-xl">
            CAREER CLARITY SERVICE FOR COMMERCE
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] max-md:w-[95%] h-[200px] mx-auto rounded-2xl  mt-3 "
            src={require("../../assets/images//assessment/class11.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-3 text-black font-bold text-xl">
            BBA ADMISSION AND GUIDANCE SERVICE
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black ">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] max-md:w-[95%] h-[200px] mx-auto rounded-2xl  mt-3 "
            src={require("../../assets/images/assessment/class11-2.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold text-xl">
            LAW ADMISSION AND GUIDANCE SERVICE
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] max-md:w-[95%] h-[200px] mx-auto rounded-2xl  mt-3 "
            src={require("../../assets/images/assessment/class11-1.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black text-xl font-bold">
            PROFILE BUILDING SERVICE FOR ABROAD ADMISSION
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] max-md:w-[95%] h-[200px] mx-auto rounded-2xl  mt-3 "
            src={require("../../assets/images/assessment/class11-5.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black text-xl font-bold">
            COLLEGE ADMISSION SERVICE INDIA
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Class10Component = () => (
  <div>
    <div className="max-w-[1240px] justify-center max-md:h-[700px] mx-auto flex flex-wrap max-md:overflow-scroll gap-6">
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] h-[200px] max-md:w-[90%] mx-auto rounded-2xl  mt-4  "
            src={require("../../assets/images/assessment/class10-3.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-9 text-black font-bold text-xl">
            STREAM SELECTOR TEST
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] h-[200px] max-md:w-[90%] mx-auto rounded-2xl  mt-4  "
            src={require("../../assets/images/assessment/class10-1.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold">
            STREAM AND CAREER CLARITY SERVICE
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] h-[200px] max-md:w-[90%] mx-auto rounded-2xl  mt-4  "
            src={require("../../assets/images//assessment/class10-4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold">
            STREAM AND CAREER CLARITY SERVICE
          </p>          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Class89Component = () => (
  <div>
    <div className="max-w-[1240px] justify-center max-md:h-[700px] mx-auto flex flex-wrap max-md:overflow-scroll gap-6">
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] h-[200px] max-md:w-[90%] mx-auto rounded-2xl  mt-4  "
            src={require("../../assets/images/assessment/class10-3.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-9 text-black font-bold text-xl">
            STREAM SELECTOR TEST
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] h-[200px] max-md:w-[90%] mx-auto rounded-2xl  mt-4  "
            src={require("../../assets/images/assessment/class10-1.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold">
            STREAM AND CAREER CLARITY SERVICE
          </p>
          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
      <div className="col-span-1 shadow-xl h-[600px]  sm:w-[350px] max-sm:max-w-[99%] my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="max-w-[300px] h-[200px] max-md:w-[90%] mx-auto rounded-2xl  mt-4  "
            src={require("../../assets/images//assessment/class10-4.png")}
            alt=""
          />
          <p className="py-2 mx-8 mt-4 text-black font-bold">
            STREAM AND CAREER CLARITY SERVICE
          </p>          <hr className="middle-hr" />
          <div className="service_items">
            <div className=" mr-[280px] mt-8">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <p className="mr-[80px] mt-[-25px] text-black">6 Course Bundle</p>
            <div className="mr-[280px] mt-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <p className="mr-[30px] mt-[-25px] text-black">
              Become Pro Counsellor
            </p>
            <div className="mr-[280px] mt-4 ">
              <FontAwesomeIcon icon={faRupeeSign} />
            </div>
            <p className="mr-[90px] mt-[-25px] text-black">
              <s>43,999</s>&nbsp;15,000
            </p>
          </div>
          <button className="bg-[#fd7d7d] w-[300px] max-md:w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white] text-1xl">
            View Program
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Ourservices;
