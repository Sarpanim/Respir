'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export function SupabaseTest() {
  const [status, setStatus] = useState<string>('')
  const [details, setDetails] = useState<any>(null)

  const testConnection = async () => {
    try {
      setStatus('Test en cours...')
      
      const supabase = createClient()
      
      // Test 1: Vérifier les variables d'environnement
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      
      console.log('URL:', url)
      console.log('Key:', key ? 'Présent' : 'Manquant')
      
      if (!url || !key) {
        setStatus('❌ Variables d\'environnement manquantes')
        setDetails({ url: !!url, key: !!key })
        return
      }
      
      // Test 2: Test de connexion simple
      const { data, error } = await supabase
        .from('categories')
        .select('count')
        .limit(1)
      
      if (error) {
        setStatus(`❌ Erreur de connexion: ${error.message}`)
        setDetails(error)
        return
      }
      
      setStatus('✅ Connexion Supabase réussie!')
      setDetails({ 
        url: url.substring(0, 30) + '...',
        key: key.substring(0, 20) + '...',
        testResult: data 
      })
      
    } catch (err) {
      setStatus(`❌ Erreur: ${err instanceof Error ? err.message : 'Erreur inconnue'}`)
      setDetails(err)
    }
  }

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="font-bold mb-2">Test de connexion Supabase</h3>
      <button 
        onClick={testConnection}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Tester la connexion
      </button>
      {status && (
        <div className="mt-2">
          <p className="font-medium">{status}</p>
          {details && (
            <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-auto">
              {JSON.stringify(details, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}
