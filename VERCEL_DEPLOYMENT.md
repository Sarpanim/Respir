# Guide de Déploiement Vercel

## 🚀 Configuration des Variables d'Environnement

Pour que l'application fonctionne sur Vercel, vous devez configurer les variables d'environnement Supabase :

### 1. Accédez au Dashboard Vercel
1. Connectez-vous à [vercel.com](https://vercel.com)
2. Sélectionnez votre projet "Respir"
3. Allez dans l'onglet "Settings"
4. Cliquez sur "Environment Variables" dans le menu de gauche

### 2. Ajoutez les Variables d'Environnement
Ajoutez ces deux variables :

| Variable | Valeur | Environnement |
|----------|--------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://lshtqwprrksogjvxfqek.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzaHRxdXdwcnJrc29nanZ4ZnFlayIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzU3MjU4MTU1LCJleHAiOjIwNzI4MzQxNTV9.PcwczibQSzVMc7FfeO8LCuGSlUnqx04XwO0QabihC00` | Production, Preview, Development |

### 3. Redéployez
1. Après avoir ajouté les variables, allez dans l'onglet "Deployments"
2. Cliquez sur "Redeploy" sur le dernier déploiement
3. Ou poussez un nouveau commit pour déclencher un nouveau déploiement

## ✅ Vérifications

Une fois les variables configurées, l'application devrait :
- Se compiler sans erreur
- Afficher la page d'accueil
- Permettre la navigation vers `/courses`
- Afficher la liste des cours avec les données Supabase

## 🔧 Dépannage

Si vous rencontrez encore des erreurs :
1. Vérifiez que les variables d'environnement sont bien configurées
2. Vérifiez que les valeurs sont exactes (sans espaces)
3. Redéployez après avoir modifié les variables
4. Consultez les logs de build dans Vercel pour plus de détails
