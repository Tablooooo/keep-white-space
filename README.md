# 🕹️ Keep White Space — Le Jeu d'Esquive

### 📝 Résumé du projet
**Keep White Space** est un mini-jeu d'arcade dynamique développé en JavaScript. L'objectif est simple : contrôler un triangle blanc et survivre le plus longtemps possible en esquivant les obstacles qui traversent l'écran.

Ce projet met en avant des pratiques modernes de **DevSecOps** et de déploiement continu :
- Une architecture légère basée sur du **JavaScript natif** (HTML5 Canvas).
- Un pipeline **CI/CD complet** via GitHub Actions.
- Une **conteneurisation Docker** avec publication sur GitHub Container Registry (GHCR).
- Un déploiement automatique sur **GitHub Pages** pour un accès instantané.

---

### 🛠 Technologies utilisées
- **Langage** : JavaScript (ES6+) / HTML5 / CSS3
- **Qualité de code** : ESLint (Google Style Guide)
- **Tests** : Vitest (38 tests unitaires et fonctionnels)
- **Conteneurisation** : Docker (Image basée sur Nginx Alpine)
- **Sécurité** : Gitleaks (Secret Scanning), npm audit

---

### 📦 Installation et Configuration Locale

### 1. Cloner le projet
```bash
git clone https://github.com/Tablooooo/keep-white-space.git
cd keep-white-space
```

#### 2. Installation des dépendances
```bash
npm install
```

#### 3. Lancement via Docker (Méthode recommandée)
Pour tester l'image telle qu'elle sera déployée :

```bash
# Construction de l'image
docker build -t keep-white-space .

# Lancement du conteneur
docker run -d -p 8080:80 keep-white-space
```

Le jeu sera alors accessible sur :  
👉 http://localhost:8080

---

### 🚀 Pipeline CI/CD (GitHub Actions)

Le projet intègre un workflow automatisé défini dans `.github/workflows/main.yml` qui s'exécute à chaque push :

#### 🔍 Sécurité
- Scan complet du dépôt avec **Gitleaks** pour prévenir la fuite de secrets.

#### 🧪 Qualité
- Audit des vulnérabilités des dépendances (`npm audit`)
- Vérification du style de code (**lint**)
- Exécution de **38 tests automatisés** avec génération d'un rapport visuel

#### 🐳 Déploiement Docker
- Build et push automatique de l'image sur **ghcr.io**

#### 🌐 Déploiement Web
- Mise à jour automatique du site sur **GitHub Pages**

---

### 🖥️ Fonctionnalités du Jeu

#### 🎮 Gameplay & Commandes
- **Mouvement** : Utilisez les flèches directionnelles du clavier pour déplacer le carré blanc  
- **Objectif** : Éviter les blocs colorés — la difficulté augmente progressivement  
- **Score** : Calculé en fonction de votre temps de survie  

#### 🛠 Infrastructure & Sécurité (DevSecOps)
- **Conteneurisation Native** : Utilisation d'images Docker légères pour un déploiement rapide  
- **Protection des Secrets** : Utilisation du `GITHUB_TOKEN` dynamique  
- **Rapports de Tests** : Génération d’annotations et de résumés graphiques à chaque exécution  
---

### 📄 Copyright

© 2026 Antoine ALLARD & Alexandre Grandjean — Tous droits réservés.