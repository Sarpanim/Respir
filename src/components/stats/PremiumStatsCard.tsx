import { LucideIcon } from 'lucide-react'

interface PremiumStatsCardProps {
  icon: LucideIcon
  value: string | number
  label: string
  color?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  className?: string
}

export default function PremiumStatsCard({
  icon: Icon,
  value,
  label,
  color = 'blue',
  trend,
  trendValue,
  className = ''
}: PremiumStatsCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return 'text-orange-400'
      case 'blue':
        return 'text-blue-400'
      case 'green':
        return 'text-green-400'
      case 'purple':
        return 'text-purple-400'
      case 'pink':
        return 'text-pink-400'
      case 'yellow':
        return 'text-yellow-400'
      case 'red':
        return 'text-red-400'
      case 'teal':
        return 'text-teal-400'
      case 'indigo':
        return 'text-indigo-400'
      default:
        return 'text-blue-400'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗'
      case 'down':
        return '↘'
      default:
        return ''
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400'
      case 'down':
        return 'text-red-400'
      default:
        return 'text-white/60'
    }
  }

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-200 ${className}`}>
      <Icon className={`w-6 h-6 ${getColorClasses(color)} mx-auto mb-2`} />
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/70 mb-2">{label}</div>
      {trend && trendValue && (
        <div className={`text-xs ${getTrendColor(trend)}`}>
          {getTrendIcon(trend)} {trendValue}
        </div>
      )}
    </div>
  )
}
