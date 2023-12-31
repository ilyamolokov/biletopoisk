import { Inter } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { StoreProvider } from "../redux/StoreProvider"

import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Билетопоиск',
  description: 'Generated by create next app',
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <StoreProvider>
          <Header/>
          <main className="content">
              {children}
          </main>
          <Footer/>
        </StoreProvider >
        
        <div id="dropdown"></div>    
        <div id="modal"></div>        
      </body>
    </html>
  )
}
