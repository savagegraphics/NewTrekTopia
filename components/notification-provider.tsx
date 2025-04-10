"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import Notification from "./notification"

type NotificationType = "info" | "success" | "warning" | "error"

interface NotificationOptions {
  title: string
  message: string
  type?: NotificationType
  duration?: number
  showIcon?: boolean
}

interface NotificationItem extends NotificationOptions {
  id: string
}

interface NotificationContextType {
  showNotification: (options: NotificationOptions) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])

  const showNotification = (options: NotificationOptions) => {
    const id = Math.random().toString(36).substring(2, 9)
    const notification = { ...options, id }

    setNotifications((prev) => [...prev, notification])

    if (options.duration !== 0) {
      const duration = options.duration || 5000
      setTimeout(() => {
        setNotifications((prev) => prev.filter((item) => item.id !== id))
      }, duration + 300) // Add a little extra time for the exit animation
    }
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-0 right-0 z-50 p-4 space-y-4">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            title={notification.title}
            message={notification.message}
            type={notification.type}
            duration={notification.duration}
            showIcon={notification.showIcon}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider")
  }
  return context
}

