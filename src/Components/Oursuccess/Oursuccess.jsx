// import React from 'react'

// const Oursuccess = () => {
//   return (
//     <div className=" about-area section-padding bg-[url('../images/all-img/section-bg-8.png')] bg-cover  bg-no-repeat bg-center">
//       <div className="">
//         <h2 className="flex justify-center column-title">
//           Our <span className="shape-bg mr-4 ml-4">Success</span> Stories !
//         </h2>
//         <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-6">
          // <div className="col-span-1 shadow-2xl h-[400px] my-4  ml-[30px] rounded-3xl">
          //   <div className="text-center font-medium">
          //     <img
          //       className="relative mr-auto ml-6 my-6"
          //       src={require("../../src/assets/images/success/success1.webp")}
          //       alt=""
          //     />
          //     <p className=" text-[blue] mt-[-90px]">Sita Ramaswami</p>
          //     <p className="ml-[170px]">
          //       Class 10, Gopalan International School
          //     </p>
          //     <h5 className="font-bold my-[60px] ml-[-90px]">
          //       Open discussion about my children’s opinions!
          //     </h5>
          //     <p className="text-sm mt-[-30px] mr-8 ml-8 text-justify">
          //       Along with psychometric assessment, iDreamCareer’s personalized
          //       dashboard provided great information for both my children. With
          //       the career report & one-on-one counseling, there was an open
          //       discussion about my children’s opinions and choices. Having
          //       limited knowledge about different careers as a parent, iDC came
          //       as a big help!
          //     </p>
          //   </div>
          // </div>
          // <div className="col-span-1 shadow-2xl h-[400px] my-4  ml-[30px] rounded-3xl">
          //   <div className="text-center font-medium">
          //     <img
          //       className="relative mr-auto ml-6 my-6"
          //       src={require("../../src/assets/images/success/success2.webp")}
          //       alt=""
          //     />
          //     <p className=" text-[blue] mt-[-90px]">Tapan Mandal</p>
          //     <p className="ml-[80px]">BBA, Depauw University</p>
          //     <h5 className="font-bold my-[60px] ml-[-290px]">
          //       Scholarship Received -
          //     </h5>
          //     <p className="text-sm mt-[-30px] mr-8 ml-8 text-justify">
          //       I had been looking for assistance with my applications for a
          //       long time and spoke to many counselors and agencies. But after
          //       meeting with iDC counselors, I knew that I had to go ahead with
          //       them.
          //     </p>
          //   </div>
          // </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Oursuccess;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./oursuccess.css"
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

export default function App() {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <h2 className="flex justify-center column-title">
        Our <span className="shape-bg mr-4 ml-4">Success</span> Stories !
      </h2>
      <div className="relative flex justify-end gap-4 mr-[80px]">
        <button className="successbtn" onClick={prevSlide}>
          ‹
        </button>
        <button className="successbtn" onClick={nextSlide}>
          ›
        </button>
      </div>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide data-hash="slide1">
          <div className="col-span-1 shadow-2xl h-[400px] my-4  mr-[20px] ml-[30px] rounded-3xl">
            <div className="text-center font-medium">
              <img
                className="relative mr-auto ml-6 my-6"
                src={require("../../assets/images/success/success2.webp")}
                alt=""
              />
              <p className=" text-[blue] mt-[-90px]">Tapan Mandal</p>
              <p className="ml-[80px]">BBA, Depauw University</p>
              <h5 className="font-bold my-[60px] ml-[-290px] md:ml-[-100px]">
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
        </SwiperSlide>
        <SwiperSlide data-hash="slide1">
          <div className="col-span-1 shadow-2xl h-[400px] my-4  mr-[20px] ml-[30px] rounded-3xl">
            <div className="text-center font-medium">
              <img
                className="relative mr-auto ml-6 my-6"
                src={require("../../assets/images/success/success1.webp")}
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
        </SwiperSlide>
        <SwiperSlide data-hash="slide1">
          <div className="col-span-1 shadow-2xl h-[400px] my-4  mr-[20px] ml-[30px] rounded-3xl">
            <div className="text-center font-medium">
              <img
                className="relative mr-auto ml-6 my-6"
                src={require("../../assets/images/success/success3.webp")}
                alt=""
              />
              <p className=" text-[blue] mt-[-90px]">Kritika Verma</p>
              <p className="ml-[80px]">2nd Year, Hansraj College</p>
              <h5 className="font-bold my-[60px] ml-[-290px]">
                Understood best career opportunities for me
              </h5>
              <p className="text-sm mt-[-30px] mr-8 ml-8 text-justify">
                Earlier I was too confused regarding my career options. There
                were too many career options and I didn’t know how to evaluate
                betwen them and choose one. In my first session, the counsellor
                helped me understand some of the best career opportunities.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1">
          <div className="col-span-1 shadow-2xl h-[400px] my-4 mr-[20px] ml-[30px] rounded-3xl">
            <div className="text-center font-medium">
              <img
                className="relative mr-auto ml-6 my-6"
                src={require("../../assets/images/success/success4.webp")}
                alt=""
              />
              <p className=" text-[blue] mt-[-90px]">Anirban Saren</p>
              <p className="ml-[80px]">3rd Year, Asutosh College</p>
              <h5 className="font-bold my-[60px] ml-[-290px]">
                Assessment and Counseling worth the money!
              </h5>
              <p className="text-sm mt-[-30px] mr-8 ml-8 text-justify">
                The assessment and career counselling video call was worth the
                money. My counselor guided me through the best career option for
                me and my future. She listened to me and my mother about my
                history and she accordingly gave a very practical solution which
                is also suited for my personality, interests and aptitude.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}