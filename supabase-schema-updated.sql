-- Schéma de base de données pour l'application Respir
-- Design inspiré d'InsightTimer et autres apps de méditation

-- Extension pour UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table des utilisateurs (étend la table auth.users de Supabase)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des instructeurs
CREATE TABLE instructors (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  specialties TEXT[],
  rating DECIMAL(3,2) DEFAULT 0,
  total_students INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des catégories de cours
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des tags
CREATE TABLE tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des cours
CREATE TABLE courses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  short_description TEXT,
  instructor_id UUID REFERENCES instructors(id),
  category_id UUID REFERENCES categories(id),
  level TEXT CHECK (level IN ('debutant', 'intermediaire', 'avance')),
  duration_minutes INTEGER,
  price DECIMAL(10,2) DEFAULT 0,
  is_free BOOLEAN DEFAULT false,
  image_url TEXT,
  banner_url TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  total_ratings INTEGER DEFAULT 0,
  total_students INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table de liaison cours-tags
CREATE TABLE course_tags (
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (course_id, tag_id)
);

-- Table des sections de cours
CREATE TABLE course_sections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des leçons
CREATE TABLE lessons (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  section_id UUID REFERENCES course_sections(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT CHECK (content_type IN ('video', 'audio', 'text', 'quiz')),
  content_url TEXT,
  duration_minutes INTEGER,
  order_index INTEGER NOT NULL,
  is_preview BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des méditations guidées
CREATE TABLE guided_meditations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  instructor_id UUID REFERENCES instructors(id),
  category_id UUID REFERENCES categories(id),
  duration_minutes INTEGER,
  audio_url TEXT,
  image_url TEXT,
  background_image_url TEXT,
  is_free BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 0,
  total_ratings INTEGER DEFAULT 0,
  play_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des tags de méditations
CREATE TABLE meditation_tags (
  meditation_id UUID REFERENCES guided_meditations(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (meditation_id, tag_id)
);

-- Table des inscriptions aux cours
CREATE TABLE course_enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  UNIQUE(user_id, course_id)
);

-- Table des leçons complétées
CREATE TABLE completed_lessons (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  time_spent_minutes INTEGER,
  UNIQUE(user_id, lesson_id)
);

-- Table des sessions de méditation
CREATE TABLE meditation_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  meditation_id UUID REFERENCES guided_meditations(id),
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  duration_minutes INTEGER,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5)
);

-- Table des favoris
CREATE TABLE favorites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  meditation_id UUID REFERENCES guided_meditations(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CHECK (
    (course_id IS NOT NULL AND meditation_id IS NULL) OR
    (course_id IS NULL AND meditation_id IS NOT NULL)
  )
);

-- Table des statistiques utilisateur
CREATE TABLE user_stats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  total_meditation_minutes INTEGER DEFAULT 0,
  current_streak_days INTEGER DEFAULT 0,
  longest_streak_days INTEGER DEFAULT 0,
  courses_completed INTEGER DEFAULT 0,
  meditations_completed INTEGER DEFAULT 0,
  last_activity_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des réalisations/badges
CREATE TABLE achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  criteria_type TEXT, -- 'meditation_minutes', 'streak_days', 'courses_completed', etc.
  criteria_value INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des réalisations utilisateur
CREATE TABLE user_achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Index pour optimiser les performances
CREATE INDEX idx_courses_category ON courses(category_id);
CREATE INDEX idx_courses_instructor ON courses(instructor_id);
CREATE INDEX idx_courses_published ON courses(is_published);
CREATE INDEX idx_meditations_category ON guided_meditations(category_id);
CREATE INDEX idx_meditations_instructor ON guided_meditations(instructor_id);
CREATE INDEX idx_enrollments_user ON course_enrollments(user_id);
CREATE INDEX idx_sessions_user ON meditation_sessions(user_id);
CREATE INDEX idx_favorites_user ON favorites(user_id);

-- Fonction pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers pour updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_stats_updated_at BEFORE UPDATE ON user_stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Données de test
INSERT INTO categories (name, slug, description, icon, color) VALUES
('Débutant', 'debutant', 'Cours pour débuter la méditation', '🌱', '#10B981'),
('Stress & Anxiété', 'stress-anxiete', 'Gérer le stress et l''anxiété', '🧘', '#F59E0B'),
('Sommeil', 'sommeil', 'Améliorer la qualité du sommeil', '😴', '#3B82F6'),
('Concentration', 'concentration', 'Développer la concentration', '🎯', '#8B5CF6'),
('Relations', 'relations', 'Améliorer les relations', '💕', '#EC4899'),
('Pleine Conscience', 'pleine-conscience', 'Méditation de pleine conscience', '🧠', '#06B6D4');

INSERT INTO tags (name, color) VALUES
('Débutant', '#10B981'),
('Intermédiaire', '#F59E0B'),
('Avancé', '#EF4444'),
('Court', '#3B82F6'),
('Long', '#8B5CF6'),
('Détente', '#10B981'),
('Concentration', '#8B5CF6'),
('Anxiété', '#F59E0B'),
('Stress', '#EF4444'),
('Sommeil', '#3B82F6'),
('Relations', '#EC4899'),
('Pleine Conscience', '#06B6D4');

INSERT INTO instructors (name, bio, avatar_url, specialties) VALUES
('Sarah Johnson', 'Instructrice de méditation certifiée avec 10 ans d''expérience', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', ARRAY['Pleine Conscience', 'Stress', 'Débutant']),
('Michael Chen', 'Expert en méditation transcendantale et gestion du stress', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', ARRAY['Stress', 'Anxiété', 'Avancé']),
('Emma Wilson', 'Spécialiste de la méditation pour le sommeil et la relaxation', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', ARRAY['Sommeil', 'Détente', 'Respiration']),
('David Lee', 'Maître de méditation bouddhiste et instructeur de pleine conscience', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', ARRAY['Pleine Conscience', 'Concentration', 'Relations']),
('Lisa Martinez', 'Thérapeute et instructrice de méditation thérapeutique', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face', ARRAY['Relations', 'Thérapie', 'Débutant']);

-- Politiques RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE meditation_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Politiques pour les profils
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Politiques pour les cours (lecture publique)
CREATE POLICY "Courses are viewable by everyone" ON courses FOR SELECT USING (is_published = true);

-- Politiques pour les méditations (lecture publique)
CREATE POLICY "Meditations are viewable by everyone" ON guided_meditations FOR SELECT USING (true);

-- Politiques pour les inscriptions
CREATE POLICY "Users can view own enrollments" ON course_enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own enrollments" ON course_enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Politiques pour les sessions de méditation
CREATE POLICY "Users can view own sessions" ON meditation_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own sessions" ON meditation_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Politiques pour les favoris
CREATE POLICY "Users can view own favorites" ON favorites FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own favorites" ON favorites FOR ALL USING (auth.uid() = user_id);
