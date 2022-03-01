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

type CoursePanelPageTableProps = {
  courses: {
    id: string,
    name: string,
    price: number
  }[]
};

const CoursePanelPageTable: React.FC<CoursePanelPageTableProps> = ({ courses }) => (
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
              <TableCell align="right">1 eilutė</TableCell>
              <TableCell align="right">2 eilutė</TableCell>
              <TableCell align="right">3 eilutė</TableCell>
              <TableCell align="right">4 eilutė</TableCell>
              <TableCell align="right">Veiksmai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map(({ id, name, price }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell align="right">{`${price}`}</TableCell>
                <TableCell align="right">{`${price}`}</TableCell>
                <TableCell align="right">{`${price}`}</TableCell>
                <TableCell align="right">{`${price}`}</TableCell>
                <TableCell align="right">{`${price}`}</TableCell>
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

export default CoursePanelPageTable;
