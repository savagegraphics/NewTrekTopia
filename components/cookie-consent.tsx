"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if consent has been given before
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-background border rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                  <p className="text-muted-foreground">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze
                    our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button variant="outline" onClick={acceptNecessary}>
                    Necessary Only
                  </Button>
                  <Button onClick={acceptAll}>Accept All</Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

