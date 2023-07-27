import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'
import UsePreviewProvider from '@/providers/use-preview-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecomm-Store',
  description: 'A e-commerce store powered by ecomm-dashboard api',
}
export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <UsePreviewProvider/>
      <body className={urbanist.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
