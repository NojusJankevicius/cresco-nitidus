import React from 'react';
import {
  alpha,
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
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import Course from '../../../../types/course';

type EditedCourse = Course & {
  edited: boolean,
};

export type CoursePanelPageTableProps = {
  data: EditedCourse[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
};

const CoursePanelPageTable: React.FC<CoursePanelPageTableProps> = ({
  data,
  onEdit,
  onDelete, }) => (
  <>
    <Typography
      variant="h5"
      component="h2"
      sx={{ my: 3 }}
      textAlign="center"
    >
      Visi kursai
    </Typography>
    <Paper sx={{ p: 1, }} >
      <TableContainer sx={{ my: 2 }}>
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
            {data.map(({ id, title, price, descLine1, descLine2, descLine3, descLine4, edited }) => (
              <TableRow key={id}
                sx={(theme) => ({
                  bgcolor: edited ? alpha(theme.palette.warning.main, 0.1) : undefined,
                  '&:last-child td, &:last-child th': { border: 0 },
                })}
              >
                <TableCell>{title}</TableCell>
                <TableCell align="right">{`${price}`}</TableCell>
                <TableCell align="right">{`${descLine1}`}</TableCell>
                <TableCell align="right">{`${descLine2}`}</TableCell>
                <TableCell align="right">{`${descLine3}`}</TableCell>
                <TableCell align="right">{`${descLine4}`}</TableCell>
                <TableCell align="right">
                  <Typography
                    variant="button"
                    color={edited ? 'warning' : 'secondary'}
                    onClick={() => onEdit(id)}
                  >
                    {edited ? <DoNotDisturbAltIcon /> : <EditOutlinedIcon />}
                  </Typography>
                  <Typography variant="button" color="error" onClick={() => onDelete(id)}>
                    <DeleteOutlineIcon />
                  </Typography>
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
