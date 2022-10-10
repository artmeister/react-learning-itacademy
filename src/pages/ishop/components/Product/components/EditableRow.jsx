import {
  TableRow,
  TableCell,
  TextField,
  IconButton
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const EditableRow = ({
  cls,
  editFormData,
  editFormChange,
  cancelClick,
}) => {
  return (
    <TableRow>
      <TableCell>
        <img className={cls.productPhoto} src={editFormData.photo} alt={editFormData.name} />
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required
          placeholder="Ввведите наименование..."
          name="name"
          value={editFormData.name}
          onChange={editFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required
          placeholder="Укажите цену..."
          name="price"
          value={editFormData.price}
          onChange={editFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required
          placeholder="Укажите кол-во..."
          name="mount"
          value={editFormData.mount}
          onChange={editFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <IconButton
          type="submit"
          aria-label="Подтвердить"
        >
          <CheckIcon/>
        </IconButton>
        <IconButton
          type="Button"
          aria-label="Отменить"
          onClick={cancelClick}
        >
          <ClearIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;