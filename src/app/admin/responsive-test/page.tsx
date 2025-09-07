'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Monitor, Tablet, Smartphone, Eye, RefreshCw } from 'lucide-react'

export default function ResponsiveTestPage() {
  const [currentView, setCurrentView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const viewConfig = {
    mobile: {
      width: '375px',
      height: '667px',
      label: 'Mobile',
      icon: Smartphone,
      breakpoint: 'sm'
    },
    tablet: {
      width: '768px',
      height: '1024px',
      label: 'Tablette',
      icon: Tablet,
      breakpoint: 'md'
    },
    desktop: {
      width: '1200px',
      height: '800px',
      label: 'Desktop',
      icon: Monitor,
      breakpoint: 'lg'
    }
  }

  const currentConfig = viewConfig[currentView]
  const IconComponent = currentConfig.icon

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-6 w-6" />
              Test Responsive Design
            </CardTitle>
            <p className="text-muted-foreground">
              Vérifiez l'affichage sur mobile, tablette et desktop
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              {/* View Selector */}
              <div className="flex gap-2">
                {Object.entries(viewConfig).map(([key, config]) => {
                  const Icon = config.icon
                  return (
                    <Button
                      key={key}
                      variant={currentView === key ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentView(key as any)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {config.label}
                    </Button>
                  )
                })}
              </div>

              {/* Preview Toggle */}
              <Button
                variant={isPreviewMode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                {isPreviewMode ? 'Mode Admin' : 'Mode Preview'}
              </Button>

              {/* Refresh */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Actualiser
              </Button>
            </div>

            {/* Current View Info */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <IconComponent className="h-4 w-4 text-blue-600" />
                <span className="font-medium">Vue actuelle :</span>
                <Badge variant="secondary">{currentConfig.label}</Badge>
                <span className="text-muted-foreground">
                  {currentConfig.width} × {currentConfig.height}
                </span>
                <span className="text-muted-foreground">
                  (Breakpoint: {currentConfig.breakpoint})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Container */}
        <div className="flex justify-center">
          <div
            className={`bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ${
              isPreviewMode ? 'shadow-none border-2 border-blue-500' : ''
            }`}
            style={{
              width: isPreviewMode ? currentConfig.width : '100%',
              maxWidth: isPreviewMode ? currentConfig.width : 'none',
              height: isPreviewMode ? currentConfig.height : 'auto',
              maxHeight: isPreviewMode ? currentConfig.height : 'none'
            }}
          >
            {/* Preview Content */}
            <div className={`${isPreviewMode ? 'overflow-auto' : ''}`}>
              <ResponsiveTestContent currentView={currentView} />
            </div>
          </div>
        </div>

        {/* Viewport Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Informations de la vue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Mobile (375px)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Navigation hamburger</li>
                  <li>• Cards en colonne unique</li>
                  <li>• Texte adapté</li>
                  <li>• Boutons pleine largeur</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Tablette (768px)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Navigation horizontale</li>
                  <li>• Cards en grille 2 colonnes</li>
                  <li>• Sidebar collapsible</li>
                  <li>• Espacement optimisé</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Desktop (1200px+)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Navigation complète</li>
                  <li>• Cards en grille 3+ colonnes</li>
                  <li>• Sidebar fixe</li>
                  <li>• Espacement maximal</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Composant de contenu de test responsive
function ResponsiveTestContent({ currentView }: { currentView: string }) {
  return (
    <div className="container-mobile container-tablet container-desktop p-4">
      {/* Navigation Test */}
      <nav className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <span className="font-bold text-lg">Respir</span>
          </div>
          
          {/* Mobile: Hamburger, Desktop: Full nav */}
          <div className="hidden sm:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-blue-600">Accueil</a>
            <a href="#" className="text-sm hover:text-blue-600">Cours</a>
            <a href="#" className="text-sm hover:text-blue-600">À propos</a>
            <Button size="sm">Connexion</Button>
          </div>
          
          {/* Mobile hamburger */}
          <div className="sm:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Test Responsive Design
        </h1>
        <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
          Vérifiez l'affichage parfait sur toutes les tailles d'écran
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Commencer</Button>
          <Button variant="outline" size="lg">En savoir plus</Button>
        </div>
      </section>

      {/* Cards Grid Test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Cours de Méditation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Cours de Méditation {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Description du cours de méditation pour tester l'affichage responsive.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Débutant</Badge>
                  <span className="font-bold">19.99€</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Form Test */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Formulaire de Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded-md"
                  placeholder="votre@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full p-2 border rounded-md h-24"
                  placeholder="Votre message..."
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button>Envoyer</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stats Test */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Cours', value: '50+' },
            { label: 'Étudiants', value: '1.2k' },
            { label: 'Heures', value: '200+' },
            { label: 'Satisfaction', value: '98%' }
          ].map((stat, i) => (
            <Card key={i} className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Test */}
      <footer className="border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Respir</h4>
            <p className="text-sm text-muted-foreground">
              Votre plateforme de méditation et relaxation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Cours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-600">Méditation</a></li>
              <li><a href="#" className="hover:text-blue-600">Relaxation</a></li>
              <li><a href="#" className="hover:text-blue-600">Respiration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-600">Aide</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">📘</Button>
              <Button variant="outline" size="sm">🐦</Button>
              <Button variant="outline" size="sm">📷</Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
          © 2024 Respir. Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}
