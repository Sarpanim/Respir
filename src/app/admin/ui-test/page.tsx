'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group'
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { 
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { 
  Progress
} from '@/components/ui/progress'
import { 
  Separator
} from '@/components/ui/separator'
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Eye, 
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  XCircle
} from 'lucide-react'

export default function UITestPage() {
  const [currentView, setCurrentView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [progress, setProgress] = useState(33)

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
              Test des Composants UI Responsive
            </CardTitle>
            <p className="text-muted-foreground">
              Testez tous les composants shadcn/ui sur différentes tailles d&apos;écran
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
              <UITestContent currentView={currentView} progress={progress} setProgress={setProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant de contenu de test UI
function UITestContent({ currentView, progress, setProgress }: { 
  currentView: string
  progress: number
  setProgress: (value: number) => void
}) {
  return (
    <div className="container-mobile container-tablet container-desktop p-4 space-y-8">
      {/* Buttons Test */}
      <Card>
        <CardHeader>
          <CardTitle>Boutons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements Test */}
      <Card>
        <CardHeader>
          <CardTitle>Éléments de Formulaire</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message..." />
              </div>
              <div>
                <Label>Niveau</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debutant">Débutant</SelectItem>
                    <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                    <SelectItem value="avance">Avancé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option1" />
                    <Label htmlFor="option1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option2" />
                    <Label htmlFor="option2">Option 2</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Type de cours</Label>
                <RadioGroup defaultValue="meditation">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="meditation" id="meditation" />
                    <Label htmlFor="meditation">Méditation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="relaxation" id="relaxation" />
                    <Label htmlFor="relaxation">Relaxation</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges and Alerts Test */}
      <Card>
        <CardHeader>
          <CardTitle>Badges et Alertes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  Ceci est une alerte d'information.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>
                  Une erreur s'est produite.
                </AlertDescription>
              </Alert>
              
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Succès</AlertTitle>
                <AlertDescription className="text-green-700">
                  Opération réussie !
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress and Separator Test */}
      <Card>
        <CardHeader>
          <CardTitle>Progression et Séparateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Progression du cours</Label>
              <Progress value={progress} className="mt-2" />
              <div className="flex gap-2 mt-2">
                <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                  -10%
                </Button>
                <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                  +10%
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <div className="text-center text-sm text-muted-foreground">
              Contenu séparé
            </div>
            
            <Separator />
          </div>
        </CardContent>
      </Card>

      {/* Tabs Test */}
      <Card>
        <CardHeader>
          <CardTitle>Onglets</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Compte</TabsTrigger>
              <TabsTrigger value="password">Mot de passe</TabsTrigger>
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div>
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input id="username" defaultValue="@johndoe" />
              </div>
            </TabsContent>
            <TabsContent value="password" className="space-y-4">
              <div>
                <Label htmlFor="current">Mot de passe actuel</Label>
                <Input id="current" type="password" />
              </div>
              <div>
                <Label htmlFor="new">Nouveau mot de passe</Label>
                <Input id="new" type="password" />
              </div>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <div className="space-y-2">
                <Label>Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email" />
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="push" />
                    <Label htmlFor="push">Push</Label>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Table Test */}
      <Card>
        <CardHeader>
          <CardTitle>Tableau</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cours</TableHead>
                  <TableHead>Niveau</TableHead>
                  <TableHead>Durée</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Méditation Débutant</TableCell>
                  <TableCell><Badge variant="secondary">Débutant</Badge></TableCell>
                  <TableCell>20 min</TableCell>
                  <TableCell>19.99€</TableCell>
                  <TableCell><Badge>Actif</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Relaxation Avancée</TableCell>
                  <TableCell><Badge variant="destructive">Avancé</Badge></TableCell>
                  <TableCell>45 min</TableCell>
                  <TableCell>29.99€</TableCell>
                  <TableCell><Badge>Actif</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Respiration</TableCell>
                  <TableCell><Badge variant="outline">Intermédiaire</Badge></TableCell>
                  <TableCell>15 min</TableCell>
                  <TableCell>14.99€</TableCell>
                  <TableCell><Badge variant="secondary">Brouillon</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Dialog and Dropdown Test */}
      <Card>
        <CardHeader>
          <CardTitle>Dialogues et Menus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Ouvrir Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmation</DialogTitle>
                  <DialogDescription>
                    Êtes-vous sûr de vouloir supprimer cet élément ?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Annuler</Button>
                  <Button variant="destructive">Supprimer</Button>
                </div>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu Déroulant</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Paramètres</DropdownMenuItem>
                <DropdownMenuItem>Déconnexion</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
