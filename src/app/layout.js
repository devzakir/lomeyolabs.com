import { Open_Sans, Lexend } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { AdminAuthProvider } from '@/contexts/AdminAuthContext'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'LomeyoLabs - Digital Products & Solutions',
  description: 'Premium digital products and solutions for modern businesses',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${lexend.variable} font-sans`}>
        <AuthProvider>
          <AdminAuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AdminAuthProvider>
        </AuthProvider>
      </body>
    </html>
  )
}