"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/Navigation"
import { UserGreeting } from "@/components/user/UserGreeting"
import { PremiumCourseCard } from "@/components/courses/PremiumCourseCard"
import { PremiumTagFilter } from "@/components/filters/PremiumTagFilter"
import Link from "next/link"
import Image from "next/image"
import { 
  Search, 
  Plus, 
  Filter, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Grid3X3,
  List,
  SortAsc,
  Sparkles,
  Flame,
  Heart,
  Zap,
  Target
} from "lucide-react"
import { useState } from "react"

export default function Courses() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Données de démonstration avec le nouveau format premium
  const courses = [
    {
      id: "1",
      title: "Méditation de pleine conscience",
      subtitle: "Découvrez les bases de la méditation",
      description: "Une introduction complète à la méditation de pleine conscience pour débuter votre pratique en douceur et développer votre conscience du moment présent",
      duration_lessons: 10,
      duration_minutes: 120,
      price: 0,
      is_free: true,
      is_premium: false,
      image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.8,
      total_ratings: 1247,
      total_students: 15600,
      level: "debutant" as const,
      instructor: {
        name: "Sarah Johnson",
        avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Pleine Conscience",
        color: "#06B6D4"
      },
      tags: [
        { name: "Débutant", color: "#10B981" },
        { name: "Concentration", color: "#8B5CF6" },
        { name: "Détente", color: "#10B981" }
      ]
    },
    {
      id: "2",
      title: "Gestion du stress et de l'anxiété",
      subtitle: "Techniques avancées pour retrouver la sérénité",
      description: "Apprenez des méthodes éprouvées pour gérer le stress quotidien et réduire l'anxiété avec des techniques de méditation spécialisées",
      duration_lessons: 12,
      duration_minutes: 180,
      price: 29.99,
      is_free: false,
      is_premium: true,
      image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      rating: 4.9,
      total_ratings: 892,
      total_students: 12300,
      level: "intermediaire" as const,
      instructor: {
        name: "Michael Chen",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Stress & Anxiété",
        color: "#F59E0B"
      },
      tags: [
        { name: "Stress", color: "#EF4444" },
        { name: "Anxiété", color: "#F59E0B" },
        { name: "Détente", color: "#10B981" }
      ]
    },
    {
      id: "3",
      title: "Méditation pour le sommeil",
      subtitle: "Améliorez la qualité de votre repos",
      description: "Des techniques spécialement conçues pour vous aider à vous endormir plus facilement et améliorer la qualité de votre sommeil",
      duration_lessons: 8,
      duration_minutes: 150,
      price: 24.99,
      is_free: false,
      is_premium: true,
      image_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      rating: 4.7,
      total_ratings: 634,
      total_students: 8900,
      level: "intermediaire" as const,
      instructor: {
        name: "Emma Wilson",
        avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Sommeil",
        color: "#3B82F6"
      },
      tags: [
        { name: "Sommeil", color: "#3B82F6" },
        { name: "Détente", color: "#10B981" },
        { name: "Respiration", color: "#06B6D4" }
      ]
    },
    {
      id: "4",
      title: "Respiration profonde",
      subtitle: "Techniques de relaxation",
      description: "Maîtrisez les techniques de respiration pour la relaxation et la gestion de l'anxiété avec des exercices pratiques",
      duration_lessons: 6,
      duration_minutes: 90,
      price: 0,
      is_free: true,
      is_premium: false,
      image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      rating: 4.6,
      total_ratings: 456,
      total_students: 5600,
      level: "debutant" as const,
      instructor: {
        name: "David Lee",
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Respiration",
        color: "#10B981"
      },
      tags: [
        { name: "Respiration", color: "#10B981" },
        { name: "Débutant", color: "#10B981" }
      ]
    },
    {
      id: "5",
      title: "Méditation transcendantale",
      subtitle: "Explorez les profondeurs",
      description: "Une formation avancée sur la méditation transcendantale pour les pratiquants expérimentés souhaitant approfondir leur pratique",
      duration_lessons: 15,
      duration_minutes: 300,
      price: 49.99,
      is_free: false,
      is_premium: true,
      image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      rating: 4.9,
      total_ratings: 234,
      total_students: 3200,
      level: "avance" as const,
      instructor: {
        name: "James Taylor",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Avancé",
        color: "#8B5CF6"
      },
      tags: [
        { name: "Avancé", color: "#EF4444" },
        { name: "Concentration", color: "#8B5CF6" }
      ]
    },
    {
      id: "6",
      title: "Méditation de gratitude",
      subtitle: "Cultivez la positivité",
      description: "Apprenez à cultiver la gratitude et la positivité dans votre vie quotidienne grâce à la méditation",
      duration_lessons: 7,
      duration_minutes: 105,
      price: 19.99,
      is_free: false,
      is_premium: true,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      rating: 4.8,
      total_ratings: 567,
      total_students: 7800,
      level: "intermediaire" as const,
      instructor: {
        name: "Lisa Martinez",
        avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Relations",
        color: "#EC4899"
      },
      tags: [
        { name: "Gratitude", color: "#F59E0B" },
        { name: "Positivité", color: "#10B981" }
      ]
    }
  ]

  const categories = [
    { name: "Toutes les catégories", value: "all" },
    { name: "Débutant", value: "debutant" },
    { name: "Stress & Anxiété", value: "stress-anxiete" },
    { name: "Pleine Conscience", value: "pleine-conscience" },
    { name: "Respiration", value: "respiration" },
    { name: "Sommeil", value: "sommeil" },
    { name: "Relations", value: "relations" }
  ]

  const levels = [
    { name: "Tous les niveaux", value: "all" },
    { name: "Débutant", value: "debutant" },
    { name: "Intermédiaire", value: "intermediaire" },
    { name: "Avancé", value: "avance" }
  ]

  const popularTags = [
    { id: "debutant", name: "Débutant", color: "#10B981", bgColor: "#ECFDF5", borderColor: "#10B98140", icon: "sparkles", count: 24, isPopular: true },
    { id: "concentration", name: "Concentration", color: "#8B5CF6", bgColor: "#F3F4F6", borderColor: "#8B5CF640", icon: "star", count: 18, isPopular: true },
    { id: "detente", name: "Détente", color: "#10B981", bgColor: "#ECFDF5", borderColor: "#10B98140", icon: "heart", count: 32, isPopular: true },
    { id: "stress", name: "Stress", color: "#EF4444", bgColor: "#FEF2F2", borderColor: "#EF444440", icon: "zap", count: 15, isPopular: true },
    { id: "sommeil", name: "Sommeil", color: "#3B82F6", bgColor: "#EFF6FF", borderColor: "#3B82F640", icon: "clock", count: 12, isPopular: false },
    { id: "respiration", name: "Respiration", color: "#06B6D4", bgColor: "#ECFEFF", borderColor: "#06B6D440", icon: "heart", count: 9, isPopular: false },
    { id: "gratuit", name: "Gratuit", color: "#059669", bgColor: "#ECFDF5", borderColor: "#05966940", icon: "star", count: 28, isPopular: true },
    { id: "premium", name: "Premium", color: "#7C3AED", bgColor: "#F3F4F6", borderColor: "#7C3AED40", icon: "sparkles", count: 16, isPopular: false }
  ]

  const handleTagSelect = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    )
  }

  const handleClearAll = () => {
    setSelectedTags([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <main>
        {/* User Greeting Section */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            <UserGreeting variant="minimal" showStats={false} />
          </div>
        </section>

        {/* Header */}
        <section className="py-4">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Catalogue des Cours</h1>
                  <p className="text-slate-600 mt-1">{courses.length} cours disponibles</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer un cours
                </Button>
        </div>

              {/* Search and Filters */}
        <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input 
                    placeholder="Rechercher un cours, un instructeur, un tag..." 
                    className="pl-12 pr-4 py-4 border-slate-300 focus:border-slate-400 rounded-xl text-lg"
              />
            </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select>
                    <SelectTrigger className="w-full sm:w-48 border-slate-300 rounded-xl">
                      <SelectValue placeholder="Toutes les catégories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-full sm:w-48 border-slate-300 rounded-xl">
                      <SelectValue placeholder="Tous les niveaux" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="border-slate-300 hover:border-slate-400 rounded-xl">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>

                  <div className="flex gap-2 ml-auto">
                    <Button 
                      variant={viewMode === 'grid' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setViewMode('grid')}
                      className="rounded-xl"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={viewMode === 'list' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setViewMode('list')}
                      className="rounded-xl"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Popular Tags Filter */}
                <PremiumTagFilter 
                  tags={popularTags}
                  selectedTags={selectedTags}
                  onTagSelect={handleTagSelect}
                  onClearAll={handleClearAll}
                  variant="default"
                  showCounts={true}
                  showIcons={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" 
                alt="Montagnes et nuages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl font-bold mb-2">Trouvez votre paix intérieure</h2>
                <p className="text-lg opacity-90">Découvrez nos cours de méditation guidée</p>
              </div>
              </div>
        </div>
        </section>

        {/* Stats Cards */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{courses.length}</p>
                      <p className="text-sm text-slate-600">Cours disponibles</p>
              </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-xl">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">
                        {Math.round(courses.reduce((acc, course) => acc + course.duration_minutes, 0) / 60)}h
                      </p>
                      <p className="text-sm text-slate-600">Contenu total</p>
                </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">
                        {courses.reduce((acc, course) => acc + course.total_students, 0).toLocaleString()}
                      </p>
                      <p className="text-sm text-slate-600">Étudiants inscrits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-xl">
                      <Star className="h-5 w-5 text-yellow-600" />
                </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">
                        {(courses.reduce((acc, course) => acc + course.rating, 0) / courses.length).toFixed(1)}
                      </p>
                      <p className="text-sm text-slate-600">Note moyenne</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>

        {/* Courses Grid/List */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <PremiumCourseCard key={course.id} course={course} variant="default" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {courses.map((course) => (
                  <PremiumCourseCard key={course.id} course={course} variant="compact" />
          ))}
        </div>
            )}

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400 rounded-xl px-8">
                Charger plus de cours
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}