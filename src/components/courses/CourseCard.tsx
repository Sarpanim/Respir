import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, Clock, Users, Star, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    short_description?: string
    duration_minutes: number
    price: number
    is_free: boolean
    image_url: string
    banner_url?: string
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
    course_tags?: Array<{
      tag: {
        name: string
        color: string
      }
    }>
  }
  variant?: 'default' | 'featured' | 'compact'
}

export function CourseCard({ course, variant = 'default' }: CourseCardProps) {
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
      case 'debutant': return 'bg-green-100 text-green-800'
      case 'intermediaire': return 'bg-yellow-100 text-yellow-800'
      case 'avance': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
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

  if (variant === 'compact') {
    return (
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-slate-200">
        <div className="flex">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={course.image_url}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="flex-1 p-3">
            <div className="space-y-1">
              <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
              <p className="text-xs text-slate-500">{course.instructor?.name}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="h-3 w-3" />
                <span>{formatDuration(course.duration_minutes)}</span>
                <span>•</span>
                <span>{formatPrice(course.price)}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  if (variant === 'featured') {
    return (
      <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border-slate-200">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={course.banner_url || course.image_url}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className={getLevelColor(course.level)}>
              {getLevelLabel(course.level)}
            </Badge>
            {course.category && (
              <Badge 
                className="bg-white/90 text-slate-800"
                style={{ backgroundColor: `${course.category.color}20`, color: course.category.color }}
              >
                {course.category.name}
              </Badge>
            )}
            {course.is_free && (
              <Badge className="bg-green-100 text-green-800">Gratuit</Badge>
            )}
          </div>

          {/* Prix */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-slate-800 font-semibold">
              {formatPrice(course.price)}
            </Badge>
          </div>

          {/* Contenu */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-2xl font-bold mb-2 line-clamp-2">{course.title}</h3>
            <p className="text-sm opacity-90 mb-2">{course.instructor?.name}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatDuration(course.duration_minutes)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.total_students} étudiants</span>
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
          <p className="text-slate-600 mb-4 line-clamp-3">{course.description}</p>
          
          {/* Tags */}
          {course.course_tags && course.course_tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {course.course_tags.slice(0, 4).map((item, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs"
                  style={{ borderColor: item.tag.color, color: item.tag.color }}
                >
                  {item.tag.name}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
              <Link href={`/courses/${course.id}`}>
                <BookOpen className="h-4 w-4 mr-2" />
                Voir le cours
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-400">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Variant par défaut
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-slate-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image_url}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={getLevelColor(course.level)}>
            {getLevelLabel(course.level)}
          </Badge>
          {course.is_free && (
            <Badge className="bg-green-100 text-green-800">Gratuit</Badge>
          )}
        </div>

        {/* Prix */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-slate-800 font-semibold">
            {formatPrice(course.price)}
          </Badge>
        </div>

        {/* Contenu */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{course.title}</h3>
          <p className="text-sm opacity-90">{course.instructor?.name}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{course.short_description || course.description}</p>
        
        {/* Tags */}
        {course.course_tags && course.course_tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {course.course_tags.slice(0, 3).map((item, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs"
                style={{ borderColor: item.tag.color, color: item.tag.color }}
              >
                {item.tag.name}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{formatDuration(course.duration_minutes)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.total_students}</span>
            </div>
            {course.rating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-900" asChild>
            <Link href={`/courses/${course.id}`}>
              Voir le cours →
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
