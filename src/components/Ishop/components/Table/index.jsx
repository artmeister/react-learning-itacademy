import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';

const ProductsTable = ({ products, cls }) => {
  return (
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
        {products.map( product => {
          return (
            <TableRow key={product.id}>
              <TableCell>
                <img className={cls.photo} src={product.photo} alt={product.name} />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.mount}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default ProductsTable;