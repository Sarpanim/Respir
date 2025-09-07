# Configuration de la Base de Données Supabase

## 📋 Instructions d'installation

### 1. Exécution du script SQL

1. Connectez-vous à votre dashboard Supabase
2. Allez dans l'onglet **SQL Editor**
3. Copiez le contenu du fichier `supabase-schema.sql`
4. Collez-le dans l'éditeur SQL
5. Cliquez sur **Run** pour exécuter le script

### 2. Vérification de l'installation

Après l'exécution, vous devriez voir les tables suivantes dans l'onglet **Table Editor** :

- ✅ `categories`
- ✅ `sous_categories`
- ✅ `formules`
- ✅ `tags`
- ✅ `users`
- ✅ `cours`
- ✅ `cours_tags`
- ✅ `bullet_points`
- ✅ `sections`
- ✅ `chapitres`
- ✅ `sous_chapitres`
- ✅ `contenus`

### 3. Configuration du Storage

Le script crée automatiquement les buckets suivants dans **Storage** :

- `cours-images` (public)
- `cours-videos` (privé)
- `cours-audio` (privé)
- `user-avatars` (public)
- `category-icons` (public)
- `tag-icons` (public)

## 🏗️ Structure de la Base de Données

### Hiérarchie du Contenu

```
Cours
├── Sections
│   ├── Chapitres
│   │   ├── Sous-chapitres
│   │   │   └── Contenus
│   │   └── Contenus (directs)
│   └── Contenus (directs)
```

### Relations Principales

- **Cours** → **Catégorie** (obligatoire)
- **Cours** → **Sous-catégorie** (optionnel)
- **Cours** → **Formule** (optionnel)
- **Cours** → **Tags** (many-to-many via `cours_tags`)
- **Cours** → **Bullet Points** (one-to-many)

## 🔐 Sécurité (RLS)

### Politiques de Sécurité

- **Lecture publique** : Catégories, sous-catégories, formules, tags, cours actifs
- **Écriture admin** : Toutes les tables de configuration
- **Écriture teacher/admin** : Contenu des cours
- **Lecture/écriture utilisateur** : Profil utilisateur uniquement

### Rôles Utilisateur

- **`admin`** : Accès complet à toutes les données
- **`teacher`** : Gestion des cours et contenu
- **`student`** : Lecture des cours selon sa formule

## 📊 Vues Disponibles

### `cours_complets`
Vue qui agrège toutes les informations d'un cours :
- Informations de base du cours
- Catégorie et sous-catégorie
- Formule associée
- Tags et bullet points

### `contenu_hierarchie`
Vue qui montre la hiérarchie complète du contenu :
- Contenu avec son type
- Position dans la hiérarchie (section → chapitre → sous-chapitre)
- Informations du cours parent

## 🛠️ Fonctions Utilitaires

### `get_user_role(user_id)`
Retourne le rôle d'un utilisateur.

### `get_user_course_progress(user_id, course_id)`
Calcule la progression d'un utilisateur sur un cours.

### `get_user_courses(user_id)`
Retourne tous les cours accessibles à un utilisateur selon sa formule.

## 📁 Gestion des Fichiers

### Upload d'Images de Cours

```typescript
const { data, error } = await supabase.storage
  .from('cours-images')
  .upload(`cours/${coursId}/image.jpg`, file)
```

### Upload d'Avatars

```typescript
const { data, error } = await supabase.storage
  .from('user-avatars')
  .upload(`${userId}/avatar.jpg`, file)
```

## 🎯 Exemples d'Utilisation

### Récupérer tous les cours avec leurs informations

```typescript
const { data, error } = await supabase
  .from('cours_complets')
  .select('*')
  .eq('is_active', true)
  .order('ordre')
```

### Récupérer la hiérarchie d'un cours

```typescript
const { data, error } = await supabase
  .from('contenu_hierarchie')
  .select('*')
  .eq('cours_id', coursId)
  .order('section_id, chapitre_id, sous_chapitre_id, contenu_ordre')
```

### Créer un nouveau cours

```typescript
const { data, error } = await supabase
  .from('cours')
  .insert({
    titre: 'Mon Cours',
    description: 'Description du cours',
    niveau: 'debutant',
    duree: 120,
    categorie_id: 'uuid-categorie',
    is_active: true
  })
```

## 🔄 Données de Base

Le script inclut des données de base :

- **4 catégories** : Développement, Design, Business, Marketing
- **5 sous-catégories** : Frontend, Backend, Mobile, UI/UX, Graphisme
- **4 formules** : Gratuit, Basique, Premium, One-shot
- **6 tags** : JavaScript, React, Node.js, Python, Débutant, Avancé

## ⚠️ Notes Importantes

1. **RLS activé** : Toutes les tables ont le Row Level Security activé
2. **Triggers automatiques** : Les timestamps `updated_at` sont mis à jour automatiquement
3. **Contraintes** : Les contraintes de clés étrangères sont configurées avec les bonnes actions (CASCADE, RESTRICT, SET NULL)
4. **Index** : Des index sont créés sur les colonnes fréquemment utilisées pour optimiser les performances

## 🚀 Prochaines Étapes

1. Exécuter le script SQL dans Supabase
2. Vérifier que toutes les tables sont créées
3. Tester les politiques RLS
4. Configurer les buckets de stockage
5. Intégrer avec l'application Next.js
