# Application Ateba Music ?

Allumez-le et montez le son ! 🎧🎶

Mon idée pour Spotify serait que les utilisateurs puissent créer des listes de lecture à partir des albums les plus populaires recherchés par l'artiste, avec les albums et les artistes tirés de l'API de Lastfm.

Lorsque la page se charge, l'utilisateur voit les 16 artistes les plus populaires du jour selon Lastfm.com.

Faites défiler un peu plus loin et cherchez un artiste, puis "aimez" les albums que vous souhaitez ajouter à votre liste de lecture.

## Motivation

C'est un projet en cours de développement, cependant ce projet démontre :

- La capacité à écrire du JSX dans des composants fonctionnels et de classe

- Plusieurs appels axios dans différents composants

- Manipulation d'éléments ajoutés dynamiquement à la page

- Gestion d'événements et d'erreurs

- Création, mise à jour et configuration d'informations dans une base de données externe

## Technologies/Frameworks utilisés

- HTML5
- CSS3
- React
- Firebase
- ECMAS 6
- API Lastfm
- JSX

## Caractéristiques

- Conçu selon les principes appris dans le cours de Scrimba sur les fondamentaux de l'UI/UX

- Design moderne, minimaliste et responsive

- Scoping et namespace de code

- Accès à des bases de données multi-niveaux stockées dans Firebase

- Fonctions fléchées ECMAS + Déclarations de fonctions

Ce projet a été démarré avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.<br />
Ouvrez [http://localhost:3000](http://localhost:3000) pour le voir dans le navigateur.

La page se recharge si vous apportez des modifications.<br />
Vous verrez également toutes les erreurs de lint dans la console.

### `npm test`

Lance le test runner en mode interactif.<br />
Consultez la section sur [l'exécution de tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.<br />
Il compile correctement React en mode production et optimise la construction pour de meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hashs.<br />
Votre application est prête à être déployée !

Consultez la section sur [le déploiement](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Note : ceci est une opération en sens unique. Une fois que vous `eject`, vous ne pouvez pas revenir en arrière !**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez `eject` à tout moment. Cette commande supprimera la seule dépendance de construction de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les