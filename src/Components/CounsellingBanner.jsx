import React from 'react';

const CounsellingBanner = ({ text, para,para2  }) => {
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
      ];
 
  return (
    <div className="mt-[80px] bg-red-300   grid grid-cols-3">
  <div className=" flex  items-end ">
    <img className='h-[400px] object-cover' src="https://www.careerguide.com/career/wp-content/uploads/2023/06/Career-Options-after-12th.webp" alt="Banner" />
  </div>
  <div className="">
  <h1  style={{ textShadow: '2px 2px 4px rgba(18, 12, 11, 0.99)' }} className="text-white banner_text leading-[1em] text-[2.5em] mt-[40px] ">{text}</h1>
  <ul className="list-none text-[90%] p-[30px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-justify pl-5">
  <li className='text-black my-[30px] mb-[20px] flex '>
    <span className="mr-2 text-yellow-300">&#8594;</span>
    {para}
  </li>
  <li className=' my-[30px] text-black mb-[20px] flex '>
    <span className="mr-2 text-yellow-300">&#8594;</span>
    {para2}
  </li>
</ul>

      </div>
      <div className="w-[95%] mx-auto my-[20px] flex items-start">
      <form  className="max-w-[90%] mx-auto bg-white p-4 rounded-md shadow-md">
        <div className='text-center w-[100%] my-[25px] text-[1.7em]'>
            <h className='text-black '>Request a Call Back</h>
        </div> 
        <div className='flex gap-[5px] flex-row'>
        <div className="mb-2">
          <input
            type="text"
            name="form_fields[field_example1]"
            id="field_example1"
            placeholder="Enter Name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
         
          <input
            type="email"
            name="form_fields[email]"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        </div>
        <div className="mb-2">
          
          <input
            type="text"
            name="form_fields[email]"
            id="mobile"
            placeholder="Enter your No."
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
         
          <input
            type="text"
            name="form_fields[email]"
            id="city"
            placeholder="Enter your City"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="the-reason" className="block text-gray-700 text-sm font-bold mb-2">
            Select State*
          </label>
          <select
            name="reason"
            id="the-reason"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Choose one</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className=" text-white px-4 py-2 rounded-xl bg-black"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default CounsellingBanner;
