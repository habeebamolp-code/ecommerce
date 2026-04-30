"use client"

import { getProducts } from "../../services/productService"
import ProductCard from "../../components/ProductCard"
export const dynamic = "force-dynamic";

export default async function ProductsPage() {

  const products = await getProducts()
  
  return (
  <div>
    <h1>Products</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)}