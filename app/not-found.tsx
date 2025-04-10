import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Home, Search, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Globe className="h-6 w-6 text-primary" />
            <span>TrekTopia</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Lost traveler illustration"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Oops! It seems you've ventured off the beaten path. The page you're looking for doesn't exist or has been
            moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/destinations">
                <Search className="mr-2 h-4 w-4" />
                Explore Destinations
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <p className="text-muted-foreground mb-4">Popular destinations you might be interested in:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/destinations/alpine-serenity-lodge" className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  Swiss Alps
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/destinations/tropical-paradise-resort" className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  Bali
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/destinations/urban-luxury-apartment" className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  Tokyo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

