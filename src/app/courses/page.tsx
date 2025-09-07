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
  Filter,
  Grid,
  List,
  SortAsc,
  Moon,
  Wind,
  Target,
  Leaf,
  Zap,
  Home
} from 'lucide-react'

// Import des composants premium
import PremiumCourseCard from '@/components/courses/PremiumCourseCard'
import PremiumFilterTabs from '@/components/filters/PremiumFilterTabs'
import PremiumSearchBar from '@/components/search/PremiumSearchBar'
import PremiumTopNavigation from '@/components/navigation/PremiumTopNavigation'
import PremiumBottomNavigation from '@/components/navigation/PremiumBottomNavigation'

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('home')
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'duration'>('popular')

  // Données des cours premium
  const courses = [
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
      category: "Méditation",
      tags: ["matin", "débutant", "relaxation"]
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
      category: "Stress",
      tags: ["stress", "relaxation", "avancé"]
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
      category: "Sommeil",
      tags: ["sommeil", "nuit", "repos"]
    },
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
      category: "Méditation",
      tags: ["guidée", "court", "débutant"]
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
      category: "Respiration",
      tags: ["respiration", "concentration", "technique"]
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
      category: "Méditation",
      tags: ["avancé", "technique", "approfondi"]
    },
    {
      id: 7,
      title: "Anxiété et Panique",
      subtitle: "Gérer les crises d'angoisse",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=400&h=300&fit=crop&crop=center",
      duration: "20 min",
      level: "intermédiaire" as const,
      rating: 4.7,
      students: 1450,
      isPremium: true,
      category: "Anxiété",
      tags: ["anxiété", "panique", "gestion"]
    },
    {
      id: 8,
      title: "Concentration et Focus",
      subtitle: "Améliorez votre attention",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      duration: "12 min",
      level: "débutant" as const,
      rating: 4.5,
      students: 2200,
      isPremium: false,
      category: "Concentration",
      tags: ["concentration", "focus", "attention"]
    }
  ]

  // Filtres par catégorie
  const filterTabs = [
    { id: 'all', label: 'Tous', count: courses.length },
    { id: 'meditation', label: 'Méditation', count: courses.filter(c => c.category === 'Méditation').length },
    { id: 'stress', label: 'Stress', count: courses.filter(c => c.category === 'Stress').length },
    { id: 'sleep', label: 'Sommeil', count: courses.filter(c => c.category === 'Sommeil').length },
    { id: 'anxiety', label: 'Anxiété', count: courses.filter(c => c.category === 'Anxiété').length },
    { id: 'concentration', label: 'Concentration', count: courses.filter(c => c.category === 'Concentration').length }
  ]

  // Filtrer les cours
  const filteredCourses = courses.filter(course => {
    const matchesFilter = activeFilter === 'all' || course.category.toLowerCase() === activeFilter
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesFilter && matchesSearch
  })

  // Trier les cours
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students
      case 'newest':
        return b.id - a.id
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation Top Premium */}
      <PremiumTopNavigation 
        title="Cours"
        showPremium={true}
        showSearch={true}
        showFavorites={true}
        showMenu={true}
        showNotifications={true}
        showSettings={true}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Découvrez nos cours
              </h1>
              <p className="text-lg text-white/80 mb-6">
                Des programmes adaptés à votre niveau et vos besoins
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <PremiumSearchBar
                placeholder="Rechercher des cours..."
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>

            {/* Filter Tabs */}
            <div className="mb-6">
              <PremiumFilterTabs
                tabs={filterTabs}
                activeTab={activeFilter}
                onTabChange={setActiveFilter}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/10 text-white/60 hover:bg-white/15'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/10 text-white/60 hover:bg-white/15'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'popular' | 'newest' | 'duration')}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popular" className="bg-slate-800">Populaire</option>
                  <option value="newest" className="bg-slate-800">Plus récent</option>
                  <option value="duration" className="bg-slate-800">Durée</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-white/60 text-sm">
                {sortedCourses.length} cours trouvés
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-8">
          <div className="container-mobile px-4">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedCourses.map((course) => (
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
            ) : (
              <div className="space-y-4">
                {sortedCourses.map((course) => (
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
            )}

            {/* Empty State */}
            {sortedCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Aucun cours trouvé
                </h3>
                <p className="text-white/60 mb-6">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveFilter('all')
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
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
          { id: 'explore', label: 'Explorer', icon: Search, active: true },
          { id: 'profile', label: 'Profil', icon: Users },
          { id: 'stats', label: 'Stats', icon: Target }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}