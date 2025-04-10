import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Globe } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TrekTopia</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover extraordinary destinations and unforgettable experiences with TrekTopia, your trusted companion
              for authentic and sustainable travel adventures.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/search?category=mountain"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mountain Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=beach"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beach Getaways
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=urban"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Urban Escapes
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=exotic"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Exotic Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=lakefront"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lakefront Cabins
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Experiences</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/experiences/adventure"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adventure Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/cultural"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cultural Immersions
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/culinary"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Culinary Journeys
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/wellness"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Wellness Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/family"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Family Adventures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} TrekTopia. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

