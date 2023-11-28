import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./_components/Header"
import Footer from "./_components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Home | Pitt CS Wiki",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="lg:w-[80vw] mx-auto container px-2">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
