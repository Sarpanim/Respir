import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/Navigation"
import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Hero Section - Design épuré */}
        <section className="py-20">
          <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                  Bienvenue sur Respir
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Une application moderne construite avec Next.js 14, Tailwind CSS et shadcn/ui, 
                  optimisée pour mobile-first.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  Commencer gratuitement
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-400 px-8 py-4 text-lg">
                  Découvrir les programmes
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 border-t border-slate-200">
          <div className="container-mobile container-tablet container-desktop">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">
                  Technologies utilisées
                </h2>
                <p className="text-lg text-slate-600">
                  Une stack moderne pour une expérience optimale
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Next.js */}
                <Card className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Next.js 14</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-600 font-medium">App Router avec TypeScript</p>
                        <p className="text-slate-500 text-sm">
                          Framework React moderne avec App Router pour des performances optimales.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tailwind CSS */}
                <Card className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">T</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Tailwind CSS</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-600 font-medium">Design mobile-first</p>
                        <p className="text-slate-500 text-sm">
                          Framework CSS utilitaire pour un design responsive et moderne.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* shadcn/ui */}
                <Card className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">shadcn/ui</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-600 font-medium">Composants accessibles</p>
                        <p className="text-slate-500 text-sm">
                          Bibliothèque de composants UI réutilisables et accessibles.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Supabase */}
                <Card className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Supabase</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-600 font-medium">Backend-as-a-Service</p>
                        <p className="text-slate-500 text-sm">
                          Authentification, base de données et stockage intégrés.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 border-t border-slate-200">
          <div className="container-mobile container-tablet container-desktop">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold text-slate-900">
                  Pourquoi choisir Respir ?
                </h2>
                <p className="text-lg text-slate-600">
                  Une expérience de méditation moderne et personnalisée
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Personnalisé</h3>
                  <p className="text-slate-600">
                    Des programmes adaptés à votre niveau et vos objectifs
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Accessible</h3>
                  <p className="text-slate-600">
                    Interface intuitive et design responsive pour tous les appareils
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                    <ArrowRight className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Progression</h3>
                  <p className="text-slate-600">
                    Suivez votre évolution et atteignez vos objectifs de bien-être
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-slate-200">
          <div className="container-mobile container-tablet container-desktop">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">
                  Prêt à commencer votre voyage ?
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Rejoignez des milliers de personnes qui ont trouvé la paix intérieure avec Respir
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg" asChild>
                  <Link href="/courses">Voir les cours</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-400 px-8 py-4 text-lg" asChild>
                  <Link href="/login">Se connecter</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-400 px-8 py-4 text-lg" asChild>
                  <Link href="/dashboard">Tableau de bord</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}