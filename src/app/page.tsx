"use client"

import { useState } from 'react'
import { 
  Search, 
  Heart, 
  Menu, 
  Bell, 
  Settings,
  Play,
  Clock,
  Star,
  Users,
  BookOpen,
  Home,
  Moon,
  Wind,
  Target,
  Leaf,
  Zap,
  Calendar,
  Flame,
  Award,
  ChevronRight,
  PlayCircle,
  Music,
  Headphones,
  Sparkles
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')

  // Données inspirées des maquettes Silent Moon + Insight Timer
  const featuredContent = [
    {
      id: 1,
      title: "Basics Course",
      subtitle: "Learn the fundamentals of meditation",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=400&h=300&fit=crop&crop=center",
      duration: "10 min",
      type: "course",
      isPremium: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Relaxation Music",
      subtitle: "Calm sounds for better sleep",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      duration: "45 min",
      type: "music",
      isPremium: false,
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  const dailyThought = {
    title: "Daily Thought",
    content: "Take a moment to breathe and center yourself",
    duration: "5 min"
  }

  const recommendedContent = [
    {
      id: 3,
      title: "Focus",
      subtitle: "Improve your concentration",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop&crop=center",
      duration: "15 min",
      type: "meditation"
    },
    {
      id: 4,
      title: "Happiness",
      subtitle: "Cultivate joy and positivity",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=300&h=200&fit=crop&crop=center",
      duration: "20 min",
      type: "meditation"
    }
  ]

  const userStats = [
    { icon: Flame, label: "7", subtitle: "days streak", color: "text-orange-500" },
    { icon: Clock, label: "24h", subtitle: "meditated", color: "text-blue-500" },
    { icon: BookOpen, label: "12", subtitle: "courses completed", color: "text-green-500" },
    { icon: Award, label: "3", subtitle: "achievements", color: "text-purple-500" }
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--secondary-bg)' }}>
      {/* Navigation Top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container-mobile px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-600" />
            <Search className="w-6 h-6 text-gray-600" />
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium flex items-center space-x-1">
                <Sparkles className="w-4 h-4" />
                <span>Premium</span>
              </span>
            </div>
            <Bell className="w-6 h-6 text-gray-600" />
            <Settings className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="text-center mb-8">
              <h1 className="text-premium-title mb-4">
                Good Morning, Olivier
              </h1>
              <p className="text-premium-subtitle mb-6">
                Start your day with mindfulness and peace
              </p>
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">100+</div>
                <div className="text-sm text-gray-600">Available Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">500+</div>
                <div className="text-sm text-gray-600">Guided Meditations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-8">
              <p className="text-premium-body mb-6">
                Discover meditation, relaxation, and well-being with guided programs adapted to your level and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start for Free</span>
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Discover Meditations</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredContent.map((item) => (
                <div key={item.id} className="card-premium p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                      {item.type === 'course' ? (
                        <BookOpen className="w-8 h-8 text-white" />
                      ) : (
                        <Music className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{item.duration}</span>
                      </div>
                      {item.isPremium && (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full">
                          <span className="text-white text-xs font-medium">Premium</span>
                        </div>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Thought */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="card-premium p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{dailyThought.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{dailyThought.content}</p>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">{dailyThought.duration}</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-3 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-200">
                  <Play className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* User Stats */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Progress</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {userStats.map((stat, index) => (
                <div key={index} className="card-premium p-4 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Content */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recommended for you</h2>
              <button className="text-blue-500 text-sm font-medium flex items-center space-x-1">
                <span>View all</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedContent.map((item) => (
                <div key={item.id} className="card-premium p-4">
                  <div className="h-32 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{item.duration}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Spacing for Navigation */}
        <div className="h-20"></div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200">
        <div className="container-mobile px-4 py-2">
          <div className="flex items-center justify-around">
            {[
              { id: 'home', label: 'Home', icon: Home, active: true },
              { id: 'explore', label: 'Explore', icon: Search },
              { id: 'sleep', label: 'Sleep', icon: Moon },
              { id: 'meditate', label: 'Meditate', icon: Play },
              { id: 'profile', label: 'Profile', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all duration-200 ${
                  tab.active 
                    ? 'text-blue-500' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}