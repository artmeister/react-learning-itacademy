import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import Product from '../Product'


const Store = ({ products, columns, cls, onDelete, onToggle }) => {
  return (
    // <DataGrid
    //   rows={products}
    //   columns={columns}
    //   pageSize={5}
    //   rowsPerPageOptions={[5]}
    //   checkboxSelection
    //   getRowHeight={() => 100}
    //   autoHeight={true}
    // />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Изображение товара</TableCell>
          <TableCell align='center'>Наименование</TableCell>
          <TableCell>Цена, ед.</TableCell>
          <TableCell>Кол-во, шт.</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(row => {
          return (
            <Product
              {...row}
              key={row.id}
              cls={cls}
              productRow={row}
              onToggle={() => onToggle(row.id)}
              onDelete={() => onDelete(row.id)}
            />
          )
        })}
      </TableBody>
    </Table>
  )
}

export default Store;