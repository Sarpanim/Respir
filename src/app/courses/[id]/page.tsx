"use client"

import { useState } from 'react'
import { 
  ArrowLeft, 
  Heart, 
  Share, 
  MoreVertical,
  Play,
  Clock,
  Star,
  Users,
  BookOpen,
  Download,
  PlayCircle,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Settings,
  Home,
  Search,
  Target
} from 'lucide-react'

// Import des composants premium
import PremiumTopNavigation from '@/components/navigation/PremiumTopNavigation'
import PremiumBottomNavigation from '@/components/navigation/PremiumBottomNavigation'

interface CourseDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params
  const [activeTab, setActiveTab] = useState('home')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [selectedNarrator, setSelectedNarrator] = useState<'male' | 'female'>('female')

  // Données du cours (en réalité, vous récupéreriez cela depuis une API)
  const course = {
    id: id,
    title: "Méditation du Matin",
    subtitle: "Commencez votre journée en douceur",
    description: "Cette méditation guidée vous aidera à commencer votre journée avec sérénité et énergie positive. Découvrez des techniques de respiration et de visualisation pour cultiver la gratitude et la motivation.",
    image: "https://images.unsplash.com/photo-1506905925346-04b1e114101c?w=800&h=600&fit=crop&crop=center",
    duration: "10 min",
    level: "débutant" as const,
    rating: 4.8,
    students: 1250,
    isPremium: false,
    category: "Méditation",
    instructor: {
      name: "Sarah Johnson",
      title: "Instructrice de méditation certifiée",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      experience: "5 ans d'expérience"
    },
    sections: [
      {
        id: 1,
        title: "Introduction et préparation",
        duration: "2 min",
        isCompleted: true,
        description: "Préparez votre espace et votre esprit pour la méditation"
      },
      {
        id: 2,
        title: "Respiration consciente",
        duration: "3 min",
        isCompleted: true,
        description: "Techniques de respiration pour se centrer"
      },
      {
        id: 3,
        title: "Visualisation positive",
        duration: "4 min",
        isCompleted: false,
        description: "Cultivez des pensées positives pour la journée"
      },
      {
        id: 4,
        title: "Gratitude et intention",
        duration: "1 min",
        isCompleted: false,
        description: "Définissez votre intention pour la journée"
      }
    ],
    relatedCourses: [
      {
        id: 2,
        title: "Gestion du Stress",
        subtitle: "Techniques avancées de relaxation",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        duration: "25 min",
        rating: 4.9,
        students: 890
      },
      {
        id: 3,
        title: "Sommeil Profond",
        subtitle: "Méditations pour un repos réparateur",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
        duration: "30 min",
        rating: 4.7,
        students: 2100
      }
    ]
  }

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation Top Premium */}
      <PremiumTopNavigation 
        title=""
        showPremium={false}
        showSearch={false}
        showFavorites={false}
        showMenu={false}
        showNotifications={false}
        showSettings={false}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-80 md:h-96 relative overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Back Button */}
            <button className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-200">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleFavorite}
                className="bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-200"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'text-red-400 fill-red-400' : 'text-white'}`} />
              </button>
              <button className="bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-200">
                <Share className="w-5 h-5 text-white" />
              </button>
              <button className="bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50 transition-all duration-200">
                <MoreVertical className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Course Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                  {course.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                  course.level === 'débutant' ? 'bg-green-500/80' :
                  course.level === 'intermédiaire' ? 'bg-yellow-500/80' :
                  'bg-red-500/80'
                }`}>
                  {course.level}
                </span>
                {course.isPremium && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-white text-sm font-medium">
                    Premium
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-white/80 text-lg mb-4">{course.subtitle}</p>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-lg font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-5 h-5 text-white/60" />
                  <span className="text-white/60 text-lg">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5 text-white/60" />
                  <span className="text-white/60 text-lg">{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8">
          <div className="container-mobile px-4">
            {/* Play Button */}
            <div className="mb-8">
              <button
                onClick={handlePlay}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-3"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6" />
                    <span>Commencer la méditation</span>
                  </>
                )}
              </button>
            </div>

            {/* Instructor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Instructeur</h3>
              <div className="flex items-center space-x-4">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{course.instructor.name}</h4>
                  <p className="text-white/70 mb-1">{course.instructor.title}</p>
                  <p className="text-white/60 text-sm">{course.instructor.experience}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">À propos</h3>
              <p className="text-white/80 leading-relaxed">{course.description}</p>
            </div>

            {/* Narrator Selection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Choisir un narrateur</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedNarrator('female')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedNarrator === 'female'
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-semibold">F</span>
                    </div>
                    <p className="text-white font-medium">Voix féminine</p>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedNarrator('male')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedNarrator === 'male'
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-semibold">M</span>
                    </div>
                    <p className="text-white font-medium">Voix masculine</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Course Sections */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Contenu du cours</h3>
              <div className="space-y-4">
                {course.sections.map((section, index) => (
                  <div key={section.id} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div className="flex-shrink-0">
                      {section.isCompleted ? (
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">{index + 1}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{section.title}</h4>
                      <p className="text-white/60 text-sm">{section.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-white/60" />
                      <span className="text-white/60 text-sm">{section.duration}</span>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-200">
                      <PlayCircle className="w-5 h-5 text-white/60" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Courses */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Cours similaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.relatedCourses.map((relatedCourse) => (
                  <div key={relatedCourse.id} className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-200">
                    <div className="h-32">
                      <img 
                        src={relatedCourse.image} 
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-medium mb-1">{relatedCourse.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{relatedCourse.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-white text-sm">{relatedCourse.rating}</span>
                          <Clock className="w-4 h-4 text-white/60" />
                          <span className="text-white/60 text-sm">{relatedCourse.duration}</span>
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm">
                          Voir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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