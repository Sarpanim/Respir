import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Heart,
  ArrowRight,
  Lock,
  CheckCircle
} from "lucide-react"

interface PremiumCourseCardProps {
  course: {
    id: string
    title: string
    subtitle?: string
    description: string
    duration_lessons: number
    duration_minutes: number
    price: number
    is_free: boolean
    is_premium: boolean
    image_url: string
    gradient?: string
    rating: number
    total_ratings: number
    total_students: number
    level: 'debutant' | 'intermediaire' | 'avance'
    instructor?: {
      name: string
      avatar_url?: string
    }
    category?: {
      name: string
      color: string
    }
    tags?: Array<{
      name: string
      color: string
    }>
    is_completed?: boolean
    progress?: number
  }
  variant?: 'default' | 'featured' | 'compact' | 'minimal' | 'hero'
  showProgress?: boolean
}

export function PremiumCourseCard({ 
  course, 
  variant = 'default', 
  showProgress = false 
}: PremiumCourseCardProps) {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  const formatPrice = (price: number) => {
    if (price === 0) return 'Gratuit'
    return `${price}€`
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'debutant': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'intermediaire': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'avance': return 'bg-rose-100 text-rose-700 border-rose-200'
      default: return 'bg-slate-100 text-slate-700 border-slate-200'
    }
  }

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'debutant': return 'Débutant'
      case 'intermediaire': return 'Intermédiaire'
      case 'avance': return 'Avancé'
      default: return level
    }
  }

  // Variant Hero - Grande carte mise en avant
  if (variant === 'hero') {
    return (
      <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={course.image_url}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-6 left-6 flex gap-2">
            <Badge className={`${getLevelColor(course.level)} border`}>
              {getLevelLabel(course.level)}
            </Badge>
            {course.is_premium && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                Premium
              </Badge>
            )}
            {course.is_free && (
              <Badge className="bg-emerald-500 text-white border-0">
                Gratuit
              </Badge>
            )}
          </div>

          {/* Prix */}
          <div className="absolute top-6 right-6">
            <Badge className="bg-white/90 text-slate-900 font-semibold text-lg px-4 py-2">
              {formatPrice(course.price)}
            </Badge>
          </div>

          {/* Contenu */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-3xl font-bold mb-2 line-clamp-2">{course.title}</h3>
            {course.subtitle && (
              <p className="text-lg opacity-90 mb-3">{course.subtitle}</p>
            )}
            <p className="text-sm opacity-80 mb-4 line-clamp-2">{course.description}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{course.duration_lessons} leçons</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatDuration(course.duration_minutes)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.total_students.toLocaleString()}</span>
              </div>
              {course.rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8" asChild>
              <Link href={`/courses/${course.id}`}>
                <Play className="h-5 w-5 mr-2" />
                Commencer
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-400">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Variant Featured - Carte mise en avant
  if (variant === 'featured') {
    return (
      <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={course.image_url}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className={`${getLevelColor(course.level)} border`}>
              {getLevelLabel(course.level)}
            </Badge>
            {course.is_premium && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                Premium
              </Badge>
            )}
          </div>

          {/* Prix */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-slate-900 font-semibold">
              {formatPrice(course.price)}
            </Badge>
          </div>

          {/* Contenu */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1 line-clamp-2">{course.title}</h3>
            {course.subtitle && (
              <p className="text-sm opacity-90 mb-2">{course.subtitle}</p>
            )}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{course.duration_lessons} leçons</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatDuration(course.duration_minutes)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-5">
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.description}</p>
          
          {/* Tags */}
          {course.tags && course.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {course.tags.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs border-slate-200 hover:border-slate-300"
                  style={{ color: tag.color, borderColor: tag.color + '40' }}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.total_students.toLocaleString()}</span>
              </div>
              {course.rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
              <Link href={`/courses/${course.id}`}>
                Voir le cours
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Variant Compact - Carte compacte
  if (variant === 'compact') {
    return (
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-white">
        <div className="flex">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={course.image_url}
              alt={course.title}
              fill
              className="object-cover"
            />
            {course.is_completed && (
              <div className="absolute inset-0 bg-green-500/80 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            )}
          </div>
          <CardContent className="flex-1 p-4">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-sm line-clamp-2 flex-1">{course.title}</h3>
                {course.is_premium && (
                  <Lock className="h-4 w-4 text-slate-400 ml-2 flex-shrink-0" />
                )}
              </div>
              <p className="text-xs text-slate-500">{course.instructor?.name}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  <span>{course.duration_lessons} leçons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatDuration(course.duration_minutes)}</span>
                </div>
                <span className="font-semibold text-slate-900">{formatPrice(course.price)}</span>
              </div>
              {showProgress && course.progress !== undefined && (
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  // Variant Minimal - Carte minimale
  if (variant === 'minimal') {
    return (
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course.image_url}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          <div className="absolute top-3 left-3">
            <Badge className={`${getLevelColor(course.level)} border text-xs`}>
              {getLevelLabel(course.level)}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="font-bold text-lg mb-1 line-clamp-2">{course.title}</h3>
            <p className="text-sm opacity-90">{course.duration_lessons} leçons • {formatDuration(course.duration_minutes)}</p>
          </div>
        </div>
      </Card>
    )
  }

  // Variant par défaut - Carte standard
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={course.image_url}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`${getLevelColor(course.level)} border`}>
            {getLevelLabel(course.level)}
          </Badge>
          {course.is_premium && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              Premium
            </Badge>
          )}
        </div>

        {/* Prix */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-slate-900 font-semibold">
            {formatPrice(course.price)}
          </Badge>
        </div>

        {/* Contenu */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-bold mb-1 line-clamp-2">{course.title}</h3>
          {course.subtitle && (
            <p className="text-sm opacity-90 mb-2">{course.subtitle}</p>
          )}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.duration_lessons} leçons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{formatDuration(course.duration_minutes)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-5">
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        {/* Tags */}
        {course.tags && course.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-slate-200 hover:border-slate-300"
                style={{ color: tag.color, borderColor: tag.color + '40' }}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.total_students.toLocaleString()}</span>
            </div>
            {course.rating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
            <Link href={`/courses/${course.id}`}>
              Voir le cours
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
