Voici la traduction française du `README.md` :

---

## 💼 Portfolio d’Aymeric TRINH

Bienvenue dans le dépôt de mon portfolio personnel !  
Ce site met en avant mes projets, mes compétences et mon parcours en tant que développeur web.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)

## 🌐 Aperçu en ligne

🔗 **Lien vers le portfolio :** https://m-r1k.github.io/portfolio/

## ✨ Fonctionnalités

- 🎨 **UI/UX moderne** - Design réactif avec prise en charge du mode sombre
- ⚡ **Performant** - Optimisé avec React et le lazy loading
- 🔍 **Optimisé pour le SEO** - Métadonnées complètes, Open Graph, données structurées (JSON-LD)
- 🎭 **Animations** - Animations fluides avec Framer Motion
- 📱 **Mobile First** - Entièrement réactif sur tous les appareils
- 🌙 **Mode sombre** - Bascule entre les thèmes clair et sombre
- ♿ **Accessible** - Labels ARIA et HTML sémantique

## 🚀 Technologies utilisées

### Frontend
- **React 18.3.1** - Bibliothèque UI
- **Framer Motion** - Bibliothèque d’animations
- **Tailwind CSS 3.4.17** - Framework CSS utilitaire
- **React Icons** - Bibliothèque d’icônes
- **React Scroll** - Navigation avec défilement fluide
- **React Player** - Lecteur vidéo pour les aperçus de projets

### Backend
- **Node.js** - Environnement d’exécution
- **Express.js** - Framework web pour l’API
- **MySQL** - Gestion de base de données
- **CORS** - Partage des ressources entre origines

### Outils & bibliothèques
- **React Router DOM** - Routage côté client
- **React World Flags** - Composants de drapeaux de pays
- **Web Vitals** - Indicateurs de performance

## 📁 Structure du projet

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   └── About.jsx
│   │   ├── auth/
│   │   │   └── Authentication.jsx
│   │   ├── contact/
│   │   │   ├── Contact.jsx
│   │   │   └── PhoneInput.jsx
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   ├── HeaderText.jsx
│   │   │   ├── Socials.jsx
│   │   │   └── StarBackground.jsx
│   │   ├── loadingscreen/
│   │   │   └── LoadingScreen.jsx
│   │   ├── my_projects/
│   │   │   └── Projects.jsx
│   │   ├── nav/
│   │   │   └── Nav.jsx
│   │   └── darkmode/
│   │       └── DarkModeToggle.jsx
│   ├── App.js
│   └── index.js
└── backend/
    └── submit-form.js
```

## 🧠 Sections du portfolio

- **Accueil** - Section héro avec introduction animée
- **À propos** - Présentation personnelle, compétences et frise chronologique
- **Projets** - Mise en avant de projets avec aperçus vidéo
- **Contact** - Formulaire de contact avec validation
- **Authentification** - Interface de connexion/inscription

## 📦 Installation & configuration

### Prérequis

- Node.js (v14 ou plus)
- npm ou yarn
- MySQL (pour le backend)

### Exécution en local

1. **Cloner le dépôt**
```bash
git clone https://github.com/M-R1k/portfolio.git
cd portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm start
```

L’application s’ouvrira sur `http://localhost:3000`.

### Build de production
```bash
npm run build
```
Génère un build de production optimisé dans le dossier `build`.

### Lancer les tests
```bash
npm test
```

### Accéder au backend Node.js

1. **Configurer la connexion MySQL**  
   Adaptez les identifiants définis dans `backend/submit-form.js` si votre environnement local diffère de la configuration par défaut (`portfolio_contact_form_db`, utilisateur `aymeric`).

2. **Démarrer le serveur backend**  
   Depuis la racine du projet (après avoir installé les dépendances), exécutez dans un terminal séparé :
   ```bash
   node backend/submit-form.js
   ```

3. **Consommer l’API**  
   Le serveur Express écoute sur `http://localhost:3001` et expose la route `POST /submit-form` utilisée par le formulaire de contact.

## 🎯 Optimisations SEO

- ✅ Meta tags (description, mots-clés, auteur)
- ✅ Balises Open Graph pour le partage social
- ✅ Intégration Twitter Card
- ✅ Données structurées (JSON-LD) — Person, WebSite, ProfessionalService
- ✅ Éléments HTML5 sémantiques
- ✅ Sitemap.xml
- ✅ Configuration Robots.txt
- ✅ URLs canoniques
- ✅ Preconnect pour les ressources externes

## 🌟 Performances

- Chargement différé des images et vidéos
- Fractionnement du code avec React
- Taille de bundle optimisée
- Animations efficaces avec Framer Motion
- Images responsives avec formats multiples (AVIF, WebP)

## 🎨 Design

- Arrière-plans en dégradé avec transitions fluides
- Fond stellaire animé
- Système de planètes interactif
- Effets de survol et transitions
- Écran de chargement avec effet “Matrix”
- Navigation fluide

## 📝 Scripts disponibles

- `npm start` - Démarre le serveur de développement
- `npm run build` - Crée le build de production
- `npm test` - Exécute les tests
- `npm run eject` - Ejecte de Create React App (opération irréversible)

## 🔗 Liens

- **GitHub :** https://github.com/M-R1k/portfolio
- **Démo en ligne :** https://m-r1k.github.io/portfolio/
- **LinkedIn :** https://www.linkedin.com/in/aymeric-trinh/
- **Profil GitHub :** https://github.com/M-R1k

## 📄 Licence

Ce projet est privé et constitue un portfolio personnel.

## 👨‍💻 Auteur

**Aymeric Trinh**  
- Développeur web Full-Stack  
- Étudiant à EPITECH  
- Spécialisé en React, Node.js et Symfony

---

Fait avec ❤️ grâce à React et Tailwind CSS