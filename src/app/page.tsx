"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/Navigation"
import { UserGreeting } from "@/components/user/UserGreeting"
import { PremiumCourseCard } from "@/components/courses/PremiumCourseCard"
import { PremiumTagFilter } from "@/components/filters/PremiumTagFilter"
import Link from "next/link"
import Image from "next/image"
import { 
  Play, 
  Heart, 
  Star, 
  Clock, 
  Users, 
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Award,
  Target,
  Plus,
  Sparkles,
  Flame,
  Zap,
  BookOpen,
  Headphones,
  ChevronRight,
  CheckCircle,
  Crown
} from "lucide-react"

export default function Home() {
  // Premium design with dark theme and gradients
  // Données de démonstration avec le nouveau format premium
  const featuredCourses = [
    {
      id: "1",
      title: "Méditation de pleine conscience",
      subtitle: "Découvrez les bases de la méditation",
      description: "Une introduction complète à la méditation de pleine conscience pour débuter votre pratique en douceur",
      duration_lessons: 10,
      duration_minutes: 120,
      price: 0,
      is_free: true,
      is_premium: false,
      image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      gradient: "from-blue-500 to-purple-500",
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
      description: "Apprenez des méthodes éprouvées pour gérer le stress quotidien et réduire l'anxiété",
      duration_lessons: 12,
      duration_minutes: 180,
      price: 29.99,
      is_free: false,
      is_premium: true,
      image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      gradient: "from-orange-500 to-red-500",
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
      description: "Des techniques spécialement conçues pour vous aider à vous endormir plus facilement",
      duration_lessons: 8,
      duration_minutes: 150,
      price: 24.99,
      is_free: false,
      is_premium: true,
      image_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      gradient: "from-indigo-500 to-purple-500",
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
    }
  ]

  const popularCourses = [
    {
      id: "4",
      title: "Respiration profonde",
      subtitle: "Techniques de relaxation",
      description: "Maîtrisez les techniques de respiration pour la relaxation et la gestion de l'anxiété",
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
      description: "Une formation avancée sur la méditation transcendantale pour les pratiquants expérimentés",
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
    }
  ]

  const categories = [
    {
      name: "Apprendre à méditer",
      description: "Découvrez les bases de la méditation",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      color: "#10B981",
      count: 12,
      icon: "sparkles"
    },
    {
      name: "Gérer l'anxiété",
      description: "Techniques pour calmer l'esprit",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      color: "#F59E0B",
      count: 8,
      icon: "heart"
    },
    {
      name: "Réduire le stress",
      description: "Méthodes de relaxation efficaces",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      color: "#EF4444",
      count: 15,
      icon: "zap"
    },
    {
      name: "Améliorer le sommeil",
      description: "Routines pour un repos réparateur",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      color: "#3B82F6",
      count: 6,
      icon: "clock"
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />
      <main>
        {/* Hero Section Premium */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container-mobile container-tablet container-desktop relative z-10">
            <div className="text-center space-y-8">
              {/* Badge Premium */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3">
                <Crown className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-100 font-semibold">Application Premium</span>
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </div>

              {/* Titre Principal */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                  Trouvez votre
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    paix intérieure
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Découvrez la méditation, la relaxation et le bien-être avec des programmes guidés 
                  adaptés à votre niveau et vos besoins.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/courses">
                    <Play className="h-6 w-6 mr-3" />
                    Commencer gratuitement
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 hover:border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg rounded-2xl transition-all duration-300"
                  asChild
                >
                  <Link href="/meditations">
                    <Headphones className="h-6 w-6 mr-3" />
                    Découvrir les méditations
                  </Link>
                </Button>
              </div>

              {/* Stats Premium */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-white">50K+</div>
                  <div className="text-blue-200">Utilisateurs actifs</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-white">500+</div>
                  <div className="text-blue-200">Méditations guidées</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-blue-200">Cours disponibles</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-white">4.9</div>
                  <div className="text-blue-200">Note moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Greeting Section */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="container-mobile container-tablet container-desktop">
            <UserGreeting variant="extended" showStats={true} />
          </div>
        </section>

        {/* Quick Actions Premium */}
        <section className="py-12">
          <div className="container-mobile container-tablet container-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Méditation rapide</h3>
                  <p className="text-blue-200 mb-4">Séances de 5-15 minutes pour un moment de détente</p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                    Commencer
                  </Button>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm hover:from-green-500/20 hover:to-teal-500/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Cours guidés</h3>
                  <p className="text-green-200 mb-4">Programmes complets pour approfondir votre pratique</p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                    Explorer
                  </Button>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm hover:from-pink-500/20 hover:to-rose-500/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bien-être</h3>
                  <p className="text-pink-200 mb-4">Techniques pour améliorer votre qualité de vie</p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                    Découvrir
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Course Hero */}
        <section className="py-16">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Cours en vedette</h2>
                  <p className="text-blue-200 text-lg">Nos programmes les plus populaires</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-white hover:bg-white/10 text-lg px-6 py-3 rounded-xl" 
                  asChild
                >
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <PremiumCourseCard course={featuredCourses[0]} variant="hero" />
            </div>
          </div>
        </section>

        {/* Popular Tags Filter */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="container-mobile container-tablet container-desktop">
            <PremiumTagFilter 
              tags={popularTags}
              selectedTags={[]}
              onTagSelect={() => {}}
              onClearAll={() => {}}
              variant="default"
              showCounts={true}
              showIcons={true}
            />
          </div>
        </section>

        {/* Categories Premium */}
        <section className="py-16">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Explorez par catégorie</h2>
                <p className="text-blue-200 text-lg">Trouvez le programme qui vous correspond</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={category.image} 
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div 
                        className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to top, ${category.color}, transparent)` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                          <p className="text-sm opacity-90 mb-3">{category.description}</p>
                          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {category.count} cours
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Cours populaires</h2>
                  <p className="text-blue-200 text-lg">Les favoris de notre communauté</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-white hover:bg-white/10 text-lg px-6 py-3 rounded-xl" 
                  asChild
                >
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredCourses.slice(1).map((course) => (
                  <PremiumCourseCard key={course.id} course={course} variant="featured" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More Courses */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Découvrez plus</h2>
                  <p className="text-blue-200 text-lg">Explorez notre bibliothèque complète</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-white hover:bg-white/10 text-lg px-6 py-3 rounded-xl" 
                  asChild
                >
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularCourses.map((course) => (
                  <PremiumCourseCard key={course.id} course={course} variant="default" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Premium */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm">
          <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  Prêt à commencer votre
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    voyage intérieur ?
                  </span>
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Rejoignez des milliers de personnes qui ont déjà trouvé la paix intérieure avec Respir
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="/courses">
                    <Sparkles className="h-6 w-6 mr-3" />
                    Commencer gratuitement
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 hover:border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-12 py-6 text-xl rounded-2xl transition-all duration-300" 
                  asChild
                >
                  <Link href="/meditations">
                    <Headphones className="h-6 w-6 mr-3" />
                    Découvrir les méditations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}