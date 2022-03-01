import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  alpha,
  Typography,
} from '@mui/material';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{ my: 3 }}
        textAlign="center"
      >
        Visos kategorijos
      </Typography>
      <Paper sx={{ p: 1, }} >
        <TableContainer sx={{ my: 2 }}>
          <Table size="small">
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
                    bgcolor: category.edited ? alpha(theme.palette.warning.main, 0.1) : undefined,
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
                      {category.edited ? <DoNotDisturbAltIcon /> : <EditOutlinedIcon />}
                    </Typography>
                    <Typography variant="button" color="error" onClick={() => onDelete(category.id)}>
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
};

export default CategoryPanelPageTable;
