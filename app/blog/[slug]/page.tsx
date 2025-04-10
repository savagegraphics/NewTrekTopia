import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Mountain Destinations for Your Next Adventure",
    excerpt:
      "Discover breathtaking mountain retreats around the world that offer unforgettable experiences for nature lovers and adventure seekers.",
    content: `
      <p>The world's mountains offer some of the most breathtaking landscapes and exhilarating experiences for travelers seeking both adventure and tranquility. From the towering peaks of the Himalayas to the rugged beauty of the Rockies, mountain destinations provide a perfect escape from the hustle and bustle of everyday life.</p>
      
      <h2>1. Swiss Alps, Switzerland</h2>
      <p>The Swiss Alps are a paradise for outdoor enthusiasts year-round. In winter, world-class ski resorts like Zermatt, St. Moritz, and Verbier offer pristine slopes and luxurious accommodations. During summer months, the region transforms into a hiker's dream with hundreds of trails winding through flower-filled meadows, crystal-clear lakes, and charming alpine villages.</p>
      <p>Don't miss the opportunity to ride the Glacier Express, often called the slowest express train in the world, which offers panoramic views of the stunning alpine scenery as it travels between St. Moritz and Zermatt.</p>
      
      <h2>2. Patagonia, Argentina & Chile</h2>
      <p>Straddling the border between Argentina and Chile, Patagonia is home to some of the most dramatic mountain landscapes on Earth. Torres del Paine National Park in Chile and Los Glaciares National Park in Argentina feature jagged peaks, massive glaciers, turquoise lakes, and abundant wildlife.</p>
      <p>Hiking to the base of the iconic granite towers of Torres del Paine or witnessing the thunderous calving of the Perito Moreno Glacier are experiences that will stay with you forever.</p>
      
      <h2>3. Canadian Rockies, Canada</h2>
      <p>Banff and Jasper National Parks in the Canadian Rockies offer postcard-perfect scenery with turquoise lakes, dense forests, and snow-capped mountains. Lake Louise and Moraine Lake in Banff are among the most photographed locations in Canada, with their vibrant blue waters reflecting the surrounding peaks.</p>
      <p>The Icefields Parkway connecting the two parks is considered one of the world's most scenic drives, with opportunities to spot wildlife like bears, elk, and mountain goats along the way.</p>
      
      <h2>4. Himalayan Region, Nepal</h2>
      <p>For serious trekkers and mountaineers, Nepal's Himalayan region offers the ultimate adventure. The Everest Base Camp trek and the Annapurna Circuit are bucket-list journeys that take you through remote villages, ancient monasteries, and high mountain passes with views of the world's highest peaks.</p>
      <p>Beyond the trekking routes, cities like Kathmandu and Pokhara offer rich cultural experiences with their ancient temples, bustling markets, and warm hospitality.</p>
      
      <h2>5. Dolomites, Italy</h2>
      <p>The Dolomites in northeastern Italy combine dramatic limestone peaks with charming villages and excellent cuisine. In winter, the Dolomiti Superski area connects 12 ski resorts with over 1,200 km of slopes. Summer brings opportunities for hiking, rock climbing, and via ferrata routes that allow even non-climbers to safely navigate the vertical terrain.</p>
      <p>The region's unique blend of Italian and Austrian influences is reflected in its architecture, culture, and cuisine, making it a fascinating destination beyond its natural beauty.</p>
      
      <h2>6. Blue Mountains, Australia</h2>
      <p>Just a 90-minute drive from Sydney, the Blue Mountains offer a accessible wilderness experience with deep valleys, eucalyptus forests, and sandstone cliffs. The area gets its name from the blue haze created by oil droplets released from the abundant eucalyptus trees.</p>
      <p>The Three Sisters rock formation is the region's most famous landmark, while Scenic World offers thrilling ways to experience the landscape, including the world's steepest railway and a glass-bottomed skyway suspended 270 meters above the valley floor.</p>
      
      <h2>7. Atlas Mountains, Morocco</h2>
      <p>Morocco's Atlas Mountains provide a striking contrast to the country's desert landscapes and bustling cities. The range includes North Africa's highest peak, Mount Toubkal, which can be summited by fit hikers without technical climbing skills.</p>
      <p>Trekking through Berber villages where traditional ways of life continue largely unchanged offers cultural insights alongside natural beauty. The region is also home to the stunning Ouzoud Falls and the fortified village of Ait Benhaddou, a UNESCO World Heritage site.</p>
      
      <h2>8. Rocky Mountains, USA</h2>
      <p>The American Rockies stretch across several states, with Colorado offering some of the most accessible and developed mountain destinations. Rocky Mountain National Park features over 300 miles of hiking trails and abundant wildlife, while resort towns like Aspen, Vail, and Telluride combine world-class skiing with upscale amenities and vibrant cultural scenes.</p>
      <p>Further north, Grand Teton National Park in Wyoming offers some of the most dramatic mountain scenery in the country, with the jagged Teton Range rising abruptly from the valley floor.</p>
      
      <h2>9. Southern Alps, New Zealand</h2>
      <p>New Zealand's South Island is home to the Southern Alps, which form the backbone of the island and include the country's highest peak, Aoraki/Mount Cook. The region offers endless opportunities for outdoor adventure, from hiking and mountaineering to skiing and glacier exploration.</p>
      <p>Fiordland National Park, part of the Te Wahipounamu World Heritage area, features some of the most dramatic mountain-meets-sea landscapes, with steep-sided fiords like the famous Milford Sound.</p>
      
      <h2>10. Carpathian Mountains, Romania</h2>
      <p>For those seeking less-traveled mountain destinations, Romania's Carpathian Mountains offer pristine forests, medieval castles, and traditional villages. The region is home to Europe's largest populations of brown bears, wolves, and lynx, making it a wildlife lover's paradise.</p>
      <p>Transylvania's mix of natural beauty and cultural heritage, including the infamous Bran Castle (associated with the Dracula legend), adds an element of mystique to the mountain experience.</p>
      
      <h2>Planning Your Mountain Adventure</h2>
      <p>When planning a trip to any mountain destination, consider these tips:</p>
      <ul>
        <li>Research the best time to visit based on your preferred activities (skiing, hiking, photography, etc.)</li>
        <li>Acclimatize properly if visiting high-altitude destinations to avoid altitude sickness</li>
        <li>Pack appropriate gear, including layers for changing weather conditions</li>
        <li>Consider hiring local guides for the best experience and to support the local economy</li>
        <li>Respect the environment by following Leave No Trace principles</li>
      </ul>
      
      <p>Whether you're seeking adrenaline-pumping adventure or peaceful communion with nature, these mountain destinations offer experiences that will elevate your travel memories to new heights.</p>
    `,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    date: "April 12, 2023",
    readTime: "8 min read",
    category: "Destinations",
    author: {
      name: "Michael Johnson",
      bio: "Adventure travel writer and photographer with a passion for mountain landscapes and outdoor activities.",
      image: "/placeholder.svg?height=80&width=80",
    },
    featured: true,
    slug: "must-visit-mountain-destinations",
  },
]

