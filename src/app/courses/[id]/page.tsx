'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, Users, Star, Play, Video, Headphones, Image, CheckCircle, FileText } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.id as string

  // Données de test pour les cours
  const coursData = {
    1: {
      id: 1,
      titre: 'Introduction à Next.js 14',
      description: 'Apprenez les bases de Next.js 14 avec App Router et TypeScript. Ce cours complet vous guidera à travers toutes les fonctionnalités modernes de Next.js.',
      niveau: 'debutant',
      duree: 120,
      prix: 29.99,
      categorie: { nom: 'Développement Web' },
      tags: [{ nom: 'React' }, { nom: 'TypeScript' }, { nom: 'SSR' }],
      bullet_points: [
        'App Router et Server Components',
        'TypeScript intégré',
        'Optimisation des performances',
        'Déploiement sur Vercel'
      ],
      sections: [
        {
          id: 1,
          titre: 'Introduction',
          chapitres: [
            {
              id: 1,
              titre: 'Qu\'est-ce que Next.js ?',
              contenu: [
                { type: 'video', titre: 'Vidéo d\'introduction', duree: 15 },
                { type: 'text', titre: 'Histoire de Next.js', contenu: 'Next.js a été créé par Vercel...' }
              ]
            },
            {
              id: 2,
              titre: 'Installation et configuration',
              contenu: [
                { type: 'video', titre: 'Installation', duree: 10 },
                { type: 'text', titre: 'Configuration TypeScript', contenu: 'Configuration du projet...' }
              ]
            }
          ]
        },
        {
          id: 2,
          titre: 'App Router',
          chapitres: [
            {
              id: 3,
              titre: 'Routage avec App Router',
              contenu: [
                { type: 'video', titre: 'Création de routes', duree: 20 },
                { type: 'text', titre: 'Layouts et templates', contenu: 'Utilisation des layouts...' }
              ]
            }
          ]
        }
      ]
    },
    2: {
      id: 2,
      titre: 'Maîtrise de Tailwind CSS',
      description: 'Design moderne et responsive avec Tailwind CSS. Apprenez à créer des interfaces utilisateur magnifiques et performantes.',
      niveau: 'intermediaire',
      duree: 90,
      prix: 24.99,
      categorie: { nom: 'Design' },
      tags: [{ nom: 'CSS' }, { nom: 'Responsive' }, { nom: 'Utility-first' }],
      bullet_points: [
        'Classes utilitaires',
        'Design responsive',
        'Thèmes personnalisés',
        'Optimisation des performances'
      ],
      sections: [
        {
          id: 1,
          titre: 'Bases de Tailwind',
          chapitres: [
            {
              id: 1,
              titre: 'Installation et configuration',
              contenu: [
                { type: 'video', titre: 'Installation', duree: 10 },
                { type: 'text', titre: 'Configuration', contenu: 'Configuration du projet...' }
              ]
            }
          ]
        }
      ]
    },
    3: {
      id: 3,
      titre: 'Supabase pour les Débutants',
      description: 'Backend-as-a-Service avec authentification et base de données. Apprenez à utiliser Supabase pour vos applications modernes.',
      niveau: 'debutant',
      duree: 150,
      prix: 34.99,
      categorie: { nom: 'Backend' },
      tags: [{ nom: 'Database' }, { nom: 'Auth' }, { nom: 'API' }],
      bullet_points: [
        'Authentification utilisateur',
        'Base de données PostgreSQL',
        'API REST automatique',
        'Stockage de fichiers'
      ],
      sections: [
        {
          id: 1,
          titre: 'Introduction à Supabase',
          chapitres: [
            {
              id: 1,
              titre: 'Création d\'un projet',
              contenu: [
                { type: 'video', titre: 'Création du projet', duree: 15 },
                { type: 'text', titre: 'Configuration', contenu: 'Configuration du projet...' }
              ]
            }
          ]
        }
      ]
    }
  }

  const cours = coursData[courseId as '1' | '2' | '3']

  if (!cours) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
            <p className="text-muted-foreground mb-4">Le cours demandé n'existe pas.</p>
            <Button asChild>
              <Link href="/courses">Retour aux cours</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />
      case 'audio': return <Headphones className="h-4 w-4" />
      case 'image': return <Image className="h-4 w-4" />
      case 'quiz': return <CheckCircle className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
        {/* Navigation */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux cours
            </Link>
          </Button>
        </div>

        {/* En-tête du cours */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className={getNiveauColor(cours.niveau)}>
                    {getNiveauLabel(cours.niveau)}
                  </Badge>
                  <Badge variant="outline">{cours.categorie.nom}</Badge>
                </div>
                <h1 className="text-3xl font-bold">{cours.titre}</h1>
                <p className="text-lg text-muted-foreground">{cours.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cours.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.nom}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2">
                {cours.bullet_points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-80">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Play className="h-16 w-16 text-primary/60" />
                  </div>
                  
                  <div className="text-3xl font-bold text-primary">
                    {cours.prix}€
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {cours.duree} minutes
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      0 étudiants inscrits
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer le cours
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Star className="h-4 w-4 mr-2" />
                      Ajouter aux favoris
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Contenu du cours</h2>
          
          <div className="space-y-4">
            {cours.sections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.chapitres.map((chapitre) => (
                      <div key={chapitre.id} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-3">{chapitre.titre}</h4>
                        <div className="space-y-2">
                          {chapitre.contenu.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                              {getTypeIcon(item.type)}
                              <span className="text-sm">{item.titre}</span>
                              {item.duree && (
                                <span className="text-xs text-muted-foreground ml-auto">
                                  {item.duree} min
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Note de démo */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Mode démo :</strong> Cette page affiche des données de test. 
            La connexion Supabase sera configurée prochainement pour charger les vrais cours.
          </p>
        </div>
      </div>
    </div>
  )
}