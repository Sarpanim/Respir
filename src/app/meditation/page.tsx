"use client"

import { useState, useEffect } from 'react'
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Settings, 
  Heart, 
  Share, 
  Download, 
  RotateCcw, 
  RotateCw, 
  Moon, 
  Sun, 
  Wind, 
  Waves, 
  Leaf, 
  Mountain, 
  Home, 
  Search, 
  Users, 
  Target,
  Clock,
  Timer,
  PlayCircle,
  PauseCircle
} from 'lucide-react'

// Import des composants premium
import PremiumTopNavigation from '@/components/navigation/PremiumTopNavigation'
import PremiumBottomNavigation from '@/components/navigation/PremiumBottomNavigation'

export default function MeditationPage() {
  const [activeTab, setActiveTab] = useState('meditate')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(600) // 10 minutes en secondes
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedAmbient, setSelectedAmbient] = useState('nature')
  const [isTimerMode, setIsTimerMode] = useState(false)
  const [timerMinutes, setTimerMinutes] = useState(10)

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration])

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Handle play/pause
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Handle skip
  const handleSkip = (direction: 'forward' | 'backward') => {
    if (direction === 'forward') {
      setCurrentTime(Math.min(currentTime + 30, duration))
    } else {
      setCurrentTime(Math.max(currentTime - 30, 0))
    }
  }

  // Handle volume
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  // Handle mute
  const handleMute = () => {
    setIsMuted(!isMuted)
  }

  // Handle timer
  const handleTimer = () => {
    setIsTimerMode(!isTimerMode)
    if (!isTimerMode) {
      setDuration(timerMinutes * 60)
      setCurrentTime(0)
    }
  }

  // Progress percentage
  const progress = (currentTime / duration) * 100

  // Ambient sounds
  const ambientSounds = [
    { id: 'nature', name: 'Nature', icon: Leaf, color: 'from-green-500 to-emerald-600' },
    { id: 'ocean', name: 'Océan', icon: Waves, color: 'from-blue-500 to-cyan-600' },
    { id: 'rain', name: 'Pluie', icon: Wind, color: 'from-gray-500 to-slate-600' },
    { id: 'forest', name: 'Forêt', icon: Mountain, color: 'from-emerald-500 to-green-600' },
    { id: 'silence', name: 'Silence', icon: Moon, color: 'from-purple-500 to-indigo-600' }
  ]

  // Meditation sessions
  const meditationSessions = [
    {
      id: 1,
      title: "Méditation du Matin",
      duration: "10 min",
      description: "Commencez votre journée en douceur",
      image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=400&h=300&fit=crop&crop=center",
      isPlaying: isPlaying && currentTime > 0
    },
    {
      id: 2,
      title: "Gestion du Stress",
      duration: "25 min",
      description: "Techniques avancées de relaxation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      isPlaying: false
    },
    {
      id: 3,
      title: "Sommeil Profond",
      duration: "30 min",
      description: "Méditations pour un repos réparateur",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
      isPlaying: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation Top Premium */}
      <PremiumTopNavigation 
        title="Méditation"
        showPremium={true}
        showSearch={false}
        showFavorites={true}
        showMenu={false}
        showNotifications={false}
        showSettings={true}
      />

      <main className="pt-16">
        {/* Meditation Player */}
        <section className="py-8">
          <div className="container-mobile px-4">
            {/* Current Session */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Méditation du Matin</h1>
              <p className="text-white/70">Commencez votre journée en douceur</p>
            </div>

            {/* Progress Circle */}
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64">
                {/* Background Circle */}
                <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                    className="transition-all duration-1000 ease-in-out"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {formatTime(currentTime)}
                  </div>
                  <div className="text-white/60 text-sm">
                    / {formatTime(duration)}
                  </div>
                  <div className="text-white/40 text-xs mt-2">
                    {Math.round(progress)}% terminé
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <button
                onClick={() => handleSkip('backward')}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200"
              >
                <SkipBack className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={handlePlayPause}
                className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                {isPlaying ? (
                  <PauseCircle className="w-8 h-8 text-white" />
                ) : (
                  <PlayCircle className="w-8 h-8 text-white" />
                )}
              </button>
              
              <button
                onClick={() => handleSkip('forward')}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200"
              >
                <SkipForward className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={handleMute}
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white/60" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white/60" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-white/60 text-sm w-8">
                {isMuted ? 0 : volume}%
              </span>
            </div>

            {/* Timer Mode */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Mode Timer</h3>
                <button
                  onClick={handleTimer}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isTimerMode 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/20 text-white/70 hover:bg-white/30'
                  }`}
                >
                  {isTimerMode ? 'Désactiver' : 'Activer'}
                </button>
              </div>
              
              {isTimerMode && (
                <div className="flex items-center space-x-4">
                  <span className="text-white/70 text-sm">Durée:</span>
                  <select
                    value={timerMinutes}
                    onChange={(e) => setTimerMinutes(parseInt(e.target.value))}
                    className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={5} className="bg-slate-800">5 min</option>
                    <option value={10} className="bg-slate-800">10 min</option>
                    <option value={15} className="bg-slate-800">15 min</option>
                    <option value={20} className="bg-slate-800">20 min</option>
                    <option value={30} className="bg-slate-800">30 min</option>
                    <option value={45} className="bg-slate-800">45 min</option>
                    <option value={60} className="bg-slate-800">1h</option>
                  </select>
                </div>
              )}
            </div>

            {/* Ambient Sounds */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
              <h3 className="text-white font-semibold mb-4">Ambiance sonore</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {ambientSounds.map((ambient) => (
                  <button
                    key={ambient.id}
                    onClick={() => setSelectedAmbient(ambient.id)}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      selectedAmbient === ambient.id
                        ? 'bg-white/20 border-2 border-blue-500'
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${ambient.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <ambient.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">{ambient.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200">
                <Heart className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200">
                <Share className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200">
                <Download className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200">
                <Settings className="w-5 h-5 text-white/60" />
              </button>
            </div>
          </div>
        </section>

        {/* Meditation Sessions */}
        <section className="py-8">
          <div className="container-mobile px-4">
            <h2 className="text-xl font-semibold text-white mb-6">Sessions disponibles</h2>
            <div className="space-y-4">
              {meditationSessions.map((session) => (
                <div key={session.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                      <img 
                        src={session.image} 
                        alt={session.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{session.title}</h3>
                      <p className="text-white/70 text-sm mb-2">{session.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-white/60" />
                          <span className="text-white/60 text-sm">{session.duration}</span>
                        </div>
                        {session.isPlaying && (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-blue-400 text-sm">En cours</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                      <Play className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Spacing for Navigation */}
        <div className="h-20"></div>
      </main>

      {/* Bottom Navigation Premium */}
      <PremiumBottomNavigation
        tabs={[
          { id: 'home', label: 'Accueil', icon: Home },
          { id: 'meditate', label: 'Méditer', icon: Play, active: true },
          { id: 'explore', label: 'Explorer', icon: Search },
          { id: 'profile', label: 'Profil', icon: Users },
          { id: 'stats', label: 'Stats', icon: Target }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}
