import {
  TableRow,
  TableCell,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';


const Product = ({ productRow, cls, onDelete, onToggle }) => {
  return (
    <TableRow
      className={productRow.selected ? cls.selectedRow : ''}
      onClick={() => onToggle()}
      selected={productRow.selected ? true : false}
      hover
    >
      <TableCell style={{ width: '15%' }}>
        <img className={cls.productPhoto} src={productRow.photo} alt={productRow.name} />
      </TableCell>
      <TableCell align='center'>{productRow.name}</TableCell>
      <TableCell style={{ width: '10%' }}>{productRow.price}</TableCell>
      <TableCell style={{ width: '10%' }}>{productRow.mount}</TableCell>
      <TableCell style={{ width: '5%' }}>
        <IconButton 
          aria-label="delete"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Product;