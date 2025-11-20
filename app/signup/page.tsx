"use client"

import type React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Lock, User, MapPin, Phone, Briefcase, BookOpen } from "lucide-react"

export default function SignUp() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const roleFromParams = searchParams.get("role") as "seeker" | "poster" | null

  const [step, setStep] = useState<"role-selection" | "form">(roleFromParams ? "form" : "role-selection")
  const [selectedRole, setSelectedRole] = useState<"seeker" | "poster" | null>(roleFromParams || null)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    collegeYear: "",
    college: "",
    businessName: "",
    businessType: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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

    // Common fields
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.location.trim()) newErrors.location = "Location is required"

    // Role-specific fields
    if (selectedRole === "seeker") {
      if (!formData.collegeYear) newErrors.collegeYear = "College year is required"
      if (!formData.college.trim()) newErrors.college = "College name is required"
    } else if (selectedRole === "poster") {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
      if (!formData.businessType) newErrors.businessType = "Business type is required"
    }

    return newErrors
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      const userData = {
        ...formData,
        role: selectedRole,
      }

      localStorage.setItem("userRole", selectedRole || "seeker")
      localStorage.setItem("userData", JSON.stringify(userData))

      // Redirect to appropriate dashboard
      if (selectedRole === "seeker") {
        router.push("/dashboard/seeker")
      } else {
        router.push("/dashboard/poster")
      }

      setIsSubmitting(false)
    }, 1000)
  }

  const handleRoleSelection = (role: "seeker" | "poster") => {
    setSelectedRole(role)
    setStep("form")
  }

  const handleBackFromForm = () => {
    setStep("role-selection")
    setSelectedRole(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      {step === "role-selection" ? (
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6">
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Choose Your Role</h1>
            <p className="text-lg text-muted-foreground">Tell us how you'd like to use CampusEarn</p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Job Seeker Card */}
            <button
              onClick={() => handleRoleSelection("seeker")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-primary text-left"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-primary">✓</span>
                  <span>Browse local job opportunities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Apply to positions instantly</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Earn money on your terms</span>
                </div>
              </div>
            </button>

            {/* Job Poster Card */}
            <button
              onClick={() => handleRoleSelection("poster")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-primary text-left"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-primary">✓</span>
                  <span>Post job listings easily</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Find motivated students</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Manage applications</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          {/* Back Button */}
          <button
            onClick={handleBackFromForm}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Your Account</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {selectedRole === "seeker"
                ? "Find your next opportunity — start by setting up your profile."
                : "Hire top talent — create your recruiter profile to post jobs easily."}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  selectedRole === "seeker" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {selectedRole === "seeker" ? (
                  <>
                    <BookOpen size={16} />
                    Job Seeker
                  </>
                ) : (
                  <>
                    <Briefcase size={16} />
                    Job Poster
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Section 1: Basic Information */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-4 text-gray-700">Basic Information</h3>

              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.fullName ? "border-red-500" : "border-border"
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.phone ? "border-red-500" : "border-border"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">City/Location</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Mumbai, Delhi"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.location ? "border-red-500" : "border-border"
                    }`}
                  />
                </div>
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>
            </div>

            {/* Section 2: Role-Specific Information */}
            <div className="mb-6 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-foreground mb-4 text-gray-700">
                {selectedRole === "seeker" ? "Academic Information" : "Business Information"}
              </h3>

              {selectedRole === "seeker" ? (
                <>
                  {/* College Year */}
                  <div className="mb-4">
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
                  <div className="mb-4">
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
            </div>

            {/* Section 3: Security */}
            <div className="mb-6 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-foreground mb-4 text-gray-700">Security</h3>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 6 characters"
                    className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.password ? "border-red-500" : "border-border"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground text-sm"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.confirmPassword ? "border-red-500" : "border-border"
                    }`}
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary-dark font-medium">
              Login here
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}
