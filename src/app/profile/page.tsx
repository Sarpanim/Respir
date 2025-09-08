"use client"

import { useState } from 'react'
import { 
  Settings, Edit, Camera, Award, Target, Calendar, Clock, Flame, Star, TrendingUp, BookOpen, Play, Heart, Download, Share, Bell, Moon, Sun, Shield, HelpCircle, LogOut, Home, Search, Users, Info, ChevronRight, CheckCircle
} from 'lucide-react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)

  // Données utilisateur
  const user = {
    name: "Olivier",
    email: "olivier@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    joinDate: "Janvier 2024",
    totalMeditationTime: "24h 30min",
    currentStreak: 7,
    longestStreak: 21,
    coursesCompleted: 12,
    meditationsCompleted: 45,
    favoriteCategory: "Méditation",
    level: "Intermédiaire"
  }

  // Statistiques détaillées
  const stats = [
    {
      icon: Flame,
      label: "Série actuelle",
      value: `${user.currentStreak} jours`,
      color: "text-orange-500",
      trend: "up",
      trendValue: "+2"
    },
    {
      icon: Target,
      label: "Temps médité",
      value: user.totalMeditationTime,
      color: "text-amber-600",
      trend: "up",
      trendValue: "+2h"
    },
    {
      icon: BookOpen,
      label: "Cours terminés",
      value: `${user.coursesCompleted}`,
      color: "text-green-600",
      trend: "up",
      trendValue: "+1"
    },
    {
      icon: Play,
      label: "Méditations",
      value: `${user.meditationsCompleted}`,
      color: "text-emerald-600",
      trend: "up",
      trendValue: "+3"
    }
  ]

  // Achievements
  const achievements = [
    {
      id: 1,
      title: "Premier pas",
      description: "Première méditation terminée",
      icon: Star,
      isUnlocked: true,
      unlockedDate: "15 Jan 2024",
      color: "yellow"
    },
    {
      id: 2,
      title: "Série de 7 jours",
      description: "Méditez 7 jours consécutifs",
      icon: Flame,
      isUnlocked: true,
      unlockedDate: "22 Jan 2024",
      color: "orange"
    },
    {
      id: 3,
      title: "Explorateur",
      description: "Terminez 10 cours différents",
      icon: BookOpen,
      isUnlocked: true,
      unlockedDate: "28 Jan 2024",
      color: "green"
    },
    {
      id: 4,
      title: "Maître de la concentration",
      description: "Méditez 100 heures au total",
      icon: Target,
      isUnlocked: false,
      progress: 75,
      color: "purple"
    },
    {
      id: 5,
      title: "Série de 30 jours",
      description: "Méditez 30 jours consécutifs",
      icon: Calendar,
      isUnlocked: false,
      progress: 23,
      color: "emerald"
    }
  ]

  // Cours récents
  const recentCourses = [
    {
      id: 1,
      title: "Méditation du Matin",
      category: "Méditation",
      duration: "10 min",
      completedAt: "Aujourd'hui",
      progress: 100
    },
    {
      id: 2,
      title: "Gestion du Stress",
      category: "Stress",
      duration: "25 min",
      completedAt: "Hier",
      progress: 100
    },
    {
      id: 3,
      title: "Sommeil Profond",
      category: "Sommeil",
      duration: "30 min",
      completedAt: "Il y a 2 jours",
      progress: 60
    }
  ]

  // Options du menu
  const menuOptions = [
    { id: 'notifications', label: 'Notifications', icon: Bell, hasBadge: true },
    { id: 'privacy', label: 'Confidentialité', icon: Shield },
    { id: 'help', label: 'Aide', icon: HelpCircle },
    { id: 'about', label: 'À propos', icon: Info },
    { id: 'logout', label: 'Déconnexion', icon: LogOut, isDestructive: true }
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-light)' }}>
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50" style={{ background: 'var(--card-bg-glass)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
              <Search className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
              <div className="w-6 h-6" />
            </div>
            
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
              <Settings className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="card-nature-elevated mb-8">
          <div className="text-center">
            {/* Avatar */}
            <div className="relative inline-block mb-6">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover"
                style={{ boxShadow: 'var(--shadow-image)' }}
              />
              <button className="absolute bottom-0 right-0 rounded-full p-2 hover:opacity-80 transition-all" style={{ background: 'var(--accent-beige)' }}>
                <Camera className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
              </button>
            </div>

            {/* User Info */}
            <h1 className="text-hero-title mb-2" style={{ color: 'var(--text-primary)' }}>{user.name}</h1>
            <p className="text-body mb-4" style={{ color: 'var(--text-secondary)' }}>{user.email}</p>
            
            {/* Level Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4" style={{ background: 'var(--gradient-accent)' }}>
              <Award className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{user.level}</span>
            </div>

            {/* Join Date */}
            <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>Membre depuis {user.joinDate}</p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card-nature text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
              <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              <div className="text-xs text-green-600">{stat.trendValue}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="card-nature-elevated mb-8">
          <h2 className="text-section-title mb-6" style={{ color: 'var(--text-primary)' }}>Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`flex items-center space-x-4 p-4 rounded-2xl transition-all ${
                achievement.isUnlocked ? 'opacity-100' : 'opacity-60'
              }`} style={{ background: achievement.isUnlocked ? 'var(--hover-bg-light)' : 'var(--hover-bg)' }}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  achievement.isUnlocked 
                    ? `${
                        achievement.color === 'yellow' ? 'var(--accent-cream)' :
                        achievement.color === 'orange' ? 'var(--accent-sand)' :
                        achievement.color === 'green' ? 'var(--accent-green)' :
                        achievement.color === 'purple' ? 'var(--accent-mint)' :
                        'var(--accent-green-light)'
                      }`
                    : 'var(--hover-bg)'
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.isUnlocked ? 'opacity-100' : 'opacity-50'
                  }`} style={{ color: 'var(--text-primary)' }} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    achievement.isUnlocked ? 'opacity-100' : 'opacity-60'
                  }`} style={{ color: 'var(--text-primary)' }}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    achievement.isUnlocked ? 'opacity-80' : 'opacity-50'
                  }`} style={{ color: 'var(--text-secondary)' }}>
                    {achievement.description}
                  </p>
                  {achievement.isUnlocked ? (
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                      Débloqué le {achievement.unlockedDate}
                    </p>
                  ) : (
                    <div className="mt-2">
                      <div className="w-full rounded-full h-2" style={{ background: 'var(--hover-bg)' }}>
                        <div 
                          className="h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${achievement.progress}%`,
                            background: 'var(--gradient-accent)'
                          }}
                        ></div>
                      </div>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{achievement.progress}%</p>
                    </div>
                  )}
                </div>
                {achievement.isUnlocked && (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Courses */}
        <div className="card-nature-elevated mb-8">
          <h2 className="text-section-title mb-6" style={{ color: 'var(--text-primary)' }}>Cours récents</h2>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 rounded-2xl hover:opacity-80 transition-all" style={{ background: 'var(--hover-bg-light)' }}>
                <div className="flex-1">
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{course.category} • {course.duration}</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{course.completedAt}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{course.progress}%</div>
                  <div className="w-16 rounded-full h-2 mt-1" style={{ background: 'var(--hover-bg)' }}>
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${course.progress}%`,
                        background: 'var(--gradient-accent)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Options */}
        <div className="card-nature-elevated overflow-hidden">
          {menuOptions.map((option, index) => (
            <button
              key={option.id}
              className={`w-full flex items-center justify-between p-4 hover:opacity-80 transition-all ${
                index !== menuOptions.length - 1 ? 'border-b' : ''
              }`}
              style={{ 
                borderColor: 'var(--border-light)',
                color: option.isDestructive ? 'var(--text-error)' : 'var(--text-primary)'
              }}
            >
              <div className="flex items-center space-x-3">
                <option.icon className="w-5 h-5" style={{ color: option.isDestructive ? 'var(--text-error)' : 'var(--text-accent)' }} />
                <span className="font-medium">
                  {option.label}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {option.hasBadge && (
                  <div className="text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ background: 'var(--text-error)', color: 'white' }}>
                    3
                  </div>
                )}
                <ChevronRight className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}