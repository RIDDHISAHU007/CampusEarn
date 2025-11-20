"use client"

import type { Viewport } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin, Building2, ArrowLeft, Share2, Bookmark } from 'lucide-react'

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

// Mock data
const jobDetails: Record<number, any> = {
  1: {
    id: 1,
    title: "Restaurant Helper",
    company: "The Daily Cafe",
    location: "Downtown, City Center",
    pay: "₹150-200/hr",
    hours: "4-6 hours/day",
    timing: "Flexible",
    description:
      "We are looking for enthusiastic and hardworking restaurant helpers to join our team. You will assist in food preparation, table setup, cleaning, and customer service.",
    responsibilities: [
      "Assist in food preparation and plating",
      "Set up and clear tables",
      "Maintain cleanliness of work areas",
      "Support customer service operations",
      "Follow health and safety guidelines",
      "Work efficiently during peak hours",
    ],
    requirements: [
      "Currently pursuing graduation or post-graduation",
      "Minimum 2 hours availability per day",
      "Ability to work in a fast-paced environment",
      "Good communication skills",
      "No prior experience required",
    ],
    postedDate: "2 days ago",
    rating: 4.5,
  },
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const jobId = Number.parseInt(params.id)
  const job = jobDetails[jobId] || jobDetails[1]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Jobs
        </Link>

        {/* Job Header */}
        <div className="bg-white border border-border rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{job.title}</h1>
              <p className="text-lg text-text-muted">{job.company}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Bookmark size={24} className="text-text-muted hover:text-primary" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Share2 size={24} className="text-text-muted hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-sm text-text-muted mb-1">Pay Rate</p>
              <p className="text-lg font-semibold text-foreground">{job.pay}</p>
            </div>
            <div>
              <p className="text-sm text-text-muted mb-1">Hours</p>
              <p className="text-lg font-semibold text-foreground">{job.hours}</p>
            </div>
            <div>
              <p className="text-sm text-text-muted mb-1">Location</p>
              <p className="text-lg font-semibold text-foreground">{job.location}</p>
            </div>
            <div>
              <p className="text-sm text-text-muted mb-1">Timing</p>
              <p className="text-lg font-semibold text-foreground">{job.timing}</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors text-lg">
            Apply Now
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Job</h2>
              <p className="text-text-muted leading-relaxed text-lg mb-4">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-muted">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">What We're Looking For</h2>
              <ul className="space-y-3">
                {job.requirements.map((req: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-muted">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Job Details</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-muted mb-2">Company</p>
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 size={16} className="text-primary" />
                    {job.company}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-2">Location</p>
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    {job.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-2">Posted</p>
                  <p className="font-semibold text-foreground">{job.postedDate}</p>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-2">Company Rating</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">⭐ {job.rating}</span>
                    <span className="text-sm text-text-muted">(128 reviews)</span>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
