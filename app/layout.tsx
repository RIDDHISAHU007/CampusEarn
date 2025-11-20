import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CampusEarn | Find Part-Time Jobs for Students",
  description:
    "Discover local part-time jobs perfect for students. Earn extra income with flexible hours at restaurants, salons, delivery services, shops, and tutoring.",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>{children}</body>
    </html>
  )
}
