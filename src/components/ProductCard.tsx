import Link from "next/link"
import styles from "../styles/button.module.css"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{
  border: "1px solid #ddd",
  padding: "10px",
  width: "100%",   // ✅ important
  textAlign: "center"
}}>
      <img src={product.image} style={{ height: "150px", objectFit: "contain" }} />

      <h4>{product.title}</h4>

      <p>₹ {product.price}</p>

      <Link href={`/products/${product.id}`}>
        <button className={styles.btn}>View Details</button>
      </Link>
    </div>
  )
}