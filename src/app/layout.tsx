'use client'

import { useState, useEffect } from 'react'
import { Inter } from "next/font/google"
import Preloader from '../../components/preloader'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setIsLoading(false), 200) // Espera a que termine la transición
    }, 100) // Ajusta este tiempo según tus necesidades

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && (
          <div className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <Preloader />
          </div>
        )}
        {children}
      </body>
    </html>
  )
}