import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Bell, 
  Settings, 
  Crown, 
  Flame, 
  Target,
  Calendar,
  TrendingUp,
  Sparkles
} from "lucide-react"

interface UserGreetingProps {
  user?: {
    name: string
    avatar_url?: string
    is_premium?: boolean
    streak_days?: number
    total_meditation_minutes?: number
    courses_completed?: number
    next_meditation?: string
  }
  showStats?: boolean
  variant?: 'default' | 'minimal' | 'extended'
}

export function UserGreeting({ 
  user, 
  showStats = true, 
  variant = 'default' 
}: UserGreetingProps) {
  const defaultUser = {
    name: "Olivier",
    avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    is_premium: false,
    streak_days: 7,
    total_meditation_minutes: 240,
    courses_completed: 3,
    next_meditation: "Méditation du matin"
  }

  const userData = user || defaultUser

  const formatMeditationTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  // Variant Minimal - Juste le nom et avatar
  if (variant === 'minimal') {
    return (
      <div className="flex items-center gap-3 p-4">
        <div className="relative">
          <Image
            src={userData.avatar_url || '/default-avatar.png'}
            alt={userData.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          {userData.is_premium && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Crown className="h-2.5 w-2.5 text-white" />
            </div>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Bonjour, {userData.name}
          </h2>
          <p className="text-sm text-slate-600">Prêt pour votre séance ?</p>
        </div>
      </div>
    )
  }

  // Variant Extended - Avec toutes les stats
  if (variant === 'extended') {
    return (
      <Card className="border-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={userData.avatar_url || '/default-avatar.png'}
                  alt={userData.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover ring-4 ring-white/50"
                />
                {userData.is_premium && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Crown className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">
                  Bonjour, {userData.name}
                </h2>
                <p className="text-slate-600 mb-2">Comment vous sentez-vous aujourd'hui ?</p>
                {userData.next_meditation && (
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Prochaine : {userData.next_meditation}
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-slate-600">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white/60 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{userData.streak_days}</div>
                <div className="text-xs text-slate-600">jours de suite</div>
              </div>
              
              <div className="text-center p-3 bg-white/60 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {formatMeditationTime(userData.total_meditation_minutes)}
                </div>
                <div className="text-xs text-slate-600">médité</div>
              </div>
              
              <div className="text-center p-3 bg-white/60 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{userData.courses_completed}</div>
                <div className="text-xs text-slate-600">cours terminés</div>
              </div>
              
              <div className="text-center p-3 bg-white/60 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">12</div>
                <div className="text-xs text-slate-600">cours cette semaine</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  // Variant par défaut
  return (
    <Card className="border-0 bg-gradient-to-r from-slate-50 to-blue-50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={userData.avatar_url || '/default-avatar.png'}
                alt={userData.name}
                width={50}
                height={50}
                className="rounded-full object-cover ring-2 ring-white/50"
              />
              {userData.is_premium && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="h-2.5 w-2.5 text-white" />
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Bonjour, {userData.name}
              </h2>
              <p className="text-slate-600">Prêt pour votre moment de paix ?</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-slate-600">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {showStats && (
          <div className="flex gap-6 mt-4 pt-4 border-t border-slate-200/50">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{userData.streak_days}</span> jours de suite
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{formatMeditationTime(userData.total_meditation_minutes)}</span> médité
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{userData.courses_completed}</span> cours
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
