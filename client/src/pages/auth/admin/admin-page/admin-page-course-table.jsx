import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const createData = (id, course, price) => ({
  id,
  course,
  price,
});

const rows = [
  createData(
    0,
    'hydroponics',
    '49.99',
  ),
];

const AdminPageCourseTable = () => (
  <>
    <Typography
      variant="h5"
      component="h2"
      sx={{ my: 3 }}
      textAlign="center"
    >
      Visi kursai
    </Typography>
    <Paper sx={{
      p: 1,
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <TableContainer sx={{ my: 4 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Prekė</TableCell>
              <TableCell align="right">Kaina</TableCell>
              <TableCell align="right">Veiksmai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.course}</TableCell>
                <TableCell align="right">{`${row.price}`}</TableCell>
                <TableCell align="right">
                  <EditOutlinedIcon />
                  <DeleteOutlineIcon color="error" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </>

);

export default AdminPageCourseTable;
