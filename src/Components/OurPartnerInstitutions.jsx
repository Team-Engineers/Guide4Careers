/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { OurPartnerInstitutionsData } from "../constant/dummyData";
const OurPartnerInstitutions = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Our Partners</div>
          <div className="column-title ">
            Our <span className="shape-bg">Partner</span> Institution 
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {OurPartnerInstitutionsData.map((item, index) => (
            <div
              className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary "
              key={index}
            >
              <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
                <img
                  src={item.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartnerInstitutions;
