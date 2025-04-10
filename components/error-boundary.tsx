"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)

    // Set a user-friendly error message
    setErrorMessage(error.message || "Something went wrong. Please try again later.")
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="bg-destructive/10 p-4 rounded-full mb-6">
        <AlertTriangle className="h-12 w-12 text-destructive" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">{errorMessage}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/" className="gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

