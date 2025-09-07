import { Search, Heart, Menu, Bell, Settings, Crown, User } from 'lucide-react'

interface PremiumTopNavigationProps {
  title?: string
  showPremium?: boolean
  showSearch?: boolean
  showFavorites?: boolean
  showMenu?: boolean
  showNotifications?: boolean
  showSettings?: boolean
  showProfile?: boolean
  onSearch?: () => void
  onFavorites?: () => void
  onMenu?: () => void
  onNotifications?: () => void
  onSettings?: () => void
  onProfile?: () => void
  className?: string
}

export default function PremiumTopNavigation({
  title = "Application Premium",
  showPremium = true,
  showSearch = true,
  showFavorites = true,
  showMenu = true,
  showNotifications = true,
  showSettings = true,
  showProfile = false,
  onSearch,
  onFavorites,
  onMenu,
  onNotifications,
  onSettings,
  onProfile,
  className = ''
}: PremiumTopNavigationProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 ${className}`}>
      <div className="container-mobile px-4 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-3">
          {showSearch && (
            <button
              onClick={onSearch}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <Search className="w-5 h-5 text-white/80" />
            </button>
          )}
          {showFavorites && (
            <button
              onClick={onFavorites}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <Heart className="w-5 h-5 text-white/80" />
            </button>
          )}
          {showMenu && (
            <button
              onClick={onMenu}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <Menu className="w-5 h-5 text-white/80" />
            </button>
          )}
        </div>

        {/* Center */}
        <div className="flex items-center space-x-2">
          {showPremium && (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full flex items-center space-x-1">
              <Crown className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Premium</span>
            </div>
          )}
          {title && !showPremium && (
            <h1 className="text-white text-lg font-semibold">{title}</h1>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
          {showNotifications && (
            <button
              onClick={onNotifications}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 relative"
            >
              <Bell className="w-5 h-5 text-white/80" />
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
            </button>
          )}
          {showSettings && (
            <button
              onClick={onSettings}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <Settings className="w-5 h-5 text-white/80" />
            </button>
          )}
          {showProfile && (
            <button
              onClick={onProfile}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <User className="w-5 h-5 text-white/80" />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
