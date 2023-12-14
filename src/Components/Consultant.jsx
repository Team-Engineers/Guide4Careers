import React from 'react'

const   Consultant = () => {
  return (
    <div className="flex mx-[20px] flex-col items-center">
      <h2 className="text-center max-md:text-[170%] my-[90px]">Speak to a Career Consultant!</h2>
      <h2 className="my-[20px] max-md:text-[140%] text-center mt-[-80px]">
        unlock the doors to your &#160;
        <span className="text-[#41cece] "> 
          fruitful and satisfying &#160;
        </span> 
        professional journey! 
      </h2>
      <div className="max-w-[1240px] mx-auto  ">
        <div className="  md:h-[400px] max-w-[1000px] my-4  ">
          <div className="text-center font-medium">
            <img
              className="mx-auto max-md:block md:hidden  h-full object-cover  "
              src={require("../../src/assets/images/success/Consultant.webp")}
              alt=""
            />
             <img
              className="w-full max-md:hidden md:block h-full object-cover"
              src={require("../../src/assets/images/success/consultant1.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultant;

