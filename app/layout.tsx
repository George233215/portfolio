import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "George Chamveka | Mobile Developer & IoT Specialist",
  description: "Portfolio of George Chamveka - Business Information Technology student, Flutter Developer, and IoT enthusiast from Malawi. Specializing in mobile app development, Firebase, and hardware integration.",
  keywords: [
    "George Chamveka",
    "Flutter Developer",
    "Mobile App Development",
    "IoT Developer",
    "Malawi Developer",
    "Firebase",
    "Arduino",
    "UI/UX Design",
    "Business Information Technology",
    "MUST"
  ],
  authors: [{ name: "George Chamveka" }],
  creator: "George Chamveka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://georgechamveka.com",
    title: "George Chamveka | Mobile Developer & IoT Specialist",
    description: "Portfolio of George Chamveka - Flutter Developer and IoT enthusiast building innovative solutions from Malawi",
    siteName: "George Chamveka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Chamveka | Mobile Developer & IoT Specialist",
    description: "Portfolio of George Chamveka - Flutter Developer and IoT enthusiast",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50`}
      >
        {children}
      </body>
    </html>
  )
}