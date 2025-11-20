import type { Viewport } from "next"
import Link from "next/link"
import { Users, Target, Heart, Globe, ArrowRight } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Student-Focused",
      description: "We prioritize the safety, well-being, and financial growth of every student on our platform.",
    },
    {
      icon: Target,
      title: "Opportunity & Growth",
      description: "Creating meaningful employment opportunities that fit student schedules and help build careers.",
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a supportive ecosystem where students and employers connect and grow together.",
    },
    {
      icon: Users,
      title: "Trust & Transparency",
      description: "Operating with integrity through verified profiles, transparent pricing, and secure transactions.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">About CampusEarn</h1>
          <p className="text-xl text-gray-600">
            Empowering students to earn extra income through flexible, local part-time jobs while supporting small
            businesses.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              CampusEarn was founded with a simple mission: to bridge the gap between students seeking flexible income
              and local businesses needing reliable workers. We understand the challenges college students
              face—balancing education with financial needs, finding work that fits their schedule, and accessing
              quality employment opportunities nearby.
            </p>
            <p>
              Our platform provides a safe, verified marketplace where students can discover job opportunities in their
              neighborhood—from restaurant helpers and salon assistants to delivery roles and tutoring positions. For
              small business owners, CampusEarn offers access to a pool of motivated, trustworthy student workers ready
              to contribute to their operations.
            </p>
            <p>
              Every job posting on CampusEarn is vetted for legitimacy and safety. We believe in creating a trustworthy
              environment where both students and employers can connect with confidence. Whether you're earning for
              tuition, saving for goals, or gaining professional experience, CampusEarn is here to support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-gray-600">Active Student Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <p className="text-gray-600">Job Opportunities Posted</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹5Cr+</div>
              <p className="text-gray-600">Earned by Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community Today</h2>
          <p className="text-xl text-blue-100 mb-8">Start earning or hiring on CampusEarn</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup?role=seeker"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              I'm a Student <ArrowRight size={20} />
            </Link>
            <Link
              href="/signup?role=poster"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors border border-blue-500"
            >
              I'm an Employer <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
