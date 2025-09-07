-- =====================================================
-- COURS DE MÉDITATION ET RELAXATION - DONNÉES DE TEST
-- =====================================================
-- Ce fichier contient 10 cours complets de méditation, relaxation,
-- pleine conscience, respiration, vibration, préparation au sommeil
-- et sons audio naturels avec tags, catégories, descriptions et prix

-- =====================================================
-- 1. CATÉGORIES
-- =====================================================
INSERT INTO categories (nom, icone_url, ordre) VALUES
('Méditation', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop', 1),
('Relaxation', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop', 2),
('Respiration', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop', 3),
('Sons & Audio', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop', 4),
('Sommeil', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=100&h=100&fit=crop', 5),
('Vibration', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop', 6);

-- =====================================================
-- 2. SOUS-CATÉGORIES
-- =====================================================
INSERT INTO sous_categories (nom, icone_url, categorie_id, ordre) VALUES
('Méditation Guidée', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop', 1, 1),
('Méditation Silencieuse', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop', 1, 2),
('Pleine Conscience', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop', 1, 3),
('Relaxation Musculaire', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop', 2, 1),
('Relaxation Mentale', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop', 2, 2),
('Respiration Profonde', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop', 3, 1),
('Respiration Thérapeutique', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop', 3, 2),
('Sons de la Nature', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop', 4, 1),
('Musique Méditative', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop', 4, 2),
('Préparation au Sommeil', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=100&h=100&fit=crop', 5, 1),
('Sons de Sommeil', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=100&h=100&fit=crop', 5, 2),
('Thérapie par le Son', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop', 6, 1);

-- =====================================================
-- 3. TAGS
-- =====================================================
INSERT INTO tags (nom, couleur) VALUES
('Débutant', '#10B981'),
('Intermédiaire', '#F59E0B'),
('Avancé', '#EF4444'),
('Guidé', '#3B82F6'),
('Silencieux', '#6B7280'),
('Court', '#8B5CF6'),
('Moyen', '#F97316'),
('Long', '#EC4899'),
('Stress', '#84CC16'),
('Anxiété', '#F43F5E'),
('Sommeil', '#6366F1'),
('Concentration', '#14B8A6'),
('Émotions', '#F59E0B'),
('Douleur', '#EF4444'),
('Énergie', '#10B981'),
('Détente', '#3B82F6'),
('Pleine Conscience', '#8B5CF6'),
('Respiration', '#06B6D4'),
('Nature', '#22C55E'),
('Musique', '#A855F7');

-- =====================================================
-- 4. FORMULES
-- =====================================================
INSERT INTO formules (nom, description, prix, duree, type) VALUES
('One-shot', 'Achat unique d''un cours', 0, 0, 'one-shot'),
('Pack Découverte', '3 cours au choix', 0, 30, 'abonnement'),
('Pack Complet', 'Tous les cours de méditation', 0, 365, 'abonnement'),
('Abonnement Mensuel', 'Accès illimité pendant 1 mois', 29.99, 30, 'abonnement'),
('Abonnement Annuel', 'Accès illimité pendant 1 an', 299.99, 365, 'abonnement');

-- =====================================================
-- 5. COURS DE MÉDITATION ET RELAXATION
-- =====================================================

-- Cours 1: Méditation de Pleine Conscience pour Débutants
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Méditation de Pleine Conscience pour Débutants',
'Découvrez les bases de la méditation de pleine conscience avec cette séance guidée parfaite pour commencer votre pratique. Apprenez à observer vos pensées sans jugement, à vous ancrer dans le moment présent et à cultiver une attention bienveillante envers vous-même. Cette méditation de 20 minutes vous guidera pas à pas dans l''art de la pleine conscience.',
'debutant', 20, 19.99, 
(SELECT id FROM categories WHERE nom = 'Méditation' LIMIT 1),
(SELECT id FROM sous_categories WHERE nom = 'Méditation Guidée' LIMIT 1),
true, 1, 0, 
'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
'https://example.com/video/meditation-pleine-conscience-debutant.mp4',
'https://example.com/audio/meditation-pleine-conscience-debutant.mp3');

-- Cours 2: Relaxation Musculaire Progressive
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Relaxation Musculaire Progressive',
'Technique de relaxation profonde qui consiste à contracter puis relâcher chaque groupe musculaire de votre corps. Cette méthode scientifiquement prouvée vous aide à libérer les tensions physiques et mentales accumulées. Parfait pour réduire le stress, améliorer la qualité du sommeil et retrouver un état de détente profonde.',
'intermediaire', 35, 24.99, 2, 4, true, 2, 0,
'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
'https://example.com/video/relaxation-musculaire-progressive.mp4',
'https://example.com/audio/relaxation-musculaire-progressive.mp3');

-- Cours 3: Respiration 4-7-8 pour l'Anxiété
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Respiration 4-7-8 pour l''Anxiété',
'Technique de respiration thérapeutique développée par le Dr. Andrew Weil. Cette méthode simple mais puissante calme instantanément le système nerveux, réduit l''anxiété et favorise la détente. Apprenez à maîtriser cette technique en seulement 15 minutes et utilisez-la partout pour gérer le stress et l''anxiété.',
'debutant', 15, 16.99, 3, 6, true, 3, 0,
'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
'https://example.com/video/respiration-4-7-8-anxiete.mp4',
'https://example.com/audio/respiration-4-7-8-anxiete.mp3');

-- Cours 4: Sons de la Forêt pour la Méditation
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Sons de la Forêt pour la Méditation',
'Immergez-vous dans l''ambiance apaisante d''une forêt ancienne avec cette séance audio de 45 minutes. Les sons naturels des oiseaux, du vent dans les arbres et de l''eau qui coule créent un environnement parfait pour la méditation et la relaxation profonde. Idéal pour se reconnecter à la nature et retrouver la sérénité.',
'debutant', 45, 22.99, 4, 8, true, 4, 0,
'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
'https://example.com/video/sons-foret-meditation.mp4',
'https://example.com/audio/sons-foret-meditation.mp3');

-- Cours 5: Préparation au Sommeil avec Sons de Pluie
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Préparation au Sommeil avec Sons de Pluie',
'Routine complète de 30 minutes pour préparer votre corps et votre esprit au sommeil. Combinaison de techniques de relaxation, de respiration et de sons apaisants de pluie. Cette séance vous aide à lâcher prise de la journée, à réduire les tensions et à créer les conditions optimales pour un sommeil réparateur.',
'intermediaire', 30, 21.99, 5, 10, true, 5, 0,
'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop',
'https://example.com/video/preparation-sommeil-pluie.mp4',
'https://example.com/audio/preparation-sommeil-pluie.mp3');

-- Cours 6: Méditation Vipassana Avancée
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Méditation Vipassana Avancée',
'Pratique approfondie de la méditation Vipassana, l''art de voir les choses telles qu''elles sont. Cette séance de 60 minutes vous guide dans l''observation fine des sensations corporelles, des pensées et des émotions. Technique traditionnelle bouddhiste adaptée au monde moderne pour développer la sagesse et la compassion.',
'avance', 60, 39.99, 1, 2, true, 6, 0,
'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
'https://example.com/video/meditation-vipassana-avancee.mp4',
'https://example.com/audio/meditation-vipassana-avancee.mp3');

-- Cours 7: Sons de l'Océan pour la Relaxation
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Sons de l''Océan pour la Relaxation',
'Laissez-vous bercer par le rythme apaisant des vagues de l''océan. Cette séance audio de 40 minutes combine les sons naturels de la mer avec une musique ambient douce. Parfait pour la relaxation, la méditation ou simplement pour créer une ambiance sereine. Les fréquences basses des vagues ont un effet calmant sur le système nerveux.',
'debutant', 40, 18.99, 4, 8, true, 7, 0,
'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
'https://example.com/video/sons-ocean-relaxation.mp4',
'https://example.com/audio/sons-ocean-relaxation.mp3');

-- Cours 8: Respiration Pranayama pour l'Énergie
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Respiration Pranayama pour l''Énergie',
'Techniques de respiration yogique (Pranayama) pour augmenter votre vitalité et votre énergie. Apprenez des exercices respiratoires puissants comme Kapalabhati, Bhastrika et Ujjayi. Ces techniques millénaires purifient le corps, équilibrent le système nerveux et revitalisent l''esprit. Idéal pour commencer la journée avec dynamisme.',
'intermediaire', 25, 27.99, 3, 7, true, 8, 0,
'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
'https://example.com/video/respiration-pranayama-energie.mp4',
'https://example.com/audio/respiration-pranayama-energie.mp3');

-- Cours 9: Thérapie par les Sons de Bols Tibétains
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Thérapie par les Sons de Bols Tibétains',
'Découvrez les bienfaits thérapeutiques des bols chantants tibétains. Cette séance de 50 minutes utilise les vibrations sonores pour harmoniser les chakras, réduire le stress et favoriser la guérison. Les fréquences spécifiques des bols tibétains résonnent avec les cellules du corps, créant un massage sonore profond et réparateur.',
'avance', 50, 34.99, 6, 12, true, 9, 0,
'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
'https://example.com/video/therapie-bols-tibetains.mp4',
'https://example.com/audio/therapie-bols-tibetains.mp3');

-- Cours 10: Méditation du Matin pour la Concentration
INSERT INTO cours (titre, description, niveau, duree, prix, categorie_id, sous_categorie_id, is_active, ordre, progression, image_url, video_url, audio_url) VALUES
('Méditation du Matin pour la Concentration',
'Commencez votre journée avec cette méditation de 20 minutes spécialement conçue pour améliorer la concentration et la clarté mentale. Combinaison de techniques de pleine conscience et d''exercices de visualisation pour préparer votre esprit aux défis de la journée. Parfait pour développer la focus et la productivité.',
'intermediaire', 20, 23.99, 1, 3, true, 10, 0,
'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
'https://example.com/video/meditation-matin-concentration.mp4',
'https://example.com/audio/meditation-matin-concentration.mp3');

-- =====================================================
-- 6. ASSOCIATION COURS-TAGS
-- =====================================================

-- Cours 1: Méditation de Pleine Conscience pour Débutants
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(1, 1), -- Débutant
(1, 4), -- Guidé
(1, 7), -- Moyen
(1, 9), -- Stress
(1, 17); -- Pleine Conscience

-- Cours 2: Relaxation Musculaire Progressive
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(2, 2), -- Intermédiaire
(2, 4), -- Guidé
(2, 8), -- Long
(2, 9), -- Stress
(2, 16); -- Détente

-- Cours 3: Respiration 4-7-8 pour l'Anxiété
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(3, 1), -- Débutant
(3, 4), -- Guidé
(3, 6), -- Court
(3, 10), -- Anxiété
(3, 18); -- Respiration

-- Cours 4: Sons de la Forêt pour la Méditation
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(4, 1), -- Débutant
(4, 5), -- Silencieux
(4, 8), -- Long
(4, 16), -- Détente
(4, 19); -- Nature

-- Cours 5: Préparation au Sommeil avec Sons de Pluie
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(5, 2), -- Intermédiaire
(5, 4), -- Guidé
(5, 7), -- Moyen
(5, 11), -- Sommeil
(5, 19); -- Nature

-- Cours 6: Méditation Vipassana Avancée
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(6, 3), -- Avancé
(6, 5), -- Silencieux
(6, 8), -- Long
(6, 12), -- Concentration
(6, 17); -- Pleine Conscience

-- Cours 7: Sons de l'Océan pour la Relaxation
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(7, 1), -- Débutant
(7, 5), -- Silencieux
(7, 7), -- Moyen
(7, 16), -- Détente
(7, 19); -- Nature

-- Cours 8: Respiration Pranayama pour l'Énergie
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(8, 2), -- Intermédiaire
(8, 4), -- Guidé
(8, 7), -- Moyen
(8, 15), -- Énergie
(8, 18); -- Respiration

-- Cours 9: Thérapie par les Sons de Bols Tibétains
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(9, 3), -- Avancé
(9, 4), -- Guidé
(9, 8), -- Long
(9, 14), -- Douleur
(9, 20); -- Musique

-- Cours 10: Méditation du Matin pour la Concentration
INSERT INTO cours_tags (cours_id, tag_id) VALUES
(10, 2), -- Intermédiaire
(10, 4), -- Guidé
(10, 7), -- Moyen
(10, 12), -- Concentration
(10, 15); -- Énergie

-- =====================================================
-- 7. BULLET POINTS POUR CHAQUE COURS
-- =====================================================

-- Cours 1: Méditation de Pleine Conscience pour Débutants
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(1, 'Apprenez les bases de la méditation de pleine conscience', 1),
(1, 'Techniques pour observer vos pensées sans jugement', 2),
(1, 'Exercices d''ancrage dans le moment présent', 3),
(1, 'Cultivation d''une attention bienveillante', 4),
(1, 'Séance guidée de 20 minutes parfaite pour débuter', 5);

-- Cours 2: Relaxation Musculaire Progressive
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(2, 'Technique scientifiquement prouvée de relaxation', 1),
(2, 'Libération des tensions physiques et mentales', 2),
(2, 'Réduction significative du stress quotidien', 3),
(2, 'Amélioration de la qualité du sommeil', 4),
(2, 'Séance complète de 35 minutes', 5);

-- Cours 3: Respiration 4-7-8 pour l'Anxiété
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(3, 'Technique développée par le Dr. Andrew Weil', 1),
(3, 'Calme instantanément le système nerveux', 2),
(3, 'Réduction immédiate de l''anxiété', 3),
(3, 'Technique simple à maîtriser en 15 minutes', 4),
(3, 'Utilisable partout pour gérer le stress', 5);

-- Cours 4: Sons de la Forêt pour la Méditation
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(4, 'Ambiance apaisante d''une forêt ancienne', 1),
(4, 'Sons naturels des oiseaux et du vent', 2),
(4, 'Parfait pour la méditation et la relaxation', 3),
(4, 'Reconnexion à la nature et à la sérénité', 4),
(4, 'Séance audio immersive de 45 minutes', 5);

-- Cours 5: Préparation au Sommeil avec Sons de Pluie
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(5, 'Routine complète de préparation au sommeil', 1),
(5, 'Techniques de relaxation et de respiration', 2),
(5, 'Sons apaisants de pluie en arrière-plan', 3),
(5, 'Lâcher prise de la journée stressante', 4),
(5, 'Conditions optimales pour un sommeil réparateur', 5);

-- Cours 6: Méditation Vipassana Avancée
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(6, 'Pratique traditionnelle bouddhiste adaptée', 1),
(6, 'Observation fine des sensations corporelles', 2),
(6, 'Développement de la sagesse et de la compassion', 3),
(6, 'Séance approfondie de 60 minutes', 4),
(6, 'Technique pour pratiquants expérimentés', 5);

-- Cours 7: Sons de l'Océan pour la Relaxation
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(7, 'Rythme apaisant des vagues de l''océan', 1),
(7, 'Musique ambient douce en harmonie', 2),
(7, 'Effet calmant sur le système nerveux', 3),
(7, 'Parfait pour relaxation et méditation', 4),
(7, 'Séance audio de 40 minutes', 5);

-- Cours 8: Respiration Pranayama pour l'Énergie
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(8, 'Techniques millénaires de respiration yogique', 1),
(8, 'Exercices Kapalabhati, Bhastrika et Ujjayi', 2),
(8, 'Augmentation de la vitalité et de l''énergie', 3),
(8, 'Purification du corps et équilibre nerveux', 4),
(8, 'Idéal pour commencer la journée avec dynamisme', 5);

-- Cours 9: Thérapie par les Sons de Bols Tibétains
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(9, 'Vibrations thérapeutiques des bols chantants', 1),
(9, 'Harmonisation des chakras et réduction du stress', 2),
(9, 'Massage sonore profond et réparateur', 3),
(9, 'Fréquences spécifiques pour la guérison', 4),
(9, 'Séance de 50 minutes avec bols tibétains', 5);

-- Cours 10: Méditation du Matin pour la Concentration
INSERT INTO bullet_points (cours_id, texte, ordre) VALUES
(10, 'Méditation spécialement conçue pour le matin', 1),
(10, 'Amélioration de la concentration et clarté mentale', 2),
(10, 'Techniques de pleine conscience et visualisation', 3),
(10, 'Préparation de l''esprit aux défis de la journée', 4),
(10, 'Développement de la focus et de la productivité', 5);

-- =====================================================
-- 8. SECTIONS ET CONTENU POUR CHAQUE COURS
-- =====================================================

-- Cours 1: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Introduction à la Pleine Conscience', 'Découvrez les concepts de base de la méditation de pleine conscience', 1, 1, true),
('Pratique Guidée', 'Séance de méditation guidée étape par étape', 1, 2, true),
('Intégration', 'Conseils pour intégrer la pratique dans votre quotidien', 1, 3, true);

INSERT INTO chapitres (titre, description, section_id, ordre, is_active) VALUES
('Qu''est-ce que la pleine conscience ?', 'Introduction aux concepts fondamentaux', 1, 1, true),
('Préparation à la méditation', 'Comment se préparer pour une séance de méditation', 1, 2, true),
('Méditation guidée complète', 'Séance de 20 minutes avec guidance vocale', 2, 1, true),
('Exercices d''ancrage', 'Techniques pour rester présent', 2, 2, true),
('Conseils pour la pratique quotidienne', 'Comment maintenir une pratique régulière', 3, 1, true),
('Gestion des difficultés', 'Comment surmonter les obstacles courants', 3, 2, true);

INSERT INTO contenu (titre, description, chapitre_id, contenu_type, contenu_data, ordre, is_active) VALUES
('Vidéo d''introduction', 'Présentation des concepts de base', 1, 'video', '{"duree": 5, "url": "https://example.com/video/intro-pleine-conscience.mp4"}', 1, true),
('Texte explicatif', 'Définition et bienfaits de la pleine conscience', 1, 'text', '{"contenu": "La pleine conscience est l''art de porter attention au moment présent..."}', 2, true),
('Audio de méditation', 'Séance complète de méditation guidée', 3, 'audio', '{"duree": 20, "url": "https://example.com/audio/meditation-complete.mp3"}', 1, true),
('Exercice pratique', 'Technique d''ancrage à pratiquer', 4, 'exercise', '{"instructions": "Asseyez-vous confortablement et portez attention à votre respiration..."}', 1, true);

-- Cours 2: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Présentation de la Technique', 'Introduction à la relaxation musculaire progressive', 2, 1, true),
('Pratique Guidée', 'Séance complète de relaxation musculaire', 2, 2, true),
('Variations et Adaptations', 'Différentes façons d''adapter la technique', 2, 3, true);

-- Cours 3: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Présentation de la Technique 4-7-8', 'Explication de la méthode de respiration', 3, 1, true),
('Apprentissage de la Technique', 'Exercices progressifs pour maîtriser la respiration', 3, 2, true),
('Applications Pratiques', 'Comment utiliser la technique dans différentes situations', 3, 3, true);

-- Cours 4: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Présentation des Sons Naturels', 'Introduction aux bienfaits des sons de la forêt', 4, 1, true),
('Séance Audio Complète', 'Immersion dans l''ambiance forestière', 4, 2, true),
('Techniques de Méditation avec Sons', 'Comment méditer avec les sons naturels', 4, 3, true);

-- Cours 5: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Préparation au Sommeil', 'Routine pour préparer le corps et l''esprit', 5, 1, true),
('Séance avec Sons de Pluie', 'Relaxation avec l''ambiance apaisante de la pluie', 5, 2, true),
('Techniques d''Endormissement', 'Méthodes pour faciliter l''endormissement', 5, 3, true);

-- Cours 6: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Introduction au Vipassana', 'Présentation de la méditation Vipassana', 6, 1, true),
('Pratique de Base', 'Exercices fondamentaux de Vipassana', 6, 2, true),
('Méditation Approfondie', 'Séance complète de 60 minutes', 6, 3, true);

-- Cours 7: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Présentation des Sons Marins', 'Introduction aux bienfaits des sons de l''océan', 7, 1, true),
('Séance Audio Océan', 'Immersion dans l''ambiance océanique', 7, 2, true),
('Relaxation avec Sons Naturels', 'Techniques de relaxation avec les sons marins', 7, 3, true);

-- Cours 8: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Introduction au Pranayama', 'Présentation des techniques de respiration yogique', 8, 1, true),
('Exercices de Base', 'Techniques fondamentales de Pranayama', 8, 2, true),
('Pratique Avancée', 'Exercices pour augmenter l''énergie', 8, 3, true);

-- Cours 9: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Introduction à la Thérapie Sonore', 'Présentation des bienfaits des bols tibétains', 9, 1, true),
('Séance avec Bols Tibétains', 'Thérapie sonore complète de 50 minutes', 9, 2, true),
('Harmonisation des Chakras', 'Techniques d''harmonisation énergétique', 9, 3, true);

-- Cours 10: Sections et contenu
INSERT INTO sections (titre, description, cours_id, ordre, is_active) VALUES
('Méditation du Matin', 'Présentation de la méditation matinale', 10, 1, true),
('Techniques de Concentration', 'Exercices pour améliorer la focus', 10, 2, true),
('Séance Complète', 'Méditation guidée de 20 minutes', 10, 3, true);

-- =====================================================
-- FIN DU FICHIER
-- =====================================================
-- Ce fichier contient 10 cours complets de méditation et relaxation
-- avec toutes les données associées : catégories, sous-catégories, tags,
-- bullet points, sections, chapitres et contenu.
-- 
-- Pour utiliser ce fichier :
-- 1. Ouvrez l'éditeur SQL de Supabase
-- 2. Copiez et collez tout le contenu
-- 3. Exécutez le script
-- 4. Vos cours apparaîtront dans l'application !
