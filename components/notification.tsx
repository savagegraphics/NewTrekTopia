"use client"

import { useState, useEffect } from "react"
import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface NotificationProps {
  title: string
  message: string
  type?: "info" | "success" | "warning" | "error"
  duration?: number
  showIcon?: boolean
}

export default function Notification({
  title,
  message,
  type = "info",
  duration = 5000,
  showIcon = true,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration])

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white"
      case "warning":
        return "bg-yellow-500 text-white"
      case "error":
        return "bg-red-500 text-white"
      case "info":
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-20 right-4 z-50 max-w-sm rounded-lg shadow-lg ${getTypeStyles()}`}
        >
          <div className="flex items-start p-4">
            {showIcon && (
              <div className="flex-shrink-0 mr-3">
                <Bell className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm opacity-90">{message}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0 -mr-1 -mt-1 hover:bg-white/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

