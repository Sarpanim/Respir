-- =============================================
-- SCHEMA COMPLET POUR L'APPLICATION RESPIR
-- =============================================

-- 1. Création des types ENUM
-- =============================================

-- Niveau de cours
CREATE TYPE niveau_cours AS ENUM ('debutant', 'intermediaire', 'confirme', 'expert');

-- Type de contenu
CREATE TYPE type_contenu AS ENUM ('texte', 'video', 'audio', 'image', 'quiz');

-- Type de formule
CREATE TYPE type_formule AS ENUM ('abonnement', 'one-shot');

-- Rôle utilisateur
CREATE TYPE role_utilisateur AS ENUM ('admin', 'teacher', 'student');

-- 2. Création des tables principales
-- =============================================

-- Table des catégories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nom TEXT NOT NULL,
    icone_url TEXT,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des sous-catégories
CREATE TABLE sous_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    categorie_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    nom TEXT NOT NULL,
    icone_url TEXT,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des formules
CREATE TABLE formules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nom TEXT NOT NULL,
    description TEXT,
    prix DECIMAL(10,2) NOT NULL DEFAULT 0,
    duree INTEGER NOT NULL DEFAULT 30, -- en jours
    is_active BOOLEAN DEFAULT true,
    type type_formule NOT NULL DEFAULT 'abonnement',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des tags
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nom TEXT NOT NULL UNIQUE,
    couleur TEXT DEFAULT '#3B82F6',
    icone_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des utilisateurs (profil étendu)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    nom TEXT,
    avatar_url TEXT,
    role role_utilisateur NOT NULL DEFAULT 'student',
    formule_id UUID REFERENCES formules(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des cours
CREATE TABLE cours (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titre TEXT NOT NULL,
    description TEXT,
    niveau niveau_cours NOT NULL DEFAULT 'debutant',
    duree INTEGER NOT NULL DEFAULT 0, -- durée en minutes
    prix DECIMAL(10,2), -- prix optionnel
    progression DECIMAL(5,2) DEFAULT 0, -- pourcentage de progression
    image_url TEXT,
    video_url TEXT,
    audio_url TEXT,
    categorie_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
    sous_categorie_id UUID REFERENCES sous_categories(id) ON DELETE SET NULL,
    formule_id UUID REFERENCES formules(id) ON DELETE SET NULL,
    ordre INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table de liaison cours_tags
CREATE TABLE cours_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cours_id UUID NOT NULL REFERENCES cours(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE(cours_id, tag_id)
);

-- Table des bullet points
CREATE TABLE bullet_points (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cours_id UUID NOT NULL REFERENCES cours(id) ON DELETE CASCADE,
    texte TEXT NOT NULL,
    icone_url TEXT,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des sections
CREATE TABLE sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cours_id UUID NOT NULL REFERENCES cours(id) ON DELETE CASCADE,
    titre TEXT NOT NULL,
    description TEXT,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des chapitres
CREATE TABLE chapitres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
    titre TEXT NOT NULL,
    description TEXT,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des sous-chapitres
CREATE TABLE sous_chapitres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapitre_id UUID NOT NULL REFERENCES chapitres(id) ON DELETE CASCADE,
    titre TEXT NOT NULL,
    description TEXT,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des contenus
CREATE TABLE contenus (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sous_chapitre_id UUID REFERENCES sous_chapitres(id) ON DELETE CASCADE,
    chapitre_id UUID REFERENCES chapitres(id) ON DELETE CASCADE,
    section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
    type type_contenu NOT NULL,
    contenu TEXT NOT NULL,
    ordre INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    -- Contrainte pour s'assurer qu'un contenu appartient à un seul niveau
    CONSTRAINT contenus_single_parent CHECK (
        (sous_chapitre_id IS NOT NULL AND chapitre_id IS NULL AND section_id IS NULL) OR
        (sous_chapitre_id IS NULL AND chapitre_id IS NOT NULL AND section_id IS NULL) OR
        (sous_chapitre_id IS NULL AND chapitre_id IS NULL AND section_id IS NOT NULL)
    )
);

-- 3. Création des index pour optimiser les performances
-- =============================================

-- Index sur les clés étrangères
CREATE INDEX idx_cours_categorie_id ON cours(categorie_id);
CREATE INDEX idx_cours_sous_categorie_id ON cours(sous_categorie_id);
CREATE INDEX idx_cours_formule_id ON cours(formule_id);
CREATE INDEX idx_sous_categories_categorie_id ON sous_categories(categorie_id);
CREATE INDEX idx_users_formule_id ON users(formule_id);
CREATE INDEX idx_cours_tags_cours_id ON cours_tags(cours_id);
CREATE INDEX idx_cours_tags_tag_id ON cours_tags(tag_id);
CREATE INDEX idx_bullet_points_cours_id ON bullet_points(cours_id);
CREATE INDEX idx_sections_cours_id ON sections(cours_id);
CREATE INDEX idx_chapitres_section_id ON chapitres(section_id);
CREATE INDEX idx_sous_chapitres_chapitre_id ON sous_chapitres(chapitre_id);
CREATE INDEX idx_contenus_sous_chapitre_id ON contenus(sous_chapitre_id);
CREATE INDEX idx_contenus_chapitre_id ON contenus(chapitre_id);
CREATE INDEX idx_contenus_section_id ON contenus(section_id);

-- Index sur les colonnes fréquemment utilisées
CREATE INDEX idx_cours_is_active ON cours(is_active);
CREATE INDEX idx_cours_niveau ON cours(niveau);
CREATE INDEX idx_cours_ordre ON cours(ordre);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_formules_is_active ON formules(is_active);
CREATE INDEX idx_categories_ordre ON categories(ordre);
CREATE INDEX idx_sous_categories_ordre ON sous_categories(ordre);

-- 4. Fonctions pour les timestamps automatiques
-- =============================================

-- Fonction pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers pour updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sous_categories_updated_at BEFORE UPDATE ON sous_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_formules_updated_at BEFORE UPDATE ON formules FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tags_updated_at BEFORE UPDATE ON tags FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cours_updated_at BEFORE UPDATE ON cours FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bullet_points_updated_at BEFORE UPDATE ON bullet_points FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sections_updated_at BEFORE UPDATE ON sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_chapitres_updated_at BEFORE UPDATE ON chapitres FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sous_chapitres_updated_at BEFORE UPDATE ON sous_chapitres FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contenus_updated_at BEFORE UPDATE ON contenus FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 5. Activation du Row Level Security (RLS)
-- =============================================

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE sous_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE formules ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE cours ENABLE ROW LEVEL SECURITY;
ALTER TABLE cours_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE bullet_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapitres ENABLE ROW LEVEL SECURITY;
ALTER TABLE sous_chapitres ENABLE ROW LEVEL SECURITY;
ALTER TABLE contenus ENABLE ROW LEVEL SECURITY;

-- 6. Politiques de sécurité (RLS Policies)
-- =============================================

-- Fonction helper pour vérifier le rôle utilisateur
CREATE OR REPLACE FUNCTION get_user_role(user_id UUID)
RETURNS role_utilisateur AS $$
BEGIN
    RETURN (SELECT role FROM users WHERE id = user_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Politiques pour les catégories (lecture publique, écriture admin)
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);
CREATE POLICY "Categories are editable by admins" ON categories FOR ALL USING (
    get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour les sous-catégories (lecture publique, écriture admin)
CREATE POLICY "Sous categories are viewable by everyone" ON sous_categories FOR SELECT USING (true);
CREATE POLICY "Sous categories are editable by admins" ON sous_categories FOR ALL USING (
    get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour les formules (lecture publique, écriture admin)
CREATE POLICY "Formules are viewable by everyone" ON formules FOR SELECT USING (true);
CREATE POLICY "Formules are editable by admins" ON formules FOR ALL USING (
    get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour les tags (lecture publique, écriture admin)
CREATE POLICY "Tags are viewable by everyone" ON tags FOR SELECT USING (true);
CREATE POLICY "Tags are editable by admins" ON tags FOR ALL USING (
    get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour les utilisateurs
CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all users" ON users FOR SELECT USING (
    get_user_role(auth.uid()) = 'admin'
);
CREATE POLICY "Admins can manage all users" ON users FOR ALL USING (
    get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour les cours
CREATE POLICY "Cours are viewable by everyone" ON cours FOR SELECT USING (is_active = true);
CREATE POLICY "Teachers can manage their courses" ON cours FOR ALL USING (
    get_user_role(auth.uid()) = 'teacher' OR get_user_role(auth.uid()) = 'admin'
);
CREATE POLICY "Admins can manage all courses" ON cours FOR ALL USING (
    get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour cours_tags (lecture publique, écriture admin/teacher)
CREATE POLICY "Cours tags are viewable by everyone" ON cours_tags FOR SELECT USING (true);
CREATE POLICY "Cours tags are editable by teachers and admins" ON cours_tags FOR ALL USING (
    get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- Politiques pour bullet_points (lecture publique, écriture admin/teacher)
CREATE POLICY "Bullet points are viewable by everyone" ON bullet_points FOR SELECT USING (true);
CREATE POLICY "Bullet points are editable by teachers and admins" ON bullet_points FOR ALL USING (
    get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- Politiques pour sections (lecture publique, écriture admin/teacher)
CREATE POLICY "Sections are viewable by everyone" ON sections FOR SELECT USING (true);
CREATE POLICY "Sections are editable by teachers and admins" ON sections FOR ALL USING (
    get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- Politiques pour chapitres (lecture publique, écriture admin/teacher)
CREATE POLICY "Chapitres are viewable by everyone" ON chapitres FOR SELECT USING (true);
CREATE POLICY "Chapitres are editable by teachers and admins" ON chapitres FOR ALL USING (
    get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- Politiques pour sous_chapitres (lecture publique, écriture admin/teacher)
CREATE POLICY "Sous chapitres are viewable by everyone" ON sous_chapitres FOR SELECT USING (true);
CREATE POLICY "Sous chapitres are editable by teachers and admins" ON sous_chapitres FOR ALL USING (
    get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- Politiques pour contenus (lecture publique, écriture admin/teacher)
CREATE POLICY "Contenus are viewable by everyone" ON contenus FOR SELECT USING (true);
CREATE POLICY "Contenus are editable by teachers and admins" ON contenus FOR ALL USING (
    get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- 7. Données de base (seed data)
-- =============================================

-- Insertion des catégories de base
INSERT INTO categories (nom, icone_url, ordre) VALUES
('Développement', 'https://example.com/icons/dev.svg', 1),
('Design', 'https://example.com/icons/design.svg', 2),
('Business', 'https://example.com/icons/business.svg', 3),
('Marketing', 'https://example.com/icons/marketing.svg', 4);

-- Insertion des sous-catégories
INSERT INTO sous_categories (categorie_id, nom, icone_url, ordre) VALUES
((SELECT id FROM categories WHERE nom = 'Développement'), 'Frontend', 'https://example.com/icons/frontend.svg', 1),
((SELECT id FROM categories WHERE nom = 'Développement'), 'Backend', 'https://example.com/icons/backend.svg', 2),
((SELECT id FROM categories WHERE nom = 'Développement'), 'Mobile', 'https://example.com/icons/mobile.svg', 3),
((SELECT id FROM categories WHERE nom = 'Design'), 'UI/UX', 'https://example.com/icons/ui-ux.svg', 1),
((SELECT id FROM categories WHERE nom = 'Design'), 'Graphisme', 'https://example.com/icons/graphic.svg', 2);

-- Insertion des formules
INSERT INTO formules (nom, description, prix, duree, type) VALUES
('Gratuit', 'Accès aux cours gratuits', 0.00, 0, 'abonnement'),
('Basique', 'Accès à tous les cours de base', 19.99, 30, 'abonnement'),
('Premium', 'Accès complet + support prioritaire', 49.99, 30, 'abonnement'),
('One-shot', 'Achat unique d\'un cours', 9.99, 0, 'one-shot');

-- Insertion des tags
INSERT INTO tags (nom, couleur, icone_url) VALUES
('JavaScript', '#F7DF1E', 'https://example.com/icons/js.svg'),
('React', '#61DAFB', 'https://example.com/icons/react.svg'),
('Node.js', '#339933', 'https://example.com/icons/nodejs.svg'),
('Python', '#3776AB', 'https://example.com/icons/python.svg'),
('Débutant', '#10B981', 'https://example.com/icons/beginner.svg'),
('Avancé', '#EF4444', 'https://example.com/icons/advanced.svg');

-- 8. Configuration du stockage (Storage)
-- =============================================

-- Création des buckets pour le stockage
INSERT INTO storage.buckets (id, name, public) VALUES
('cours-images', 'cours-images', true),
('cours-videos', 'cours-videos', false),
('cours-audio', 'cours-audio', false),
('user-avatars', 'user-avatars', true),
('category-icons', 'category-icons', true),
('tag-icons', 'tag-icons', true);

-- Politiques pour le stockage des images de cours
CREATE POLICY "Cours images are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'cours-images');
CREATE POLICY "Authenticated users can upload cours images" ON storage.objects FOR INSERT WITH CHECK (
    bucket_id = 'cours-images' AND auth.role() = 'authenticated'
);
CREATE POLICY "Teachers and admins can update cours images" ON storage.objects FOR UPDATE USING (
    bucket_id = 'cours-images' AND get_user_role(auth.uid()) IN ('teacher', 'admin')
);
CREATE POLICY "Teachers and admins can delete cours images" ON storage.objects FOR DELETE USING (
    bucket_id = 'cours-images' AND get_user_role(auth.uid()) IN ('teacher', 'admin')
);

-- Politiques pour le stockage des avatars utilisateurs
CREATE POLICY "User avatars are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'user-avatars');
CREATE POLICY "Users can upload their own avatar" ON storage.objects FOR INSERT WITH CHECK (
    bucket_id = 'user-avatars' AND auth.uid()::text = (storage.foldername(name))[1]
);
CREATE POLICY "Users can update their own avatar" ON storage.objects FOR UPDATE USING (
    bucket_id = 'user-avatars' AND auth.uid()::text = (storage.foldername(name))[1]
);
CREATE POLICY "Users can delete their own avatar" ON storage.objects FOR DELETE USING (
    bucket_id = 'user-avatars' AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Politiques pour les icônes de catégories
CREATE POLICY "Category icons are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'category-icons');
CREATE POLICY "Admins can manage category icons" ON storage.objects FOR ALL USING (
    bucket_id = 'category-icons' AND get_user_role(auth.uid()) = 'admin'
);

-- Politiques pour les icônes de tags
CREATE POLICY "Tag icons are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'tag-icons');
CREATE POLICY "Admins can manage tag icons" ON storage.objects FOR ALL USING (
    bucket_id = 'tag-icons' AND get_user_role(auth.uid()) = 'admin'
);

-- 9. Vues utiles pour l'application
-- =============================================

-- Vue pour les cours avec leurs informations complètes
CREATE VIEW cours_complets AS
SELECT 
    c.*,
    cat.nom as categorie_nom,
    sc.nom as sous_categorie_nom,
    f.nom as formule_nom,
    f.prix as formule_prix,
    f.type as formule_type,
    array_agg(DISTINCT t.nom) as tags_noms,
    array_agg(DISTINCT bp.texte) as bullet_points
FROM cours c
LEFT JOIN categories cat ON c.categorie_id = cat.id
LEFT JOIN sous_categories sc ON c.sous_categorie_id = sc.id
LEFT JOIN formules f ON c.formule_id = f.id
LEFT JOIN cours_tags ct ON c.id = ct.cours_id
LEFT JOIN tags t ON ct.tag_id = t.id
LEFT JOIN bullet_points bp ON c.id = bp.cours_id
WHERE c.is_active = true
GROUP BY c.id, cat.nom, sc.nom, f.nom, f.prix, f.type;

-- Vue pour la hiérarchie complète du contenu
CREATE VIEW contenu_hierarchie AS
SELECT 
    c.id as contenu_id,
    c.type as contenu_type,
    c.contenu,
    c.ordre as contenu_ordre,
    sc.id as sous_chapitre_id,
    sc.titre as sous_chapitre_titre,
    ch.id as chapitre_id,
    ch.titre as chapitre_titre,
    s.id as section_id,
    s.titre as section_titre,
    cours.id as cours_id,
    cours.titre as cours_titre
FROM contenus c
LEFT JOIN sous_chapitres sc ON c.sous_chapitre_id = sc.id
LEFT JOIN chapitres ch ON c.chapitre_id = ch.id OR (sc.id IS NOT NULL AND sc.chapitre_id = ch.id)
LEFT JOIN sections s ON c.section_id = s.id OR (ch.id IS NOT NULL AND ch.section_id = s.id)
LEFT JOIN cours ON s.cours_id = cours.id
ORDER BY cours.id, s.ordre, ch.ordre, sc.ordre, c.ordre;

-- 10. Fonctions utilitaires
-- =============================================

-- Fonction pour obtenir la progression d'un utilisateur sur un cours
CREATE OR REPLACE FUNCTION get_user_course_progress(user_id UUID, course_id UUID)
RETURNS DECIMAL(5,2) AS $$
DECLARE
    total_contenus INTEGER;
    completed_contenus INTEGER;
BEGIN
    -- Compter le total des contenus du cours
    SELECT COUNT(*) INTO total_contenus
    FROM contenus c
    JOIN sous_chapitres sc ON c.sous_chapitre_id = sc.id
    JOIN chapitres ch ON sc.chapitre_id = ch.id
    JOIN sections s ON ch.section_id = s.id
    WHERE s.cours_id = course_id;
    
    -- Pour l'instant, retourner 0 (à implémenter avec une table de progression)
    RETURN 0.00;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction pour obtenir les cours d'un utilisateur selon sa formule
CREATE OR REPLACE FUNCTION get_user_courses(user_id UUID)
RETURNS TABLE (
    cours_id UUID,
    titre TEXT,
    description TEXT,
    niveau niveau_cours,
    duree INTEGER,
    prix DECIMAL(10,2),
    progression DECIMAL(5,2),
    image_url TEXT,
    categorie_nom TEXT,
    sous_categorie_nom TEXT,
    formule_nom TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        c.id,
        c.titre,
        c.description,
        c.niveau,
        c.duree,
        c.prix,
        get_user_course_progress(user_id, c.id) as progression,
        c.image_url,
        cat.nom,
        sc.nom,
        f.nom
    FROM cours c
    JOIN categories cat ON c.categorie_id = cat.id
    LEFT JOIN sous_categories sc ON c.sous_categorie_id = sc.id
    LEFT JOIN formules f ON c.formule_id = f.id
    LEFT JOIN users u ON u.id = user_id
    WHERE c.is_active = true
    AND (
        c.formule_id IS NULL OR 
        c.formule_id = u.formule_id OR
        u.role = 'admin'
    )
    ORDER BY c.ordre, c.created_at;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
