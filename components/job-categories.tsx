"use client"

import Link from "next/link"
import { Utensils, Scissors, Bike, Store, BookOpen } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: "Restaurant Helper",
    icon: Utensils,
    jobs: 245,
    color: "from-orange-100 to-orange-50",
  },
  {
    id: 2,
    name: "Salon Assistant",
    icon: Scissors,
    jobs: 178,
    color: "from-pink-100 to-pink-50",
  },
  {
    id: 3,
    name: "Delivery Assistant",
    icon: Bike,
    jobs: 312,
    color: "from-green-100 to-green-50",
  },
  {
    id: 4,
    name: "Shop Helper",
    icon: Store,
    jobs: 189,
    color: "from-blue-100 to-blue-50",
  },
  {
    id: 5,
    name: "Tutoring",
    icon: BookOpen,
    jobs: 156,
    color: "from-purple-100 to-purple-50",
  },
]

export default function JobCategories() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide-in-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Job Categories</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Explore our most sought-after part-time opportunities designed for students
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={`/jobs?category=${category.id}`} className="group animate-stagger-item" style={{animationDelay: `${index * 0.05}s`}}>
                <div
                  className={`bg-gradient-to-br ${category.color} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-text-muted">{category.jobs} jobs available</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
