"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Header from "@/components/header"
import Footer from "@/components/footer"
import JobsGrid from "@/components/jobs-grid"
import JobFilters from "@/components/job-filters"
import type { Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function JobsPage() {
  const [filters, setFilters] = useState({
    category: "",
    salary: "",
    timing: "",
    location: "",
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    if (!userRole) {
      router.push("/signup")
    }
    setIsLoaded(true)
  }, [router])

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Job</h1>
          <p className="text-text-muted text-lg">Browse all available part-time opportunities</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <JobFilters filters={filters} setFilters={setFilters} />
          <div className="lg:col-span-3">
            <JobsGrid filters={filters} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
