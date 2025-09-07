import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Variables d\'environnement Supabase manquantes:', {
      url: !!supabaseUrl,
      key: !!supabaseKey
    })
    throw new Error('Variables d\'environnement Supabase manquantes')
  }

  return createBrowserClient(supabaseUrl, supabaseKey)
}
