"use client"

import Link from "next/link"
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react"

interface JobsGridProps {
  filters: {
    category: string
    salary: string
    timing: string
    location: string
  }
}

// Mock data - in a real app, this would come from an API
const getJobsFromLocalStorage = () => {
  if (typeof window === "undefined") return []
  const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
  return postedJobs
}

const userPostedJobs = getJobsFromLocalStorage()

const allJobs = [
  {
    id: 1,
    title: "Restaurant Helper",
    company: "The Daily Cafe",
    location: "Downtown, City Center",
    pay: "₹150-200/hr",
    hours: "4-6 hours/day",
    timing: "Flexible",
    category: "restaurant",
    salary: "150-200",
  },
  {
    id: 2,
    title: "Salon Assistant",
    company: "Style Studio",
    location: "Mall Road, Near University",
    pay: "₹120-180/hr",
    hours: "3-5 hours/day",
    timing: "Weekends",
    category: "salon",
    salary: "100-150",
  },
  {
    id: 3,
    title: "Delivery Assistant",
    company: "QuickDeliver Co.",
    location: "Campus & Surrounding Area",
    pay: "₹180-250/hr",
    hours: "2-4 hours/day",
    timing: "Evening",
    category: "delivery",
    salary: "200+",
  },
  {
    id: 4,
    title: "Shop Helper",
    company: "Books & More",
    location: "Market Street",
    pay: "₹140-190/hr",
    hours: "4 hours/day",
    timing: "Flexible",
    category: "shop",
    salary: "100-150",
  },
  {
    id: 5,
    title: "Math Tutor",
    company: "Student Tuitions",
    location: "Online & Offline",
    pay: "₹200-300/hr",
    hours: "1-2 hours/day",
    timing: "Flexible",
    category: "tutoring",
    salary: "200+",
  },
  {
    id: 6,
    title: "Content Writer",
    company: "LocalBiz Marketing",
    location: "Remote",
    pay: "₹150-250/hr",
    hours: "2-3 hours/day",
    timing: "Flexible",
    category: "tutoring",
    salary: "150-200",
  },
  {
    id: 7,
    title: "Waiter",
    company: "Pizza Palace",
    location: "Main Road",
    pay: "₹160-210/hr",
    hours: "5-6 hours/day",
    timing: "Evening",
    category: "restaurant",
    salary: "150-200",
  },
  {
    id: 8,
    title: "Stock Assistant",
    company: "Fashion Forward",
    location: "Shopping Mall",
    pay: "₹130-170/hr",
    hours: "3-4 hours/day",
    timing: "Weekends",
    category: "shop",
    salary: "100-150",
  },
]

const combinedJobs = [...userPostedJobs, ...allJobs]

export default function JobsGrid({ filters }: JobsGridProps) {
  const filteredJobs = combinedJobs.filter((job) => {
    if (filters.category && job.category !== filters.category) return false
    if (filters.salary && job.salary !== filters.salary) return false
    if (filters.timing && job.timing !== filters.timing) return false
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false
    return true
  })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-text-muted">
          Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs
        </p>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Link key={job.id} href={`/job/${job.id}`}>
              <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-text-muted mt-1">{job.company}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
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
                        <span className="font-semibold text-foreground">{job.pay}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.timing}
                    </span>
                    <button className="text-primary hover:text-primary-dark transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-text-muted mb-4">No jobs found matching your filters</p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
