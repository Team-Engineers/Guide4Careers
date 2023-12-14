// Oursuccess.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./oursuccess.css";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

const successStories = [
  {
    image: require("../../assets/images/success/success2.webp"),
    name: "Tapan Mandal",
    details: "BBA, Depauw University",
    scholarship: "Scholarship Received -",
    description:
      "I had been looking for assistance with my applications for a long time and spoke to many counselors and agencies. But after meeting with iDC counselors, I knew that I had to go ahead with them.",
  },
  {
    image: require("../../assets/images/success/success1.webp"),
    name: "Sita Ramaswami",
    details: "Class 10, Gopalan International School",
    scholarship: "Open discussion about my children’s opinions!",
    description:
      "Along with psychometric assessment, iDreamCareer’s personalized dashboard provided great information for both my children. With the career report & one-on-one counseling, there was an open discussion about my children’s opinions and choices. Having limited knowledge about different careers as a parent, iDC came as a big help!",
  },
  {
    image: require("../../assets/images/success/success3.webp"),
    name: "Kritika Verma",
    details: "2nd Year, Hansraj College",
    scholarship: "Understood best career opportunities for me",
    description:
      "Earlier I was too confused regarding my career options. There were too many career options and I didn’t know how to evaluate between them and choose one. In my first session, the counselor helped me understand some of the best career opportunities.",
  },
  {
    image: require("../../assets/images/success/success4.webp"),
    name: "Anirban Saren",
    details: "3rd Year, Asutosh College",
    scholarship: "Assessment and Counseling worth the money!",
    description:
      "The assessment and career counseling video call was worth the money. My counselor guided me through the best career option for me and my future. She listened to me and my mother about my history and she accordingly gave a very practical solution which is also suited for my personality, interests and aptitude.",
  },
];

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
    <div className="mx-[20px]">
      <h2 className="flex justify-center column-title">
        Our <span className="shape-bg mr-4 ml-4">Success</span> Stories!
      </h2>
      <div className="relative lg:flex max-lg:hidden  justify-end gap-4 mr-[80px]">
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
        className="mySwiper mt-[20px] shadow-2xl  md:h-[400px] rounded-3xl md:w-[50%]"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {successStories.map((story, index) => (
          <SwiperSlide  key={index} data-hash={`slide${index + 1}`}>
            <div className="col-span-1 max-md:max-h-[550px]  h-full mx-[20px] rounded-3xl">
              <div className="text-center font-medium">
                <img
                  className="relative max-md:mx-auto  ml-6 my-6"
                  src={story.image}
                  alt=""
                />
                <p className="text-[blue] mx-auto md:mt-[-90px]">
                  {story.name}
                </p>
                <p className="mx-auto">{story.details}</p>
                <h5 className="font-bold mx-auto my-[20px] max-md:mb-[40px] md:my-[60px] ">
                  {story.scholarship}
                </h5>
                <p className="text-sm mt-[-30px] my-[30px] mx-[13px] md:mx-[40px]   text-justify">
                  {story.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative justify-end lg:hidden max-lg:flex my-[40px] gap-4 ">
        <button className="successbtn" onClick={prevSlide}>
          ‹
        </button>
        <button className="successbtn" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
}
