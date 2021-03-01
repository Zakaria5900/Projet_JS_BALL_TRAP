## Projet Web
# nom: ball trap
# realisée par: Salah Zakaria OUAICHOUCHE

## Comment lancer le projet
- Taper dans l'url de votre navigateur pour accéder à la page d'accueil

en local
```sh
file:///Users/ouaichouchezakaria/Desktop/Projet%20web/projet-js/OUAICHOUCHE_projet.html
```

## Deroulement du projet

Le projet consiste en un petit jeu dans lequel le but est de cliquer en un minimum de temps sur des cibles disposées aléatoirement dans une zone délimitée.

Comme l'illustre la figure ci-dessous on identifie différents éléments dans la page HTML. D'abord au centre se trouve la zone où apparaissent les cibles qu'il faudra faire disparaitre par un clic, cet élément a pour id terrain. Ensuite on trouve en haut de la page un premier bouton intitulé Une cible. Un clic sur ce bouton crée une unique cible qui apparaît à une position aléatoire sur le terrain. Enfin, dans la partie inférieure se trouve la zone de contrôle du jeu. On y trouve différents éléments :

un champ de saisie numérique pour indiquer le nombre de cibles à créer,
un bouton Démarrer qui provoque la création des cibles et le début du jeu,
une zone d'affichage du nombre de cibles qu'il reste à cliquer,
une zone d'affichage du chronomètre, le temps est affiché en minutes, secondes et dixièmes de secondes.

Un clic sur le bouton Démarrer permet de commencer le jeu, ce qui a pour conséquence de :

supprimer toutes les cibles qui pourraient rester dans le terrain,
stopper et remettre à zéro le chronomètre,
créer le nombre de cibles correspondant à la valeur indiquée par le joueur dans la zone dédiée. Les cibles doivent être positionnées aléatoirement dans le terrain.
mettre à jour la zone affichant le nombre de cibles qu'il reste à détruire.

## Liste des dossiers/fichiers rendus du projet

Projet_JS_BALL_TRAP
- /OUAICHOUCHE_projet.html
- Ensemble des assets utilisées dans le projet

- /scripts
- Ensemble des scripts javascript du projet
- project.js : Script pour gérer le jeux création et disparition des sibles .

- /styles
- Ensemble des scripts CSS du projet
- style-project.css : Script pour gérer CSS du projet


- /README.md Plus de détaille sur le fonctionnement de projet