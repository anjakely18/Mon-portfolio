# Portfolio — Anja Rasamoelinaanja

Portfolio personnel développé avec React + Vite. Présente mon parcours, mes projets, mes compétences et un formulaire de contact.

## Stack technique

| Catégorie | Outils |
|-----------|--------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styles | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Animations | Framer Motion |
| Carrousel | Embla Carousel |
| Particules | tsParticles |
| Formulaire | EmailJS Browser |
| Typage animation | React Type Animation |
| Icônes | React Icons |
| Linting | ESLint |
| Déploiement | Netlify |

## Structure du projet

```
src/
├── assets/           # Fichiers statiques importés (cv.pdf, photo de profil me.png, data.jsx)
├── components/       # Composants réutilisables (AnimatedSection, FeatureCard, Tabs…)
├── context/          # ThemeContext — gestion du mode sombre/clair
├── content/          # Données JSON (projets, compétences, certifications…)
├── hooks/            # useTheme
├── pages/            # Pages : Home, About, Projects, Skills, Contact
└── utils/            # Fonctions utilitaires
public/
└── images/           # Images statiques (captures de projets, photo de profil)
```

## Prérequis

- Node.js >= 18
- npm >= 9

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/rasamoelinaanja/Mon-portfolio.git
cd Mon-portfolio

# Installer les dépendances
npm install
```

## Variables d'environnement

Créer un fichier `.env` à la racine avec les clés EmailJS (nécessaires pour le formulaire de contact) :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Ces clés sont disponibles sur [emailjs.com](https://www.emailjs.com) après avoir configuré un service et un template d'email.

## Commandes disponibles

```bash
# Démarrer le serveur de développement (http://localhost:5173)
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Lancer le linter ESLint
npm run lint
```

## Optimisation des images

Les images sont automatiquement converties en **WebP** avant chaque build via `scripts/optimize-images.js` (utilise `cwebp`, inclus dans homebrew).

### Fonctionnement

- À chaque `npm run build`, le script (`prebuild`) scanne `public/images/uploads/` et `src/assets/`
- Pour chaque `.png`/`.jpg`/`.jpeg`, il génère un `.webp` à qualité 80 dans le même dossier
- Un manifest `scripts/.optimize-manifest.json` trace les fichiers déjà traités — seules les nouvelles images sont retraitées
- Les originaux sont conservés comme fallback via la balise `<picture>` dans le composant `OptimizedImage`

### Workflow pour un nouvel upload CMS

1. Uploader l'image via Decap CMS (stockée en `.png`/`.jpg` dans `public/images/uploads/`)
2. Référencer le chemin original dans le JSON (ex: `/images/uploads/mon-image.png`)
3. Au prochain `npm run build`, le `.webp` est généré automatiquement

Pour tester en dev sans rebuilder :

```bash
npm run optimize-images
```

> **Prérequis système :** `cwebp` doit être installé (`brew install webp` sur macOS).

## Données du site

Le contenu est géré via des fichiers JSON dans `src/content/` et éditable sans toucher au code grâce à **Decap CMS**.

| Fichier | Contenu |
|---------|---------|
| `projects.json` | Projets (titre, description, stack, galerie, slug…) |
| `skills.json` | Compétences techniques |
| `certifications.json` | Certifications obtenues |
| `experiences.json` | Expériences professionnelles |
| `formations.json` | Parcours académique |
| `profilData.json` | Bio, langues, valeurs, centres d'intérêt |
| `aboutInfo.json` | Données complémentaires de la page About |

### Decap CMS

L'interface d'administration est accessible à `/admin` sur le site déployé. Elle permet de modifier tout le contenu (projets, compétences, expériences…) via un formulaire visuel, sans passer par les fichiers JSON directement.

Fonctionnement :
- Decap CMS s'authentifie via **Netlify Identity** (backend `git-gateway`)
- Toute modification depuis l'interface crée un commit sur la branche `main`
- Netlify détecte le commit et redéploie automatiquement le site
- Les images uploadées sont stockées dans `public/images/uploads/`

La configuration des collections est définie dans `public/admin/config.yml`.

## Déploiement

Le projet est configuré pour Netlify via `netlify.toml`. Toute poussée sur la branche `main` déclenche un déploiement automatique.

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Le routage côté client (React Router) est géré par Netlify grâce à une règle de redirection : toutes les routes pointent vers `index.html`.
