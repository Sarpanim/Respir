# Respir

Une application moderne construite avec Next.js 14, Tailwind CSS et shadcn/ui, optimisée pour mobile-first.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI accessibles et réutilisables
- **Supabase** - Backend-as-a-Service (Auth, Database, Storage)
- **ESLint** - Linter pour maintenir la qualité du code

## 📱 Design Mobile-First

Le projet est configuré avec une approche mobile-first, incluant :

- Classes utilitaires Tailwind personnalisées pour le responsive design
- Composants optimisés pour les écrans mobiles
- Viewport meta tag configuré pour mobile
- Breakpoints responsive (mobile, tablet, desktop)

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd respir
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📜 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Structure du projet

```
src/
├── app/                 # App Router (Next.js 14)
│   ├── auth/           # Pages d'authentification
│   │   └── callback/   # Callback OAuth
│   ├── dashboard/      # Page tableau de bord
│   ├── login/          # Page de connexion
│   ├── globals.css     # Styles globaux et variables CSS
│   ├── layout.tsx      # Layout racine
│   └── page.tsx        # Page d'accueil
├── components/         # Composants React
│   ├── auth/          # Composants d'authentification
│   └── ui/            # Composants shadcn/ui
├── hooks/             # Hooks personnalisés
│   └── useAuth.ts     # Hook d'authentification
├── lib/               # Utilitaires et helpers
│   ├── supabase/      # Configuration Supabase
│   │   ├── client.ts  # Client navigateur
│   │   ├── server.ts  # Client serveur
│   │   └── middleware.ts # Middleware auth
│   └── utils.ts       # Fonctions utilitaires
└── types/             # Types TypeScript
    └── database.ts    # Types de la base de données
```

## 🎯 Fonctionnalités

- ✅ Configuration Next.js 14 avec App Router
- ✅ Tailwind CSS configuré avec variables CSS personnalisées
- ✅ shadcn/ui intégré avec composants de base
- ✅ Design mobile-first avec classes utilitaires
- ✅ TypeScript configuré
- ✅ ESLint configuré
- ✅ Structure de projet organisée
- ✅ **Supabase intégré** avec authentification complète
- ✅ **Authentification** : Email/Password + OAuth Google
- ✅ **Base de données** : Types TypeScript + requêtes
- ✅ **Middleware** : Protection des routes
- ✅ **Hooks personnalisés** : useAuth pour la gestion d'état

## 🔐 Configuration Supabase

### Variables d'environnement
Le fichier `.env.local` contient les clés Supabase :
```env
NEXT_PUBLIC_SUPABASE_URL=https://lshtqwprrksogjvxfqek.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Fonctionnalités intégrées
- **Authentification** : Email/Password + OAuth Google
- **Base de données** : Tables `profiles` et `posts` avec types TypeScript
- **Middleware** : Protection automatique des routes
- **Hooks** : `useAuth()` pour la gestion d'état utilisateur
- **Composants** : `AuthForm`, `UserProfile` prêts à l'emploi

### Pages disponibles
- `/` - Page d'accueil
- `/login` - Connexion/Inscription
- `/dashboard` - Tableau de bord (protégé)
- `/auth/callback` - Callback OAuth

## 📝 Prochaines étapes

- Configurer les tables Supabase dans le dashboard
- Ajouter plus de composants shadcn/ui selon les besoins
- Configurer le thème sombre/clair
- Ajouter des animations et transitions
- Intégrer des tests (Jest, Testing Library)
- Configurer le déploiement (Vercel, Netlify, etc.)
- Ajouter le stockage de fichiers avec Supabase Storage
