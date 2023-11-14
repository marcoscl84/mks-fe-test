// 'use client'

import './globals.css'
import {HeaderComponent} from '@/components/header/Header'
import FooterComponent from '@/components/footer/Footer'
import { CartProvider } from '../../contexts/CartContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <HeaderComponent />
          {children}
          <FooterComponent />  
        </CartProvider>
      </body>
    </html>
  )
}
