import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Star,
  Users,
  Bed,
  Bath,
  Home,
  Wifi,
  Utensils,
  Tv,
  Wind,
  Calendar,
  ChevronRight,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import VirtualTour from "@/components/virtual-tour"
import ImageGallery from "@/components/image-gallery"
import WeatherWidget from "@/components/weather-widget"

// This would typically come from a database or API
const destinations = [
  {
    id: 1,
    title: "Alpine Serenity Lodge",
    location: "Swiss Alps, Switzerland",
    images: [
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    ],
    price: 299,
    rating: 4.9,
    reviews: 128,
    category: "mountain",
    featured: true,
    description:
      "Nestled in the majestic Swiss Alps, this charming lodge offers breathtaking panoramic views, cozy fireplaces, and easy access to hiking trails and ski slopes.",
    longDescription:
      "Experience the ultimate alpine retreat at our luxurious mountain lodge. Perched at 1,800 meters above sea level, Alpine Serenity Lodge offers unparalleled panoramic views of snow-capped peaks and verdant valleys. The lodge features authentic Swiss architecture with modern amenities, creating the perfect blend of rustic charm and contemporary comfort.\n\nInside, you'll find spacious living areas with floor-to-ceiling windows that frame the spectacular mountain scenery. The centerpiece of the main living room is a grand stone fireplace, ideal for cozy evenings after a day of outdoor adventures. Each bedroom is thoughtfully appointed with premium bedding, plush furnishings, and private balconies.\n\nThe lodge's location provides direct access to over 250km of hiking trails in summer and world-class ski slopes in winter. After an exhilarating day outdoors, relax in the private sauna or outdoor hot tub while stargazing in the clear mountain air. Our on-site restaurant serves authentic Swiss cuisine using locally-sourced ingredients, complemented by an extensive selection of regional wines.\n\nWhether you're seeking an active mountain adventure or a peaceful retreat in nature, Alpine Serenity Lodge offers an unforgettable experience in one of Switzerland's most breathtaking settings.",
    amenities: [
      "Mountain Views",
      "Fireplace",
      "Hot Tub",
      "Sauna",
      "Ski-in/Ski-out",
      "Wi-Fi",
      "Full Kitchen",
      "Hiking Access",
    ],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    host: {
      name: "Thomas Weber",
      joined: "2018",
      response: "100%",
      responseTime: "within an hour",
      image: "/placeholder.svg?height=80&width=80",
    },
    slug: "alpine-serenity-lodge",
  },
]

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the destination data based on the slug
  const destination = destinations.find((d) => d.slug === params.slug) || destinations[0]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
        <Link href="/destinations" className="text-muted-foreground hover:text-foreground">
          Destinations
        </Link>
        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
        <span>{destination.title}</span>
      </div>

      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{destination.title}</h1>
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 font-medium">{destination.rating}</span>
              <span className="text-muted-foreground ml-1">({destination.reviews} reviews)</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {destination.location}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm" className="gap-1">
            <Heart className="h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            Share
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-8">
        <ImageGallery images={destination.images} alt={destination.title} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Details */}
        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)} retreat hosted by{" "}
                {destination.host.name}
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{destination.guests} guests</span>
                </div>
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{destination.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{destination.bathrooms} bathrooms</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={destination.host.image || "/placeholder.svg"}
                  alt={destination.host.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Virtual Tour */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Virtual Tour</h3>
            <VirtualTour images={destination.images} title={destination.title} />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="text-muted-foreground whitespace-pre-line">{destination.longDescription}</p>
          </div>

          {/* Weather */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Local Weather</h3>
            <WeatherWidget location={destination.location.split(",")[0]} />
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  {amenity.includes("Wi-Fi") && <Wifi className="h-5 w-5 mr-3 text-muted-foreground" />}
                  {amenity.includes("Kitchen") && <Utensils className="h-5 w-5 mr-3 text-muted-foreground" />}
                  {amenity.includes("TV") && <Tv className="h-5 w-5 mr-3 text-muted-foreground" />}
                  {amenity.includes("Air") && <Wind className="h-5 w-5 mr-3 text-muted-foreground" />}
                  {!amenity.includes("Wi-Fi") &&
                    !amenity.includes("Kitchen") &&
                    !amenity.includes("TV") &&
                    !amenity.includes("Air") && <Home className="h-5 w-5 mr-3 text-muted-foreground" />}
                  {amenity}
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4">
              Show all amenities
            </Button>
          </div>

          {/* Location */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="relative h-80 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?q=80&w=2031&auto=format&fit=crop"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              Located in the heart of the Swiss Alps, our lodge offers easy access to hiking trails, ski slopes, and
              charming mountain villages. The nearest town is just a 15-minute drive away, where you'll find
              restaurants, shops, and local attractions.
            </p>
          </div>
        </div>

        {/* Right Column - Booking */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <div className="bg-background rounded-xl border shadow-sm p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-2xl font-bold">${destination.price}</span>
                  <span className="text-muted-foreground"> / night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{destination.rating}</span>
                  <span className="text-muted-foreground ml-1">({destination.reviews})</span>
                </div>
              </div>

              <Tabs defaultValue="dates">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="dates">Dates</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
                <TabsContent value="dates" className="mt-0">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="border rounded-md p-3">
                      <div className="text-sm text-muted-foreground">Check-in</div>
                      <div>Add date</div>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="text-sm text-muted-foreground">Check-out</div>
                      <div>Add date</div>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 mb-4">
                    <div className="text-sm text-muted-foreground">Guests</div>
                    <div className="flex justify-between">
                      <div>2 guests</div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="month" className="mt-0">
                  <CalendarComponent mode="single" className="rounded-md border" />
                </TabsContent>
              </Tabs>

              <Button className="w-full mb-4">Reserve</Button>
              <p className="text-center text-sm text-muted-foreground mb-4">You won't be charged yet</p>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="underline">${destination.price} x 5 nights</span>
                  <span>${destination.price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$85</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$120</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total before taxes</span>
                  <span>${destination.price * 5 + 85 + 120}</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Calendar className="h-4 w-4 mr-1" />
                  Dates Available
                </Badge>
                <p className="text-sm text-muted-foreground">
                  This destination is highly sought after for your selected dates. Book soon to secure your stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

