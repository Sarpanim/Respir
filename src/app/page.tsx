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
  Sparkles,
  ChevronLeft,
  X
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Données inspirées d'Headspace/Calm
  const featuredContent = [
    {
      id: 1,
      title: "Basics Course",
      subtitle: "Learn the fundamentals of meditation",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=400&h=300&fit=crop&crop=center",
      duration: "10 min",
      type: "course",
      isPremium: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Sleep Stories",
      subtitle: "Calm sounds for better sleep",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      duration: "45 min",
      type: "sleep",
      isPremium: true,
      color: "from-purple-500 to-pink-500"
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
    { icon: Flame, label: "7", subtitle: "days streak", color: "text-orange-400" },
    { icon: Clock, label: "24h", subtitle: "meditated", color: "text-blue-400" },
    { icon: BookOpen, label: "12", subtitle: "courses completed", color: "text-green-400" },
    { icon: Award, label: "3", subtitle: "achievements", color: "text-purple-400" }
  ]

  return (
    <div className="min-h-screen gradient-main">
      {/* Navigation Top - Barre fixe avec logo au centre */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-mobile px-6 py-4 flex items-center justify-between">
          {/* Logo au centre */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--primary-text)' }}>Respir</span>
            </div>
          </div>
          
          {/* Liens à droite */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Search className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
            </button>
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-80 gradient-main border-l" style={{ borderColor: 'var(--border)' }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold" style={{ color: 'var(--primary-text)' }}>Respir</span>
                </div>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
                </button>
              </div>
              
              <nav className="space-y-2">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'explore', label: 'Explore', icon: Search },
                  { id: 'sleep', label: 'Sleep', icon: Moon },
                  { id: 'meditate', label: 'Meditate', icon: Play },
                  { id: 'profile', label: 'Profile', icon: Users }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      setSidebarOpen(false)
                    }}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all ${
                      tab.id === activeTab ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-6 h-6" style={{ color: 'var(--secondary-text)' }} />
                    <span className="text-lg font-medium" style={{ color: 'var(--primary-text)' }}>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* Hero Section - Titre percutant et bouton d'action */}
        <section className="py-16">
          <div className="container-mobile px-6">
            <div className="text-center mb-12">
              <h1 className="text-hero-title mb-6">
                Good Morning, Olivier
              </h1>
              <p className="text-body mb-8 max-w-2xl mx-auto">
                Start your day with mindfulness and peace. Discover meditation, relaxation, and well-being with guided programs adapted to your level and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  <Play className="w-5 h-5 mr-2" />
                  Start for Free
                </button>
                <button className="btn-secondary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Discover Meditations
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content - Cards avec ombres légères */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <h2 className="text-section-title mb-8">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredContent.map((item) => (
                <div key={item.id} className="card-professional">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      {item.type === 'course' ? (
                        <BookOpen className="w-10 h-10 text-white" />
                      ) : (
                        <Moon className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-card-title mb-2">{item.title}</h3>
                      <p className="text-body">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
                        <span className="text-body">{item.duration}</span>
                      </div>
                      {item.isPremium && (
                        <div className="gradient-accent px-3 py-1 rounded-full">
                          <span className="text-white text-sm font-medium">Premium</span>
                        </div>
                      )}
                    </div>
                    <button className="btn-primary">
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
            <div className="card-professional">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-card-title mb-2">{dailyThought.title}</h3>
                  <p className="text-body mb-3">{dailyThought.content}</p>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
                    <span className="text-body">{dailyThought.duration}</span>
                  </div>
                </div>
                <button className="btn-primary">
                  <Play className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* User Stats */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <h2 className="text-section-title mb-8">Your Progress</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {userStats.map((stat, index) => (
                <div key={index} className="card-professional text-center">
                  <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-text)' }}>{stat.label}</div>
                  <div className="text-body">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Content */}
        <section className="py-12">
          <div className="container-mobile px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-section-title">Recommended for you</h2>
              <button className="text-body font-medium flex items-center space-x-2 hover:opacity-80 transition-all">
                <span>View all</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedContent.map((item) => (
                <div key={item.id} className="card-professional">
                  <div className="h-40 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-card-title mb-2">{item.title}</h3>
                  <p className="text-body mb-4">{item.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" style={{ color: 'var(--secondary-text)' }} />
                      <span className="text-body">{item.duration}</span>
                    </div>
                    <button className="btn-primary">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </main>
    </div>
  )
}