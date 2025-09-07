import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/Navigation"
import { MeditationCard } from "@/components/meditation/MeditationCard"
import { CourseCard } from "@/components/courses/CourseCard"
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
  Target
} from "lucide-react"

export default function Home() {
  // Données de démonstration - seront remplacées par Supabase
  const featuredMeditations = [
    {
      id: "1",
      title: "Méditation de pleine conscience",
      description: "Une séance de 10 minutes pour développer votre conscience du moment présent",
      duration_minutes: 10,
      image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      background_image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      rating: 4.8,
      total_ratings: 1247,
      play_count: 15600,
      is_free: true,
      instructor: {
        name: "Sarah Johnson",
        avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Pleine Conscience",
        color: "#06B6D4"
      },
      meditation_tags: [
        { tag: { name: "Débutant", color: "#10B981" } },
        { tag: { name: "Concentration", color: "#8B5CF6" } }
      ]
    },
    {
      id: "2",
      title: "Gestion du stress",
      description: "Techniques de relaxation pour réduire le stress quotidien",
      duration_minutes: 15,
      image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      background_image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      rating: 4.9,
      total_ratings: 892,
      play_count: 12300,
      is_free: true,
      instructor: {
        name: "Michael Chen",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Stress & Anxiété",
        color: "#F59E0B"
      },
      meditation_tags: [
        { tag: { name: "Stress", color: "#EF4444" } },
        { tag: { name: "Détente", color: "#10B981" } }
      ]
    },
    {
      id: "3",
      title: "Méditation pour le sommeil",
      description: "Une séance apaisante pour améliorer la qualité de votre sommeil",
      duration_minutes: 20,
      image_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      background_image_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=400&fit=crop",
      rating: 4.7,
      total_ratings: 634,
      play_count: 8900,
      is_free: false,
      instructor: {
        name: "Emma Wilson",
        avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Sommeil",
        color: "#3B82F6"
      },
      meditation_tags: [
        { tag: { name: "Sommeil", color: "#3B82F6" } },
        { tag: { name: "Détente", color: "#10B981" } }
      ]
    }
  ]

  const popularCourses = [
    {
      id: "1",
      title: "Apprendre à méditer - Les bases",
      description: "Découvrez les fondamentaux de la méditation en 10 leçons progressives",
      short_description: "Les bases de la méditation",
      duration_minutes: 120,
      price: 0,
      is_free: true,
      image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      banner_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      rating: 4.8,
      total_ratings: 2341,
      total_students: 15600,
      level: "debutant",
      instructor: {
        name: "Sarah Johnson",
        avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Débutant",
        color: "#10B981"
      },
      course_tags: [
        { tag: { name: "Débutant", color: "#10B981" } },
        { tag: { name: "Concentration", color: "#8B5CF6" } }
      ]
    },
    {
      id: "2",
      title: "Gérer l'anxiété et le stress",
      description: "Techniques avancées pour gérer l'anxiété et réduire le stress quotidien",
      short_description: "Gestion du stress et de l'anxiété",
      duration_minutes: 180,
      price: 29.99,
      is_free: false,
      image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      banner_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      rating: 4.9,
      total_ratings: 1892,
      total_students: 12300,
      level: "intermediaire",
      instructor: {
        name: "Michael Chen",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Stress & Anxiété",
        color: "#F59E0B"
      },
      course_tags: [
        { tag: { name: "Anxiété", color: "#F59E0B" } },
        { tag: { name: "Stress", color: "#EF4444" } }
      ]
    }
  ]

  const categories = [
    {
      name: "Apprendre à méditer",
      description: "Découvrez les bases de la méditation",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      color: "#10B981",
      count: 12
    },
    {
      name: "Gérer l'anxiété",
      description: "Techniques pour calmer l'esprit",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      color: "#F59E0B",
      count: 8
    },
    {
      name: "Réduire le stress",
      description: "Méthodes de relaxation efficaces",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      color: "#EF4444",
      count: 15
    },
    {
      name: "Améliorer le sommeil",
      description: "Routines pour un repos réparateur",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      color: "#3B82F6",
      count: 6
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                  Trouvez votre paix intérieure
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Découvrez la méditation, la relaxation et le bien-être avec des programmes guidés 
                  adaptés à votre niveau et vos besoins.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Play className="h-5 w-5 mr-2" />
                  Commencer gratuitement
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400 px-8 py-4 text-lg">
                  Découvrir les programmes
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What brings you here section */}
        <section className="py-16 bg-white">
          <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Qu'est-ce qui vous amène ici ?
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Choisissez votre parcours de bien-être personnalisé
                </p>
              </div>
              
              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={category.image} 
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div 
                        className="absolute inset-0 opacity-60"
                        style={{ background: `linear-gradient(to top, ${category.color}, transparent)` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
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

        {/* Featured Meditations */}
        <section className="py-16 bg-slate-50">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Méditations populaires
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Découvrez nos séances les plus appréciées
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredMeditations.map((meditation) => (
                  <MeditationCard key={meditation.id} meditation={meditation} />
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400" asChild>
                  <Link href="/meditations">
                    Voir toutes les méditations
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 bg-white">
          <div className="container-mobile container-tablet container-desktop">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Cours recommandés
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Apprenez à votre rythme avec nos programmes structurés
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {popularCourses.map((course) => (
                  <CourseCard key={course.id} course={course} variant="featured" />
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400" asChild>
                  <Link href="/courses">
                    Voir tous les cours
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container-mobile container-tablet container-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-400">50K+</div>
                <div className="text-slate-300">Utilisateurs actifs</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-green-400">500+</div>
                <div className="text-slate-300">Méditations guidées</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-400">100+</div>
                <div className="text-slate-300">Cours disponibles</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Prêt à commencer votre voyage ?
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Rejoignez des milliers de personnes qui ont trouvé la paix intérieure avec Respir
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" asChild>
                  <Link href="/courses">Explorer les cours</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg" asChild>
                  <Link href="/login">S'inscrire gratuitement</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}