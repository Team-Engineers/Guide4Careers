import React from 'react'
import "./categories.css"

const Categories = () => {
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h2 className="column-title flex justify-center">
          Top Categories of Career Option
        </h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 grid-cols-2 gap-8">
          <div className="col-span-1 shadow-xl h-[80px] my-4 border border-2px hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white">
            <p className="text-center my-5 text-black text-2xl">
              Engineering & Technology
            </p>
          </div>
          <div className="col-span-1 shadow-xl h-[80px] my-4  border border-2px hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white ">
            <p className="text-center my-5 text-black text-2xl">
              Management & Marketing
            </p>
          </div>
          <div className="col-span-1 shadow-xl h-[80px] my-4 border border-2px hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white">
            <p className="text-center my-5 text-black text-2xl">Healthcare</p>
          </div>
          <div className="col-span-1 shadow-xl h-[80px] my-4 border border-2px hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white">
            <p className="text-center my-5 text-black text-2xl">Science & Research</p>
          </div>
          <div className="col-span-1 shadow-xl h-[80px] my-4 border border-2px hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white">
            <p className="text-center my-5 text-black text-2xl">Media & Entertainment</p>
          </div>
          <div className="col-span-1 shadow-xl h-[80px] my-4 border border-2px  hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white">
            <p className="text-center my-5 text-black text-2xl">Law & Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Categories;
