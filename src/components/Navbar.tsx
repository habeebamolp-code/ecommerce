import Link from "next/link"
import { useRouter } from "next/router"
import { useCart } from "../context/CartContext"
import styles from "../styles/navbar.module.css"
import { FaShoppingCart } from "react-icons/fa"

export default function Navbar() {
  const router = useRouter()
  const { cart } = useCart()

  

  return (
    <nav className={styles.navbar}>
        
      <h2 style={{ margin: 0 }}>MyShop</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        <Link href="/" className={styles.link}>
          Home
        </Link>

        <Link href="/products" className={styles.link}>
          Products
        </Link>

        <Link href="/about" className={styles.link}>
          About
        </Link>

        <Link href="/contact" className={styles.link}>
          Contact
        </Link>

        <Link href="/cart" className={styles.link}>
        <FaShoppingCart />
         ({cart.length})
        </Link>

      </div>
    </nav>
  )
}