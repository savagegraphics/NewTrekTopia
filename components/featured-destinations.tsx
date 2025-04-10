import Link from "next/link"
import Image from "next/image"
import { MapPin, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const destinations = [
  {
    id: 1,
    title: "Alpine Serenity Lodge",
    location: "Swiss Alps, Switzerland",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2069&auto=format&fit=crop",
    price: 299,
    rating: 4.9,
    reviews: 128,
    category: "mountain",
    featured: true,
    slug: "alpine-serenity-lodge",
  },
  {
    id: 2,
    title: "Tropical Paradise Resort",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop",
    price: 349,
    rating: 4.8,
    reviews: 95,
    category: "beach",
    featured: true,
    slug: "tropical-paradise-resort",
  },
  {
    id: 3,
    title: "Lakeside Retreat Cabin",
    location: "Lake Tahoe, USA",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    price: 249,
    rating: 4.7,
    reviews: 87,
    category: "lakefront",
    featured: true,
    slug: "lakeside-retreat-cabin",
  },
  {
    id: 4,
    title: "Exotic Jungle Treehouse",
    location: "Costa Rica",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    price: 199,
    rating: 4.9,
    reviews: 64,
    category: "treehouse",
    featured: true,
    slug: "exotic-jungle-treehouse",
  },
  {
    id: 5,
    title: "Urban Luxury Apartment",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop",
    price: 399,
    rating: 4.8,
    reviews: 112,
    category: "urban",
    featured: true,
    slug: "urban-luxury-apartment",
  },
  {
    id: 6,
    title: "Desert Oasis Retreat",
    location: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
    price: 279,
    rating: 4.6,
    reviews: 73,
    category: "exotic",
    featured: true,
    slug: "desert-oasis-retreat",
  },
]

interface FeaturedDestinationsProps {
  category?: string
}

export default function FeaturedDestinations({ category }: FeaturedDestinationsProps) {
  // Filter destinations by category if provided
  const filteredDestinations = category ? destinations.filter((dest) => dest.category === category) : destinations

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDestinations.map((destination) => (
        <Link href={`/destinations/${destination.slug}`} key={destination.id}>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-64">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">
                {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" /> {destination.location}
              </div>
              <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{destination.rating}</span>
                  <span className="text-muted-foreground ml-1">({destination.reviews})</span>
                </div>
                <p className="font-semibold">${destination.price}/night</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

