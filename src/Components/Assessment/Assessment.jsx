import React, { useState } from 'react';
import "./assessment.css";

const Assessment = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Psychometric Career Test":
        return <PsychometricCareerTestComponent />;
      case "21st Century Skills & Learning Test":
        return <SkillsAndLearningTestComponent />;
      default:
        return null;
    }
  };

  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h2 className="column-title text-center flex justify-center ">
          Personality Assessments
        </h2>

        <div className="relative  flex justify-center gap-4 mx-auto">
          <button
            className="assessment"
            onClick={() => handleButtonClick("Psychometric Career Test")}
          >
            Psychometric Career Test
          </button>
          <button
            className="assessment"
            onClick={() =>
              handleButtonClick("21st Century Skills & Learning Test")
            }
          >
            21st Century Skills & Learning Test
          </button>
        </div>

        {renderComponent()}

        <p className="my-6 text-justify ">
        </p>

      </div>
    </div>
  );
}

const PsychometricCareerTestComponent = () => (
  <div>
    <div className="max-w-[1240px] max-md:h-[700px] mx-auto md:flex md:flex-wrap max-md:overflow-scroll  gap-6">
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="profile-image relative "
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
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="profile-image relative "
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
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
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
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
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
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
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
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
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

const SkillsAndLearningTestComponent = () => (
  <div>
    <div className="max-w-[1240px] mx-auto flex flex-wrap justify-center gap-6">
      <div className="col-span-1 shadow-xl max-h-[600px] max-md:my-[30px] md:my-4 border border-2px  rounded-2xl">
        <div className="text-center font-medium">
          <img
            className="profile-image relative "
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

export default Assessment;

