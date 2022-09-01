import { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import Product from '../Product'


const Store = ({ products, columns, cls }) => {
  const [rowsData, setRowsData] = useState(products);
  const [selectedRow, setSelectedRow] = useState({});


  const handleClickDeleted = (index) => {
    const question = window.confirm('Вы уверены?');

    const rows = [...rowsData];
    rows.splice(index, 1);

    if (question) {
      setRowsData(rows);
    }
  }

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
          <TableCell>Наименование</TableCell>
          <TableCell>Цена, ед.</TableCell>
          <TableCell>Кол-во, шт.</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsData.map((row, index) => {
          return (
            <Product
              selected={selectedRow}
              key={row.id}
              cls={cls}
              productRow={row}
              onClick={() => setSelectedRow(row)}
              handleClickDeleted={() => handleClickDeleted(index)}
            />
          )
        })}
      </TableBody>
    </Table>
  )
}

export default Store;