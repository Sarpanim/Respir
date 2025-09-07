import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/Navigation"
import Link from "next/link"
import Image from "next/image"
import { Search, Plus, Filter } from "lucide-react"

export default function Courses() {
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
                  <p className="text-slate-600 mt-2">8 cours disponibles</p>
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer un cours test
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
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      <SelectItem value="beginner">Débutant</SelectItem>
                      <SelectItem value="intermediate">Intermédiaire</SelectItem>
                      <SelectItem value="advanced">Avancé</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-full sm:w-48 border-slate-300">
                      <SelectValue placeholder="Tous les niveaux" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les niveaux</SelectItem>
                      <SelectItem value="beginner">Débutant</SelectItem>
                      <SelectItem value="intermediate">Intermédiaire</SelectItem>
                      <SelectItem value="advanced">Avancé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Popular Tags */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">Tags populaires:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 cursor-pointer">
                      Anxiété
                    </Badge>
                    <Badge variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 cursor-pointer">
                      Avancé
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200 hover:bg-green-50 cursor-pointer">
                      Concentration
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 cursor-pointer">
                      Court
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200 hover:bg-green-50 cursor-pointer">
                      Débutant
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 cursor-pointer">
                      Détente
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

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Méditation pour débutants",
                  description: "Apprenez les bases de la méditation en 10 leçons",
                  duration: "10 leçons",
                  level: "Débutant",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                  instructor: "Sarah Johnson",
                  tags: ["Débutant", "Concentration"]
                },
                {
                  title: "Gestion du stress",
                  description: "Techniques avancées pour gérer le stress quotidien",
                  duration: "8 leçons",
                  level: "Intermédiaire",
                  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
                  instructor: "Michael Chen",
                  tags: ["Anxiété", "Détente"]
                },
                {
                  title: "Méditation de pleine conscience",
                  description: "Développez votre conscience du moment présent",
                  duration: "12 leçons",
                  level: "Avancé",
                  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                  instructor: "Emma Wilson",
                  tags: ["Avancé", "Concentration"]
                },
                {
                  title: "Respiration profonde",
                  description: "Maîtrisez les techniques de respiration pour la relaxation",
                  duration: "6 leçons",
                  level: "Débutant",
                  image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
                  instructor: "David Lee",
                  tags: ["Débutant", "Détente"]
                },
                {
                  title: "Méditation pour le sommeil",
                  description: "Améliorez la qualité de votre sommeil",
                  duration: "7 leçons",
                  level: "Intermédiaire",
                  image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
                  instructor: "Lisa Martinez",
                  tags: ["Détente", "Court"]
                },
                {
                  title: "Méditation transcendantale",
                  description: "Explorez les profondeurs de la méditation",
                  duration: "15 leçons",
                  level: "Avancé",
                  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
                  instructor: "James Taylor",
                  tags: ["Avancé", "Concentration"]
                }
              ].map((course, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-slate-200">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                      <p className="text-sm opacity-90">par {course.instructor}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{course.duration}</span>
                      <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-900">
                        Voir le cours →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}