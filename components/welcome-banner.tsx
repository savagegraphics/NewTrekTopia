"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)

  useEffect(() => {
    // Check if the banner has been dismissed before
    const dismissed = localStorage.getItem("welcomeBannerDismissed")
    if (!dismissed) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    } else {
      setHasBeenDismissed(true)
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    localStorage.setItem("welcomeBannerDismissed", "true")
    setHasBeenDismissed(true)
  }

  if (hasBeenDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-16 inset-x-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-4 flex items-center justify-between">
              <div className="flex-1">
                <p className="font-medium">
                  Welcome to TrekTopia! 🌍 Discover amazing destinations and plan your next adventure.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={dismissBanner}
                className="text-primary-foreground hover:bg-primary/90"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

