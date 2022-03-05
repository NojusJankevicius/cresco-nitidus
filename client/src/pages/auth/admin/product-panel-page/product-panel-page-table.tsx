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
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import Product from '../../../../types/product';

type EditedProduct = Product & {
  edited: boolean,
};

type ProductPanelPageTableProps = {
  data: EditedProduct[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
};

const ProductPanelPageTable: React.FC<ProductPanelPageTableProps> = ({ data, onDelete, onEdit }) => (
  <>
    <Typography
      variant="h5"
      component="h2"
      sx={{ my: 3 }}
      textAlign="center"
    >
      Visos prekės
    </Typography>
    <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
      <TableContainer sx={{ my: 2 }}>
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
            {data.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.category.title}</TableCell>
                <TableCell align="right">{`${data.price}`}</TableCell>
                <TableCell align="right">
                    <Typography
                      variant="button"
                      color={data.edited ? 'warning' : 'secondary'}
                      onClick={() => onEdit(data.id)}
                    >
                      {data.edited ? <DoNotDisturbAltIcon /> : <EditOutlinedIcon />}
                    </Typography>
                    <Typography variant="button" color="error" onClick={() => onDelete(data.id)}>
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

export default ProductPanelPageTable;
