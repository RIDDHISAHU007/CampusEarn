import type { Viewport } from "next"
import Link from "next/link"
import { ArrowRight, Briefcase, FileText, CheckCircle, Zap } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function HowItWorksPage() {
  const seekerSteps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Sign up as a job seeker and tell us about your skills, availability, and location.",
      icon: FileText,
    },
    {
      step: 2,
      title: "Browse Local Jobs",
      description: "Explore part-time job opportunities near you - restaurants, salons, shops, and more.",
      icon: Briefcase,
    },
    {
      step: 3,
      title: "Apply & Get Hired",
      description: "Apply to jobs that interest you. Employers will review your profile and contact you.",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Start Earning",
      description: "Work flexible hours, earn extra income, and build your professional experience.",
      icon: Zap,
    },
  ]

  const posterSteps = [
    {
      step: 1,
      title: "Register Your Business",
      description: "Create a business account and verify your details on CampusEarn.",
      icon: FileText,
    },
    {
      step: 2,
      title: "Post Job Openings",
      description: "Create job listings with details about the work, requirements, and compensation.",
      icon: Briefcase,
    },
    {
      step: 3,
      title: "Review Applications",
      description: "Browse through student applications and connect with suitable candidates.",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Hire & Manage",
      description: "Hire students, manage schedules, and build a reliable workforce for your business.",
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How CampusEarn Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for flexible work or reliable student employees, we make it simple and secure.
          </p>
        </div>
      </section>

      {/* Job Seeker Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">For Job Seekers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {seekerSteps.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  key={idx}
                  className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-1">Step {item.step}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Poster Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">For Job Posters</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {posterSteps.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-1">Step {item.step}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of students and employers on CampusEarn</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup?role=seeker"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Find Jobs <ArrowRight size={20} />
            </Link>
            <Link
              href="/signup?role=poster"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors border border-blue-500"
            >
              Post Jobs <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
