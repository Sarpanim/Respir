'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function TestSupabasePage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testSupabase = async () => {
    setLoading(true)
    try {
      // Vérifier les variables d'environnement
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      
      console.log('Environment check:', {
        url: url ? url.substring(0, 30) + '...' : 'MISSING',
        key: key ? key.substring(0, 20) + '...' : 'MISSING'
      })

      if (!url || !key) {
        setResult({
          success: false,
          error: 'Variables d\'environnement manquantes',
          details: { url: !!url, key: !!key }
        })
        return
      }

      // Test de connexion
      const supabase = createClient()
      
      // Test simple
      const { data, error } = await supabase
        .from('categories')
        .select('count')
        .limit(1)

      if (error) {
        setResult({
          success: false,
          error: error.message,
          details: error
        })
        return
      }

      setResult({
        success: true,
        message: 'Connexion Supabase réussie!',
        data: data
      })

    } catch (err) {
      setResult({
        success: false,
        error: err instanceof Error ? err.message : 'Erreur inconnue',
        details: err
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Test de connexion Supabase</h1>
      
      <div className="space-y-4">
        <button
          onClick={testSupabase}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Test en cours...' : 'Tester la connexion'}
        </button>

        {result && (
          <div className={`p-4 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <h3 className="font-bold">
              {result.success ? '✅ Succès' : '❌ Erreur'}
            </h3>
            <p className="mt-2">{result.message || result.error}</p>
            {result.details && (
              <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                {JSON.stringify(result.details, null, 2)}
              </pre>
            )}
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Variables d'environnement actuelles :</h3>
          <p><strong>URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Définie' : '❌ Manquante'}</p>
          <p><strong>KEY:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Définie' : '❌ Manquante'}</p>
        </div>
      </div>
    </div>
  )
}
