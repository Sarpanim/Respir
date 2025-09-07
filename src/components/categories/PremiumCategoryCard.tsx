import { LucideIcon } from 'lucide-react'

interface PremiumCategoryCardProps {
  id: string
  name: string
  icon: LucideIcon
  color: string
  count: number
  isPopular?: boolean
  onClick?: () => void
  className?: string
}

export default function PremiumCategoryCard({
  id,
  name,
  icon: Icon,
  color,
  count,
  isPopular = false,
  onClick,
  className = ''
}: PremiumCategoryCardProps) {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {isPopular && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full">
            <span className="text-white text-xs font-medium">Populaire</span>
          </div>
        )}
      </div>
      
      <h3 className="text-white font-medium mb-1 group-hover:text-white/90 transition-colors duration-200">
        {name}
      </h3>
      <p className="text-white/60 text-sm group-hover:text-white/70 transition-colors duration-200">
        {count} cours
      </p>
    </div>
  )
}
