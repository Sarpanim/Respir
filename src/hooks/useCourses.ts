'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Database } from '@/types/database'

type CoursComplet = Database['public']['Views']['cours_complets']['Row']
type Cours = Database['public']['Tables']['cours']['Row']
type Categorie = Database['public']['Tables']['categories']['Row']
type Tag = Database['public']['Tables']['tags']['Row']

export function useCourses() {
  const [cours, setCours] = useState<CoursComplet[]>([])
  const [categories, setCategories] = useState<Categorie[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  // Charger tous les cours avec leurs informations complètes
  const fetchCours = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('cours_complets')
        .select('*')
        .eq('is_active', true)
        .order('ordre')

      if (error) throw error
      setCours(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement des cours')
    } finally {
      setLoading(false)
    }
  }

  // Charger les catégories
  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('ordre')

      if (error) throw error
      setCategories(data || [])
    } catch (err) {
      console.error('Erreur lors du chargement des catégories:', err)
    }
  }

  // Charger les tags
  const fetchTags = async () => {
    try {
      const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('nom')

      if (error) throw error
      setTags(data || [])
    } catch (err) {
      console.error('Erreur lors du chargement des tags:', err)
    }
  }

  // Créer un nouveau cours
  const createCours = async (coursData: Omit<Cours, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('cours')
        .insert([coursData])
        .select()
        .single()

      if (error) throw error
      
      // Recharger la liste des cours
      await fetchCours()
      return { data, error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la création du cours'
      return { data: null, error: errorMessage }
    }
  }

  // Mettre à jour un cours
  const updateCours = async (id: string, updates: Partial<Cours>) => {
    try {
      const { data, error } = await supabase
        .from('cours')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      // Recharger la liste des cours
      await fetchCours()
      return { data, error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la mise à jour du cours'
      return { data: null, error: errorMessage }
    }
  }

  // Supprimer un cours
  const deleteCours = async (id: string) => {
    try {
      const { error } = await supabase
        .from('cours')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      // Recharger la liste des cours
      await fetchCours()
      return { error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression du cours'
      return { error: errorMessage }
    }
  }

  // Ajouter un tag à un cours
  const addTagToCours = async (coursId: string, tagId: string) => {
    try {
      const { error } = await supabase
        .from('cours_tags')
        .insert([{ cours_id: coursId, tag_id: tagId }])

      if (error) throw error
      
      // Recharger la liste des cours
      await fetchCours()
      return { error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de l\'ajout du tag'
      return { error: errorMessage }
    }
  }

  // Retirer un tag d'un cours
  const removeTagFromCours = async (coursId: string, tagId: string) => {
    try {
      const { error } = await supabase
        .from('cours_tags')
        .delete()
        .eq('cours_id', coursId)
        .eq('tag_id', tagId)

      if (error) throw error
      
      // Recharger la liste des cours
      await fetchCours()
      return { error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression du tag'
      return { error: errorMessage }
    }
  }

  // Filtrer les cours par catégorie
  const getCoursByCategorie = (categorieId: string) => {
    return cours.filter(c => c.categorie_id === categorieId)
  }

  // Filtrer les cours par niveau
  const getCoursByNiveau = (niveau: string) => {
    return cours.filter(c => c.niveau === niveau)
  }

  // Rechercher des cours
  const searchCours = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return cours.filter(c => 
      c.titre.toLowerCase().includes(lowercaseQuery) ||
      c.description?.toLowerCase().includes(lowercaseQuery) ||
      c.categorie_nom.toLowerCase().includes(lowercaseQuery) ||
      c.sous_categorie_nom?.toLowerCase().includes(lowercaseQuery) ||
      c.tags_noms.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  // Charger les données au montage du composant
  useEffect(() => {
    const loadData = async () => {
      await Promise.all([
        fetchCours(),
        fetchCategories(),
        fetchTags()
      ])
    }

    loadData()
  }, [])

  return {
    cours,
    categories,
    tags,
    loading,
    error,
    createCours,
    updateCours,
    deleteCours,
    addTagToCours,
    removeTagFromCours,
    getCoursByCategorie,
    getCoursByNiveau,
    searchCours,
    refetch: fetchCours
  }
}
