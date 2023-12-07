import React from 'react'

const ConsellingMid = ({ title, imageUrl, link, buttonText }) => {
  return (
    <div className="col-span-1 shadow-xl h-[500px] my-4 border border-2px rounded-2xl">
    <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
    <div className="text-center font-medium">
      <img className="profile-image relative" src={imageUrl} alt="" />
      <p className="py-2 mx-8 mt-8">
        Guidance for<br></br>
        <span className="text-[#41cece]">Course and College Selection</span>
      </p>
      <a href={link}>
        <button className="bg-[#fd7d7d] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-[white]">
          {buttonText}
        </button>
      </a>
    </div>
  </div>
  )
}

export default ConsellingMid