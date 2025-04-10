"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Globe, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import { useNotification } from "./notification-provider"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { showNotification } = useNotification()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Destinations",
      href: "/destinations",
      dropdown: [
        { name: "Mountain Retreats", href: "/destinations?category=mountain" },
        { name: "Beachfront Paradises", href: "/destinations?category=beach" },
        { name: "Urban Escapes", href: "/destinations?category=urban" },
        { name: "Exotic Getaways", href: "/destinations?category=exotic" },
        { name: "Lakefront Cabins", href: "/destinations?category=lakefront" },
        { name: "Treehouse Stays", href: "/destinations?category=treehouse" },
      ],
    },
    {
      name: "Experiences",
      href: "/experiences",
      dropdown: [
        { name: "Adventure Tours", href: "/experiences/adventure" },
        { name: "Cultural Immersions", href: "/experiences/cultural" },
        { name: "Culinary Journeys", href: "/experiences/culinary" },
        { name: "Wellness Retreats", href: "/experiences/wellness" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ]

  const handleSearchClick = () => {
    showNotification({
      title: "Search",
      message: "Use the search form on the homepage to find destinations",
      type: "info",
    })
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">TrekTopia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {link.name} <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link href={item.href}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={link.name}
                  variant="ghost"
                  asChild
                  className={cn(pathname === link.href ? "bg-muted" : "")}
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ),
            )}
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleSearchClick}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <ModeToggle />
            <Button variant="default" asChild>
              <Link href="/signin">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === link.href ? "bg-muted" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 space-y-1 mt-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

