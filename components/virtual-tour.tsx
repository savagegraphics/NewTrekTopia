"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Maximize2, Minimize2, Play, Pause, RotateCw } from "lucide-react"
import { motion } from "framer-motion"

interface VirtualTourProps {
  images: string[]
  title: string
}

export default function VirtualTour({ images, title }: VirtualTourProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 3000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, images.length])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  return (
    <Card className="overflow-hidden" ref={containerRef}>
      <div className="relative">
        <div className="relative aspect-[16/9] overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
              style={{ display: currentIndex === index ? "block" : "none" }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-white/80">
                Virtual Tour ({currentIndex + 1}/{images.length})
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/20">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="text-white hover:bg-white/20"
              >
                <RotateCw className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
              currentIndex === index ? "border-primary" : "border-transparent"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </Card>
  )
}

