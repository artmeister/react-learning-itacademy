import { useSelector } from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <h2>ИТОГ</h2>
      <div>
        <p className="total__p">
          всего ({getTotal().totalQuantity} шт.) 
          : <strong>ед. {getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total