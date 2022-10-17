import Total from '../Total'
import './cart.scss'
import CartItem from '../CartItem'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector((state) => state.cart.cart)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Корзина</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total/>
      </div>

    </div>
  )
}

export default Cart