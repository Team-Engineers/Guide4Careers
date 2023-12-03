import React from 'react'

const Founder = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-16.png')] bg-cover  bg-no-repeat lg:mt-[136px]">
      <h2 className="flex justify-center column-title">
        Meet The Main Behind Our Success
      </h2>
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 ">
        <div className="  h-[300px] w-[300px] my-4  ml-[30px] ">
          <div className="text-center font-medium">
            <img
              className="w-full h-full object-cover "
              src={require("../../src/assets/images/success/sir.png")}
              alt=""
            />
          </div>
        </div>
          <div className="justify-center font-medium my-[90px]">
            <h4>Mr.Devendra Singh Rana<br></br>(Founder)</h4>
            <p className='text-md text-justify my-10'>I always believe that one should never fear off taking decisions and should feel free to consult about their input feel decisions with the expert of that feild.</p>
          </div>
        </div>
       </div>
  );
}

export default Founder;
