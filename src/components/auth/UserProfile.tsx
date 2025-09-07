'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/hooks/useAuth'
import { LogOut, User } from 'lucide-react'

export function UserProfile() {
  const { user, signOut } = useAuth()

  if (!user) return null

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Profil utilisateur
        </CardTitle>
        <CardDescription>
          Informations de votre compte
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">ID utilisateur</label>
          <p className="text-sm text-muted-foreground font-mono">{user.id}</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Dernière connexion</label>
          <p className="text-sm text-muted-foreground">
            {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString('fr-FR') : 'N/A'}
          </p>
        </div>

        <Button 
          variant="outline" 
          onClick={handleSignOut}
          className="w-full"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Se déconnecter
        </Button>
      </CardContent>
    </Card>
  )
}
