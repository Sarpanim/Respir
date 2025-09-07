'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Eye, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Settings, 
  Database,
  Users,
  BarChart3,
  FileText,
  Shield
} from 'lucide-react'

export default function AdminPage() {
  const adminTools = [
    {
      title: 'Test Responsive Design',
      description: 'Vérifiez l&apos;affichage sur mobile, tablette et desktop',
      icon: Eye,
      href: '/admin/responsive-test',
      color: 'bg-blue-500',
      features: ['Vue mobile (375px)', 'Vue tablette (768px)', 'Vue desktop (1200px+)']
    },
    {
      title: 'Gestion des Cours',
      description: 'Créez, modifiez et gérez vos cours de méditation',
      icon: FileText,
      href: '/admin/courses',
      color: 'bg-green-500',
      features: ['CRUD complet', 'Upload médias', 'Gestion des catégories']
    },
    {
      title: 'Base de Données',
      description: 'Accès direct à la base de données Supabase',
      icon: Database,
      href: '/admin/database',
      color: 'bg-purple-500',
      features: ['Éditeur SQL', 'Tables', 'Requêtes personnalisées']
    },
    {
      title: 'Utilisateurs',
      description: 'Gérez les comptes utilisateurs et leurs rôles',
      icon: Users,
      href: '/admin/users',
      color: 'bg-orange-500',
      features: ['Liste des utilisateurs', 'Gestion des rôles', 'Statistiques']
    },
    {
      title: 'Analytics',
      description: 'Tableaux de bord et statistiques d\'utilisation',
      icon: BarChart3,
      href: '/admin/analytics',
      color: 'bg-red-500',
      features: ['Métriques clés', 'Graphiques', 'Rapports']
    },
    {
      title: 'Paramètres',
      description: 'Configuration générale de l\'application',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-gray-500',
      features: ['Configuration', 'Thèmes', 'Intégrations']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-mobile container-tablet container-desktop py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Administration</h1>
              <p className="text-muted-foreground mt-2">
                Panneau d'administration de la plateforme Respir
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Admin
              </Badge>
              <Button variant="outline" size="sm">
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-mobile container-tablet container-desktop py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Cours</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Utilisateurs</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Sessions</p>
                  <p className="text-2xl font-bold">5,678</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Revenus</p>
                  <p className="text-2xl font-bold">€12,345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminTools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${tool.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full group-hover:bg-blue-600 transition-colors"
                    onClick={() => window.location.href = tool.href}
                  >
                    Accéder
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Responsive Test Highlight */}
        <Card className="mt-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-lg text-white">
                <Eye className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900">
                  Test Responsive Design
                </h3>
                <p className="text-blue-700 mt-1">
                  Vérifiez l&apos;affichage parfait sur mobile, tablette et desktop avec notre outil de test intégré.
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = '/admin/responsive-test'}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  Desktop
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = '/admin/responsive-test'}
                >
                  <Tablet className="h-4 w-4 mr-2" />
                  Tablette
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = '/admin/responsive-test'}
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
