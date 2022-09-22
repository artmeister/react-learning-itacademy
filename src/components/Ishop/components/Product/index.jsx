import {
  TableRow,
  TableCell,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import useElementSize from '../../../../hooks/useElementSize'
// import useRefDimensions from '../../../../hooks/useRefDimensions'
import EditableRow from './components/EditableRow';

const Product = ({
  productRow,
  cls,
  openedModal,
  onDelete,
  onToggle,
  editFormChange,
  editClick,
  cancelClick,
  editProductId,
  editFormData,
}) => {
  const classNameSelected = productRow.selected ? cls.selectedRow : '';
  const selectedRow = productRow.selected ? true : false;
  const mobileMediaQuery = useMediaQuery('(max-width:992px)');
  const desktopMediaQuery = useMediaQuery('(min-width:993px)');

  const [cardRef, { height }] = useElementSize()

  // const cardRef = createRef()
  // const dimensions = useRefDimensions(tableCellCard)

  return (
    <>
      {editProductId === productRow.id ?
        <EditableRow
          cls={cls}
          editFormData={editFormData}
          cancelClick={cancelClick}
          editFormChange={editFormChange}
        />
      : <>
          <TableRow
            className={`${cls.tableRow} ${openedModal ? null : classNameSelected}`}
            onClick={() => onToggle()}
            selected={openedModal ? null : selectedRow}
            hover
            sx={{ height: height ?? 'auto' }}
          >
            <TableCell>
              <img className={cls.productPhoto} src={productRow.photo} alt={productRow.name} />
            </TableCell>
            <TableCell align='center'>{productRow.name}</TableCell>
            <TableCell>{productRow.price}</TableCell>
            <TableCell>{productRow.mount}</TableCell>
            <TableCell>
              <IconButton
                disabled={openedModal ? true : false}
                aria-label="Редактировать"
                onClick={(e) => {
                  e.stopPropagation()
                  editClick(e, productRow)
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                disabled={openedModal ? true : false}
                aria-label="Удалить"
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete()
                }}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>

            {openedModal ? null : productRow.selected && desktopMediaQuery &&
              <TableCell className={cls.tableCellCard} ref={cardRef}>
                <Card className={cls.card}>
                  <CardContent className={cls.cardContent}>
                    <CardMedia
                      className={cls.productPhoto}
                      component="img"
                      src={productRow.photo}
                      alt={productRow.name}
                    />
                    
                    <Typography variant="h5" component="div">
                      {productRow.name}
                    </Typography>
                    <Typography color="text.secondary">
                      Цена: {productRow.price} ед.
                    </Typography>
                    <Typography variant="body2">
                      Кол-во, шт.: {productRow.mount}
                    </Typography>
                  </CardContent>
                </Card>
              </TableCell>
            }
          </TableRow>

          {openedModal ? null : productRow.selected && mobileMediaQuery && 
            <TableRow className={cls.tableRowCard}>
              <TableCell colSpan={6}>
                <Card className={cls.card}>
                  <CardContent className={cls.cardContent}>
                    <CardMedia
                      className={cls.productPhoto}
                      component="img"
                      src={productRow.photo}
                      alt={productRow.name}
                    />
                    
                    <Typography variant="h5" component="div">
                      {productRow.name}
                    </Typography>
                    <Typography color="text.secondary">
                      Цена: {productRow.price} ед.
                    </Typography>
                    <Typography variant="body2">
                      Кол-во единиц: {productRow.mount}
                    </Typography>
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>
          }
      </>
      }
    </>
  )
}

export default Product;