import { useCart } from "../context/CartContext"
import styles from "../styles/button.module.css"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index}>
          <img src={item.image} width="50" />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>


          <button className={styles.btn}onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹ {total.toFixed(2)}</h2>
    </div>
  )
}