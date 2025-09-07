'use client'

import { useCourses } from '@/hooks/useCourses'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, Search, Filter, Plus } from 'lucide-react'
import { useState } from 'react'

export default function CoursesPage() {
  const { 
    cours, 
    categories, 
    tags, 
    loading, 
    error, 
    createCours,
    getCoursByCategorie,
    searchCours 
  } = useCourses()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredCours = searchQuery 
    ? searchCours(searchQuery)
    : selectedCategory 
      ? getCoursByCategorie(selectedCategory)
      : cours

  const handleCreateSampleCours = async () => {
    if (categories.length === 0) return

    const sampleCours = {
      titre: 'Cours de Test - ' + new Date().toLocaleString('fr-FR'),
      description: 'Ceci est un cours de test créé depuis l\'application.',
      niveau: 'debutant' as const,
      duree: 60,
      prix: 29.99,
      categorie_id: categories[0].id,
      is_active: true,
      ordre: cours.length + 1
    }

    const { error } = await createCours(sampleCours)
    if (error) {
      console.error('Erreur lors de la création du cours:', error)
    }
  }

  if (loading) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Erreur</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Cours</h1>
            <p className="text-muted-foreground">
              {filteredCours.length} cours disponible{filteredCours.length > 1 ? 's' : ''}
            </p>
          </div>
          <Button onClick={handleCreateSampleCours} disabled={categories.length === 0}>
            <Plus className="mr-2 h-4 w-4" />
            Créer un cours test
          </Button>
        </div>

        {/* Filtres et recherche */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un cours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nom}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Liste des cours */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCours.map((cours) => (
            <Card key={cours.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{cours.titre}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {cours.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {cours.niveau}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Informations du cours */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Catégorie:</span>
                    <span>{cours.categorie_nom}</span>
                  </div>
                  {cours.sous_categorie_nom && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sous-catégorie:</span>
                      <span>{cours.sous_categorie_nom}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Durée:</span>
                    <span>{cours.duree} min</span>
                  </div>
                  {cours.prix && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prix:</span>
                      <span className="font-medium">{cours.prix}€</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {cours.tags_noms.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {cours.tags_noms.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {cours.tags_noms.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cours.tags_noms.length - 3}
                      </Badge>
                    )}
                  </div>
                )}

                {/* Bullet points */}
                {cours.bullet_points.length > 0 && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Points clés:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {cours.bullet_points.slice(0, 2).map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="line-clamp-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Voir le cours
                  </Button>
                  <Button size="sm" variant="outline">
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message si aucun cours */}
        {filteredCours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              {searchQuery || selectedCategory 
                ? 'Aucun cours ne correspond à vos critères.'
                : 'Aucun cours disponible pour le moment.'
              }
            </div>
            {!searchQuery && !selectedCategory && (
              <Button 
                onClick={handleCreateSampleCours} 
                className="mt-4"
                disabled={categories.length === 0}
              >
                <Plus className="mr-2 h-4 w-4" />
                Créer le premier cours
              </Button>
            )}
          </div>
        )}

        {/* Statistiques */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{cours.length}</div>
              <p className="text-xs text-muted-foreground">Total des cours</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{categories.length}</div>
              <p className="text-xs text-muted-foreground">Catégories</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{tags.length}</div>
              <p className="text-xs text-muted-foreground">Tags</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
