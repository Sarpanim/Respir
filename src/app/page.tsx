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
  Headphones
} from "lucide-react"

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <main>
        {/* User Greeting Section */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            <UserGreeting variant="extended" showStats={true} />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-4">
          <div className="container-mobile container-tablet container-desktop">
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 rounded-xl shadow-lg">
                <Play className="h-5 w-5 mr-2" />
                Méditation rapide
              </Button>
              <Button variant="outline" className="border-slate-300 hover:border-slate-400 h-12 rounded-xl">
                <Headphones className="h-5 w-5 mr-2" />
                Écouter
              </Button>
              <Button variant="outline" className="border-slate-300 hover:border-slate-400 h-12 rounded-xl">
                <BookOpen className="h-5 w-5 mr-2" />
                Cours
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Course Hero */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Cours en vedette</h2>
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900" asChild>
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <PremiumCourseCard course={featuredCourses[0]} variant="hero" />
            </div>
          </div>
        </section>

        {/* Popular Tags Filter */}
        <section className="py-4">
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

        {/* Categories */}
        <section className="py-6">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Explorez par catégorie</h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
                    <div className="relative h-32 overflow-hidden">
                      <Image 
                        src={category.image} 
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div 
                        className="absolute inset-0 opacity-60"
                        style={{ background: `linear-gradient(to top, ${category.color}, transparent)` }}
                      ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                          <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                          <p className="text-sm opacity-90 mb-2">{category.description}</p>
                          <Badge className="bg-white/20 text-white border-white/30">
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
        <section className="py-6">
        <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Cours populaires</h2>
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900" asChild>
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredCourses.slice(1).map((course) => (
                  <PremiumCourseCard key={course.id} course={course} variant="featured" />
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* More Courses */}
        <section className="py-6">
        <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-4">
                    <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Découvrez plus</h2>
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900" asChild>
                  <Link href="/courses">
                    Voir tout
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                      </Button>
                    </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularCourses.map((course) => (
                  <PremiumCourseCard key={course.id} course={course} variant="default" />
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="container-mobile container-tablet container-desktop">
          <div className="text-center space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Rejoignez notre communauté
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Des milliers de personnes ont déjà trouvé la paix intérieure avec Respir
              </p>
            </div>
            
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-blue-100">Utilisateurs actifs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                  <div className="text-blue-100">Méditations guidées</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-blue-100">Cours disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
                  <div className="text-blue-100">Note moyenne</div>
                </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Prêt à commencer votre voyage ?
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Découvrez la méditation, la relaxation et le bien-être avec des programmes guidés 
                  adaptés à votre niveau et vos besoins.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg" asChild>
                  <Link href="/courses">Commencer gratuitement</Link>
              </Button>
                <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-400 px-8 py-4 text-lg rounded-xl" asChild>
                  <Link href="/meditations">Découvrir les méditations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}