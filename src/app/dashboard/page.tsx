'use client'

import { UserProfile } from '@/components/auth/UserProfile'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [posts, setPosts] = useState<any[]>([])
  const [loadingPosts, setLoadingPosts] = useState(false)
  const supabase = createClient()

  const fetchPosts = async () => {
    setLoadingPosts(true)
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('Error fetching posts:', error)
      } else {
        setPosts(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoadingPosts(false)
    }
  }

  const createSamplePost = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title: `Post de test - ${new Date().toLocaleString('fr-FR')}`,
            content: 'Ceci est un post de test créé depuis l\'application.',
            author_id: user.id,
            published: true
          }
        ])
        .select()

      if (error) {
        console.error('Error creating post:', error)
      } else {
        console.log('Post created:', data)
        fetchPosts() // Refresh the list
      }
    } catch (error) {
      console.error('Error:', error)
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

  if (!user) {
    return (
      <div className="container-mobile container-tablet container-desktop py-8">
        <Card>
          <CardHeader>
            <CardTitle>Accès non autorisé</CardTitle>
            <CardDescription>
              Vous devez être connecté pour accéder à cette page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href="/login">Se connecter</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue, {user.email} !
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <UserProfile />
          
          <Card>
            <CardHeader>
              <CardTitle>Test de la base de données</CardTitle>
              <CardDescription>
                Testez les fonctionnalités de requête et de stockage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button onClick={fetchPosts} disabled={loadingPosts}>
                  {loadingPosts && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Charger les posts
                </Button>
                <Button variant="outline" onClick={createSamplePost}>
                  Créer un post test
                </Button>
              </div>
              
              {posts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Posts récents :</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {posts.map((post) => (
                      <div key={post.id} className="p-3 border rounded-md">
                        <h5 className="font-medium text-sm">{post.title}</h5>
                        <p className="text-xs text-muted-foreground">
                          {new Date(post.created_at).toLocaleString('fr-FR')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
