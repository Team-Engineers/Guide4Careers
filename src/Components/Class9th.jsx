import React from 'react'
import ConsellingMid from './ConsellingMid';

const Class9th = () => {

    const sections = [
        {
          title: 'Class 9th & 10th',
          imageUrl: require('../../src/assets/images/career/career1.webp'),
          link: 'class-9th-and-10th-counselling',
          buttonText: 'Explore',
        },
        {
          title: 'Class 11th & 12th',
          imageUrl: require('../../src/assets/images/career/career2.webp'),
          link: 'class-11th-and-12th-counselling',
          buttonText: 'Explore',
        },
        {
          title: 'College Students',
          imageUrl: require('../../src/assets/images/career/career3.webp'),
          link: 'college-counselling',
          buttonText: 'Explore',
        },
        {
            title: 'Class 9th & 10th',
            imageUrl: require('../../src/assets/images/career/career1.webp'),
            link: 'class-9th-and-10th-counselling',
            buttonText: 'Explore',
          },
          {
            title: 'Class 11th & 12th',
            imageUrl: require('../../src/assets/images/career/career2.webp'),
            link: 'class-11th-and-12th-counselling',
            buttonText: 'Explore',
          },
          {
            title: 'College Students',
            imageUrl: require('../../src/assets/images/career/career3.webp'),
            link: 'college-counselling',
            buttonText: 'Explore',
          },  
          {
            title: 'College Students',
            imageUrl: require('../../src/assets/images/career/career3.webp'),
            link: 'college-counselling',
            buttonText: 'Explore',
          },
          {
              title: 'Class 9th & 10th',
              imageUrl: require('../../src/assets/images/career/career1.webp'),
              link: 'class-9th-and-10th-counselling',
              buttonText: 'Explore',
            },
            {
              title: 'Class 11th & 12th',
              imageUrl: require('../../src/assets/images/career/career2.webp'),
              link: 'class-11th-and-12th-counselling',
              buttonText: 'Explore',
            },   
        ];
  return (
<div className="section-padding bg-[url('../images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <div className='text-center'>
        
        <br></br>
        <h2 className="column-title ">
          <span className="shape-bg">You</span> CAN <span className="shape-bg">TOO !!!</span>
        </h2>

        <h3 className="my-[10px] leading-4 justify-center text-black text-[1em]">
        JUST LIKE 100’S OF STUDENT,YOUR CHILD CAN ALSO CHOOSE THE RIGHT CAREER OPTION. <br />
        <h4 className='leading-[1em] mb-[50px] mt-[20px] text-[1em]'> CAREERGUIDE WILL GUIDE THEM WITH THE RIGHT PATH TO SUCCESS WITH OUR TEAM OF EXPERIENCED MENTORS AND HELPS STUDENTS TO GET BEST CAREER GUIDANCE AFTER 12TH.
</h4>
        </h3>
        </div>
        <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <ConsellingMid key={index} {...section} />
          ))}
        </div>
      </div>
    </div>  )
}

export default Class9th