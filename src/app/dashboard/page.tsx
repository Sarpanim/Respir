"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { Loader2, BookOpen, Clock, Target, TrendingUp, Calendar, Play, Heart, Star } from 'lucide-react'

export default function Dashboard() {
  const [loading, setLoading] = useState(false)

  // Données de démonstration
  const stats = {
    streakDays: 7,
    totalMinutes: 240,
    coursesCompleted: 3,
    coursesThisWeek: 12
  }

  const recentCourses = [
    {
      id: "1",
      title: "Méditation de pleine conscience",
      progress: 75,
      duration: "10 leçons",
      instructor: "Sarah Johnson"
    },
    {
      id: "2", 
      title: "Gestion du stress",
      progress: 45,
      duration: "12 leçons",
      instructor: "Michael Chen"
    }
  ]

  const achievements = [
    { name: "Premier pas", description: "Première méditation terminée", icon: "🎯" },
    { name: "Série de 7", description: "7 jours consécutifs", icon: "🔥" },
    { name: "Explorateur", description: "3 cours terminés", icon: "📚" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container-mobile container-tablet container-desktop py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Tableau de bord</h1>
              <p className="text-slate-600 mt-1">Bienvenue dans votre espace personnel</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Play className="h-4 w-4 mr-2" />
              Méditation rapide
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-xl">
                    <Target className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stats.streakDays}</p>
                    <p className="text-sm text-slate-600">jours de suite</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{Math.floor(stats.totalMinutes / 60)}h</p>
                    <p className="text-sm text-slate-600">médité</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-xl">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stats.coursesCompleted}</p>
                    <p className="text-sm text-slate-600">cours terminés</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-4 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stats.coursesThisWeek}</p>
                    <p className="text-sm text-slate-600">cette semaine</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Courses */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Cours en cours
              </CardTitle>
              <CardDescription>Continuez votre apprentissage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{course.title}</h3>
                      <p className="text-sm text-slate-600">{course.instructor} • {course.duration}</p>
                      <div className="mt-2">
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{course.progress}% terminé</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white">
                      Continuer
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Réalisations
              </CardTitle>
              <CardDescription>Vos accomplissements récents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold text-slate-900">{achievement.name}</h3>
                    <p className="text-sm text-slate-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
              <CardDescription>Commencez une nouvelle session</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2 border-slate-300 hover:border-slate-400">
                  <Play className="h-6 w-6" />
                  <span className="text-sm">Méditation</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 border-slate-300 hover:border-slate-400">
                  <BookOpen className="h-6 w-6" />
                  <span className="text-sm">Cours</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 border-slate-300 hover:border-slate-400">
                  <Heart className="h-6 w-6" />
                  <span className="text-sm">Favoris</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 border-slate-300 hover:border-slate-400">
                  <Target className="h-6 w-6" />
                  <span className="text-sm">Objectifs</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}