"use client"

import { useState, useEffect } from "react"
import type { Viewport } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import FeaturedJobs from "@/components/featured-jobs"
import JobCategories from "@/components/job-categories"
import Footer from "@/components/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function Home() {
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole")
    setUserRole(storedRole)
    setIsLoaded(true)
  }, [])

  if (isLoaded && !userRole) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-4xl">₹</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">CampusEarn</h1>
            <p className="text-lg text-muted-foreground">Your gateway to flexible part-time income</p>
          </div>

          {/* Role Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Job Seeker Card */}
            <Link href="/signup?role=seeker">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-foreground mb-3">I'm Looking for Jobs</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Find flexible part-time opportunities that fit your schedule and earn extra income
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Browse local job opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Apply to positions instantly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Earn money on your terms</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Job Poster Card */}
            <Link href="/signup?role=poster">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-foreground mb-3">I'm Hiring</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Post job openings and find talented students ready to work for your business
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Post job listings easily</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Find motivated students</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Manage applications</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <JobCategories />
      <HowItWorks />
      <FeaturedJobs />
      <Footer />
    </main>
  )
}
