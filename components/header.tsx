"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, LogOut } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole")
    setUserRole(storedRole)
    setIsLoaded(true)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userData")
    setUserRole(null)
    window.location.href = "/"
  }

  if (!isLoaded) return null

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">CampusEarn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/jobs" className="text-foreground hover:text-primary transition-colors">
              Browse Jobs
            </Link>
            <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Auth Buttons or User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {userRole ? (
              <>
                <Link
                  href={userRole === "seeker" ? "/dashboard/seeker" : "/dashboard/poster"}
                  className="px-4 py-2 text-primary hover:bg-secondary rounded-lg transition-colors font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-4 py-2 text-primary hover:bg-secondary rounded-lg transition-colors">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
            <Link
              href="/jobs"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              href="/how-it-works"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              About
            </Link>
            <div className="flex gap-3 pt-2 flex-col">
              {userRole ? (
                <>
                  <Link
                    href={userRole === "seeker" ? "/dashboard/seeker" : "/dashboard/poster"}
                    className="flex-1 px-4 py-2 text-center text-primary hover:bg-secondary rounded-lg transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex-1 px-4 py-2 bg-primary text-white text-center rounded-lg hover:bg-primary-dark transition-colors font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex-1 px-4 py-2 text-center text-primary hover:bg-secondary rounded-lg transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex-1 px-4 py-2 bg-primary text-white text-center rounded-lg hover:bg-primary-dark transition-colors font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
