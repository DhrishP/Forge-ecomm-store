import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'

import ToastProvider from '@/providers/react-toast-provider'
import Chat from '@/components/chat'


export const runtime = "edge"
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

      <body className={urbanist.className}>
        <Navbar/>
        <Chat/>
        <ToastProvider/>
        {children}
        </body>
    
    </html>
  )
}
