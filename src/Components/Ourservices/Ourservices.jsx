import React from 'react'
import "./ourservices.css"

const Ourservices = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h2 className="column-title flex justify-center">
          Career Exploration Workshops
        </h2>
        <div className="relative flex justify-end gap-4 mr-[80px]">
          <button className="services">Counsellors</button>
          <button className="services">Working-Professionals</button>
          <button className="services">For Collage</button>
          <button className="services">Class 11 & 12</button>
          <button className="services">Class 10</button>
          <button className="services">Class 8 & 9</button>
        </div>
        <p className="my-6 text-justify ">
          Our workshops offer a dynamic platform for individuals to explore
          various career paths, industries, and emerging trends. These
          interactive sessions provide valuable insights into the current job
          market, helping individuals align their goals with real-world
          opportunities.
        </p>
        <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-6">
          <div className="col-span-1 shadow-xl h-[600px] my-4 border border-2px  rounded-2xl">
            <div className="text-center font-medium">
              <img
                className="profile-image relative "
                src={require("../../assets/images/assessment/assessment4.png")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[600px] my-4 bg-gray-100 border border-2px rounded-2xl">
            <div className="text-center font-medium">
              <img
                src={require("../../assets/images/assessment/assessment2.png")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[600px] my-4 border border-2px  rounded-2xl">
            <div className="text-center font-medium">
              <img
                src={require("../../assets/images//assessment/assessment5.png")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[600px] my-4 border border-2px  rounded-2xl">
            <div className="text-center font-medium">
              <img
                src={require("../../assets/images/assessment/assessment4.png")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[600px] my-4 border border-2px  rounded-2xl">
            <div className="text-center font-medium">
              <img
                src={require("../../assets/images/assessment/assessment5.png")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[600px] my-4 border border-2px  rounded-2xl">
            <div className="text-center font-medium">
              <img
                src={require("../../assets/images/assessment/assessment4.png")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
