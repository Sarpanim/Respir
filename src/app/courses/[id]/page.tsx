'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, ArrowLeft, Clock, Users, Star, Play, CheckCircle, BookOpen, Video, Headphones, Image, FileText } from 'lucide-react'
import Link from 'next/link'
import type { Database } from '@/types/database'

type CoursComplet = Database['public']['Views']['cours_complets']['Row']
type ContenuHierarchie = Database['public']['Views']['contenu_hierarchie']['Row']

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.id as string
  const [cours, setCours] = useState<CoursComplet | null>(null)
  const [contenu, setContenu] = useState<ContenuHierarchie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true)
        
        // Récupérer les détails du cours
        const { data: coursData, error: coursError } = await supabase
          .from('cours_complets')
          .select('*')
          .eq('id', courseId)
          .single()

        if (coursError) throw coursError
        setCours(coursData)

        // Récupérer la hiérarchie du contenu
        const { data: contenuData, error: contenuError } = await supabase
          .from('contenu_hierarchie')
          .select('*')
          .eq('cours_id', courseId)
          .order('section_id, chapitre_id, sous_chapitre_id, contenu_ordre')

        if (contenuError) throw contenuError
        setContenu(contenuData || [])

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement du cours')
      } finally {
        setLoading(false)
      }
    }

    if (courseId) {
      fetchCourseData()
    }
  }, [courseId, supabase])

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'audio': return <Headphones className="h-4 w-4" />
      case 'image': return <Image className="h-4 w-4" />
      case 'quiz': return <CheckCircle className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'video': return 'Vidéo'
      case 'audio': return 'Audio'
      case 'image': return 'Image'
      case 'quiz': return 'Quiz'
      case 'texte': return 'Texte'
      default: return type
    }
  }

  // Grouper le contenu par section
  const contenuBySection = contenu.reduce((acc: any, item) => {
    const sectionId = item.section_id || 'direct'
    if (!acc[sectionId]) {
      acc[sectionId] = {
        section: item.section_titre,
        chapitres: {}
      }
    }
    
    if (item.chapitre_id) {
      const chapitreId = item.chapitre_id
      if (!acc[sectionId].chapitres[chapitreId]) {
        acc[sectionId].chapitres[chapitreId] = {
          chapitre: item.chapitre_titre,
          sous_chapitres: {}
        }
      }
      
      if (item.sous_chapitre_id) {
        const sousChapitreId = item.sous_chapitre_id
        if (!acc[sectionId].chapitres[chapitreId].sous_chapitres[sousChapitreId]) {
          acc[sectionId].chapitres[chapitreId].sous_chapitres[sousChapitreId] = {
            sous_chapitre: item.sous_chapitre_titre,
            contenus: []
          }
        }
        acc[sectionId].chapitres[chapitreId].sous_chapitres[sousChapitreId].contenus.push(item)
      } else {
        // Contenu direct du chapitre
        if (!acc[sectionId].chapitres[chapitreId].contenus) {
          acc[sectionId].chapitres[chapitreId].contenus = []
        }
        acc[sectionId].chapitres[chapitreId].contenus.push(item)
      }
    } else {
      // Contenu direct de la section
      if (!acc[sectionId].contenus) {
        acc[sectionId].contenus = []
      }
      acc[sectionId].contenus.push(item)
    }
    
    return acc
  }, {} as any)

  if (loading) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Chargement du cours...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !cours) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Erreur</CardTitle>
            <CardDescription>
              {error || 'Cours non trouvé'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link href="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux cours
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
        {/* Navigation */}
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux cours
            </Link>
          </Button>
        </div>

        {/* En-tête du cours */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image du cours */}
            <div className="lg:w-1/3">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                {cours.image_url ? (
                  <img 
                    src={cours.image_url} 
                    alt={cours.titre || 'Image du cours'}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Play className="h-16 w-16 text-primary/50" />
                )}
              </div>
            </div>

            {/* Informations du cours */}
            <div className="lg:w-2/3 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge 
                    className={`${getNiveauColor(cours.niveau)}`}
                  >
                    {getNiveauLabel(cours.niveau)}
                  </Badge>
                  <Badge variant="secondary">
                    {cours.categorie_nom}
                  </Badge>
                  {cours.sous_categorie_nom && (
                    <Badge variant="outline">
                      {cours.sous_categorie_nom}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold">{cours.titre}</h1>
                <p className="text-lg text-muted-foreground">{cours.description}</p>
              </div>

              {/* Métadonnées */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{cours.duree} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{Object.keys(contenuBySection).length} sections</span>
                </div>
                {cours.prix && cours.prix > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{cours.prix}€</span>
                  </div>
                )}
                {cours.formule_nom && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {cours.formule_nom}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Tags */}
              {cours.tags_noms.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {cours.tags_noms.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Bullet points */}
              {cours.bullet_points.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Points clés:</h3>
                  <ul className="space-y-1">
                    {cours.bullet_points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button size="lg" className="flex-1">
                  <Play className="mr-2 h-4 w-4" />
                  Commencer le cours
                </Button>
                <Button size="lg" variant="outline">
                  <Star className="mr-2 h-4 w-4" />
                  Favoris
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Contenu du cours</h2>
          
          {Object.keys(contenuBySection).length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Aucun contenu disponible pour ce cours.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {Object.entries(contenuBySection).map(([sectionId, sectionData]: [string, any]) => (
                <Card key={sectionId}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {sectionData.section || 'Contenu principal'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(sectionData.chapitres || {}).map(([chapitreId, chapitreData]: [string, any]) => (
                      <div key={chapitreId} className="space-y-3">
                        <h4 className="font-medium text-lg">{chapitreData.chapitre}</h4>
                        
                        {/* Sous-chapitres */}
                        {Object.entries(chapitreData.sous_chapitres || {}).map(([sousChapitreId, sousChapitreData]: [string, any]) => (
                          <div key={sousChapitreId} className="ml-4 space-y-2">
                            <h5 className="font-medium text-base text-muted-foreground">
                              {sousChapitreData.sous_chapitre}
                            </h5>
                            <div className="space-y-2">
                              {sousChapitreData.contenus.map((contenu: ContenuHierarchie, index: number) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                  {getTypeIcon(contenu.contenu_type)}
                                  <div className="flex-1">
                                    <span className="text-sm font-medium">
                                      {getTypeLabel(contenu.contenu_type)}
                                    </span>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                      {contenu.contenu}
                                    </p>
                                  </div>
                                  <Button size="sm" variant="ghost">
                                    <Play className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        {/* Contenus directs du chapitre */}
                        {chapitreData.contenus && chapitreData.contenus.map((contenu: ContenuHierarchie, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            {getTypeIcon(contenu.contenu_type)}
                            <div className="flex-1">
                              <span className="text-sm font-medium">
                                {getTypeLabel(contenu.contenu_type)}
                              </span>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {contenu.contenu}
                              </p>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Play className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ))}
                    
                    {/* Contenus directs de la section */}
                    {sectionData.contenus && sectionData.contenus.map((contenu: ContenuHierarchie, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        {getTypeIcon(contenu.contenu_type)}
                        <div className="flex-1">
                          <span className="text-sm font-medium">
                            {getTypeLabel(contenu.contenu_type)}
                          </span>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {contenu.contenu}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
