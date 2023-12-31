import React from 'react'

const Consultant = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center my-[90px]">Speak to a Career Consultant!</h2>
      <h2 className="column-title text-center mt-[-80px]">
        unlock the doors to your
        <span className="text-[#41cece] ml-4 mr-4">
          fruitful and satisfying
        </span>
        professional journey!
      </h2>
      <div className="max-w-[1240px] mx-auto  ">
        <div className="  h-[400px] w-[1000px] my-4  ">
          <div className="text-center font-medium">
            <img
              className="w-full h-full object-cover  "
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

