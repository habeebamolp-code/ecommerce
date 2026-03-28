"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "../context/CartContext"
import styles from "../styles/navbar.module.css"
import { FaShoppingCart } from "react-icons/fa"


export default function Navbar() {

  
  const { cart } = useCart()

  return (
    <nav className={styles.navbar}>
      

      {/* Logo */}
      <h2 style={{ margin: 0 }}>MyShop</h2>

      {/* Links */}
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

        {/* Cart with badge */}
        <Link href="/cart" className={styles.link}>
        <FaShoppingCart />
         ({cart.length})
        </Link>

      </div>
    </nav>
  )
}