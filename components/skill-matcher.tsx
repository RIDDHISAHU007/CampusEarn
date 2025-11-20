"use client"

import { useState } from "react"
import { Zap, TrendingUp } from 'lucide-react'

interface JobMatch {
  jobId: number
  title: string
  company: string
  matchPercentage: number
  matchedSkills: string[]
  missingSkills: string[]
}

export default function SkillMatcher() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [showMatches, setShowMatches] = useState(false)

  const availableSkills = [
    "Food Preparation",
    "Customer Service",
    "Time Management",
    "Team Work",
    "Quick Learning",
    "Communication",
    "Math Proficiency",
    "Data Entry",
    "Organization",
    "Delivery",
  ]

  const jobs = [
    {
      jobId: 1,
      title: "Restaurant Helper",
      company: "The Spice Kitchen",
      requiredSkills: ["Food Preparation", "Customer Service", "Team Work"],
    },
    {
      jobId: 2,
      title: "Salon Assistant",
      company: "Hair Haven Salon",
      requiredSkills: ["Customer Service", "Communication", "Organization"],
    },
    {
      jobId: 3,
      title: "Delivery Assistant",
      company: "FastDeliver Co.",
      requiredSkills: ["Time Management", "Quick Learning", "Delivery"],
    },
    {
      jobId: 4,
      title: "Retail Shop Helper",
      company: "Fashion Forward",
      requiredSkills: ["Organization", "Customer Service", "Team Work"],
    },
    {
      jobId: 5,
      title: "Math Tutor",
      company: "Academic Boost",
      requiredSkills: ["Math Proficiency", "Communication", "Time Management"],
    },
  ]

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const calculateMatches = (): JobMatch[] => {
    return jobs
      .map((job) => {
        const matched = job.requiredSkills.filter((skill) => selectedSkills.includes(skill))
        const missing = job.requiredSkills.filter((skill) => !selectedSkills.includes(skill))
        const matchPercentage = Math.round((matched.length / job.requiredSkills.length) * 100)

        return {
          jobId: job.jobId,
          title: job.title,
          company: job.company,
          matchPercentage,
          matchedSkills: matched,
          missingSkills: missing,
        }
      })
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
  }

  const matches = calculateMatches()

  return (
    <div className="bg-white rounded-2xl p-8 border border-border shadow-md">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Zap className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Skill Matcher</h3>
          <p className="text-muted-foreground text-sm">
            Find jobs that match your skills. Select your strengths below.
          </p>
        </div>
      </div>

      {/* Skills Selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-foreground mb-4">Select Your Skills:</label>
        <div className="flex flex-wrap gap-3">
          {availableSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedSkills.includes(skill)
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-neutral-100 text-foreground hover:bg-neutral-200"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Match Button */}
      <button
        onClick={() => setShowMatches(true)}
        disabled={selectedSkills.length === 0}
        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-8"
      >
        Find Matching Jobs ({selectedSkills.length} skills selected)
      </button>

      {/* Matches Results */}
      {showMatches && selectedSkills.length > 0 && (
        <div className="space-y-4 animate-slide-in-up">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Top Matches For You
          </h4>

          {matches.map((match, index) => (
            <div
              key={match.jobId}
              className="p-4 border border-neutral-200 rounded-xl hover:shadow-md transition-all animate-stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="font-semibold text-foreground">{match.title}</h5>
                  <p className="text-sm text-muted-foreground">{match.company}</p>
                </div>

                {/* Match Score Badge */}
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{match.matchPercentage}%</div>
                    <div className="text-xs text-muted-foreground">Match</div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      background: `conic-gradient(#3DED97 ${match.matchPercentage}%, #e5e7eb ${match.matchPercentage}%)`,
                    }}
                  >
                    {match.matchPercentage > 0 ? "✓" : "○"}
                  </div>
                </div>
              </div>

              {/* Skills Display */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
                    ✓ Matched ({match.matchedSkills.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {match.matchedSkills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-600 mb-2 flex items-center gap-1">
                    ○ To Learn ({match.missingSkills.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {match.missingSkills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-neutral-200 text-neutral-700 text-xs rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-3 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium">
                View Job Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {showMatches && selectedSkills.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Select at least one skill to see matching jobs</p>
        </div>
      )}
    </div>
  )
}
