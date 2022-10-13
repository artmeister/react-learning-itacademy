import { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box
} from '@mui/material';
import Product from '../Product'
import FormDialog from '../FormDialog'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Store = ({
  products,
  cls,
  onAdded,
  onEdit,
  onDelete,
  onToggle,
  editFormChange,
  editFormSubmit,
  editClick,
  cancelClick,
  editProductId,
  editFormData
}) => {

  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState('');
  const [mount, setMount] = useState(0);

  const onAddedProduct = (e) => {
    e.preventDefault();
    
    if (!!name && !!price && !!mount) {
      onAdded(name, price, photo, mount);
      setName('');
      setPrice(0);
      setPhoto('');
      setMount(0);
      setOpen(false)
    }
  }

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  useEffect(() => {
    if (
      (name) !== '' &&
      (price && mount) !== 0
    ) setDisable(false)
  }, [name, price, photo, mount])
  
  return (
    <Box className={cls.container}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px', cursor: 'pointer' }}
        className='shopping-cart'
        onClick={() => navigate('/cart')}
      >
        <ShoppingCart id='cartIcon' fontSize="large" />
        <Box sx={{ flexDirection: 'column' }}>
          <p>{getTotal().totalQuantity || 0} шт.</p>
          <p>{getTotal().totalPrice || 0} ед.</p>
        </Box>
      </Box>

      <form onSubmit={editFormSubmit}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Изображение товара</TableCell>
              <TableCell align='center'>Наименование</TableCell>
              <TableCell>Цена, ед.</TableCell>
              <TableCell>Кол-во, шт.</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <Product
                {...product}
                key={product.id}
                cls={cls}
                productRow={product}
                openedModal={open}
                onToggle={() => onToggle(product.id)}
                onEdit={() => onEdit(product.id)}
                onDelete={() => onDelete(product.id)}
                editFormData={editFormData}
                editFormChange={editFormChange}
                editClick={editClick}
                cancelClick={cancelClick}
                editProductId={editProductId}
              />
            ))}
          </TableBody>
        </Table>
      </form>
      
      <Button
        // disabled={open || editFormChange ? true : false}
        variant="contained"
        sx={{
          margin: '1rem auto',
          maxWidth: 'max-content'
        }}
        onClick={() => {
          setOpen(true);
        }}
      >
        Добавить товар
      </Button>

      <FormDialog
        open={open}
        close={() => setOpen(false)}
        save={onAddedProduct}
        disable={disable}
        name={name}
        onChangeName={e => setName(e.target.value)}
        photo={photo}
        onChangePhoto={e => setPhoto(e.target.value)}
        price={price}
        onChangePrice={e => setPrice(e.target.value)}
        mount={mount}
        onChangeMount={e => setMount(e.target.value)}
      />
    </Box>
  )
}

export default Store;