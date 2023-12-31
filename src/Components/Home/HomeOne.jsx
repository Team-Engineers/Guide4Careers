import React, { useEffect } from "react";
// import About from "../About";
import Banner from "../Banner";
import Blogs from "../Blogs";
// import Brands from "../Brands";
// import Courses from "../Courses";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
// import NewsLetter from "../NewsLetter";
// import Platform from "../Platform";
// import Team from "../Team";
import Testimonials from "../Testimonials";
// import Topics from "../Topics";
import TopColleges from "../TopColleges";
import OurPartnerInstitutions from "../OurPartnerInstitutions";
import Oursuccess from "../Oursuccess/Oursuccess";
import Founder from "../Founder";
import Consultant from "../Consultant";
import Assessment from "../Assessment/Assessment";
import Ourservices from "../Ourservices/Ourservices";
import Categories from "../Categories/Categories";
import Exam from "../Exam/Exam";



const HomeOne = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      {/* <About /> */}
      {/* <Brands section_padding_bottom={"section-padding-bottom"} /> */}
      <Feature />
      {/* <Courses />*/}
      {/*<Platform />*/}
      {/* <NewsLetter />*/}
      {/* <Team /> */}
      <TopColleges />
      <OurPartnerInstitutions />
      <Oursuccess/>
      <Founder/>
      <Consultant/>
      <Assessment/>
      <Ourservices/>
      <Categories/>
      <Exam/>
      
      {/* <Topics /> */}

      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
};

export default HomeOne;
