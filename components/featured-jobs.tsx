"use client"

import Link from "next/link"
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: "Restaurant Helper",
    company: "The Daily Cafe",
    location: "Downtown, City Center",
    pay: "₹150-200/hr",
    hours: "4-6 hours/day",
    timing: "Flexible",
    category: "Restaurant",
  },
  {
    id: 2,
    title: "Salon Assistant",
    company: "Style Studio",
    location: "Mall Road, Near University",
    pay: "₹120-180/hr",
    hours: "3-5 hours/day",
    timing: "Weekends",
    category: "Salon",
  },
  {
    id: 3,
    title: "Delivery Assistant",
    company: "QuickDeliver Co.",
    location: "Campus & Surrounding Area",
    pay: "₹180-250/hr",
    hours: "2-4 hours/day",
    timing: "Evening",
    category: "Delivery",
  },
  {
    id: 4,
    title: "Shop Helper",
    company: "Books & More",
    location: "Market Street",
    pay: "₹140-190/hr",
    hours: "4 hours/day",
    timing: "Flexible",
    category: "Shop",
  },
  {
    id: 5,
    title: "Math Tutor",
    company: "Student Tuitions",
    location: "Online & Offline",
    pay: "₹200-300/hr",
    hours: "1-2 hours/day",
    timing: "Flexible",
    category: "Tutoring",
  },
  {
    id: 6,
    title: "Content Writer",
    company: "LocalBiz Marketing",
    location: "Remote",
    pay: "₹150-250/hr",
    hours: "2-3 hours/day",
    timing: "Flexible",
    category: "Online",
  },
]

export default function FeaturedJobs() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="animate-slide-in-down">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Jobs</h2>
            <p className="text-text-muted text-lg">Handpicked opportunities from local businesses</p>
          </div>
          <Link
            href="/jobs"
            className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            View All Jobs
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link key={job.id} href={`/job/${job.id}`} className="animate-stagger-item">
              <div className="h-full bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">{job.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {job.category}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <span>{job.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <DollarSign size={16} className="text-primary flex-shrink-0" />
                    <span>{job.pay}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {job.timing}
                  </span>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark font-semibold transition-colors"
          >
            Browse All Jobs
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
