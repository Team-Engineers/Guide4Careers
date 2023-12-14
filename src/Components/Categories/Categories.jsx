import React from 'react';
import "./categories.css";

const CategoryItem = ({ title }) => (
  <div className="col-span-1 shadow-xl md:h-[80px]  my-4 border border-2px hover:scale-105 duration-100 rounded-xl bg-[#5e7bfd] hover:bg-white">
    <p className="text-center my-5 text-black text-2xl">{title}</p>
  </div>
);

const Categories = () => {
  const categoryData = [
    "Engineering & Technology",
    "Management & Marketing",
    "Healthcare",
    "Science & Research",
    "Media & Entertainment",
    "Law & Order",
  ];

  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h2 className="column-title text-center flex justify-center">
          Top Categories of Career Option
        </h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 max-md:grid-cols-2 gap-8">
          {categoryData.map((category, index) => (
            <CategoryItem key={index} title={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
