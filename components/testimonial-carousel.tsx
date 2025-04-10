"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Our trip to the Swiss Alps was absolutely magical! The accommodations were perfect, and our guide was incredibly knowledgeable. TrekTopia made everything seamless from booking to return. Can't wait for our next adventure with them!",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Toronto, Canada",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The cultural immersion experience in Japan exceeded all expectations. Every detail was thoughtfully planned, allowing us to truly connect with the local culture. The traditional ryokan stay was a highlight we'll never forget.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "The Costa Rica eco-tour was the perfect blend of adventure and relaxation. From zip-lining through the rainforest to relaxing on pristine beaches, every moment was incredible. The sustainable focus of the trip made it even more special.",
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Sydney, Australia",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Our family safari in Tanzania was the trip of a lifetime! The kids still talk about the elephants and lions we saw up close. The accommodations were luxurious yet authentic, and our guide was exceptional with children.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Number of testimonials to show at once based on screen size
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - itemsToShow ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, itemsToShow])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - itemsToShow ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - itemsToShow : prev - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * (100 / itemsToShow)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground flex-grow">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button variant="outline" size="icon" onClick={next} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

