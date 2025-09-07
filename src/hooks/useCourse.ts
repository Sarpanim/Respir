'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Database } from '@/types/database'

type CoursComplet = Database['public']['Views']['cours_complets']['Row']
type ContenuHierarchie = Database['public']['Views']['contenu_hierarchie']['Row']

export function useCourse(courseId: string) {
  const [cours, setCours] = useState<CoursComplet | null>(null)
  const [contenu, setContenu] = useState<ContenuHierarchie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!courseId) return

      try {
        setLoading(true)
        setError(null)
        
        // Récupérer les détails du cours
        const { data: coursData, error: coursError } = await supabase
          .from('cours_complets')
          .select('*')
          .eq('id', courseId)
          .single()

        if (coursError) throw coursError
        setCours(coursData)

        // Récupérer la hiérarchie du contenu
        const { data: contenuData, error: contenuError } = await supabase
          .from('contenu_hierarchie')
          .select('*')
          .eq('cours_id', courseId)
          .order('section_id, chapitre_id, sous_chapitre_id, contenu_ordre')

        if (contenuError) throw contenuError
        setContenu(contenuData || [])

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement du cours')
      } finally {
        setLoading(false)
      }
    }

    fetchCourseData()
  }, [courseId, supabase])

  // Grouper le contenu par section
  const contenuBySection = contenu.reduce((acc: any, item) => {
    const sectionId = item.section_id || 'direct'
    if (!acc[sectionId]) {
      acc[sectionId] = {
        section: item.section_titre,
        chapitres: {}
      }
    }
    
    if (item.chapitre_id) {
      const chapitreId = item.chapitre_id
      if (!acc[sectionId].chapitres[chapitreId]) {
        acc[sectionId].chapitres[chapitreId] = {
          chapitre: item.chapitre_titre,
          sous_chapitres: {}
        }
      }
      
      if (item.sous_chapitre_id) {
        const sousChapitreId = item.sous_chapitre_id
        if (!acc[sectionId].chapitres[chapitreId].sous_chapitres[sousChapitreId]) {
          acc[sectionId].chapitres[chapitreId].sous_chapitres[sousChapitreId] = {
            sous_chapitre: item.sous_chapitre_titre,
            contenus: []
          }
        }
        acc[sectionId].chapitres[chapitreId].sous_chapitres[sousChapitreId].contenus.push(item)
      } else {
        // Contenu direct du chapitre
        if (!acc[sectionId].chapitres[chapitreId].contenus) {
          acc[sectionId].chapitres[chapitreId].contenus = []
        }
        acc[sectionId].chapitres[chapitreId].contenus.push(item)
      }
    } else {
      // Contenu direct de la section
      if (!acc[sectionId].contenus) {
        acc[sectionId].contenus = []
      }
      acc[sectionId].contenus.push(item)
    }
    
    return acc
  }, {} as any)

  // Statistiques du cours
  const stats = {
    totalSections: Object.keys(contenuBySection).length,
    totalChapitres: Object.values(contenuBySection).reduce((acc: number, section: any) => 
      acc + Object.keys(section.chapitres || {}).length, 0),
    totalContenus: contenu.length,
    dureeEstimee: cours?.duree || 0,
    typesContenus: contenu.reduce((acc: Record<string, number>, item) => {
      acc[item.contenu_type] = (acc[item.contenu_type] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }

  return {
    cours,
    contenu,
    contenuBySection,
    stats,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      // Re-trigger useEffect
      setCours(null)
      setContenu([])
    }
  }
}
