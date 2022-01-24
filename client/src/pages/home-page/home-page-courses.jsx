import React from 'react';
import HomePageCoursesMobile from './home-page-courses-mobile';
import HomePageCoursesDesktop from './home-page-courses-desktop';

const courses = [
  {
    text: 'Viskas ką reikia žinoti apie hidroponinį daržovių auginimą savo namuose ir paprasti būdai pradėti.',
    buttonText: 'sužinoti daugiau',
    link: '/courses',
  },
];

const HomePageCourses = () => (
  <>
    <HomePageCoursesDesktop courses={courses} />
    <HomePageCoursesMobile courses={courses} />
  </>

);

export default HomePageCourses;
