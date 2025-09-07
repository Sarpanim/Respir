import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/Navigation"
import { CourseCard } from "@/components/courses/CourseCard"
import Link from "next/link"
import Image from "next/image"
import { Search, Plus, Filter, BookOpen, Clock, Users, Star } from "lucide-react"

export default function Courses() {
  // Données de démonstration - seront remplacées par Supabase
  const courses = [
    {
      id: "1",
      title: "Apprendre à méditer - Les bases",
      description: "Découvrez les fondamentaux de la méditation en 10 leçons progressives. Ce cours vous guidera à travers les techniques essentielles pour commencer votre pratique de méditation.",
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
      description: "Techniques avancées pour gérer l'anxiété et réduire le stress quotidien. Apprenez des méthodes éprouvées pour retrouver la sérénité.",
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
    },
    {
      id: "3",
      title: "Méditation de pleine conscience",
      description: "Développez votre conscience du moment présent avec cette formation complète sur la pleine conscience.",
      short_description: "Pleine conscience et présence",
      duration_minutes: 240,
      price: 39.99,
      is_free: false,
      image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      banner_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
      rating: 4.7,
      total_ratings: 1456,
      total_students: 8900,
      level: "avance",
      instructor: {
        name: "Emma Wilson",
        avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Pleine Conscience",
        color: "#06B6D4"
      },
      course_tags: [
        { tag: { name: "Avancé", color: "#EF4444" } },
        { tag: { name: "Concentration", color: "#8B5CF6" } }
      ]
    },
    {
      id: "4",
      title: "Respiration et relaxation",
      description: "Maîtrisez les techniques de respiration pour la relaxation et la gestion de l'anxiété.",
      short_description: "Techniques de respiration",
      duration_minutes: 90,
      price: 0,
      is_free: true,
      image_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      banner_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=400&fit=crop",
      rating: 4.6,
      total_ratings: 789,
      total_students: 5600,
      level: "debutant",
      instructor: {
        name: "David Lee",
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Respiration",
        color: "#10B981"
      },
      course_tags: [
        { tag: { name: "Respiration", color: "#10B981" } },
        { tag: { name: "Débutant", color: "#10B981" } }
      ]
    },
    {
      id: "5",
      title: "Méditation pour le sommeil",
      description: "Améliorez la qualité de votre sommeil avec des techniques de méditation spécialement conçues.",
      short_description: "Méditation et sommeil",
      duration_minutes: 150,
      price: 24.99,
      is_free: false,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      banner_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
      rating: 4.8,
      total_ratings: 923,
      total_students: 6700,
      level: "intermediaire",
      instructor: {
        name: "Lisa Martinez",
        avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Sommeil",
        color: "#3B82F6"
      },
      course_tags: [
        { tag: { name: "Sommeil", color: "#3B82F6" } },
        { tag: { name: "Détente", color: "#10B981" } }
      ]
    },
    {
      id: "6",
      title: "Méditation transcendantale",
      description: "Explorez les profondeurs de la méditation avec cette formation avancée sur la méditation transcendantale.",
      short_description: "Méditation transcendantale",
      duration_minutes: 300,
      price: 49.99,
      is_free: false,
      image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      banner_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
      rating: 4.9,
      total_ratings: 456,
      total_students: 3200,
      level: "avance",
      instructor: {
        name: "James Taylor",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Avancé",
        color: "#8B5CF6"
      },
      course_tags: [
        { tag: { name: "Avancé", color: "#EF4444" } },
        { tag: { name: "Concentration", color: "#8B5CF6" } }
      ]
    }
  ]

  const categories = [
    { name: "Toutes les catégories", value: "all" },
    { name: "Débutant", value: "debutant" },
    { name: "Stress & Anxiété", value: "stress-anxiete" },
    { name: "Pleine Conscience", value: "pleine-conscience" },
    { name: "Respiration", value: "respiration" },
    { name: "Sommeil", value: "sommeil" }
  ]

  const levels = [
    { name: "Tous les niveaux", value: "all" },
    { name: "Débutant", value: "debutant" },
    { name: "Intermédiaire", value: "intermediaire" },
    { name: "Avancé", value: "avance" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
    <div className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Catalogue des Cours</h1>
                  <p className="text-slate-600 mt-2">{courses.length} cours disponibles</p>
          </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer un cours
                </Button>
        </div>

              {/* Search and Filters */}
        <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input 
                    placeholder="Rechercher un cours, une catégorie, un tag..." 
                    className="pl-10 border-slate-300 focus:border-slate-400"
              />
            </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select>
                    <SelectTrigger className="w-full sm:w-48 border-slate-300">
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
                    <SelectTrigger className="w-full sm:w-48 border-slate-300">
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

                  <Button variant="outline" className="border-slate-300 hover:border-slate-400">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                </div>

                {/* Popular Tags */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">Tags populaires:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-200 hover:bg-green-50 cursor-pointer">
                      Gratuit
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 cursor-pointer">
                      Débutant
                    </Badge>
                    <Badge variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50 cursor-pointer">
                      Concentration
                    </Badge>
                    <Badge variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50 cursor-pointer">
                      Stress
                    </Badge>
                    <Badge variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50 cursor-pointer">
                      Sommeil
                    </Badge>
                    <Badge variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 cursor-pointer">
                      Avancé
                    </Badge>
                  </div>
            </div>
          </div>
        </div>

            {/* Hero Image Section */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" 
                alt="Montagnes et nuages"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Trouvez votre paix intérieure</h2>
                <p className="text-lg opacity-90">Découvrez nos cours de méditation guidée</p>
              </div>
        </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{courses.length}</p>
                      <p className="text-sm text-slate-600">Cours disponibles</p>
              </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
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
              
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
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
              
              <Card className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
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

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
          ))}
        </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400">
                Charger plus de cours
              </Button>
            </div>
          </div>
      </div>
      </main>
    </div>
  )
}