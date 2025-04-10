import type React from "react"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { NotificationProvider } from "@/components/notification-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WelcomeBanner from "@/components/welcome-banner"
import ScrollToTop from "@/components/scroll-to-top"
import PageTransition from "@/components/page-transition"
import CookieConsent from "@/components/cookie-consent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TrekTopia | Discover Your Next Adventure",
  description:
    "Explore breathtaking destinations around the world, from serene mountain retreats to exotic beach getaways.",
  openGraph: {
    title: "TrekTopia | Discover Your Next Adventure",
    description:
      "Explore breathtaking destinations around the world, from serene mountain retreats to exotic beach getaways.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NotificationProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <WelcomeBanner />
              <PageTransition>
                <main className="flex-1">{children}</main>
              </PageTransition>
              <Footer />
              <ScrollToTop />
              <CookieConsent />
            </div>
            <Toaster />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'