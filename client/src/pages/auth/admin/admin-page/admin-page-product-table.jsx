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

const AdminPageProductTable = ({ products }) => (
  <>
    <Typography
      variant="h5"
      component="h2"
      textAlign="center"
    >
      Visos prekės
    </Typography>
    <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
      <TableContainer sx={{ my: 4 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Prekė</TableCell>
              <TableCell>Kategorija</TableCell>
              <TableCell align="right">Kaina</TableCell>
              <TableCell align="right">Veiksmai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(({
              id, name, price, category,
            }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{category.name}</TableCell>
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

export default AdminPageProductTable;
