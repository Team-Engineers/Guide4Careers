import React from 'react';
// import emailjs from 'emailjs-com';

const CounsellingBanner = ({ text, para,para2  }) => {
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
      ];

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', e.target, 'YOUR_EMAILJS_USER_ID')
    //       .then((result) => {
    //         console.log(result.text);
    //       }, (error) => {
    //         console.log(error.text);
    //       });
    
    //     e.target.reset();
    //   };
  return (
    <div className="banner mt-[80px] bg-red-300 grid grid-cols-3 ">
      <div className="relative h-full bottom-0 items-end w-full ">
        <img className='h-full relative w-full ' src="https://www.careerguide.com/career/wp-content/uploads/2023/06/Career-Options-after-12th.webp" alt="Banner Image" />
      </div>    
      <div className=" w-[90%]">
        <h1 className='text-white leading-[1em] text-[2.5em] mt-[10px]'>{text}</h1>
        <ul className="list-disc text-black text-[90%] p-[30px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-justify pl-5">
            <li className='text-black mb-[20px]'>{para}</li>
            <li className='text-black mb-[20px]'>
            {para2}
            </li>
        </ul>
      </div>
      <div className="w-[95%] mx-auto my-[20px] flex items-center">
      <form  className="max-w-[90%] mx-auto bg-white p-4 rounded-md shadow-md">
        <div className='text-center w-[100%] my-[25px] text-[1.7em]'>
            <h className='text-black whitespace-nowrap'>Request a Call Back</h>
        </div>
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
