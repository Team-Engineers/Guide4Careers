// import React from 'react'
// import "./assessment.css"

// const Assessment = () => {
//   return (
//     <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
//       <div className="container">
//         <h2 className="column-title flex justify-center">
//           Personality Assessments
//         </h2>
        
//         <div className="relative flex justify-end gap-4 mr-[80px]">
//           <button className="assessment">Psychometric Career Test</button>
//           <button className="assessment">
//             21st Century Skills & Learning Test
//           </button>
//         </div>
//         <p className="my-6 text-justify ">
          // CareerGuide's assessments delve into individuals' interests, helping
          // them identify areas that resonate with their passions. This
          // exploration is vital for aligning personal inclinations with potential
          // career options, fostering a sense of fulfillment and engagement in
          // one's chosen profession.
//         </p>
        // <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-6">
        //   <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
        //     <div className="text-center font-medium">
        //       <img
        //         className="profile-image relative "
        //         src={require("../../assets/images/assessment/assessment4.png")}
        //         alt=""
        //       />
        //       <p className="py-2 mx-8 mt-8">
        //         Guidance for<br></br>
        //         <span className="text-[#41cece]">
        //           Course and College Selection
        //         </span>
        //       </p>
        //       <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
        //         Explore
        //       </button>
        //     </div>
        //   </div>
        //   <div className="col-span-1 shadow-xl h-[500px] my-4 bg-gray-100 border border-2px rounded-2xl">
        //     <div className="text-center font-medium">
        //       <img
        //         src={require("../../assets/images/assessment/assessment2.png")}
        //         alt=""
        //       />
        //       <p className="py-2 mx-8 mt-8">
        //         Guidance for<br></br>
        //         <span className="text-[#41cece]">
        //           Course and College Selection
        //         </span>
        //       </p>
        //       <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
        //         Explore
        //       </button>
        //     </div>
        //   </div>
        //   <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
        //     <div className="text-center font-medium">
        //       <img
        //         src={require("../../assets/images//assessment/assessment5.png")}
        //         alt=""
        //       />
        //       <p className="py-2 mx-8 mt-8">
        //         Guidance for<br></br>
        //         <span className="text-[#41cece]">
        //           Course and College Selection
        //         </span>
        //       </p>
        //       <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
        //         Explore
        //       </button>
        //     </div>
        //   </div>
        //   <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
        //     <div className="text-center font-medium">
        //       <img
        //         src={require("../../assets/images/assessment/assessment4.png")}
        //         alt=""
        //       />
        //       <p className="py-2 mx-8 mt-8">
        //         Guidance for<br></br>
        //         <span className="text-[#41cece]">
        //           Course and College Selection
        //         </span>
        //       </p>
        //       <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
        //         Explore
        //       </button>
        //     </div>
        //   </div>
        //   <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
        //     <div className="text-center font-medium">
        //       <img
        //         src={require("../../assets/images/assessment/assessment5.png")}
        //         alt=""
        //       />
        //       <p className="py-2 mx-8 mt-8">
        //         Guidance for<br></br>
        //         <span className="text-[#41cece]">
        //           Course and College Selection
        //         </span>
        //       </p>
        //       <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
        //         Explore
        //       </button>
        //     </div>
        //   </div>
        //   <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
        //     <div className="text-center font-medium">
        //       <img
        //         src={require("../../assets/images/assessment/assessment4.png")}
        //         alt=""
        //       />
        //       <p className="py-2 mx-8 mt-8">
        //         Guidance for<br></br>
        //         <span className="text-[#41cece]">
        //           Course and College Selection
        //         </span>
        //       </p>
        //       <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
        //         Explore
        //       </button>
        //     </div>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// }

// export default Assessment;

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
      // Add cases for other components as needed
      default:
        return null;
    }
  };

  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h2 className="column-title flex justify-center ">
          Personality Assessments
        </h2>

        <div className="relative flex justify-end gap-4 mr-[150px]">
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

// Dummy component examples (replace with your actual components)
const PsychometricCareerTestComponent = () => (
  <div>
    {/* Content for Psychometric Career Test component */}
    <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-6">
      <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      <div className="col-span-1 shadow-xl h-[500px] my-4 bg-gray-100 border border-2px rounded-2xl">
        <div className="text-center font-medium">
          <img
            src={require("../../assets/images/assessment/assessment2.png")}
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
      <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
    {/* Content for 21st Century Skills & Learning Test component */}
    <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-6">
      <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      {/* <div className="col-span-1 shadow-xl h-[500px] my-4 bg-gray-100 border border-2px rounded-2xl">
        <div className="text-center font-medium">
          <img
            src={require("../../assets/images/assessment/assessment2.png")}
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
      </div> */}
      {/* <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      </div> */}
      {/* <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      </div> */}
      {/* <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      </div> */}
      {/* <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px  rounded-2xl">
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
      </div> */}
    </div>
  </div>
);

export default Assessment;

