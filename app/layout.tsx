import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'
import UsePreviewProvider from '@/providers/use-preview-provider'
import ToastProvider from '@/providers/react-toast-provider'


const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ForgeStore',
  description: 'A e-commerce store powered by ForgeCommerce api',
  icons:{
    icon:"/icons/StoreIcon1.png",
    apple:"/icons/StoreIcon1.png",
  }
  
}
export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" data-theme="winter">
      <UsePreviewProvider/>
      <body className={urbanist.className}>
        <Navbar/>
        <ToastProvider/>
        {children}
        </body>
    </html>
  )
}
