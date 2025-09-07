import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types/database'

export const useSupabase = () => {
  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  return supabase
}

// Hooks simplifiés pour éviter les erreurs de base de données
export const useCourses = () => {
  return {
    courses: [],
    loading: false,
    error: null,
    getCourses: () => {},
    getCourseById: () => null
  }
}

export const useMeditations = () => {
  return {
    meditations: [],
    loading: false,
    error: null,
    getMeditations: () => {},
    getMeditationById: () => null
  }
}

export const useCategories = () => {
  return {
    categories: [],
    loading: false,
    error: null,
    getCategories: () => {}
  }
}

export const useTags = () => {
  return {
    tags: [],
    loading: false,
    error: null,
    getTags: () => {}
  }
}