import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  Button,
  styled,
  alpha,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CachedIcon from '@mui/icons-material/Cached';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import Category from '../../../../types/category';

type EditedCategory = Category & {
  edited: boolean,
};

export type CategoryPanelPageTableProps = {
  data: EditedCategory[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
};

export const CategoryPanelPageTable: React.FC<CategoryPanelPageTableProps> = ({
  data,
  onEdit,
  onDelete,
}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Pavadinimas</TableCell>
            <TableCell align="right">Sukurta:</TableCell>
            <TableCell align="right">Atnaujinta:</TableCell>
            <TableCell align="right">Veiksmai:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((category) => (
            <TableRow
              key={category.id}
              sx={(theme) => ({
                bgcolor: category.edited ? alpha(theme.palette.warning.main, 0.3) : undefined,
                '&:last-child td, &:last-child th': { border: 0 },
              })}
            >
              <TableCell component="th" scope="row">
                {category.id}
              </TableCell>
              <TableCell>{category.title}</TableCell>
              <TableCell align="right">{category.createdAt}</TableCell>
              <TableCell align="right">{category.updatedAt}</TableCell>
              <TableCell align="right">
                <Typography
                  variant="button"
                  color={category.edited ? 'warning' : 'secondary'}
                  onClick={() => onEdit(category.id)}
                >
                  {category.edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}
                </Typography>
                <Typography variant="button" color="error" onClick={() => onDelete(category.id)}>
                  <DeleteForeverIcon />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoryPanelPageTable;
