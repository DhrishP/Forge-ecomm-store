import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecomm-Store',
  description: 'A e-commerce store powered by ecomm-dashboard api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
