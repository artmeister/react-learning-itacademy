import {
  TableRow,
  TableCell,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';


const Product = ({ productRow, cls, onClick, selected, handleClickDeleted }) => {
  console.log(productRow)
  return (
    <TableRow
      className={selected === productRow ? cls.selectedRow : ''}
      onClick={onClick}
      selected={selected === productRow ? true : false}
      hover
    >
      <TableCell>
        <img className={cls.productPhoto} src={productRow.photo} alt={productRow.name} />
      </TableCell>
      <TableCell>{productRow.name}</TableCell>
      <TableCell>{productRow.price}</TableCell>
      <TableCell>{productRow.mount}</TableCell>
      <TableCell>
        <IconButton aria-label="delete" onClick={handleClickDeleted}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Product;