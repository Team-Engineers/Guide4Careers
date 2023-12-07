import React from "react";

const CareerGuidance = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h3 className="flex justify-center mini-title ">
          Welcome to Expert Career Guidance
        </h3>
        <br></br>
        <h2 className="column-title flex justify-center">
          Your Gateway to Better College Prospects!
        </h2>
        <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-6">
          <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
            <h2 className="text-2xl font-bold text-center py-8">
              Class 9th & 10th
            </h2>
            <div className="text-center font-medium">
              <img
                className="profile-image relative"
                src={require("../../src/assets/images/career/career1.webp")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <a href="class-9th-and-10th-counselling">
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[500px] my-4 bg-gray-100 border border-2px rounded-2xl">
            <h2 className="text-2xl font-bold text-center py-8">
              Class 11th & 12th
            </h2>
            <div className="text-center font-medium">
              <img
                src={require("../../src/assets/images/career/career2.webp")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
               <a href="class-11th-and-12th-counselling">
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
            <h2 className="text-2xl font-bold text-center py-8">
              College Students
            </h2>
            <div className="text-center font-medium">
              <img
                src={require("../../src/assets/images/career/career3.webp")}
                alt=""
              />
              <p className="py-2 mx-8 mt-8">
                Guidance for<br></br>
                <span className="text-[#41cece]">
                  Course and College Selection
                </span>
              </p>
              <a href="college-counselling">
              <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
                Explore
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
