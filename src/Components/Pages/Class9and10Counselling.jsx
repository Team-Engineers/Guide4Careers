import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import CounsellingBanner from '../CounsellingBanner';
import Class9th from '../Class9th';
import TopMentees from '../TopMentees';

const Class9and10Counselling = () => {
  return (
    <>
    <Header/>
    <CounsellingBanner  para='CareerGuide brings this Program for all class 9 & 10y students to overcome wide variety confusions , issues and provide ultimate guidance to take them to their ultimate goal.' para2='Career Counselling helps students in getting best career guidance after 10th
' text="Career Counselling For Class 9 & 10 Students"/>
<Class9th/>
<TopMentees/>
    <Footer/>
    </>
  )
}

export default Class9and10Counselling
