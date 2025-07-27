# Projet #2 — Le Jeu du Nombre Mystère (Node.js)

## Objectif Pédagogique

- Approfondir les notions de boucles, fonctions, conditions et gestion des erreurs
- Apprendre à structurer un petit jeu en terminal avec plusieurs fonctionnalités
- Utiliser des notions supplémentaires comme le score, les paramètres dynamiques, et la sauvegarde

## Concepts Techniques

| Concept | Explication |
|---------|-------------|
| **Génération dynamique de difficulté** | Proposer plusieurs niveaux (facile, moyen, difficile) change la plage de nombres aléatoires |
| **Score** | Le nombre de tentatives est stocké et affiché à la fin |
| **Boucle principale + rejouer** | L'utilisateur peut choisir de rejouer ou non |
| **Séparation logique** | Toutes les grandes étapes (init, play, replay) doivent être séparées en fonctions |
| **Vérification d'erreurs** | Il faut vérifier que l'utilisateur entre bien un nombre et pas une chaîne |
| **Stockage temporaire** | Enregistrer le score dans un fichier .json via fs |

## Fonctionnalités du Jeu

Le jeu console permet de :

1. **Choisir un niveau de difficulté** :
   - Facile : 1-50 (7 essais)
   - Moyen : 1-100 (10 essais) 
   - Difficile : 1-500 (15 essais)
   - Personnalisé : plage et essais au choix

2. **Jouer** :
   - Génère un nombre aléatoire selon le niveau
   - Donne des indices ("trop petit", "trop grand")
   - Affiche le nombre d'essais restants

3. **Gérer les scores** :
   - Affiche le nombre de tentatives utilisées
   - Sauvegarde automatique dans `score.json`
   - Consultation de l'historique des parties

4. **Rejouer** : Possibilité de refaire une partie ou changer de niveau

## Structure du Code

- `startGame()` : Menu principal et sélection du niveau
- `jouer()` : Logique principale du jeu
- `demanderNombre()` : Gestion des tentatives et indices
- `sauvegarderScore()` : Stockage des résultats
- `lireScore()` : Lecture de l'historique

## Comment Utiliser le Projet

### Prérequis
- Node.js installé sur ton ordinateur

### Lancement
```bash
node nombremystere.js
```

### Utilisation
1. Lance le programme
2. Choisis un niveau de difficulté (1-4) ou consulte mes/tes scores et essaye de les battres!!! (5)
3. Devine le nombre avec les indices donnés
4. Tes scores sont automatiquement sauvegardés
5. Appuie sur Entrée pour revenir au menu

### Fichiers
- `nombremystere.js` : Code principal du jeu
- `score.json` : Sauvegarde automatique de tes parties

Amuse-toi bien !
