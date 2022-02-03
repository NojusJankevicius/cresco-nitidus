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

const createData = (id, product, category, price) => ({
  id,
  product,
  category,
  price,
});

const rows = [
  createData(
    0,
    'oyster mushroom starter kit',
    'starter kit',
    '16.99',
  ),
  createData(
    1,
    'oyster mushroom starter kit',
    'starter kit',
    '16.99',
  ),
  createData(
    2,
    'oyster mushroom starter kit',
    'starter kit',
    '16.99',
  ),
  createData(
    3,
    'oyster mushroom starter kit',
    'starter kit',
    '16.99',
  ),
];

const AdminPageProductTable = () => (
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.category}</TableCell>
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

export default AdminPageProductTable;
