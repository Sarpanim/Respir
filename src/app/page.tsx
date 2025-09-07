import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container-mobile container-tablet container-desktop py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-mobile text-tablet text-desktop">
            Bienvenue sur Respir
          </h1>
          <p className="text-muted-foreground text-mobile text-tablet text-desktop max-w-2xl mx-auto">
            Une application moderne construite avec Next.js 14, Tailwind CSS et shadcn/ui, 
            optimisée pour mobile-first.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Next.js 14</CardTitle>
              <CardDescription>
                App Router avec TypeScript
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Framework React moderne avec App Router pour des performances optimales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Design mobile-first
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Framework CSS utilitaire pour un design responsive et moderne.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>
                Composants accessibles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bibliothèque de composants UI réutilisables et accessibles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supabase</CardTitle>
              <CardDescription>
                Backend-as-a-Service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Authentification, base de données et stockage intégrés.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/login">Se connecter</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/dashboard">Tableau de bord</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/courses">Voir les cours</Link>
          </Button>
        </div>

        {/* Section Administration */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-900">
              🛠️ Outils d&apos;Administration
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Testez le responsive design et gérez votre application avec nos outils d&apos;administration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/admin">Dashboard Admin</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/admin/responsive-test">Test Responsive</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/admin/ui-test">Test UI Components</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
