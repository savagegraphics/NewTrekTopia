import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Star, Users, Calendar, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchForm from "@/components/search-form"
import FeaturedDestinations from "@/components/featured-destinations"
import TestimonialCarousel from "@/components/testimonial-carousel"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Mountain landscape with stunning view"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover Extraordinary Destinations
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Embark on unforgettable journeys to breathtaking landscapes, vibrant cultures, and hidden gems around the
              world. Your next adventure awaits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/experiences">Browse Experiences</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-background rounded-xl shadow-lg p-6">
          <SearchForm />
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Destinations</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our handpicked selection of stunning locations perfect for your next getaway
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" asChild>
            <Link href="/destinations" className="flex items-center">
              View all destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mountain">Mountain</TabsTrigger>
            <TabsTrigger value="beach">Beach</TabsTrigger>
            <TabsTrigger value="urban">Urban</TabsTrigger>
            <TabsTrigger value="exotic">Exotic</TabsTrigger>
            <TabsTrigger value="lakefront">Lakefront</TabsTrigger>
            <TabsTrigger value="treehouse">Treehouse</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <FeaturedDestinations />
          </TabsContent>
          <TabsContent value="mountain" className="mt-0">
            <FeaturedDestinations category="mountain" />
          </TabsContent>
          <TabsContent value="beach" className="mt-0">
            <FeaturedDestinations category="beach" />
          </TabsContent>
          <TabsContent value="urban" className="mt-0">
            <FeaturedDestinations category="urban" />
          </TabsContent>
          <TabsContent value="exotic" className="mt-0">
            <FeaturedDestinations category="exotic" />
          </TabsContent>
          <TabsContent value="lakefront" className="mt-0">
            <FeaturedDestinations category="lakefront" />
          </TabsContent>
          <TabsContent value="treehouse" className="mt-0">
            <FeaturedDestinations category="treehouse" />
          </TabsContent>
        </Tabs>
      </section>

      {/* Popular Experiences */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unforgettable Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover unique activities and adventures that will make your journey truly memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Experience Card 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop"
                  alt="Hiking adventure in mountains"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">Adventure</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" /> Swiss Alps, Switzerland
                </div>
                <h3 className="text-xl font-semibold mb-2">Alpine Hiking Expedition</h3>
                <p className="text-muted-foreground mb-4">
                  Trek through breathtaking mountain trails with expert guides and witness stunning panoramic views.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">4.9</span>
                    <span className="text-muted-foreground ml-1">(128)</span>
                  </div>
                  <p className="font-semibold">From $299</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience Card 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                  alt="Cooking class in Italy"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">Culinary</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" /> Tuscany, Italy
                </div>
                <h3 className="text-xl font-semibold mb-2">Tuscan Cooking Masterclass</h3>
                <p className="text-muted-foreground mb-4">
                  Learn authentic Italian cuisine from local chefs in a traditional Tuscan farmhouse setting.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">4.8</span>
                    <span className="text-muted-foreground ml-1">(95)</span>
                  </div>
                  <p className="font-semibold">From $149</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience Card 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
                  alt="Snorkeling in crystal clear waters"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">Water</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" /> Bora Bora, French Polynesia
                </div>
                <h3 className="text-xl font-semibold mb-2">Coral Reef Snorkeling</h3>
                <p className="text-muted-foreground mb-4">
                  Discover vibrant marine life and colorful coral formations in crystal-clear turquoise waters.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">4.9</span>
                    <span className="text-muted-foreground ml-1">(207)</span>
                  </div>
                  <p className="font-semibold">From $179</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/experiences">Explore All Experiences</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Travel With TrekTopia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to creating unforgettable travel experiences with exceptional service and attention to
            detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-muted-foreground">
              Our knowledgeable local guides provide authentic insights and ensure a safe journey.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Experiences</h3>
            <p className="text-muted-foreground">
              Handpicked destinations and activities that go beyond typical tourist attractions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
            <p className="text-muted-foreground">
              Easy reservation changes and cancellations with our customer-friendly policies.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Travel</h3>
            <p className="text-muted-foreground">
              Eco-friendly practices that respect local communities and preserve natural environments.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read authentic reviews from travelers who have experienced our journeys
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Inspired</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for travel tips, destination guides, and exclusive offers
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  )
}

