"use client"

import { CheckCircle, Search, FileText, Briefcase } from "lucide-react"

const steps = [
  {
    icon: CheckCircle,
    number: 1,
    title: "Create Account",
    description: "Sign up with your college email and complete your student profile in just 2 minutes.",
  },
  {
    icon: Search,
    number: 2,
    title: "Browse Jobs",
    description: "Filter jobs by location, time availability, and job type that fit your schedule.",
  },
  {
    icon: FileText,
    number: 3,
    title: "Apply Now",
    description: "Submit your application directly through our platform with a single click.",
  },
  {
    icon: Briefcase,
    number: 4,
    title: "Get Hired",
    description: "Connect with employers and start earning on your preferred schedule.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Four simple steps to find your perfect part-time job
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>

                <div className="mb-4 bg-secondary rounded-lg p-3">
                  <Icon className="text-primary mx-auto" size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>

                {step.number < 4 && (
                  <div className="hidden md:block absolute right-0 top-8 transform translate-x-12 text-primary/30 text-2xl">
                    →
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
