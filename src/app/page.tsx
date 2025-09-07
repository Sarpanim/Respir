"use client"

import { useState } from 'react'
import { 
  Play, 
  Heart, 
  Search, 
  Menu, 
  Bell, 
  Settings,
  Flame,
  Target,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  PlayCircle,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Zap,
  Moon,
  Sun,
  Wind,
  Mountain,
  Waves,
  Leaf,
  Sparkles,
  Home
} from 'lucide-react'

// Import des composants premium
import PremiumCourseCard from '@/components/courses/PremiumCourseCard'
import PremiumStatsCard from '@/components/stats/PremiumStatsCard'
import PremiumCategoryCard from '@/components/categories/PremiumCategoryCard'
import PremiumTopNavigation from '@/components/navigation/PremiumTopNavigation'
import PremiumBottomNavigation from '@/components/navigation/PremiumBottomNavigation'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')

  // Données des cours premium
  const featuredCourses = [
    {
      id: 1,
      title: "Méditation du Matin",
      subtitle: "Commencez votre journée en douceur",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=400&h=300&fit=crop&crop=center",
      duration: "10 min",
      level: "débutant" as const,
      rating: 4.8,
      students: 1250,
      isPremium: false,
      category: "Méditation"
    },
    {
      id: 2,
      title: "Gestion du Stress",
      subtitle: "Techniques avancées de relaxation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      duration: "25 min",
      level: "intermédiaire" as const,
      rating: 4.9,
      students: 890,
      isPremium: true,
      category: "Stress"
    },
    {
      id: 3,
      title: "Sommeil Profond",
      subtitle: "Méditations pour un repos réparateur",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
      duration: "30 min",
      level: "débutant" as const,
      rating: 4.7,
      students: 2100,
      isPremium: false,
      category: "Sommeil"
    }
  ]

  const popularCourses = [
    {
      id: 4,
      title: "Méditation Guidée",
      subtitle: "Séances courtes et efficaces",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=400&h=300&fit=crop&crop=center",
      duration: "5 min",
      level: "débutant" as const,
      rating: 4.6,
      students: 3200,
      isPremium: false,
      category: "Méditation"
    },
    {
      id: 5,
      title: "Respiration Consciente",
      subtitle: "Maîtrisez votre souffle",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      duration: "15 min",
      level: "intermédiaire" as const,
      rating: 4.8,
      students: 1800,
      isPremium: false,
      category: "Respiration"
    },
    {
      id: 6,
      title: "Méditation Avancée",
      subtitle: "Techniques approfondies",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
      duration: "45 min",
      level: "avancé" as const,
      rating: 4.9,
      students: 650,
      isPremium: true,
      category: "Méditation"
    }
  ]

  const categories = [
    { id: "meditation", name: "Méditation", icon: Moon, color: "from-blue-500 to-purple-600", count: 45 },
    { id: "stress", name: "Stress", icon: Wind, color: "from-green-500 to-teal-600", count: 28 },
    { id: "sleep", name: "Sommeil", icon: Moon, color: "from-indigo-500 to-blue-600", count: 32 },
    { id: "anxiety", name: "Anxiété", icon: Heart, color: "from-pink-500 to-rose-600", count: 19 },
    { id: "focus", name: "Concentration", icon: Target, color: "from-yellow-500 to-orange-600", count: 23 },
    { id: "wellness", name: "Bien-être", icon: Leaf, color: "from-emerald-500 to-green-600", count: 37 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation Top Premium */}
      <PremiumTopNavigation 
        showPremium={true}
        showSearch={true}
        showFavorites={true}
        showMenu={true}
        showNotifications={true}
        showSettings={true}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="container-mobile px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Bonjour, Olivier 👋
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Comment vous sentez-vous aujourd'hui ?
              </p>
              
              {/* Prochaine méditation */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm">Prochaine : Méditation du matin</span>
                      </div>
                    </div>

            {/* Stats Grid Premium */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <PremiumStatsCard
                icon={Flame}
                value="7"
                label="jours de suite"
                color="orange"
                trend="up"
                trendValue="+2"
              />
              <PremiumStatsCard
                icon={Target}
                value="3"
                label="cours terminés"
                color="blue"
                trend="up"
                trendValue="+1"
              />
              <PremiumStatsCard
                icon={Clock}
                value="4h"
                label="médité"
                color="green"
                trend="up"
                trendValue="+30min"
              />
              <PremiumStatsCard
                icon={Calendar}
                value="12"
                label="cours cette semaine"
                color="purple"
                trend="up"
                trendValue="+3"
              />
                  </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <PlayCircle className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Méditation rapide</h3>
                    <p className="text-sm text-white/70">Séances de 5-15 minutes</p>
            </div>
          </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  Commencer
                </button>
            </div>
            
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Cours guidés</h3>
                    <p className="text-sm text-white/70">Programmes complets</p>
                      </div>
                    </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-200">
                  Explorer
                </button>
            </div>
          </div>
        </div>
      </section>

        {/* Categories Section */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Catégories</h2>
              <button className="text-blue-400 text-sm font-medium">Voir tout →</button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <PremiumCategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  icon={category.icon}
                  color={category.color}
                  count={category.count}
                  isPopular={category.id === 'meditation' || category.id === 'stress'}
                />
              ))}
          </div>
        </div>
      </section>

        {/* Featured Courses */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Cours en vedette</h2>
              <button className="text-blue-400 text-sm font-medium">Voir tout →</button>
            </div>
            
            <div className="space-y-4">
              {featuredCourses.map((course) => (
                <PremiumCourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  subtitle={course.subtitle}
                  image={course.image}
                  duration={course.duration}
                  level={course.level}
                  rating={course.rating}
                  students={course.students}
                  isPremium={course.isPremium}
                  category={course.category}
                  variant="featured"
                />
              ))}
          </div>
        </div>
      </section>

        {/* Popular Courses */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Populaires</h2>
              <button className="text-blue-400 text-sm font-medium">Voir tout →</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularCourses.map((course) => (
                <PremiumCourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  subtitle={course.subtitle}
                  image={course.image}
                  duration={course.duration}
                  level={course.level}
                  rating={course.rating}
                  students={course.students}
                  isPremium={course.isPremium}
                  category={course.category}
                  variant="default"
                />
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
          { id: 'home', label: 'Accueil', icon: Home, active: true },
          { id: 'meditate', label: 'Méditer', icon: Play },
          { id: 'explore', label: 'Explorer', icon: Search },
          { id: 'profile', label: 'Profil', icon: Users },
          { id: 'stats', label: 'Stats', icon: TrendingUp, badge: 3 }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}
