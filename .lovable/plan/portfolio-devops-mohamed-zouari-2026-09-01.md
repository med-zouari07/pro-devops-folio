# Portfolio DevOps — Mohamed Zouari

Site portfolio professionnel d'une seule page (one-page), bilingue FR/EN, construit à partir du contenu du CV.

## Contenu (issu du CV)

- **Hero** : Mohamed Zouari — DevOps Engineer, résumé pro, boutons "Télécharger le CV" + contact, liens LinkedIn/GitHub/Email/Téléphone.
- **À propos** : 2+ ans d'expérience en production, microservices AWS/GCP/Azure, focus croissant MLOps.
- **Expérience** (timeline, 6 postes) : Platana (2026–présent), Agile & Pioneering Technical Solutions (2026), Discovery Intech (2024–2026 + stage PFE 2024), Primatec Engineering (2023), Lauterbach Consulting (2022) — missions + badges de technologies.
- **Projets** : MLOps CI/CD Platform on Kubernetes (2026).
- **Compétences** : grille par catégories (Cloud, Conteneurs, CI/CD & GitOps, MLOps, IaC & Automation, Monitoring, Observabilité, Systèmes & Virtualisation, Réseau, Bases de données).
- **Formation** : ENIT (Ingénieur Télécoms), IPEIS (classes préparatoires, rang 109/1300).
- **Certifications** : LFS101, Introduction to Kubernetes, Red Hat OpenShift.
- **Activités associatives** : FabLab ENIT, ISIE.
- **Contact** : liens directs (email, téléphone, LinkedIn, GitHub) — pas de formulaire ni de backend.
- **Langues** : Arabe (natif), Français (B2), Anglais (B2).

## Bilingue FR/EN

- Sélecteur FR/EN dans la barre de navigation, choix mémorisé dans le navigateur.
- Tous les textes proviennent d'un fichier de traductions unique (FR + EN), pas de bibliothèque i18n lourde.
- La langue par défaut est l'anglais (comme le CV).

## CV téléchargeable

Le PDF fourni est hébergé comme asset et accessible via un bouton "Télécharger le CV / Download CV".

## Design

Direction visuelle : univers technique/infra sombre, typographie nette avec accents monospace pour les technologies, grille dense type "console d'observabilité", animations discrètes au scroll. Je proposerai 3 directions visuelles rendues avant de construire, pour que vous choisissiez.

## Détails techniques

- Page unique `src/routes/index.tsx` (remplace le placeholder), sections en composants sous `src/components/portfolio/`.
- Données du CV centralisées dans `src/data/resume.ts` (FR/EN) pour faciliter les mises à jour.
- Contexte de langue léger (React context + localStorage).
- Tokens de design (couleurs, dégradés, ombres) définis dans `src/styles.css` en oklch, aucune couleur codée en dur.
- SEO : `head()` dédié avec titre/description/og/twitter, un seul H1, HTML sémantique, JSON-LD Person.
- Aucun backend requis.
