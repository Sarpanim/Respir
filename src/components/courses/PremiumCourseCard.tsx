import { Star, Users, Clock, Play, Heart, BookOpen, Zap } from 'lucide-react'
import { useState } from 'react'

interface PremiumCourseCardProps {
  id: number
  title: string
  subtitle: string
  image: string
  duration: string
  level: 'débutant' | 'intermédiaire' | 'avancé'
  rating: number
  students: number
  isPremium: boolean
  category: string
  variant?: 'hero' | 'featured' | 'default' | 'compact' | 'minimal'
  onPlay?: () => void
  onFavorite?: () => void
  className?: string
}

export default function PremiumCourseCard({
  id,
  title,
  subtitle,
  image,
  duration,
  level,
  rating,
  students,
  isPremium,
  category,
  variant = 'default',
  onPlay,
  onFavorite,
  className = ''
}: PremiumCourseCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
    onFavorite?.()
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'débutant': return 'from-green-500 to-emerald-600'
      case 'intermédiaire': return 'from-yellow-500 to-orange-600'
      case 'avancé': return 'from-red-500 to-pink-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105'
      case 'featured':
        return 'bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-200'
      case 'compact':
        return 'bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-200'
      case 'minimal':
        return 'bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-200'
      default:
        return 'bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-200'
    }
  }

  if (variant === 'hero') {
    return (
      <div className={`${getVariantStyles()} ${className}`}>
        <div className="relative h-64">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">Premium</span>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-200"
          >
            <Heart 
              className={`w-5 h-5 ${isFavorited ? 'text-red-400 fill-red-400' : 'text-white'}`} 
            />
          </button>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
                {category}
              </span>
              <span className={`bg-gradient-to-r ${getLevelColor(level)} px-2 py-1 rounded-full text-white text-xs font-medium`}>
                {level}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 mb-4">{subtitle}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white text-sm">{rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">{students}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">{duration}</span>
                </div>
              </div>
              
              <button
                onClick={onPlay}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Commencer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'featured') {
    return (
      <div className={`${getVariantStyles()} ${className}`}>
        <div className="flex">
          <div className="w-32 h-32 flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/70 mb-2">{subtitle}</p>
              </div>
              {isPremium && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">Premium</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm">{rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-sm">{students}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-sm">{duration}</span>
              </div>
            </div>
            
            <button
              onClick={onPlay}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`${getVariantStyles()} ${className}`}>
        <div className="h-24">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1">{title}</h3>
            {isPremium && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-1.5 py-0.5 rounded-full">
                <span className="text-white text-xs font-medium">P</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-white text-xs">{rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-white/60" />
                <span className="text-white/60 text-xs">{duration}</span>
              </div>
            </div>
            <span className="text-white/60 text-xs">{category}</span>
          </div>
          
          <button
            onClick={onPlay}
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-1.5 rounded-lg font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-200 text-xs"
          >
            Commencer
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className={`${getVariantStyles()} ${className}`}>
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">{title}</h3>
              <p className="text-white/60 text-sm">{subtitle}</p>
            </div>
            <button
              onClick={handleFavorite}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <Heart 
                className={`w-4 h-4 ${isFavorited ? 'text-red-400 fill-red-400' : 'text-white/60'}`} 
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-white text-xs">{rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-white/60" />
                <span className="text-white/60 text-xs">{duration}</span>
              </div>
            </div>
            <button
              onClick={onPlay}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm"
            >
              <Play className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`${getVariantStyles()} ${className}`}>
      <div className="h-32">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          {isPremium && (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full">
              <span className="text-white text-xs font-medium">Premium</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-white/70 mb-3">{subtitle}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">{rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-white/60" />
              <span className="text-white/60 text-sm">{duration}</span>
            </div>
          </div>
          <span className="text-white/60 text-sm">{category}</span>
        </div>
        
        <button
          onClick={onPlay}
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 rounded-xl font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-200"
        >
          Commencer
        </button>
      </div>
    </div>
  )
}