"use client"

import { useState } from 'react'
import { 
  Search, Filter, Grid, List, Plus, Star, Users, Clock, Heart, BookOpen, Play, ChevronRight, X, Check
} from 'lucide-react'

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories')
  const [selectedLevel, setSelectedLevel] = useState('Tous les niveaux')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    'Toutes les catégories',
    'Méditation',
    'Stress',
    'Sommeil',
    'Concentration',
    'Détente',
    'Respiration'
  ]

  const levels = [
    'Tous les niveaux',
    'Débutant',
    'Intermédiaire',
    'Avancé'
  ]

  const popularFilters = [
    { label: 'Débutant', count: 24, color: 'var(--accent-green)' },
    { label: 'Concentration', count: 18, color: 'var(--accent-mint)' },
    { label: 'Détente', count: 32, color: 'var(--accent-cream)' },
    { label: 'Stress', count: 15, color: 'var(--accent-sand)' },
    { label: 'Sommeil', count: 12, color: 'var(--accent-beige)' },
    { label: 'Respiration', count: 9, color: 'var(--accent-green-light)' },
    { label: 'Gratuit', count: 28, color: 'var(--accent-taupe)' },
    { label: 'Premium', count: 16, color: 'var(--accent-sand)' }
  ]

  const courses = [
    {
      id: 1,
      title: 'Méditation de Pleine Conscience',
      description: 'Une introduction complète à la méditation de pleine conscience pour débuter votre pratique en douceur et développer votre conscience du moment présent',
      instructor: 'Sarah Johnson',
      duration: '15 min',
      level: 'Débutant',
      students: 15600,
      rating: 4.8,
      price: 'Gratuit',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tags: ['Débutant', 'Concentration', 'Détente'],
      isPremium: false
    },
    {
      id: 2,
      title: 'Gestion du Stress',
      description: 'Apprenez des méthodes éprouvées pour gérer le stress quotidien et réduire l\'anxiété avec des techniques de méditation spécialisées',
      instructor: 'Michael Chen',
      duration: '25 min',
      level: 'Intermédiaire',
      students: 12300,
      rating: 4.9,
      price: 'Premium',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      tags: ['Stress', 'Anxiété', 'Détente'],
      isPremium: true
    },
    {
      id: 3,
      title: 'Sommeil Profond',
      description: 'Des techniques spécialement conçues pour vous aider à vous endormir plus facilement et améliorer la qualité de votre sommeil',
      instructor: 'Emma Wilson',
      duration: '30 min',
      level: 'Débutant',
      students: 8900,
      rating: 4.7,
      price: 'Gratuit',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop',
      tags: ['Sommeil', 'Détente', 'Respiration'],
      isPremium: false
    },
    {
      id: 4,
      title: 'Respiration Consciente',
      description: 'Maîtrisez l\'art de la respiration consciente pour calmer votre esprit et réduire le stress en quelques minutes',
      instructor: 'David Kim',
      duration: '10 min',
      level: 'Débutant',
      students: 11200,
      rating: 4.6,
      price: 'Gratuit',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      tags: ['Respiration', 'Détente', 'Débutant'],
      isPremium: false
    },
    {
      id: 5,
      title: 'Méditation Avancée',
      description: 'Techniques avancées de méditation pour les pratiquants expérimentés souhaitant approfondir leur pratique',
      instructor: 'Lisa Martinez',
      duration: '45 min',
      level: 'Avancé',
      students: 5600,
      rating: 4.9,
      price: 'Premium',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
      tags: ['Avancé', 'Concentration', 'Premium'],
      isPremium: true
    },
    {
      id: 6,
      title: 'Méditation en Mouvement',
      description: 'Combinez méditation et mouvement doux pour une approche holistique du bien-être et de la pleine conscience',
      instructor: 'Alex Thompson',
      duration: '20 min',
      level: 'Intermédiaire',
      students: 7800,
      rating: 4.5,
      price: 'Premium',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      tags: ['Mouvement', 'Intermédiaire', 'Premium'],
      isPremium: true
    }
  ]

  const stats = [
    { label: 'Cours disponibles', value: '6', icon: BookOpen },
    { label: 'Contenu total', value: '16h', icon: Clock },
    { label: 'Étudiants inscrits', value: '53 400', icon: Users },
    { label: 'Note moyenne', value: '4.8', icon: Star }
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
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                alt="Olivier"
                className="w-8 h-8 rounded-full"
                style={{ boxShadow: 'var(--shadow-image)' }}
              />
              <div className="text-sm">
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Bonjour, Olivier</div>
                <div style={{ color: 'var(--text-secondary)' }}>Prêt pour votre séance ?</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-hero-title mb-2" style={{ color: 'var(--text-primary)' }}>Catalogue des Cours</h1>
          <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>6 cours disponibles</p>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  placeholder="Rechercher un cours, un instructeur, un tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl focus:ring-2 focus:ring-opacity-50 transition-all"
                  style={{ 
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-card)'
                  }}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-2xl focus:ring-2 focus:ring-opacity-50 transition-all"
                style={{ 
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 rounded-2xl focus:ring-2 focus:ring-opacity-50 transition-all"
                style={{ 
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 rounded-2xl hover:opacity-80 transition-all"
                style={{ 
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <Filter className="w-5 h-5" />
                <span>Filtres</span>
              </button>
              
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Créer un cours</span>
              </button>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all ${
                  viewMode === 'grid' ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ 
                  background: viewMode === 'grid' ? 'var(--hover-bg)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all ${
                  viewMode === 'list' ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ 
                  background: viewMode === 'list' ? 'var(--hover-bg)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Filters */}
        <div className="mb-8">
          <h3 className="text-section-title mb-4" style={{ color: 'var(--text-primary)' }}>Filtres populaires</h3>
          <div className="flex flex-wrap gap-2">
            {popularFilters.map((filter, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-all"
                style={{ 
                  background: filter.color,
                  color: 'var(--text-primary)'
                }}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card-nature text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--text-accent)' }} />
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses Grid/List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {courses.map((course) => (
            <div key={course.id} className={`card-nature overflow-hidden hover:shadow-medium transition-all ${viewMode === 'list' ? 'flex' : ''}`}>
              {viewMode === 'grid' ? (
                <>
                  <div className="h-48 rounded-3xl overflow-hidden mb-6" style={{ boxShadow: 'var(--shadow-image)' }}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {course.tags.slice(0, 3).map((tag, index) => (
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
                              tag === 'Avancé' ? 'var(--accent-mint)' :
                              tag === 'Intermédiaire' ? 'var(--accent-cream)' :
                              tag === 'Mouvement' ? 'var(--accent-sand)' :
                              tag === 'Premium' ? 'var(--accent-taupe)' :
                              'var(--accent-cream)',
                              color: 'var(--text-primary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {course.isPremium && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--accent-sand)', color: 'var(--text-primary)' }}>
                          Premium
                        </span>
                      )}
                    </div>
                    <h3 className="text-card-title mb-2" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                    <p className="text-body mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{course.description}</p>
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
                </>
              ) : (
                <div className="flex w-full">
                  <div className="w-48 h-32 flex-shrink-0 rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-image)' }}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-card-title" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                      {course.isPremium && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--accent-sand)', color: 'var(--text-primary)' }}>
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-body mb-3 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{course.description}</p>
                    <div className="flex items-center space-x-4 text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {course.tags.slice(0, 3).map((tag, index) => (
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
                              tag === 'Avancé' ? 'var(--accent-mint)' :
                              tag === 'Intermédiaire' ? 'var(--accent-cream)' :
                              tag === 'Mouvement' ? 'var(--accent-sand)' :
                              tag === 'Premium' ? 'var(--accent-taupe)' :
                              'var(--accent-cream)',
                              color: 'var(--text-primary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="btn-accent">
                        Voir le cours →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}