import { CartProvider } from "../context/CartContext"
import Navbar from "../components/Navbar"

export default function App({ Component, pageProps }: any) {
  return (
    <CartProvider>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Component {...pageProps} />
      </div>
    </CartProvider>
  )
}
