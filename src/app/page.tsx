"use client"

import { useState } from 'react'
import { 
  Play, Heart, Search, Menu, Bell, Settings, Flame, Target, Calendar, Clock, Star, ChevronRight, PlayCircle, BookOpen, Users, Award, TrendingUp, Zap, Moon, Sun, Wind, Mountain, Waves, Leaf, Sparkles, Home, Plus, Filter, Grid, List
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')

  // Données des cours
  const featuredCourses = [
    { 
      id: '1', 
      title: 'Méditation de Pleine Conscience', 
      subtitle: 'Une introduction complète à la méditation de pleine conscience pour débuter votre pratique en douceur', 
      duration: '15 min', 
      level: 'Débutant',
      students: 15600,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tags: ['Débutant', 'Concentration', 'Détente']
    },
    { 
      id: '2', 
      title: 'Gestion du Stress', 
      subtitle: 'Apprenez des méthodes éprouvées pour gérer le stress quotidien et réduire l\'anxiété', 
      duration: '25 min', 
      level: 'Intermédiaire',
      students: 12300,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      tags: ['Stress', 'Anxiété', 'Détente']
    },
    { 
      id: '3', 
      title: 'Sommeil Profond', 
      subtitle: 'Des techniques spécialement conçues pour vous aider à vous endormir plus facilement', 
      duration: '30 min', 
      level: 'Débutant',
      students: 8900,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop',
      tags: ['Sommeil', 'Détente', 'Respiration']
    }
  ]

  const quickMeditations = [
    { id: '1', title: 'Respiration 4-7-8', duration: '5 min', icon: Wind, color: 'text-green-600' },
    { id: '2', title: 'Body Scan', duration: '10 min', icon: Target, color: 'text-amber-600' },
    { id: '3', title: 'Visualisation', duration: '8 min', icon: Mountain, color: 'text-orange-600' },
    { id: '4', title: 'Méditation Guidée', duration: '12 min', icon: PlayCircle, color: 'text-emerald-600' }
  ]

  const userStats = [
    { icon: Flame, label: "7", subtitle: "jours de suite", color: "text-orange-500" },
    { icon: Clock, label: "4h", subtitle: "médité", color: "text-amber-600" },
    { icon: BookOpen, label: "3", subtitle: "cours terminés", color: "text-green-600" },
    { icon: Award, label: "12", subtitle: "cours cette semaine", color: "text-emerald-600" }
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
              <Menu className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 rounded-full" style={{ background: 'var(--gradient-accent)' }}>
                <span className="text-sm font-medium flex items-center space-x-2" style={{ color: 'var(--text-primary)' }}>
                  <Sparkles className="w-4 h-4" />
                  <span>Premium</span>
                </span>
              </div>
              <Bell className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
              <Settings className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
                      </div>
                    </div>
                  </div>
      </nav>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 min-h-screen sticky top-16" style={{ background: 'var(--card-bg)' }}>
          <div className="p-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-3 rounded-2xl" style={{ background: 'var(--hover-bg)' }}>
                <Heart className="w-5 h-5" style={{ color: 'var(--text-accent)' }} />
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Accueil</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <BookOpen className="w-5 h-5" />
                <span>Cours</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Play className="w-5 h-5" />
                <span>Méditations</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Target className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Search className="w-5 h-5" />
                <span>Rechercher</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-2xl hover:opacity-80 transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Sparkles className="w-5 h-5" />
                <span>Commencer</span>
            </div>
          </div>
        </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                alt="Olivier"
                className="w-12 h-12 rounded-full"
                style={{ boxShadow: 'var(--shadow-image)' }}
              />
              <div>
                <h1 className="text-hero-title">Bonjour, Olivier</h1>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>Comment vous sentez-vous aujourd'hui ?</p>
              </div>
            </div>
            
            <div className="card-nature-elevated mb-8" style={{ background: 'var(--gradient-warm)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-section-title mb-2" style={{ color: 'var(--text-primary)' }}>Prochaine : Méditation du matin</h2>
                  <p className="text-body" style={{ color: 'var(--text-secondary)' }}>Commencez votre journée en douceur</p>
                </div>
                <Sparkles className="w-8 h-8" style={{ color: 'var(--text-accent)' }} />
                    </div>
                      </div>
                    </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="card-nature text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>50K+</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Utilisateurs actifs</div>
                    </div>
            <div className="card-nature text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>100+</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Cours disponibles</div>
                  </div>
            <div className="card-nature text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>500+</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Méditations guidées</div>
            </div>
            <div className="card-nature text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>4.9</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Note moyenne</div>
          </div>
        </div>

          {/* Call to Action */}
          <div className="card-nature-elevated mb-8">
            <div className="text-center">
              <h2 className="text-section-title mb-4" style={{ color: 'var(--text-primary)' }}>
                Découvrez la méditation, la relaxation et le bien-être
              </h2>
              <p className="text-body mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Des programmes guidés adaptés à votre niveau et vos besoins pour cultiver la pleine conscience et la sérénité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Commencer gratuitement</span>
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Découvrir les méditations</span>
                </button>
              </div>
            </div>
            </div>
            
          {/* User Progress */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {userStats.map((stat, index) => (
              <div key={index} className="card-nature text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.label}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.subtitle}</div>
                    </div>
            ))}
                    </div>

          {/* Quick Meditations */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-section-title" style={{ color: 'var(--text-primary)' }}>Méditation rapide</h2>
              <button className="flex items-center space-x-1" style={{ color: 'var(--text-accent)' }}>
                <span className="font-medium">Voir tout</span>
                <ChevronRight className="w-4 h-4" />
              </button>
                  </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickMeditations.map((meditation) => (
                <div key={meditation.id} className="card-nature hover:shadow-medium transition-all">
                  <meditation.icon className={`w-8 h-8 mb-3 ${meditation.color}`} />
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{meditation.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{meditation.duration}</p>
                    </div>
              ))}
            </div>
          </div>

          {/* Featured Courses */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-section-title" style={{ color: 'var(--text-primary)' }}>Cours guidés</h2>
              <button className="flex items-center space-x-1" style={{ color: 'var(--text-accent)' }}>
                <span className="font-medium">Explorer</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <div key={course.id} className="card-nature overflow-hidden hover:shadow-medium transition-all">
                  <div className="h-48 rounded-3xl overflow-hidden mb-6" style={{ boxShadow: 'var(--shadow-image)' }}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      {course.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            background: tag === 'Débutant' ? 'var(--accent-green)' :
                            tag === 'Concentration' ? 'var(--accent-mint)' :
                            tag === 'Détente' ? 'var(--accent-cream)' :
                            tag === 'Stress' ? 'var(--accent-sand)' :
                            tag === 'Anxiété' ? 'var(--accent-taupe)' :
                            tag === 'Sommeil' ? 'var(--accent-beige)' :
                            tag === 'Respiration' ? 'var(--accent-green-light)' :
                            'var(--accent-cream)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-card-title mb-2" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                    <p className="text-body mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{course.subtitle}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{course.rating}</span>
            </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
            </div>
          </div>
        </div>
                    <button className="w-full btn-accent">
                      Voir le cours →
                    </button>
            </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}