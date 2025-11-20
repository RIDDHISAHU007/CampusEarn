"use client"

import type React from "react"

import { X } from "lucide-react"

const categoryOptions = [
  { value: "restaurant", label: "Restaurant Helper" },
  { value: "salon", label: "Salon Assistant" },
  { value: "delivery", label: "Delivery Assistant" },
  { value: "shop", label: "Shop Helper" },
  { value: "tutoring", label: "Tutoring" },
]

const salaryOptions = [
  { value: "any", label: "Any Salary" },
  { value: "100-150", label: "₹100-150/hr" },
  { value: "150-200", label: "₹150-200/hr" },
  { value: "200+", label: "₹200+/hr" },
]

const timingOptions = [
  { value: "flexible", label: "Flexible" },
  { value: "weekends", label: "Weekends" },
  { value: "evening", label: "Evening" },
  { value: "morning", label: "Morning" },
]

interface JobFiltersProps {
  filters: {
    category: string
    salary: string
    timing: string
    location: string
  }
  setFilters: (filters: any) => void
}

export default function JobFilters({ filters, setFilters }: JobFiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value })
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange("location", e.target.value)
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      salary: "",
      timing: "",
      location: "",
    })
  }

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white border border-border rounded-xl p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Filters</h3>
          {(filters.category || filters.salary || filters.timing || filters.location) && (
            <button
              onClick={clearFilters}
              className="text-sm text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
            >
              <X size={16} /> Clear
            </button>
          )}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-foreground mb-3 block">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Categories</option>
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-foreground mb-3 block">Location</label>
          <input
            type="text"
            placeholder="Search by location..."
            value={filters.location}
            onChange={handleLocationChange}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Salary */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-foreground mb-3 block">Pay Rate</label>
          <select
            value={filters.salary}
            onChange={(e) => handleFilterChange("salary", e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {salaryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Timing */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-foreground mb-3 block">Timing</label>
          <select
            value={filters.timing}
            onChange={(e) => handleFilterChange("timing", e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Any Timing</option>
            {timingOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
          Apply Filters
        </button>
      </div>
    </aside>
  )
}
