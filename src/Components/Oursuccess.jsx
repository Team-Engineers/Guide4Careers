import React from 'react'

const Oursuccess = () => {
  return (
    <div className=" about-area section-padding bg-[url('../images/all-img/section-bg-8.png')] bg-cover  bg-no-repeat bg-center">
      <div className="">
        <h2 className="flex justify-center column-title">
          Our Success Stories !
        </h2>
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-6">
          <div className="col-span-1 shadow-2xl h-[400px] my-4  ml-[30px] rounded-3xl">
            <div className="text-center font-medium">
              <img
                className="relative mr-auto ml-6 my-6"
                src={require("../../src/assets/images/success/success1.webp")}
                alt=""
              />
              <p className=" text-[blue] mt-[-90px]">Sita Ramaswami</p>
              <p className="ml-[170px]">
                Class 10, Gopalan International School
              </p>
              <h5 className="font-bold my-[60px] ml-[-90px]">
                Open discussion about my children’s opinions!
              </h5>
              <p className="text-sm mt-[-30px] mr-8 ml-8 text-justify">
                Along with psychometric assessment, iDreamCareer’s personalized
                dashboard provided great information for both my children. With
                the career report & one-on-one counseling, there was an open
                discussion about my children’s opinions and choices. Having
                limited knowledge about different careers as a parent, iDC came
                as a big help!
              </p>
            </div>
          </div>
          <div className="col-span-1 shadow-2xl h-[400px] my-4  ml-[30px] rounded-3xl">
            <div className="text-center font-medium">
              <img
                className="relative mr-auto ml-6 my-6"
                src={require("../../src/assets/images/success/success2.webp")}
                alt=""
              />
              <p className=" text-[blue] mt-[-90px]">Tapan Mandal</p>
              <p className="ml-[80px]">BBA, Depauw University</p>
              <h5 className="font-bold my-[60px] ml-[-290px]">
                Scholarship Received -
              </h5>
              <p className="text-sm mt-[-30px] mr-8 ml-8 text-justify">
                I had been looking for assistance with my applications for a
                long time and spoke to many counselors and agencies. But after
                meeting with iDC counselors, I knew that I had to go ahead with
                them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oursuccess;
