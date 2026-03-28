"use client"

import { useEffect, useState } from "react"
import { getProductById } from "../../../services/productService"
import { useCart } from "../../../context/CartContext"
import styles from "../../../styles/button.module.css"

export default function ProductDetail({ params }: { params: { id: string } }) {

  const { addToCart } = useCart()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    getProductById(params.id)
      .then(data => setProduct(data))
      .catch(err => console.error(err))
  }, [params.id])

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} width="150" />
      <p>₹ {product.price}</p>
      <p>{product.description}</p>

      <button onClick={() => addToCart(product)} className={styles.btn}>
        Add to Cart
      </button>
    </div>
  )
}