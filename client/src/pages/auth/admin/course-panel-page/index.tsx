import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import CourseService from '../../../../services/course-service';
import CoursePanelPageForm from './course-panel-page-form';
import CoursePanelPageTable from './course-panel-page-table';

const CoursePanelPage: React.FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCoursesData = await CourseService.getCourses();
      const coursesArray = Object.values(fetchedCoursesData);
      if (typeof coursesArray === 'string') {
        console.error(coursesArray);

        return;
      }
      setCourses(coursesArray[0]);
    })();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
        <CoursePanelPageTable courses={courses} />
        </Grid>
        <Grid item xs={12} md={3}>
        <CoursePanelPageForm />
        </Grid>
      </Grid>
    </Container>

  );
};

export default CoursePanelPage;
