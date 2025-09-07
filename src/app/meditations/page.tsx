import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/Navigation"
import { MeditationCard } from "@/components/meditation/MeditationCard"
import Link from "next/link"
import Image from "next/image"
import { Search, Plus, Filter, Play, Clock, Star, Heart } from "lucide-react"

export default function Meditations() {
  // Données de démonstration - seront remplacées par Supabase
  const meditations = [
    {
      id: "1",
      title: "Méditation de pleine conscience",
      description: "Une séance de 10 minutes pour développer votre conscience du moment présent et réduire le stress",
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
      description: "Techniques de relaxation pour réduire le stress quotidien et retrouver la sérénité",
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
      description: "Une séance apaisante pour améliorer la qualité de votre sommeil et vous endormir plus facilement",
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
    },
    {
      id: "4",
      title: "Respiration profonde",
      description: "Techniques de respiration pour la relaxation et la gestion de l'anxiété",
      duration_minutes: 8,
      image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      background_image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
      rating: 4.6,
      total_ratings: 456,
      play_count: 6700,
      is_free: true,
      instructor: {
        name: "David Lee",
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Respiration",
        color: "#10B981"
      },
      meditation_tags: [
        { tag: { name: "Respiration", color: "#10B981" } },
        { tag: { name: "Débutant", color: "#10B981" } }
      ]
    },
    {
      id: "5",
      title: "Méditation transcendantale",
      description: "Explorez les profondeurs de la méditation avec cette séance avancée",
      duration_minutes: 30,
      image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      background_image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
      rating: 4.9,
      total_ratings: 234,
      play_count: 3200,
      is_free: false,
      instructor: {
        name: "James Taylor",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Avancé",
        color: "#8B5CF6"
      },
      meditation_tags: [
        { tag: { name: "Avancé", color: "#EF4444" } },
        { tag: { name: "Concentration", color: "#8B5CF6" } }
      ]
    },
    {
      id: "6",
      title: "Méditation de gratitude",
      description: "Cultivez la gratitude et la positivité dans votre vie quotidienne",
      duration_minutes: 12,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      background_image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
      rating: 4.8,
      total_ratings: 567,
      play_count: 7800,
      is_free: true,
      instructor: {
        name: "Lisa Martinez",
        avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      category: {
        name: "Relations",
        color: "#EC4899"
      },
      meditation_tags: [
        { tag: { name: "Gratitude", color: "#F59E0B" } },
        { tag: { name: "Positivité", color: "#10B981" } }
      ]
    }
  ]

  const categories = [
    { name: "Toutes les catégories", value: "all" },
    { name: "Pleine Conscience", value: "pleine-conscience" },
    { name: "Stress & Anxiété", value: "stress-anxiete" },
    { name: "Sommeil", value: "sommeil" },
    { name: "Respiration", value: "respiration" },
    { name: "Relations", value: "relations" }
  ]

  const durations = [
    { name: "Toutes les durées", value: "all" },
    { name: "Court (5-10 min)", value: "short" },
    { name: "Moyen (10-20 min)", value: "medium" },
    { name: "Long (20+ min)", value: "long" }
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
                  <h1 className="text-3xl font-bold text-slate-900">Méditations guidées</h1>
                  <p className="text-slate-600 mt-2">{meditations.length} méditations disponibles</p>
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer une méditation
                </Button>
              </div>

              {/* Search and Filters */}
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input 
                    placeholder="Rechercher une méditation, un instructeur, un tag..." 
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
                      <SelectValue placeholder="Toutes les durées" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          {duration.name}
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
                      Débutant
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 cursor-pointer">
                      Court
                    </Badge>
                    <Badge variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50 cursor-pointer">
                      Concentration
                    </Badge>
                    <Badge variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50 cursor-pointer">
                      Stress
                    </Badge>
                    <Badge variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50 cursor-pointer">
                      Gratuit
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" 
                alt="Paysage de méditation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Trouvez votre moment de paix</h2>
                <p className="text-lg opacity-90">Découvrez nos méditations guidées pour tous les niveaux</p>
              </div>
            </div>

            {/* Meditations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meditations.map((meditation) => (
                <MeditationCard key={meditation.id} meditation={meditation} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400">
                Charger plus de méditations
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
