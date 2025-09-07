'use client'

import { useCourses } from '@/hooks/useCourses'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, Search, Filter, Plus, Clock, Users, Star, Play } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

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
  const [selectedNiveau, setSelectedNiveau] = useState<string>('')

  const filteredCours = searchQuery 
    ? searchCours(searchQuery)
    : selectedCategory 
      ? getCoursByCategorie(selectedCategory)
      : cours

  const finalFilteredCours = selectedNiveau 
    ? filteredCours.filter(c => c.niveau === selectedNiveau)
    : filteredCours

  const handleCreateSampleCours = async () => {
    if (categories.length === 0) return

    const sampleCours = {
      titre: 'Cours de Test - ' + new Date().toLocaleString('fr-FR'),
      description: 'Ceci est un cours de test créé depuis l\'application. Apprenez les bases de cette technologie avec des exemples pratiques et des exercices.',
      niveau: 'debutant' as const,
      duree: 120,
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

  if (loading) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Chargement des cours...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <span>Erreur de chargement</span>
            </CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.reload()} variant="outline">
              Réessayer
            </Button>
          </CardContent>
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
            <h1 className="text-3xl font-bold tracking-tight">Catalogue des Cours</h1>
            <p className="text-muted-foreground">
              {finalFilteredCours.length} cours disponible{finalFilteredCours.length > 1 ? 's' : ''}
            </p>
          </div>
          <Button onClick={handleCreateSampleCours} disabled={categories.length === 0}>
            <Plus className="mr-2 h-4 w-4" />
            Créer un cours test
          </Button>
        </div>

        {/* Filtres et recherche */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un cours, une catégorie, un tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-w-[150px]"
              >
                <option value="">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nom}
                  </option>
                ))}
              </select>
              <select
                value={selectedNiveau}
                onChange={(e) => setSelectedNiveau(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-w-[150px]"
              >
                <option value="">Tous les niveaux</option>
                <option value="debutant">Débutant</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="confirme">Confirmé</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>
          
          {/* Tags populaires */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground mr-2">Tags populaires:</span>
              {tags.slice(0, 6).map((tag) => (
                <Badge 
                  key={tag.id} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  style={{ borderColor: tag.couleur, color: tag.couleur }}
                >
                  {tag.nom}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Liste des cours */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {finalFilteredCours.map((cours) => (
            <Card key={cours.id} className="hover:shadow-lg transition-all duration-200 group overflow-hidden">
              {/* Image du cours */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                {cours.image_url ? (
                  <img 
                    src={cours.image_url} 
                    alt={cours.titre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Play className="h-12 w-12 text-primary/50" />
                )}
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {cours.titre}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {cours.description}
                    </CardDescription>
                  </div>
                  <Badge 
                    className={`text-xs ${getNiveauColor(cours.niveau)}`}
                  >
                    {getNiveauLabel(cours.niveau)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Informations du cours */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Catégorie:</span>
                    <Badge variant="secondary" className="text-xs">
                      {cours.categorie_nom}
                    </Badge>
                  </div>
                  {cours.sous_categorie_nom && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Sous-catégorie:</span>
                      <span className="text-xs">{cours.sous_categorie_nom}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Durée:
                    </span>
                    <span className="font-medium">{cours.duree} min</span>
                  </div>
                  {cours.prix && cours.prix > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Prix:</span>
                      <span className="font-bold text-lg text-primary">{cours.prix}€</span>
                    </div>
                  )}
                  {cours.formule_nom && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Formule:</span>
                      <Badge variant="outline" className="text-xs">
                        {cours.formule_nom}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {cours.tags_noms.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground">Tags:</h4>
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
                  </div>
                )}

                {/* Bullet points */}
                {cours.bullet_points.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground">Points clés:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {cours.bullet_points.slice(0, 2).map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="line-clamp-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" asChild>
                    <Link href={`/courses/${cours.id}`}>
                      <Play className="mr-2 h-3 w-3" />
                      Voir le cours
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Star className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message si aucun cours */}
        {finalFilteredCours.length === 0 && (
          <div className="text-center py-16">
            <div className="space-y-4">
              <div className="text-6xl">📚</div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {searchQuery || selectedCategory || selectedNiveau
                    ? 'Aucun cours trouvé'
                    : 'Aucun cours disponible'
                  }
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {searchQuery || selectedCategory || selectedNiveau
                    ? 'Essayez de modifier vos critères de recherche ou vos filtres.'
                    : 'Commencez par créer votre premier cours pour démarrer votre plateforme d\'apprentissage.'
                  }
                </p>
              </div>
              {!searchQuery && !selectedCategory && !selectedNiveau && (
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
          </div>
        )}

        {/* Statistiques */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold">{cours.length}</div>
                <div className="text-xs text-muted-foreground">Cours</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold">{categories.length}</div>
                <div className="text-xs text-muted-foreground">Catégories</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold">{tags.length}</div>
                <div className="text-xs text-muted-foreground">Tags</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold">
                  {cours.reduce((acc, c) => acc + c.duree, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Minutes totales</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
