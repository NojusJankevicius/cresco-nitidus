import React from 'react';
import HomePageCoursesMobile from './home-page-courses-mobile';
import HomePageCoursesDesktop from './home-page-courses-desktop';

export type HomePageCourseProps = {
  courses: {
    text: string,
    buttonText: string,
    link: string,
  }[]
};

const courses = [
  {
    text: 'Viskas ką reikia žinoti apie hidroponinį daržovių auginimą savo namuose ir paprasti būdai pradėti.',
    buttonText: 'sužinoti daugiau',
    link: '/courses',
  },
];

const HomePageCourses: React.FC = () => (
  <>
    <HomePageCoursesDesktop courses={courses} />
    <HomePageCoursesMobile courses={courses} />
  </>

);

export default HomePageCourses;
