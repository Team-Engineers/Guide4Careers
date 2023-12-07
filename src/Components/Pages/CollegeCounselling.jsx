import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import CounsellingBanner from '../CounsellingBanner';
import Class9th from '../Class9th';
import TopMentees from '../TopMentees';

const CollegeCounselling = () => {
  return (
    <>
    <Header/>
    <CounsellingBanner  para='CareerGuide brings this Program for all College students to overcome wide variety confusions , issues and provide ultimate guidance to take them to their ultimate goal.' para2='Career Counselling helps students in getting best career guidance after College
' text="Career Counselling For College Students"/>
<Class9th/>
<TopMentees/>
    <Footer/>
    </>
  )
}

export default CollegeCounselling
