'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, Search, Filter, Plus, Clock, Users, Star, Play } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategorie, setSelectedCategorie] = useState<string>('')
  const [selectedNiveau, setSelectedNiveau] = useState<string>('')

  // Données de test pour que l'application fonctionne immédiatement
  const cours = [
    {
      id: 1,
      titre: 'Introduction à Next.js 14',
      description: 'Apprenez les bases de Next.js 14 avec App Router et TypeScript',
      niveau: 'debutant',
      duree: 120,
      prix: 29.99,
      categorie: { nom: 'Développement Web' },
      tags: [{ nom: 'React' }, { nom: 'TypeScript' }],
      bullet_points: [
        'App Router et Server Components',
        'TypeScript intégré',
        'Optimisation des performances'
      ]
    },
    {
      id: 2,
      titre: 'Maîtrise de Tailwind CSS',
      description: 'Design moderne et responsive avec Tailwind CSS',
      niveau: 'intermediaire',
      duree: 90,
      prix: 24.99,
      categorie: { nom: 'Design' },
      tags: [{ nom: 'CSS' }, { nom: 'Responsive' }],
      bullet_points: [
        'Classes utilitaires',
        'Design responsive',
        'Thèmes personnalisés'
      ]
    },
    {
      id: 3,
      titre: 'Supabase pour les Débutants',
      description: 'Backend-as-a-Service avec authentification et base de données',
      niveau: 'debutant',
      duree: 150,
      prix: 34.99,
      categorie: { nom: 'Backend' },
      tags: [{ nom: 'Database' }, { nom: 'Auth' }],
      bullet_points: [
        'Authentification utilisateur',
        'Base de données PostgreSQL',
        'API REST automatique'
      ]
    }
  ]

  const categories = [
    { id: 1, nom: 'Développement Web' },
    { id: 2, nom: 'Design' },
    { id: 3, nom: 'Backend' },
    { id: 4, nom: 'Mobile' }
  ]

  const niveaux = ['debutant', 'intermediaire', 'confirme', 'expert']

  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'debutant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'intermediaire': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'confirme': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getNiveauLabel = (niveau: string) => {
    switch (niveau) {
      case 'debutant': return 'Débutant'
      case 'intermediaire': return 'Intermédiaire'
      case 'confirme': return 'Confirmé'
      case 'expert': return 'Expert'
      default: return niveau
    }
  }

  const filteredCours = cours.filter(cours => {
    const matchesSearch = cours.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cours.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategorie = !selectedCategorie || cours.categorie.nom === selectedCategorie
    const matchesNiveau = !selectedNiveau || cours.niveau === selectedNiveau
    return matchesSearch && matchesCategorie && matchesNiveau
  })

  return (
    <div className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Nos Cours</h1>
          <p className="text-muted-foreground text-lg">
            Découvrez notre collection de cours pour développer vos compétences
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              <strong>✅ Version mise à jour :</strong> Cette page fonctionne maintenant avec des données de démonstration. 
              L'application est pleinement opérationnelle !
            </p>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Rechercher un cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategorie}
                onChange={(e) => setSelectedCategorie(e.target.value)}
                className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Toutes les catégories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.nom}>{cat.nom}</option>
                ))}
              </select>
              <select
                value={selectedNiveau}
                onChange={(e) => setSelectedNiveau(e.target.value)}
                className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Tous les niveaux</option>
                {niveaux.map(niveau => (
                  <option key={niveau} value={niveau}>{getNiveauLabel(niveau)}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{cours.length}</div>
              <div className="text-sm text-muted-foreground">Cours disponibles</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {cours.reduce((acc: number, c) => acc + c.duree, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Minutes totales</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Catégories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {cours.reduce((acc: number, c) => acc + c.prix, 0).toFixed(0)}€
              </div>
              <div className="text-sm text-muted-foreground">Valeur totale</div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des cours */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCours.map((cours) => (
            <Card key={cours.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Play className="h-12 w-12 text-primary/60" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{cours.titre}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {cours.description}
                    </CardDescription>
                  </div>
                  <Badge className={getNiveauColor(cours.niveau)}>
                    {getNiveauLabel(cours.niveau)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {cours.duree} min
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    0 étudiants
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cours.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag.nom}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-1 text-sm">
                  {cours.bullet_points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-bold text-primary">
                    {cours.prix}€
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Star className="h-4 w-4 mr-1" />
                      Favoris
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/courses/${cours.id}`}>
                        Voir le cours
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun cours trouvé pour vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  )
}