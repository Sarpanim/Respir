import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Filter, 
  X, 
  Sparkles, 
  Flame, 
  Star,
  Clock,
  Heart,
  Zap
} from "lucide-react"

interface Tag {
  id: string
  name: string
  color: string
  bgColor: string
  borderColor: string
  icon?: string
  count?: number
  isPopular?: boolean
}

interface PremiumTagFilterProps {
  tags: Tag[]
  selectedTags: string[]
  onTagSelect: (tagId: string) => void
  onClearAll: () => void
  variant?: 'default' | 'compact' | 'minimal'
  showCounts?: boolean
  showIcons?: boolean
}

export function PremiumTagFilter({ 
  tags, 
  selectedTags, 
  onTagSelect, 
  onClearAll,
  variant = 'default',
  showCounts = true,
  showIcons = true
}: PremiumTagFilterProps) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'sparkles': return <Sparkles className="h-3 w-3" />
      case 'flame': return <Flame className="h-3 w-3" />
      case 'star': return <Star className="h-3 w-3" />
      case 'clock': return <Clock className="h-3 w-3" />
      case 'heart': return <Heart className="h-3 w-3" />
      case 'zap': return <Zap className="h-3 w-3" />
      default: return null
    }
  }

  const isSelected = (tagId: string) => selectedTags.includes(tagId)

  // Variant Minimal - Juste les tags sans titre
  if (variant === 'minimal') {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag.id}
            variant={isSelected(tag.id) ? "default" : "outline"}
            className={`
              cursor-pointer transition-all duration-200 hover:scale-105
              ${isSelected(tag.id) 
                ? `text-white border-0 shadow-md` 
                : `hover:shadow-sm`
              }
            `}
            style={{
              backgroundColor: isSelected(tag.id) ? tag.color : 'transparent',
              borderColor: isSelected(tag.id) ? tag.color : tag.borderColor,
              color: isSelected(tag.id) ? 'white' : tag.color
            }}
            onClick={() => onTagSelect(tag.id)}
          >
            <div className="flex items-center gap-1">
              {showIcons && getIcon(tag.icon)}
              <span>{tag.name}</span>
              {showCounts && tag.count && (
                <span className="ml-1 opacity-75">({tag.count})</span>
              )}
            </div>
          </Badge>
        ))}
      </div>
    )
  }

  // Variant Compact - Avec titre compact
  if (variant === 'compact') {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-700">Filtres</h3>
          {selectedTags.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearAll}
              className="text-slate-500 hover:text-slate-700"
            >
              <X className="h-3 w-3 mr-1" />
              Effacer
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant={isSelected(tag.id) ? "default" : "outline"}
              className={`
                cursor-pointer transition-all duration-200 hover:scale-105 text-xs
                ${isSelected(tag.id) 
                  ? `text-white border-0 shadow-md` 
                  : `hover:shadow-sm`
                }
              `}
              style={{
                backgroundColor: isSelected(tag.id) ? tag.color : 'transparent',
                borderColor: isSelected(tag.id) ? tag.color : tag.borderColor,
                color: isSelected(tag.id) ? 'white' : tag.color
              }}
              onClick={() => onTagSelect(tag.id)}
            >
              <div className="flex items-center gap-1">
                {showIcons && getIcon(tag.icon)}
                <span>{tag.name}</span>
                {showCounts && tag.count && (
                  <span className="ml-1 opacity-75">({tag.count})</span>
                )}
              </div>
            </Badge>
          ))}
        </div>
      </div>
    )
  }

  // Variant par défaut - Complet avec titre et actions
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-600" />
          <h3 className="text-sm font-semibold text-slate-700">Filtres populaires</h3>
          {selectedTags.length > 0 && (
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              {selectedTags.length} sélectionné{selectedTags.length > 1 ? 's' : ''}
            </Badge>
          )}
        </div>
        {selectedTags.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearAll}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="h-3 w-3 mr-1" />
            Effacer tout
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag.id}
            variant={isSelected(tag.id) ? "default" : "outline"}
            className={`
              cursor-pointer transition-all duration-200 hover:scale-105
              ${isSelected(tag.id) 
                ? `text-white border-0 shadow-md transform scale-105` 
                : `hover:shadow-sm`
              }
              ${tag.isPopular ? 'ring-2 ring-yellow-200' : ''}
            `}
            style={{
              backgroundColor: isSelected(tag.id) ? tag.color : 'transparent',
              borderColor: isSelected(tag.id) ? tag.color : tag.borderColor,
              color: isSelected(tag.id) ? 'white' : tag.color
            }}
            onClick={() => onTagSelect(tag.id)}
          >
            <div className="flex items-center gap-1.5">
              {showIcons && getIcon(tag.icon)}
              <span className="font-medium">{tag.name}</span>
              {showCounts && tag.count && (
                <span className="ml-1 opacity-75 text-xs">({tag.count})</span>
              )}
              {tag.isPopular && !isSelected(tag.id) && (
                <Sparkles className="h-3 w-3 text-yellow-500" />
              )}
            </div>
          </Badge>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <div className="pt-2 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tagId) => {
              const tag = tags.find(t => t.id === tagId)
              if (!tag) return null
              return (
                <Badge
                  key={tagId}
                  className="bg-slate-100 text-slate-700 border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors"
                  onClick={() => onTagSelect(tagId)}
                >
                  <div className="flex items-center gap-1">
                    <span>{tag.name}</span>
                    <X className="h-3 w-3" />
                  </div>
                </Badge>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
