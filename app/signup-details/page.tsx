"use client"

import type React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Briefcase } from "lucide-react"

export default function SignUpDetails() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "seeker"

  const [formData, setFormData] = useState({
    collegeYear: "",
    college: "",
    businessName: "",
    businessType: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (role === "seeker") {
      if (!formData.collegeYear) newErrors.collegeYear = "College year is required"
      if (!formData.college.trim()) newErrors.college = "College name is required"
    } else {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
      if (!formData.businessType) newErrors.businessType = "Business type is required"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      const existingData = JSON.parse(localStorage.getItem("userData") || "{}")
      const updatedData = { ...existingData, ...formData }
      localStorage.setItem("userData", JSON.stringify(updatedData))

      // Redirect based on role
      if (role === "seeker") {
        router.push("/dashboard/seeker")
      } else {
        router.push("/dashboard/poster")
      }

      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Back Button */}
        <Link href="/signup" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6">
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {role === "seeker" ? "Student Details" : "Business Details"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {role === "seeker" ? "Help us know more about your academic background" : "Tell us about your business"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {role === "seeker" ? (
            <>
              {/* College Year */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">College Year</label>
                <select
                  name="collegeYear"
                  value={formData.collegeYear}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.collegeYear ? "border-red-500" : "border-border"
                  }`}
                >
                  <option value="">Select year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                  <option value="masters">Master's</option>
                </select>
                {errors.collegeYear && <p className="text-red-500 text-xs mt-1">{errors.collegeYear}</p>}
              </div>

              {/* College Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">College Name</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Your college name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.college ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
              </div>
            </>
          ) : (
            <>
              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                <div className="relative">
                  <Briefcase size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business name"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.businessName ? "border-red-500" : "border-border"
                    }`}
                  />
                </div>
                {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.businessType ? "border-red-500" : "border-border"
                  }`}
                >
                  <option value="">Select type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="salon">Salon/Spa</option>
                  <option value="delivery">Delivery Service</option>
                  <option value="retail">Retail Shop</option>
                  <option value="tutoring">Tutoring Center</option>
                  <option value="other">Other</option>
                </select>
                {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>}
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isSubmitting ? "Completing Sign Up..." : "Complete Sign Up"}
          </button>
        </form>
      </div>
    </div>
  )
}