// Related posts would typically be fetched based on category or tags
const relatedPosts = [
  {
    id: 2,
    title: "How to Pack Light for a Two-Week International Trip",
    excerpt:
      "Expert tips and tricks for efficient packing that will save you space, weight, and stress on your next extended journey abroad.",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=2070&auto=format&fit=crop",
    date: "March 28, 2023",
    readTime: "6 min read",
    category: "Travel Tips",
    slug: "pack-light-international-trip",
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
    slug: "underrated-european-cities",
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
    slug: "sustainable-travel-reduce-impact",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the post data based on the slug
  const post = blogPosts.find((p) => p.slug === params.slug) || blogPosts[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center text-white/90 mb-6">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-white font-medium">{post.author.name}</div>
                <div className="text-white/80 text-sm">Author</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span>{post.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="outline">Mountain Travel</Badge>
              <Badge variant="outline">Adventure</Badge>
              <Badge variant="outline">Hiking</Badge>
              <Badge variant="outline">Nature</Badge>
              <Badge variant="outline">Outdoor Activities</Badge>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">About {post.author.name}</h3>
                  <p className="text-muted-foreground">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Table of Contents */}
              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      1. Swiss Alps, Switzerland
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      2. Patagonia, Argentina & Chile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      3. Canadian Rockies, Canada
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      4. Himalayan Region, Nepal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      5. Dolomites, Italy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      6. Blue Mountains, Australia
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      7. Atlas Mountains, Morocco
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      8. Rocky Mountains, USA
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      9. Southern Alps, New Zealand
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      10. Carpathian Mountains, Romania
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Planning Your Mountain Adventure
                    </a>
                  </li>
                </ul>
              </div>

              {/* Related Posts */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                      <Card className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-40">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge className="mb-2">{relatedPost.category}</Badge>
                          <h4 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h4>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span className="mr-3">{relatedPost.date}</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest travel tips, destination guides, and exclusive offers delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

