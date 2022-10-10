import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from '@mui/material';


const FormDialog = ({
  open,
  close,
  save,
  disable,
  name,
  onChangeName,
  photo,
  onChangePhoto,
  price,
  onChangePrice,
  mount,
  onChangeMount
}) => {

  const ALPHA_DASH_REGEX = /^[a-zA-Z-]+$/;
  const NUMERIC_REGEX = /^[0-9]+$/;

  return (
    <>
      <Dialog
        open={open}
        onClose={close}
      >
        <DialogTitle>Добавление товара</DialogTitle>
        <DialogContent sx={{maxWidth: 300}}>
          <TextField
            onKeyDown={(event) => {
              if (!ALPHA_DASH_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
            type="text"
            margin="dense"
            autoFocus
            fullWidth
            variant="outlined"
            placeholder="Название товара"
            label="Название"
            value={name}
            onChange={onChangeName}
          />
          <TextField
            onKeyDown={(event) => {
              if (!ALPHA_DASH_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
            type="text"
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Адрес изображения"
            label="Изображение"
            value={photo}
            onChange={onChangePhoto}
          />
          <TextField
            onKeyDown={(event) => {
              if (!NUMERIC_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Цена товара"
            label="Цена, ед."
            value={price}
            onChange={onChangePrice}
          />
          <TextField
            margin="dense"
            fullWidth
            type="number"
            variant="outlined"
            placeholder="Кол-во товара"
            label="Количество, шт."
            value={mount}
            onChange={onChangeMount}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={close}>Отменить</Button>
          <Button variant="contained" onClick={save} disabled={disable ? true : false}>Сохранить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


export default FormDialog;