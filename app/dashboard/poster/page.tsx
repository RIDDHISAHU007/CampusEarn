"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { LogOut, Plus, Eye, Briefcase, Users, TrendingUp } from 'lucide-react'

export default function PosterDashboard() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showNewJobForm, setShowNewJobForm] = useState(false)
  const [postedJobs, setPostedJobs] = useState<any[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salaryRange: "",
    jobType: "Part-time",
  })

  useEffect(() => {
    // Check if user is logged in
    const userRole = localStorage.getItem("userRole")
    const data = localStorage.getItem("userData")

    if (userRole !== "poster" || !data) {
      router.push("/")
      return
    }

    setUserData(JSON.parse(data))
    
    const jobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
    setPostedJobs(jobs)
    
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userData")
    localStorage.removeItem("campusEarnSplashSeen")
    router.push("/")
  }

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.description.trim() || !formData.salaryRange.trim()) {
      alert("Please fill in all fields")
      return
    }

    const newJob = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      salary: formData.salaryRange,
      jobType: formData.jobType,
      company: userData?.businessName || "Unknown Business",
      location: userData?.location || "Not specified",
      posted: "Just now",
      applicants: 0,
      views: 0,
      status: "Active",
    }

    // Get existing jobs from localStorage
    const existingJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
    const updatedJobs = [newJob, ...existingJobs]

    // Save to localStorage
    localStorage.setItem("postedJobs", JSON.stringify(updatedJobs))

    // Reset form
    setFormData({ title: "", description: "", salaryRange: "", jobType: "Part-time" })
    setShowNewJobForm(false)
    alert("Job posted successfully!")

    // Refresh to show the new job
    window.location.reload()
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
                  {userData?.businessName} • {userData?.businessType}
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
        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setShowNewJobForm(!showNewJobForm)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            <Plus size={20} />
            Post a New Job
          </button>
          <Link
            href="/jobs"
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-border transition-colors font-medium"
          >
            <Eye size={20} />
            Browse Platform
          </Link>
        </div>

        {/* New Job Form */}
        {showNewJobForm && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Post a New Job</h3>
            <form onSubmit={handlePostJob} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Job Title</label>
                <input
                  type="text"
                  placeholder="e.g., Restaurant Helper"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                <textarea
                  placeholder="Describe the job responsibilities and requirements"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Salary Range</label>
                  <input
                    type="text"
                    placeholder="e.g., ₹150-200/hour"
                    value={formData.salaryRange}
                    onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Job Type</label>
                  <select
                    value={formData.jobType}
                    onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Part-time</option>
                    <option>Flexible</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Post Job
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewJobForm(false)}
                  className="flex-1 px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-border transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Jobs</p>
                <p className="text-3xl font-bold text-foreground">
                  {postedJobs.filter((j) => j.status === "Active").length}
                </p>
              </div>
              <Briefcase size={32} className="text-primary" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Applicants</p>
                <p className="text-3xl font-bold text-foreground">
                  {postedJobs.reduce((sum, j) => sum + j.applicants, 0)}
                </p>
              </div>
              <Users size={32} className="text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Views</p>
                <p className="text-3xl font-bold text-foreground">{postedJobs.reduce((sum, j) => sum + j.views, 0)}</p>
              </div>
              <TrendingUp size={32} className="text-orange-500" />
            </div>
          </div>
        </div>

        {/* Posted Jobs List */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Posted Jobs</h2>
          <div className="space-y-4">
            {postedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.salary}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {job.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                  <div>
                    <p className="text-muted-foreground text-xs">APPLICANTS</p>
                    <p className="text-2xl font-bold text-foreground">{job.applicants}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">VIEWS</p>
                    <p className="text-2xl font-bold text-foreground">{job.views}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-muted-foreground text-xs">POSTED</p>
                    <p className="text-sm font-medium text-foreground">{job.posted}</p>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm">
                    Manage
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
