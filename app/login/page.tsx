"use client"

import { useState } from "react"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Lock, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email")
      setLoading(false)
      return
    }

    // Simulate login - check localStorage for registered user
    const users = JSON.parse(localStorage.getItem("campusEarnUsers") || "[]")
    const user = users.find((u: any) => u.email === formData.email && u.password === formData.password)

    if (user) {
      localStorage.setItem("userRole", user.role)
      localStorage.setItem("userData", JSON.stringify(user))
      setLoading(false)

      if (user.role === "seeker") {
        router.push("/dashboard/seeker")
      } else {
        router.push("/dashboard/poster")
      }
    } else {
      setError("Invalid email or password")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground text-center">Welcome Back</h1>
            <p className="text-center text-gray-600 mt-2">Log in to your CampusEarn account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-primary hover:text-primary-dark text-sm font-medium">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:text-primary-dark font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
