import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  GlobalStyles,
  Container,
} from '@mui/material';
import Course from '../types/course';
import CourseService from '../services/course-service';

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

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
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Kursai
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Greitai ir efektyviai išnaudokite laisvą namų erdvę nuosavų žalumynų auginimui
          ir gaukite veslo planus užauginto pertekliaus pardavimui.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {courses.map((course) => (
            <Grid
              item
              key={course.title}
              xs={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title={course.title}
                  titleTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {course.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      eur.
                    </Typography>
                  </Box>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={course.descLine1}
                    >
                      {course.descLine1}
                    </Typography>
                  </ul>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={course.descLine2}
                    >
                      {course.descLine2}
                    </Typography>
                  </ul>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={course.descLine3}
                    >
                      {course.descLine3}
                    </Typography>
                  </ul>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={course.descLine4}
                    >
                      {course.descLine4}
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                    Registruotis
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default CoursesPage;
