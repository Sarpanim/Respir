# Respir

Une application moderne construite avec Next.js 14, Tailwind CSS et shadcn/ui, optimisée pour mobile-first.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI accessibles et réutilisables
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
│   ├── globals.css     # Styles globaux et variables CSS
│   ├── layout.tsx      # Layout racine
│   └── page.tsx        # Page d'accueil
├── components/         # Composants React
│   └── ui/            # Composants shadcn/ui
└── lib/               # Utilitaires et helpers
    └── utils.ts       # Fonctions utilitaires
```

## 🎯 Fonctionnalités

- ✅ Configuration Next.js 14 avec App Router
- ✅ Tailwind CSS configuré avec variables CSS personnalisées
- ✅ shadcn/ui intégré avec composants de base
- ✅ Design mobile-first avec classes utilitaires
- ✅ TypeScript configuré
- ✅ ESLint configuré
- ✅ Structure de projet organisée

## 📝 Prochaines étapes

- Ajouter plus de composants shadcn/ui selon les besoins
- Configurer le thème sombre/clair
- Ajouter des animations et transitions
- Intégrer des tests (Jest, Testing Library)
- Configurer le déploiement (Vercel, Netlify, etc.)
