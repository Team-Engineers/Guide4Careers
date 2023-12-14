import React, { useEffect } from "react";
import Assessment from "../Assessment/Assessment";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Categories from "../Categories/Categories";
import Consultant from "../Consultant";
import Exam from "../Exam/Exam";
import Feature from "../Feature";
import Footer from "../Footer";
import Founder from "../Founder";
import Header from "../Header";
import OurPartnerInstitutions from "../OurPartnerInstitutions";
import Ourservices from "../Ourservices/Ourservices";
import Oursuccess from "../Oursuccess/Oursuccess";
import Testimonials from "../Testimonials";
import TopColleges from "../TopColleges";



const HomeOne = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
<<<<<<< Updated upstream
    <div className=" overflow-hidden ">
=======
    <div className="overflow-hidden">
>>>>>>> Stashed changes
      <Header />
      <Banner />
      <Feature />
      <TopColleges />
      <OurPartnerInstitutions />
      <Oursuccess/>
      <Founder/>
      <Consultant/>
      <Assessment/>
      <Ourservices/>
      <Categories/>
      <Exam/>
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
};

export default HomeOne;
