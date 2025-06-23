import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { EmergencySOS } from "@/components/EmergencySOS"
import { Navigation } from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kumbh Suraksha - Safety & Navigation App",
  description: "Comprehensive safety and navigation system for Kumbh Mela",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Navigation />

          <main className="pt-16">
            {children}
          </main>

          {/* Emergency SOS Button */}
          <EmergencySOS />
        </div>
      </body>
    </html>
  )
}
