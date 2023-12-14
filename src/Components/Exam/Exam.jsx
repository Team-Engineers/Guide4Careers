import React from 'react';

const Exam = () => {
  return (
    <div className="container">
      <h2 className="column-title flex justify-center mt-6">Competitive Exams</h2>
      <div className="  md:grid md:grid-cols-4 justify-center gap-4 max-md:flex max-md:flex-wrap  md:mx-auto">
        {[
          'CAT', 'XAT', 'MAT', 'SNAP',
          'NMAT', 'IIFT', 'TANCET', 'BITSAT',
          'GMAT', 'IBSAT', 'MAHCET', 'KIITEE',
          'ATMA', 'MIVAT', 'KEAM', 'VEE'
        ].map((exam, index) => (
          <div key={index} className="col-span-1 shadow-xl mx-auto h-[60px] w-[130px] my-4 rounded-2xl hover:scale-110 duration-100 bg-[#008cff] hover:bg-white">
            <p className="text-center my-5 text-black">{exam}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exam;
