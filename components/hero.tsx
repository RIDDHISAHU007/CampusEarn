"use client"

import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary-dark py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm">
              <Briefcase size={16} />
              <span>Perfect for college students</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Earn While You Learn
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty max-w-md">
              Find flexible part-time jobs designed for students. Work around your schedule and earn extra income with
              local opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-semibold transition-colors"
              >
                Explore Jobs
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold">2000+</p>
                <p className="text-white/80 text-sm">Active Jobs</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-white/80 text-sm">Students Earning</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-white/80 text-sm">Cities</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light/50 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/students-working-part-time-jobs.jpg"
                alt="Students earning with CampusEarn"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
