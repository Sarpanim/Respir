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
    <div className="min-h-screen" style={{ background: 'var(--primary-bg)' }}>
      {/* Navigation Top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-mobile px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Heart className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
            <Search className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
            <Menu className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="gradient-accent px-6 py-3 rounded-full">
              <span className="text-white text-sm font-medium flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Premium</span>
              </span>
            </div>
            <Bell className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
            <Settings className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <div className="text-center mb-12">
              <h1 className="text-premium-title mb-6" style={{ color: 'var(--primary-text)' }}>
                Good Morning, Olivier
              </h1>
              <p className="text-premium-subtitle mb-8" style={{ color: 'var(--secondary-text)' }}>
                Start your day with mindfulness and peace
              </p>
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>50K+</div>
                <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>100+</div>
                <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Available Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>500+</div>
                <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Guided Meditations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>4.9</div>
                <div className="text-sm" style={{ color: 'var(--secondary-text)' }}>Average Rating</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-12">
              <p className="text-premium-body mb-8" style={{ color: 'var(--secondary-text)' }}>
                Discover meditation, relaxation, and well-being with guided programs adapted to your level and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="gradient-accent text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>Start for Free</span>
                </button>
                <button className="border-2 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center space-x-3" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                  <BookOpen className="w-5 h-5" />
                  <span>Discover Meditations</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--primary-text)' }}>Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredContent.map((item) => (
                <div key={item.id} className="card-premium">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center`}>
                      {item.type === 'course' ? (
                        <BookOpen className="w-10 h-10 text-white" />
                      ) : (
                        <Music className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>{item.title}</h3>
                      <p className="text-lg" style={{ color: 'var(--secondary-text)' }}>{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
                        <span className="text-lg" style={{ color: 'var(--secondary-text)' }}>{item.duration}</span>
                      </div>
                      {item.isPremium && (
                        <div className="gradient-accent px-3 py-1 rounded-full">
                          <span className="text-white text-sm font-medium">Premium</span>
                        </div>
                      )}
                    </div>
                    <button className="gradient-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Thought */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <div className="card-premium mb-12">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>{dailyThought.title}</h3>
                  <p className="text-lg mb-3" style={{ color: 'var(--secondary-text)' }}>{dailyThought.content}</p>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
                    <span className="text-lg" style={{ color: 'var(--secondary-text)' }}>{dailyThought.duration}</span>
                  </div>
                </div>
                <button className="gradient-accent text-white p-4 rounded-2xl hover:opacity-90 transition-all duration-200">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* User Stats */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--primary-text)' }}>Your Progress</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {userStats.map((stat, index) => (
                <div key={index} className="card-premium text-center">
                  <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>{stat.label}</div>
                  <div className="text-lg" style={{ color: 'var(--secondary-text)' }}>{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Content */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold" style={{ color: 'var(--primary-text)' }}>Recommended for you</h2>
              <button className="text-lg font-medium flex items-center space-x-2 hover:opacity-80 transition-all duration-200" style={{ color: 'var(--accent)' }}>
                <span>View all</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedContent.map((item) => (
                <div key={item.id} className="card-premium">
                  <div className="h-40 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>{item.title}</h3>
                  <p className="text-lg mb-4" style={{ color: 'var(--secondary-text)' }}>{item.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
                      <span className="text-lg" style={{ color: 'var(--secondary-text)' }}>{item.duration}</span>
                    </div>
                    <button className="gradient-accent text-white px-6 py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200">
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-mobile px-6 py-4">
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
                className={`flex flex-col items-center space-y-2 py-3 px-4 rounded-xl transition-all duration-200 ${
                  tab.active 
                    ? 'text-white' 
                    : 'hover:text-white'
                }`}
                style={{ 
                  color: tab.active ? 'var(--accent)' : 'var(--secondary-text)',
                  backgroundColor: tab.active ? 'var(--hover-bg)' : 'transparent'
                }}
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}