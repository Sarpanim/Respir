import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, Clock, Star, Heart } from "lucide-react"
import Link from "next/link"

interface MeditationCardProps {
  meditation: {
    id: string
    title: string
    description: string
    duration_minutes: number
    image_url: string
    background_image_url?: string
    rating: number
    total_ratings: number
    play_count: number
    is_free: boolean
    instructor?: {
      name: string
      avatar_url?: string
    }
    category?: {
      name: string
      color: string
    }
    meditation_tags?: Array<{
      tag: {
        name: string
        color: string
      }
    }>
  }
  variant?: 'default' | 'featured' | 'compact'
}

export function MeditationCard({ meditation, variant = 'default' }: MeditationCardProps) {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  const formatPlayCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
    return count.toString()
  }

  if (variant === 'compact') {
    return (
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-slate-200">
        <div className="flex">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={meditation.image_url}
              alt={meditation.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="flex-1 p-3">
            <div className="space-y-1">
              <h3 className="font-semibold text-sm line-clamp-2">{meditation.title}</h3>
              <p className="text-xs text-slate-500">{meditation.instructor?.name}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="h-3 w-3" />
                <span>{formatDuration(meditation.duration_minutes)}</span>
                {meditation.rating > 0 && (
                  <>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{meditation.rating.toFixed(1)}</span>
                  </>
                )}
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
            src={meditation.background_image_url || meditation.image_url}
            alt={meditation.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {meditation.category && (
              <Badge 
                className="bg-white/90 text-slate-800"
                style={{ backgroundColor: `${meditation.category.color}20`, color: meditation.category.color }}
              >
                {meditation.category.name}
              </Badge>
            )}
            {meditation.is_free && (
              <Badge className="bg-green-100 text-green-800">Gratuit</Badge>
            )}
          </div>

          {/* Durée */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-slate-800">
              {formatDuration(meditation.duration_minutes)}
            </Badge>
          </div>

          {/* Contenu */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1 line-clamp-2">{meditation.title}</h3>
            <p className="text-sm opacity-90 mb-2">{meditation.instructor?.name}</p>
            <div className="flex items-center gap-2 text-sm">
              {meditation.rating > 0 && (
                <>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{meditation.rating.toFixed(1)}</span>
                  <span className="opacity-75">({meditation.total_ratings})</span>
                </>
              )}
              <span className="opacity-75">•</span>
              <span>{formatPlayCount(meditation.play_count)} écoutes</span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-slate-600 text-sm mb-3 line-clamp-2">{meditation.description}</p>
          
          {/* Tags */}
          {meditation.meditation_tags && meditation.meditation_tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {meditation.meditation_tags.slice(0, 3).map((item, index) => (
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
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white">
              <Play className="h-4 w-4 mr-2" />
              Écouter
            </Button>
            <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-900">
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
          src={meditation.image_url}
          alt={meditation.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {meditation.category && (
            <Badge 
              className="bg-white/90 text-slate-800"
              style={{ backgroundColor: `${meditation.category.color}20`, color: meditation.category.color }}
            >
              {meditation.category.name}
            </Badge>
          )}
        </div>

        {/* Durée */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-slate-800">
            {formatDuration(meditation.duration_minutes)}
          </Badge>
        </div>

        {/* Contenu */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{meditation.title}</h3>
          <p className="text-sm opacity-90">{meditation.instructor?.name}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{meditation.description}</p>
        
        {/* Tags */}
        {meditation.meditation_tags && meditation.meditation_tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {meditation.meditation_tags.slice(0, 2).map((item, index) => (
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
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {meditation.rating > 0 && (
              <>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{meditation.rating.toFixed(1)}</span>
              </>
            )}
            <span>{formatPlayCount(meditation.play_count)} écoutes</span>
          </div>
          <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-900">
            <Play className="h-4 w-4 mr-1" />
            Écouter
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
