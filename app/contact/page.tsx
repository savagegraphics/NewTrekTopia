"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setLoading(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop"
            alt="World map with travel pins"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 mb-8">
              Have questions about our destinations or ready to plan your next adventure? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-muted/30 rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-muted-foreground">
              123 Adventure Avenue
              <br />
              San Francisco, CA 94103
              <br />
              United States
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground">
              info@trektopia.com
              <br />
              support@trektopia.com
              <br />
              partnerships@trektopia.com
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground">
              +1 (555) 123-4567
              <br />
              Monday - Friday: 9am - 6pm
              <br />
              Saturday: 10am - 4pm
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Select value={formData.subject} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="booking">Booking Information</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <p className="text-muted-foreground mb-8">
              Visit our office in the heart of San Francisco. We're conveniently located near public transportation and
              parking.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?q=80&w=2031&auto=format&fit=crop"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 bg-muted/30 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Find quick answers to common questions about our services</p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">How do I book a trip with TrekTopia?</h3>
                <p className="text-muted-foreground">
                  You can book directly through our website by browsing our destinations and selecting your preferred
                  dates. Alternatively, you can contact our travel specialists who will help you customize your perfect
                  journey.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">What is your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  Our standard cancellation policy allows for full refunds up to 30 days before your trip. Cancellations
                  between 15-30 days receive a 50% refund. For cancellations less than 15 days before departure, no
                  refund is available. We recommend travel insurance for all bookings.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer group discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special rates for groups of 6 or more travelers. Please contact our team for custom
                  group pricing and to discuss any special requirements for your group adventure.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">How do I prepare for my trip?</h3>
                <p className="text-muted-foreground">
                  After booking, you'll receive a comprehensive pre-departure guide with destination-specific
                  information, packing lists, visa requirements, and health recommendations. Our team is also available
                  to answer any questions as you prepare for your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

