import Navbar from "../components/Navbar"
import { CartProvider } from "../context/CartContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <CartProvider>
          <Navbar />
          <div style={{ padding: "20px" }}>
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}