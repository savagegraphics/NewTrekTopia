import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Mountain Destinations for Your Next Adventure",
    excerpt:
      "Discover breathtaking mountain retreats around the world that offer unforgettable experiences for nature lovers and adventure seekers.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    date: "April 12, 2023",
    readTime: "8 min read",
    category: "Destinations",
    featured: true,
    slug: "must-visit-mountain-destinations",
  },
  {
    id: 2,
    title: "How to Pack Light for a Two-Week International Trip",
    excerpt:
      "Expert tips and tricks for efficient packing that will save you space, weight, and stress on your next extended journey abroad.",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=2070&auto=format&fit=crop",
    date: "March 28, 2023",
    readTime: "6 min read",
    category: "Travel Tips",
    featured: false,
    slug: "pack-light-international-trip",
  },
  {
    id: 3,
    title: "Sustainable Travel: How to Reduce Your Environmental Impact",
    excerpt:
      "Practical ways to make your travels more eco-friendly while still enjoying amazing experiences around the world.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    date: "March 15, 2023",
    readTime: "7 min read",
    category: "Sustainable Travel",
    featured: false,
    slug: "sustainable-travel-reduce-impact",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Street Food in Southeast Asia",
    excerpt:
      "Navigate the vibrant street food scenes of Thailand, Vietnam, and Malaysia with confidence and discover unforgettable culinary delights.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    date: "February 22, 2023",
    readTime: "10 min read",
    category: "Food & Culture",
    featured: false,
    slug: "street-food-southeast-asia",
  },
  {
    id: 5,
    title: "5 Underrated European Cities to Visit This Summer",
    excerpt:
      "Skip the tourist crowds and discover these hidden gems that offer authentic European charm, rich history, and unforgettable experiences.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
    date: "February 10, 2023",
    readTime: "9 min read",
    category: "Destinations",
    featured: false,
    slug: "underrated-european-cities",
  },
  {
    id: 6,
    title: "Solo Female Travel: Safety Tips and Destination Recommendations",
    excerpt:
      "Essential advice for women traveling alone, from safety precautions to the most welcoming destinations around the world.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop",
    date: "January 30, 2023",
    readTime: "11 min read",
    category: "Travel Tips",
    featured: false,
    slug: "solo-female-travel-safety",
  },
]

// Categories for the sidebar
const categories = [
  { name: "Destinations", count: 24 },
  { name: "Travel Tips", count: 18 },
  { name: "Food & Culture", count: 15 },
  { name: "Adventure", count: 12 },
  { name: "Sustainable Travel", count: 9 },
  { name: "Budget Travel", count: 7 },
  { name: "Luxury Travel", count: 6 },
]

export default function BlogPage() {
  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)
  // Get regular posts
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">TrekTopia Travel Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Inspiration, tips, and stories to fuel your next adventure
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input type="text" placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-muted/20 rounded-xl overflow-hidden hover:bg-muted/30 transition-colors">
              <div className="relative h-80 md:h-[400px]">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button>
                  Read Article
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid gap-8">
              {regularPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="relative h-60 md:h-auto md:w-1/3">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6 md:w-2/3">
                        <Badge className="mb-2">{post.category}</Badge>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </div>
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

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {category.name}
                      </Link>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className="flex gap-4 group">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

