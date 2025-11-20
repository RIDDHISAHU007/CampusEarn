"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { LogOut, MapPin, Clock, DollarSign, Bookmark, CheckCircle } from 'lucide-react'

export default function SeekerDashboard() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [userPostedJobs, setUserPostedJobs] = useState<any[]>([])

  useEffect(() => {
    // Check if user is logged in
    const userRole = localStorage.getItem("userRole")
    const data = localStorage.getItem("userData")

    if (userRole !== "seeker" || !data) {
      router.push("/")
      return
    }

    setUserData(JSON.parse(data))
    
    const postedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
    setUserPostedJobs(postedJobs)
    
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userData")
    localStorage.removeItem("campusEarnSplashSeen")
    router.push("/")
  }

  const defaultJobListings = [
    {
      id: 1,
      title: "Restaurant Helper",
      company: "The Spice Kitchen",
      location: "Downtown",
      salary: "₹150-200/hour",
      type: "Part-time",
      description: "Help with food prep, serving, and kitchen operations",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Salon Assistant",
      company: "Hair Haven Salon",
      location: "Mall Avenue",
      salary: "₹120-150/hour",
      type: "Part-time",
      description: "Assist with customer service, cleaning, and reception",
      postedDate: "1 day ago",
    },
    {
      id: 3,
      title: "Delivery Assistant",
      company: "FastDeliver Co.",
      location: "City Center",
      salary: "₹100-180/delivery",
      type: "Flexible",
      description: "Deliver packages and ensure customer satisfaction",
      postedDate: "3 days ago",
    },
    {
      id: 4,
      title: "Retail Shop Helper",
      company: "Fashion Forward",
      location: "Shopping District",
      salary: "₹130-180/hour",
      type: "Part-time",
      description: "Stock shelves, assist customers, and manage inventory",
      postedDate: "1 day ago",
    },
    {
      id: 5,
      title: "Tutoring - Math",
      company: "Academic Boost",
      location: "Education Hub",
      salary: "₹200-300/hour",
      type: "Flexible",
      description: "Tutor high school students in Mathematics",
      postedDate: "4 days ago",
    },
  ]

  const jobListings = [...userPostedJobs, ...defaultJobListings]

  const toggleSavedJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground font-medium">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">₹</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Welcome, {userData?.fullName}</h1>
                <p className="text-sm text-muted-foreground">
                  {userData?.college} - {userData?.collegeYear} Year
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Applications</p>
                <p className="text-3xl font-bold text-foreground">0</p>
              </div>
              <CheckCircle size={32} className="text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Saved Jobs</p>
                <p className="text-3xl font-bold text-foreground">{savedJobs.length}</p>
              </div>
              <Bookmark size={32} className="text-primary" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="text-lg font-bold text-foreground">{userData?.location}</p>
              </div>
              <MapPin size={32} className="text-orange-500" />
            </div>
          </div>
        </div>

        {/* Browse Jobs Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Available Jobs</h2>
            <Link
              href="/jobs"
              className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-2"
            >
              View all <span>→</span>
            </Link>
          </div>

          <div className="space-y-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{job.title}</h3>
                    <p className="text-muted-foreground text-sm">{job.company}</p>
                  </div>
                  <button
                    onClick={() => toggleSavedJob(job.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      savedJobs.includes(job.id)
                        ? "bg-primary-light text-primary"
                        : "bg-secondary text-muted-foreground hover:bg-border"
                    }`}
                  >
                    <Bookmark size={20} fill={savedJobs.includes(job.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{job.jobType || job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign size={16} className="text-muted-foreground" />
                    <span className="font-medium text-foreground">{job.salary}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{job.posted || job.postedDate}</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
