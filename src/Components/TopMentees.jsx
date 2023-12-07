import React from 'react'
import OurPartnerInstitutions from './OurPartnerInstitutions';

const TopMentees = () => {
    const images = [
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-Bangalore_University_logo-3-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/220px-National_Institute_of_Technology_Warangal_logo-4-150x150.png',
        'https://www.careerguide.com/career/wp-content/uploads/2021/03/1200px-BITS_Pilani-Logo.svg_-5-150x150.png',

        // Add more image URLs here
    ];
    return (
        <div className="container mx-auto p-8">
            <div className="text-center">
                <div className="mini-title  mb-[30px] mx-auto w-[50%]">WE HAVE NEVER LEFT ANYONE UNSATISFIED WITH OUR SERVICE
                    YOUR CHILD'S FUTURE IS IN RIGHT HANDS</div>
                <div className="column-title my-[30px] ">
                    Where Are Our <span className="shape-bg">Mentees</span> Now?
                </div>
                <div className="mb-[30px] text-[1.3em]">OUR MENTEES HAVE SECURED THEIR POSITION IN THE TOP UNIVERSITIES & COLLEGES IN INDIA AND ABROAD.
                    ! SO CAN YOUR CHILD !</div>
            </div>

            <div className="grid grid-cols-6 gap-4">
                {images.map((imageUrl, index) => (
                    <div key={index} className=" p-4">
                        <img src={imageUrl} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>

            {/* <div className="text-center">
          <div className="column-title my-[30px] ">
          TRUSTED BY <span className="shape-bg">30000+</span> STUDENTS 
          </div> */}
            <OurPartnerInstitutions />
        </div>
    )
}

export default TopMentees