import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alya Bıçak',
  description: 'Endüstriyel Kesici Çözümler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
