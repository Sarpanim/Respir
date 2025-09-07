export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type NiveauCours = 'debutant' | 'intermediaire' | 'confirme' | 'expert'
export type TypeContenu = 'texte' | 'video' | 'audio' | 'image' | 'quiz'
export type TypeFormule = 'abonnement' | 'one-shot'
export type RoleUtilisateur = 'admin' | 'teacher' | 'student'

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          nom: string
          icone_url: string | null
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nom: string
          icone_url?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nom?: string
          icone_url?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      sous_categories: {
        Row: {
          id: string
          categorie_id: string
          nom: string
          icone_url: string | null
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          categorie_id: string
          nom: string
          icone_url?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          categorie_id?: string
          nom?: string
          icone_url?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sous_categories_categorie_id_fkey"
            columns: ["categorie_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      formules: {
        Row: {
          id: string
          nom: string
          description: string | null
          prix: number
          duree: number
          is_active: boolean
          type: TypeFormule
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nom: string
          description?: string | null
          prix?: number
          duree?: number
          is_active?: boolean
          type?: TypeFormule
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nom?: string
          description?: string | null
          prix?: number
          duree?: number
          is_active?: boolean
          type?: TypeFormule
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          id: string
          nom: string
          couleur: string
          icone_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nom: string
          couleur?: string
          icone_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nom?: string
          couleur?: string
          icone_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          id: string
          email: string
          nom: string | null
          avatar_url: string | null
          role: RoleUtilisateur
          formule_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          nom?: string | null
          avatar_url?: string | null
          role?: RoleUtilisateur
          formule_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          nom?: string | null
          avatar_url?: string | null
          role?: RoleUtilisateur
          formule_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_formule_id_fkey"
            columns: ["formule_id"]
            referencedRelation: "formules"
            referencedColumns: ["id"]
          }
        ]
      }
      cours: {
        Row: {
          id: string
          titre: string
          description: string | null
          niveau: NiveauCours
          duree: number
          prix: number | null
          progression: number
          image_url: string | null
          video_url: string | null
          audio_url: string | null
          categorie_id: string
          sous_categorie_id: string | null
          formule_id: string | null
          ordre: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          titre: string
          description?: string | null
          niveau?: NiveauCours
          duree?: number
          prix?: number | null
          progression?: number
          image_url?: string | null
          video_url?: string | null
          audio_url?: string | null
          categorie_id: string
          sous_categorie_id?: string | null
          formule_id?: string | null
          ordre?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          titre?: string
          description?: string | null
          niveau?: NiveauCours
          duree?: number
          prix?: number | null
          progression?: number
          image_url?: string | null
          video_url?: string | null
          audio_url?: string | null
          categorie_id?: string
          sous_categorie_id?: string | null
          formule_id?: string | null
          ordre?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cours_categorie_id_fkey"
            columns: ["categorie_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cours_sous_categorie_id_fkey"
            columns: ["sous_categorie_id"]
            referencedRelation: "sous_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cours_formule_id_fkey"
            columns: ["formule_id"]
            referencedRelation: "formules"
            referencedColumns: ["id"]
          }
        ]
      }
      cours_tags: {
        Row: {
          id: string
          cours_id: string
          tag_id: string
        }
        Insert: {
          id?: string
          cours_id: string
          tag_id: string
        }
        Update: {
          id?: string
          cours_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cours_tags_cours_id_fkey"
            columns: ["cours_id"]
            referencedRelation: "cours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cours_tags_tag_id_fkey"
            columns: ["tag_id"]
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      bullet_points: {
        Row: {
          id: string
          cours_id: string
          texte: string
          icone_url: string | null
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          cours_id: string
          texte: string
          icone_url?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          cours_id?: string
          texte?: string
          icone_url?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bullet_points_cours_id_fkey"
            columns: ["cours_id"]
            referencedRelation: "cours"
            referencedColumns: ["id"]
          }
        ]
      }
      sections: {
        Row: {
          id: string
          cours_id: string
          titre: string
          description: string | null
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          cours_id: string
          titre: string
          description?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          cours_id?: string
          titre?: string
          description?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sections_cours_id_fkey"
            columns: ["cours_id"]
            referencedRelation: "cours"
            referencedColumns: ["id"]
          }
        ]
      }
      chapitres: {
        Row: {
          id: string
          section_id: string
          titre: string
          description: string | null
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          section_id: string
          titre: string
          description?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          section_id?: string
          titre?: string
          description?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapitres_section_id_fkey"
            columns: ["section_id"]
            referencedRelation: "sections"
            referencedColumns: ["id"]
          }
        ]
      }
      sous_chapitres: {
        Row: {
          id: string
          chapitre_id: string
          titre: string
          description: string | null
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          chapitre_id: string
          titre: string
          description?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          chapitre_id?: string
          titre?: string
          description?: string | null
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sous_chapitres_chapitre_id_fkey"
            columns: ["chapitre_id"]
            referencedRelation: "chapitres"
            referencedColumns: ["id"]
          }
        ]
      }
      contenus: {
        Row: {
          id: string
          sous_chapitre_id: string | null
          chapitre_id: string | null
          section_id: string | null
          type: TypeContenu
          contenu: string
          ordre: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sous_chapitre_id?: string | null
          chapitre_id?: string | null
          section_id?: string | null
          type: TypeContenu
          contenu: string
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sous_chapitre_id?: string | null
          chapitre_id?: string | null
          section_id?: string | null
          type?: TypeContenu
          contenu?: string
          ordre?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contenus_sous_chapitre_id_fkey"
            columns: ["sous_chapitre_id"]
            referencedRelation: "sous_chapitres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contenus_chapitre_id_fkey"
            columns: ["chapitre_id"]
            referencedRelation: "chapitres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contenus_section_id_fkey"
            columns: ["section_id"]
            referencedRelation: "sections"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      cours_complets: {
        Row: {
          id: string
          titre: string
          description: string | null
          niveau: NiveauCours
          duree: number
          prix: number | null
          progression: number
          image_url: string | null
          video_url: string | null
          audio_url: string | null
          categorie_id: string
          sous_categorie_id: string | null
          formule_id: string | null
          ordre: number
          is_active: boolean
          created_at: string
          updated_at: string
          categorie_nom: string
          sous_categorie_nom: string | null
          formule_nom: string | null
          formule_prix: number | null
          formule_type: TypeFormule | null
          tags_noms: string[]
          bullet_points: string[]
        }
        Relationships: []
      }
      contenu_hierarchie: {
        Row: {
          contenu_id: string
          contenu_type: TypeContenu
          contenu: string
          contenu_ordre: number
          sous_chapitre_id: string | null
          sous_chapitre_titre: string | null
          chapitre_id: string | null
          chapitre_titre: string | null
          section_id: string | null
          section_titre: string | null
          cours_id: string | null
          cours_titre: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_user_role: {
        Args: {
          user_id: string
        }
        Returns: RoleUtilisateur
      }
      get_user_course_progress: {
        Args: {
          user_id: string
          course_id: string
        }
        Returns: number
      }
      get_user_courses: {
        Args: {
          user_id: string
        }
        Returns: {
          cours_id: string
          titre: string
          description: string | null
          niveau: NiveauCours
          duree: number
          prix: number | null
          progression: number
          image_url: string | null
          categorie_nom: string
          sous_categorie_nom: string | null
          formule_nom: string | null
        }[]
      }
    }
    Enums: {
      niveau_cours: NiveauCours
      type_contenu: TypeContenu
      type_formule: TypeFormule
      role_utilisateur: RoleUtilisateur
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
