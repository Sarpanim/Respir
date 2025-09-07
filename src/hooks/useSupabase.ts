import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/database'

export const useSupabase = () => {
  const supabase = createClientComponentClient<Database>()
  return supabase
}

// Hook pour les cours
export const useCourses = () => {
  const supabase = useSupabase()

  const getCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        instructor:instructors(*),
        category:categories(*),
        course_tags(
          tag:tags(*)
        )
      `)
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  const getCourseById = async (id: string) => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        instructor:instructors(*),
        category:categories(*),
        course_tags(
          tag:tags(*)
        ),
        course_sections(
          *,
          lessons(*)
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  const getCoursesByCategory = async (categoryId: string) => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        instructor:instructors(*),
        category:categories(*),
        course_tags(
          tag:tags(*)
        )
      `)
      .eq('category_id', categoryId)
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  return {
    getCourses,
    getCourseById,
    getCoursesByCategory
  }
}

// Hook pour les méditations guidées
export const useMeditations = () => {
  const supabase = useSupabase()

  const getMeditations = async () => {
    const { data, error } = await supabase
      .from('guided_meditations')
      .select(`
        *,
        instructor:instructors(*),
        category:categories(*),
        meditation_tags(
          tag:tags(*)
        )
      `)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  const getMeditationById = async (id: string) => {
    const { data, error } = await supabase
      .from('guided_meditations')
      .select(`
        *,
        instructor:instructors(*),
        category:categories(*),
        meditation_tags(
          tag:tags(*)
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  const getPopularMeditations = async () => {
    const { data, error } = await supabase
      .from('guided_meditations')
      .select(`
        *,
        instructor:instructors(*),
        category:categories(*),
        meditation_tags(
          tag:tags(*)
        )
      `)
      .order('play_count', { ascending: false })
      .limit(6)

    if (error) throw error
    return data
  }

  return {
    getMeditations,
    getMeditationById,
    getPopularMeditations
  }
}

// Hook pour les catégories
export const useCategories = () => {
  const supabase = useSupabase()

  const getCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')

    if (error) throw error
    return data
  }

  return { getCategories }
}

// Hook pour les tags
export const useTags = () => {
  const supabase = useSupabase()

  const getTags = async () => {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .order('name')

    if (error) throw error
    return data
  }

  return { getTags }
}

// Hook pour les instructeurs
export const useInstructors = () => {
  const supabase = useSupabase()

  const getInstructors = async () => {
    const { data, error } = await supabase
      .from('instructors')
      .select('*')
      .order('name')

    if (error) throw error
    return data
  }

  const getInstructorById = async (id: string) => {
    const { data, error } = await supabase
      .from('instructors')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  return {
    getInstructors,
    getInstructorById
  }
}

// Hook pour les statistiques utilisateur
export const useUserStats = () => {
  const supabase = useSupabase()

  const getUserStats = async (userId: string) => {
    const { data, error } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) throw error
    return data
  }

  const updateUserStats = async (userId: string, stats: any) => {
    const { data, error } = await supabase
      .from('user_stats')
      .upsert({
        user_id: userId,
        ...stats,
        updated_at: new Date().toISOString()
      })

    if (error) throw error
    return data
  }

  return {
    getUserStats,
    updateUserStats
  }
}
