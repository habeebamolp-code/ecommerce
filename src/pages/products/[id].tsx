import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useCart } from "../../context/CartContext"
import styles from "../../styles/button.module.css"

type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} width="150" />
      <p>₹ {product.price}</p>
      <p>{product.description}</p>

      <button className={styles.btn} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}