import React, { useEffect, useState } from 'react';
import { Alert, Container, Grid } from '@mui/material';
import CourseService from '../../../../services/course-service';
import CoursePanelPageForm, { CoursePanelPageFormProps } from './course-panel-page-form';
import CoursePanelPageTable, { CoursePanelPageTableProps } from './course-panel-page-table';
import Course from '../../../../types/course';

const CoursePanelPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [titleField, setTitleField] = useState<string>('');
  const [descLine1Field, setDescLine1Field] = useState<string>('');
  const [descLine2Field, setDescLine2Field] = useState<string>('');
  const [descLine3Field, setDescLine3Field] = useState<string>('');
  const [descLine4Field, setDescLine4Field] = useState<string>('');
  const [priceField, setPriceField] = useState<number>(0);
  const [editedCourseId, setEditedCourseId] = useState<null | string>(null);

  const handleSubmit: CoursePanelPageFormProps['onSubmit'] = (event) => {
    event.preventDefault();
    if (editedCourseId !== null) updateCourse();
    else createCourse();
  };

  const createCourse = async () => {
    const createdCourse = await CourseService.createCourse({
      title: titleField,
      descLine1: descLine1Field,
      descLine2: descLine2Field,
      descLine3: descLine3Field,
      descLine4: descLine4Field,
      price: priceField,
    });
    if (typeof createdCourse === 'string') {
      setError(createdCourse);

      return;
    } else if (error) {
      setError(error);
    }
    setCourses([createdCourse, ...courses]);
    setTitleField('');
    setDescLine1Field('');
    setDescLine2Field('');
    setDescLine3Field('');
    setDescLine4Field('');
    setPriceField(0);
  };

  const editCourse: CoursePanelPageTableProps['onEdit'] = (id: string) => {
    const isNewEditedCourse = id !== editedCourseId;
    setEditedCourseId(isNewEditedCourse ? id : null);
    if (isNewEditedCourse) {
      const editedCourse = courses.find(x => x.id === id) as Course;
      setTitleField(editedCourse.title);
      setDescLine1Field(editedCourse.descLine1);
      setDescLine2Field(editedCourse.descLine2);
      setDescLine3Field(editedCourse.descLine3);
      setDescLine4Field(editedCourse.descLine4);
      setPriceField(editedCourse.price);
    } else {
      setTitleField('');
      setDescLine1Field('');
      setDescLine2Field('');
      setDescLine3Field('');
      setDescLine4Field('');
      setPriceField(0);
    }
    if (error) setError(null);
  };

  const updateCourse = async () => {
    if (editedCourseId !== null) {
      const updatedCourse = await CourseService.updateCourse(editedCourseId, {
        title: titleField,
        descLine1: descLine1Field,
        descLine2: descLine2Field,
        descLine3: descLine3Field,
        descLine4: descLine4Field,
        price: priceField,
      });
      if (typeof updatedCourse === 'string') {
        setError(updatedCourse);

        return;
      } else if (error) {
        setError(null);
      }

      setCourses(courses.map(x => x.id === editedCourseId ? updatedCourse : x));
      setTitleField('');
      setDescLine1Field('');
      setDescLine2Field('');
      setDescLine3Field('');
      setDescLine4Field('');
      setPriceField(0);
      setEditedCourseId(null);
    }
  };

  const deleteCourse = async (id: string) => {
    const deletedCourse = await CourseService.deleteCourse(id);

    if (typeof deletedCourse === 'string') {
      setError(deletedCourse);

      return;
    } else if (error) {
      setError(null);
    }

    setCourses(courses.filter(x => x.id !== id));
    setEditedCourseId(null);
    setTitleField('');
    setDescLine1Field('');
    setDescLine2Field('');
    setDescLine3Field('');
    setDescLine4Field('');
    setPriceField(0);
  };

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
        <Grid item xs={12}>
          <CoursePanelPageTable
            data={courses.length > 0 ? courses.map(x => ({ ...x, edited: editedCourseId === x.id })) : []}
            onDelete={deleteCourse}
            onEdit={editCourse} />
        </Grid>
        <Grid item xs={12}>
          {
            error && (
              <Alert
                onClose={() => setError(null)}
                color="error"
                sx={{ mb: 2 }}
              >
                {error}
              </Alert>
            )
          }
          <CoursePanelPageForm
            onSubmit={handleSubmit}
            title={titleField}
            descLine1={descLine1Field}
            descLine2={descLine2Field}
            descLine3={descLine3Field}
            descLine4={descLine4Field}
            price={priceField}
            setTitle={setTitleField}
            setDescLine1={setDescLine1Field}
            setDescLine2={setDescLine2Field}
            setDescLine3={setDescLine3Field}
            setDescLine4={setDescLine4Field}
            setPrice={setPriceField}
            editMode={Boolean(editedCourseId)}
          />
        </Grid>
      </Grid>
    </Container>

  );
};

export default CoursePanelPage;
