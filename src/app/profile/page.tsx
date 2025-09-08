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
      color: "text-blue-500",
      trend: "up",
      trendValue: "+2h"
    },
    {
      icon: BookOpen,
      label: "Cours terminés",
      value: `${user.coursesCompleted}`,
      color: "text-green-500",
      trend: "up",
      trendValue: "+1"
    },
    {
      icon: Play,
      label: "Méditations",
      value: `${user.meditationsCompleted}`,
      color: "text-purple-500",
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
      color: "blue"
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
      color: "green"
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
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-purple-600" />
              <Search className="w-6 h-6 text-gray-400" />
              <div className="w-6 h-6" />
            </div>
            
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-400" />
              <Settings className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center">
            {/* Avatar */}
            <div className="relative inline-block mb-6">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2 hover:bg-purple-700 transition-colors">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* User Info */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
            <p className="text-gray-600 mb-4">{user.email}</p>
            
            {/* Level Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-white" />
              <span className="text-white font-medium">{user.level}</span>
            </div>

            {/* Join Date */}
            <p className="text-gray-500 text-sm">Membre depuis {user.joinDate}</p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-green-500">{stat.trendValue}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`flex items-center space-x-4 p-4 rounded-xl ${
                achievement.isUnlocked ? 'bg-gray-50' : 'bg-gray-100'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  achievement.isUnlocked 
                    ? `bg-gradient-to-r ${
                        achievement.color === 'yellow' ? 'from-yellow-500 to-orange-500' :
                        achievement.color === 'orange' ? 'from-orange-500 to-red-500' :
                        achievement.color === 'blue' ? 'from-blue-500 to-purple-500' :
                        achievement.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        'from-green-500 to-teal-500'
                      }`
                    : 'bg-gray-300'
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.isUnlocked ? 'text-white' : 'text-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    achievement.isUnlocked ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    achievement.isUnlocked ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {achievement.description}
                  </p>
                  {achievement.isUnlocked ? (
                    <p className="text-xs text-gray-500 mt-1">
                      Débloqué le {achievement.unlockedDate}
                    </p>
                  ) : (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{achievement.progress}%</p>
                    </div>
                  )}
                </div>
                {achievement.isUnlocked && (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Courses */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Cours récents</h2>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.category} • {course.duration}</p>
                  <p className="text-gray-500 text-xs">{course.completedAt}</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 font-semibold">{course.progress}%</div>
                  <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {menuOptions.map((option, index) => (
            <button
              key={option.id}
              className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                index !== menuOptions.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <option.icon className={`w-5 h-5 ${
                  option.isDestructive ? 'text-red-500' : 'text-gray-600'
                }`} />
                <span className={`font-medium ${
                  option.isDestructive ? 'text-red-500' : 'text-gray-900'
                }`}>
                  {option.label}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {option.hasBadge && (
                  <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </div>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}