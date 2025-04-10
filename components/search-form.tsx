"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { useNotification } from "./notification-provider"

export default function SearchForm() {
  const router = useRouter()
  const { showNotification } = useNotification()
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(2)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!destination) {
      showNotification({
        title: "Missing information",
        message: "Please enter a destination to search",
        type: "warning",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    showNotification({
      title: "Search completed",
      message: `Showing results for "${destination}"`,
      type: "success",
    })

    // In a real app, you would construct a query string with all parameters
    router.push(`/search?destination=${encodeURIComponent(destination)}`)

    setLoading(false)
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Where are you going?"
          className="pl-10"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`justify-start text-left font-normal ${!checkIn ? "text-muted-foreground" : ""}`}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, "PPP") : <span>Check in</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`justify-start text-left font-normal ${!checkOut ? "text-muted-foreground" : ""}`}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, "PPP") : <span>Check out</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
          </PopoverContent>
        </Popover>

        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="number"
            min="1"
            max="10"
            placeholder="Guests"
            className="pl-10 w-24"
            value={guests}
            onChange={(e) => setGuests(Number.parseInt(e.target.value))}
          />
        </div>

        <Button type="submit" className="gap-2" disabled={loading}>
          {loading ? (
            <>
              <span className="animate-spin mr-2">⟳</span>
              Searching...
            </>
          ) : (
            <>
              <Search className="h-4 w-4" />
              Search
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

