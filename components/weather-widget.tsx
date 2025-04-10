"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from "lucide-react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface WeatherWidgetProps {
  location: string
}

interface WeatherData {
  temperature: number
  condition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy" | "windy"
  humidity: number
  windSpeed: number
  forecast: Array<{
    day: string
    temperature: number
    condition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy" | "windy"
  }>
}

export default function WeatherWidget({ location }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to weather service
    const fetchWeather = async () => {
      setLoading(true)

      // In a real app, you would fetch actual weather data based on the location
      // For demo purposes, we'll generate random weather data
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const conditions = ["sunny", "cloudy", "rainy", "snowy", "stormy", "windy"] as const
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
      const randomTemp = Math.floor(Math.random() * 35) - 5 // -5 to 30 degrees

      const mockWeather: WeatherData = {
        temperature: randomTemp,
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 100),
        windSpeed: Math.floor(Math.random() * 30),
        forecast: Array.from({ length: 5 }, (_, i) => ({
          day: new Date(Date.now() + 86400000 * (i + 1)).toLocaleDateString("en-US", { weekday: "short" }),
          temperature: randomTemp + Math.floor(Math.random() * 10) - 5,
          condition: conditions[Math.floor(Math.random() * conditions.length)],
        })),
      }

      setWeather(mockWeather)
      setLoading(false)
    }

    fetchWeather()
  }, [location])

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-6 w-6 text-yellow-500" />
      case "cloudy":
        return <Cloud className="h-6 w-6 text-gray-400" />
      case "rainy":
        return <CloudRain className="h-6 w-6 text-blue-400" />
      case "snowy":
        return <CloudSnow className="h-6 w-6 text-blue-200" />
      case "stormy":
        return <CloudLightning className="h-6 w-6 text-purple-500" />
      case "windy":
        return <Wind className="h-6 w-6 text-teal-500" />
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6 flex justify-center items-center h-40">
          <LoadingSpinner />
        </CardContent>
      </Card>
    )
  }

  if (!weather) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">Weather data unavailable</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Current Weather in {location}</h3>
          {getWeatherIcon(weather.condition)}
        </div>

        <div className="flex items-center mb-6">
          <div className="text-4xl font-bold mr-4">{weather.temperature}°C</div>
          <div className="text-muted-foreground">
            <div>Humidity: {weather.humidity}%</div>
            <div>Wind: {weather.windSpeed} km/h</div>
          </div>
        </div>

        <h4 className="font-medium mb-2">5-Day Forecast</h4>
        <div className="grid grid-cols-5 gap-2">
          {weather.forecast.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium">{day.day}</div>
              <div className="my-1">{getWeatherIcon(day.condition)}</div>
              <div className="text-sm">{day.temperature}°C</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

