# Gestionnaire de Tâches Console

## Objectif Pédagogique

Ce projet vise à renforcer la logique de CRUD avec des objets, travailler la gestion d'état, la modification en profondeur d'objets, et la sauvegarde JSON. Il s'agit de créer un outil console réutilisable par l'utilisateur.

## Concepts Techniques Maîtrisés

| Concept | Explication |
|---------|-------------|
| **Objet avec état** | Chaque tâche est un objet avec un libellé + un statut ("à faire" / "faite") |
| **CRUD complet** | Ajouter une tâche, voir la liste, modifier une tâche (changer son statut), supprimer une tâche |
| **Filtrage et tri** | Permettre à l'utilisateur d'afficher uniquement les tâches faites ou non faites |
| **Stockage JSON (fs)** | Sauvegarder la liste des tâches pour les retrouver plus tard |
| **Séparation logique du code** | Chaque action (ajout, affichage, modification, suppression) dans une fonction distincte |

## Fonctionnalités

Le gestionnaire de tâches permet :

1. ✅ **Ajouter une tâche** avec une description
2. 📋 **Voir la liste des tâches** (toutes, faites, ou non faites)
3. ✔️ **Marquer une tâche comme faite**
4. ✏️ **Modifier la description d'une tâche**
5. ❌ **Supprimer une tâche**
6. 🗑️ **Effacer toutes les tâches**
7. 💾 **Sauvegarde automatique** dans un fichier JSON
8. 🔄 **Rechargement automatique** des tâches au démarrage

## Structure du Projet

```
├── index.js          # Interface utilisateur et menu interactif
├── taskManager.js     # Module contenant toute la logique CRUD
├── tasks.json         # Fichier de stockage des tâches
└── README.md          # Documentation du projet
```

## Structure d'une Tâche

Chaque tâche est un objet avec :
- `id` : Identifiant unique généré automatiquement
- `description` : Description de la tâche
- `status` : Statut ("à faire" ou "faite")

```javascript
{
  "id": "aj2dngp3dbk",
  "description": "Apprendre Node.js",
  "status": "à faire"
}
```

## Utilisation

1. **Démarrer l'application :**
   ```bash
   node index.js
   ```

2. **Naviguer dans le menu :**
   - Utiliser les numéros pour sélectionner une action
   - Suivre les instructions à l'écran
   - Taper `0` pour quitter

## Menu Principal

```
=== GESTIONNAIRE DE TACHES ===
1. Ajouter une tâche
2. Voir toutes les tâches
3. Voir les tâches à faire
4. Voir les tâches faites
5. Marquer une tâche comme faite
6. Modifier une tâche
7. Supprimer une tâche
8. Effacer toutes les tâches
0. Quitter
===========================
```

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript
- **Module fs** : Gestion des fichiers pour la sauvegarde
- **Module readline** : Interface console interactive
- **JSON** : Format de stockage des données

## Contraintes Respectées

- ✅ Chaque tâche est un objet avec `id`, `description`, `status`
- ✅ Utilisation du module `fs` pour sauvegarder et recharger les tâches
- ✅ Fonctions claires pour chaque action dans un module séparé
- ✅ Messages interactifs et clairs pour l'utilisateur
- ✅ Sauvegarde automatique après chaque modification

## Auteur

Projet réalisé dans le cadre d'un exercice pédagogique sur les concepts avancés de JavaScript et Node.js .