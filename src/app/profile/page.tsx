"use client"

import { useState } from 'react'
import { 
  Settings, 
  Edit, 
  Camera, 
  Award, 
  Target, 
  Calendar, 
  Clock, 
  Flame, 
  Star, 
  TrendingUp, 
  BookOpen, 
  Play, 
  Heart, 
  Download, 
  Share, 
  Bell, 
  Moon, 
  Sun, 
  Shield, 
  HelpCircle, 
  LogOut,
  Home,
  Search,
  Users
} from 'lucide-react'

// Import des composants premium
import PremiumTopNavigation from '@/components/navigation/PremiumTopNavigation'
import PremiumBottomNavigation from '@/components/navigation/PremiumBottomNavigation'

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
      color: "orange",
      trend: "up",
      trendValue: "+2"
    },
    {
      icon: Target,
      label: "Temps médité",
      value: user.totalMeditationTime,
      color: "blue",
      trend: "up",
      trendValue: "+2h"
    },
    {
      icon: BookOpen,
      label: "Cours terminés",
      value: `${user.coursesCompleted}`,
      color: "green",
      trend: "up",
      trendValue: "+1"
    },
    {
      icon: Play,
      label: "Méditations",
      value: `${user.meditationsCompleted}`,
      color: "purple",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation Top Premium */}
      <PremiumTopNavigation 
        title="Profil"
        showPremium={false}
        showSearch={false}
        showFavorites={false}
        showMenu={false}
        showNotifications={false}
        showSettings={true}
      />

      <main className="pt-16">
        {/* Profile Header */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="text-center mb-8">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                />
                <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition-all duration-200">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* User Info */}
              <h1 className="text-2xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-white/60 mb-4">{user.email}</p>
              
              {/* Level Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white font-medium">{user.level}</span>
              </div>

              {/* Join Date */}
              <p className="text-white/60 text-sm">Membre depuis {user.joinDate}</p>
            </div>
          </div>
        </section>

        {/* Statistics Grid */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <h2 className="text-xl font-semibold text-white mb-6">Statistiques</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-200">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${
                    stat.color === 'orange' ? 'text-orange-400' :
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'green' ? 'text-green-400' :
                    'text-purple-400'
                  }`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70 mb-1">{stat.label}</div>
                  <div className="text-xs text-green-400">{stat.trendValue}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <h2 className="text-xl font-semibold text-white mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 ${
                  achievement.isUnlocked ? 'opacity-100' : 'opacity-60'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.isUnlocked 
                        ? `bg-gradient-to-r ${
                            achievement.color === 'yellow' ? 'from-yellow-500 to-orange-500' :
                            achievement.color === 'orange' ? 'from-orange-500 to-red-500' :
                            achievement.color === 'blue' ? 'from-blue-500 to-purple-500' :
                            achievement.color === 'purple' ? 'from-purple-500 to-pink-500' :
                            'from-green-500 to-teal-500'
                          }`
                        : 'bg-white/20'
                    }`}>
                      <achievement.icon className={`w-6 h-6 ${
                        achievement.isUnlocked ? 'text-white' : 'text-white/60'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        achievement.isUnlocked ? 'text-white' : 'text-white/60'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${
                        achievement.isUnlocked ? 'text-white/70' : 'text-white/50'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.isUnlocked ? (
                        <p className="text-xs text-white/60 mt-1">
                          Débloqué le {achievement.unlockedDate}
                        </p>
                      ) : (
                        <div className="mt-2">
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-white/60 mt-1">{achievement.progress}%</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Courses */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <h2 className="text-xl font-semibold text-white mb-6">Cours récents</h2>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{course.title}</h3>
                      <p className="text-white/60 text-sm">{course.category} • {course.duration}</p>
                      <p className="text-white/50 text-xs">{course.completedAt}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{course.progress}%</div>
                      <div className="w-16 bg-white/20 rounded-full h-2 mt-1">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Options */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              {menuOptions.map((option, index) => (
                <button
                  key={option.id}
                  className={`w-full flex items-center justify-between p-4 hover:bg-white/10 transition-all duration-200 ${
                    index !== menuOptions.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <option.icon className={`w-5 h-5 ${
                      option.isDestructive ? 'text-red-400' : 'text-white/80'
                    }`} />
                    <span className={`font-medium ${
                      option.isDestructive ? 'text-red-400' : 'text-white'
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
                    <span className="text-white/60">›</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Spacing for Navigation */}
        <div className="h-20"></div>
      </main>

      {/* Bottom Navigation Premium */}
      <PremiumBottomNavigation
        tabs={[
          { id: 'home', label: 'Accueil', icon: Home },
          { id: 'meditate', label: 'Méditer', icon: Play },
          { id: 'explore', label: 'Explorer', icon: Search },
          { id: 'profile', label: 'Profil', icon: Users, active: true },
          { id: 'stats', label: 'Stats', icon: Target }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}
