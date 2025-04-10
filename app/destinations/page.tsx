import Link from "next/link"
import Image from "next/image"
import { MapPin, Filter, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SearchForm from "@/components/search-form"

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
    description:
      "Nestled in the majestic Swiss Alps, this charming lodge offers breathtaking panoramic views, cozy fireplaces, and easy access to hiking trails and ski slopes.",
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
    description:
      "Experience the ultimate tropical getaway at this beachfront resort featuring private villas with infinity pools, lush gardens, and direct access to pristine white sand beaches.",
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
    description:
      "This rustic yet luxurious cabin sits right on the shores of crystal-clear Lake Tahoe, offering stunning water views, a private dock, and cozy interiors with modern amenities.",
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
    description:
      "Perched high among the treetops of the Costa Rican rainforest, this unique treehouse offers an immersive jungle experience with wildlife viewing, eco-friendly amenities, and natural beauty.",
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
    description:
      "Located in the heart of vibrant Tokyo, this sleek, modern apartment offers stunning city views, premium amenities, and easy access to shopping, dining, and cultural attractions.",
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
    description:
      "Experience the magic of Morocco at this traditional riad featuring a central courtyard with a refreshing pool, rooftop terrace with Atlas Mountain views, and authentic Moroccan decor.",
    slug: "desert-oasis-retreat",
  },
  {
    id: 7,
    title: "Coastal Cliff Villa",
    location: "Amalfi Coast, Italy",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=2070&auto=format&fit=crop",
    price: 459,
    rating: 4.9,
    reviews: 156,
    category: "beach",
    featured: false,
    description:
      "Perched on the dramatic cliffs of Italy's Amalfi Coast, this stunning villa offers unparalleled Mediterranean views, private terraces, and elegant interiors with Italian craftsmanship.",
    slug: "coastal-cliff-villa",
  },
  {
    id: 8,
    title: "Northern Lights Cabin",
    location: "Tromsø, Norway",
    image: "https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f0?q=80&w=2070&auto=format&fit=crop",
    price: 329,
    rating: 4.8,
    reviews: 92,
    category: "mountain",
    featured: false,
    description:
      "Experience the magic of the Aurora Borealis from this glass-roofed cabin in the Arctic wilderness, combining cozy Scandinavian design with front-row seats to nature's most spectacular light show.",
    slug: "northern-lights-cabin",
  },
]

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop"
            alt="Mountain landscape with stunning view"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Discover Your Perfect Destination</h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our curated collection of extraordinary places to stay around the world
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-background rounded-xl shadow-lg p-6">
          <SearchForm />
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Filter className="h-5 w-5" />
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="price-1" className="mr-2" />
                      <label htmlFor="price-1" className="text-muted-foreground">
                        Under $200
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price-2" className="mr-2" />
                      <label htmlFor="price-2" className="text-muted-foreground">
                        $200 - $300
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price-3" className="mr-2" />
                      <label htmlFor="price-3" className="text-muted-foreground">
                        $300 - $400
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price-4" className="mr-2" />
                      <label htmlFor="price-4" className="text-muted-foreground">
                        $400+
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Property Type */}
                <div>
                  <h3 className="font-medium mb-3">Property Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="type-1" className="mr-2" />
                      <label htmlFor="type-1" className="text-muted-foreground">
                        Cabin
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-2" className="mr-2" />
                      <label htmlFor="type-2" className="text-muted-foreground">
                        Villa
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-3" className="mr-2" />
                      <label htmlFor="type-3" className="text-muted-foreground">
                        Resort
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-4" className="mr-2" />
                      <label htmlFor="type-4" className="text-muted-foreground">
                        Apartment
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="type-5" className="mr-2" />
                      <label htmlFor="type-5" className="text-muted-foreground">
                        Treehouse
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Location */}
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="loc-1" className="mr-2" />
                      <label htmlFor="loc-1" className="text-muted-foreground">
                        Mountains
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="loc-2" className="mr-2" />
                      <label htmlFor="loc-2" className="text-muted-foreground">
                        Beach
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="loc-3" className="mr-2" />
                      <label htmlFor="loc-3" className="text-muted-foreground">
                        City
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="loc-4" className="mr-2" />
                      <label htmlFor="loc-4" className="text-muted-foreground">
                        Countryside
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="loc-5" className="mr-2" />
                      <label htmlFor="loc-5" className="text-muted-foreground">
                        Lakefront
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Amenities */}
                <div>
                  <h3 className="font-medium mb-3">Amenities</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="amen-1" className="mr-2" />
                      <label htmlFor="amen-1" className="text-muted-foreground">
                        Pool
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="amen-2" className="mr-2" />
                      <label htmlFor="amen-2" className="text-muted-foreground">
                        Hot Tub
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="amen-3" className="mr-2" />
                      <label htmlFor="amen-3" className="text-muted-foreground">
                        Fireplace
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="amen-4" className="mr-2" />
                      <label htmlFor="amen-4" className="text-muted-foreground">
                        Wi-Fi
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="amen-5" className="mr-2" />
                      <label htmlFor="amen-5" className="text-muted-foreground">
                        Kitchen
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Destinations List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">8 Destinations</h2>
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
                <select className="text-sm border rounded p-1">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinations.map((destination) => (
                <Link href={`/destinations/${destination.slug}`} key={destination.id}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
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
                      <p className="text-muted-foreground mb-4 line-clamp-2">{destination.description}</p>
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

            <div className="flex justify-center mt-10">
              <div className="flex">
                <Button variant="outline" size="icon" className="rounded-l-md rounded-r-none">
                  1
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-l-0">
                  2
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-l-0">
                  3
                </Button>
                <Button variant="outline" size="icon" className="rounded-l-none rounded-r-md border-l-0">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

