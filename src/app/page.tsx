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
    { id: '1', title: 'Respiration 4-7-8', duration: '5 min', icon: Wind },
    { id: '2', title: 'Body Scan', duration: '10 min', icon: Target },
    { id: '3', title: 'Visualisation', duration: '8 min', icon: Mountain },
    { id: '4', title: 'Méditation Guidée', duration: '12 min', icon: PlayCircle }
  ]

  const userStats = [
    { icon: Flame, label: "7", subtitle: "jours de suite", color: "text-orange-500" },
    { icon: Clock, label: "4h", subtitle: "médité", color: "text-blue-500" },
    { icon: BookOpen, label: "3", subtitle: "cours terminés", color: "text-green-500" },
    { icon: Award, label: "12", subtitle: "cours cette semaine", color: "text-purple-500" }
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
              <Menu className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Premium</span>
                </span>
              </div>
              <Bell className="w-6 h-6 text-gray-400" />
              <Settings className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
          <div className="p-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 text-purple-700">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Accueil</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <BookOpen className="w-5 h-5" />
                <span>Cours</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Play className="w-5 h-5" />
                <span>Méditations</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Target className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Search className="w-5 h-5" />
                <span>Rechercher</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50">
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
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bonjour, Olivier</h1>
                <p className="text-gray-600">Comment vous sentez-vous aujourd'hui ?</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Prochaine : Méditation du matin</h2>
                  <p className="text-purple-100">Commencez votre journée en douceur</p>
                </div>
                <Sparkles className="w-8 h-8 text-purple-200" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Utilisateurs actifs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-sm text-gray-600">Cours disponibles</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Méditations guidées</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Note moyenne</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Découvrez la méditation, la relaxation et le bien-être
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
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
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Quick Meditations */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Méditation rapide</h2>
              <button className="text-purple-600 font-medium flex items-center space-x-1">
                <span>Voir tout</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickMeditations.map((meditation) => (
                <div key={meditation.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <meditation.icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{meditation.title}</h3>
                  <p className="text-sm text-gray-600">{meditation.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Courses */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Cours guidés</h2>
              <button className="text-purple-600 font-medium flex items-center space-x-1">
                <span>Explorer</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      {course.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            tag === 'Débutant' ? 'bg-green-100 text-green-700' :
                            tag === 'Concentration' ? 'bg-purple-100 text-purple-700' :
                            tag === 'Détente' ? 'bg-blue-100 text-blue-700' :
                            tag === 'Stress' ? 'bg-red-100 text-red-700' :
                            tag === 'Anxiété' ? 'bg-orange-100 text-orange-700' :
                            tag === 'Sommeil' ? 'bg-indigo-100 text-indigo-700' :
                            tag === 'Respiration' ? 'bg-cyan-100 text-cyan-700' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.subtitle}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full btn-primary">
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