const readline = require('readline');
//permet de lire l'entré user
const fs = require('fs');
// pertet de save les score
const path = require('path');
// module pour manipuler les chemins de fichiers

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const scoreFile = path.join(__dirname, 'score.json');

// Variables globales
let nombreMystere;
let essaisRestants;
let essaisDeBase;

    function lireScore() {
        try {
            const data = fs.readFileSync(scoreFile, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }


function startGame() {
    console.clear();
    console.log('Bienvenue dans le jeu du nombre mystère!');
    console.log("1 - Facile (1 à 50) (7 essais)");
    console.log("2 - Moyen (1 à 100) (10 essais)");
    console.log("3 - Difficile (1 à 500) (15 essais)");
    console.log("4 - personnalisé");
    console.log("5 - Afficher les scores");
    rl.question('Choisissez une option (1-5): ', (choix) => {
        const choixNum = parseInt(choix);
        if (isNaN(choixNum) || choixNum < 1 || choixNum > 5) {
            console.log('Choix invalide. Veuillez entrer un nombre entre 1 et 5.');
            startGame();
            return;
        }
        if (choixNum === 1) {
            nombreMystere = Math.floor(Math.random() * 50) + 1;
            essaisRestants = 7;
            essaisDeBase = 7;
            jouer();
        } else if (choixNum === 2) {
            nombreMystere = Math.floor(Math.random() * 100) + 1;
            essaisRestants = 10;
            essaisDeBase = 10;
            jouer();
        } else if (choixNum === 3) {
            nombreMystere = Math.floor(Math.random() * 500) + 1;
            essaisRestants = 15;
            essaisDeBase = 15;
            jouer();
        
             
        } else if (choixNum === 4) {
            //+petite fonction pour custom sa game
            rl.question('Entrez le nombre minimum: ', (min) => {
                rl.question('Entrez le nombre maximum: ', (max) => {
                    rl.question('Entrez le nombre d\'essais: ', (nbEssais) => {
                        const minNum = parseInt(min);
                        const maxNum = parseInt(max);
                        const essaisNum = parseInt(nbEssais);
                       
                        
                        if (minNum >= maxNum || essaisNum <= 0) {
                            console.log('Valeurs invalides. Recommence.');
                            startGame();
                            return;
                        }
                        
                        nombreMystere = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                        essaisRestants = essaisNum;
                        essaisDeBase = essaisNum;
                        jouer();
                    })
                })
            });
        } else if (choixNum === 5) {
            const scores = lireScore();
            if (scores.length === 0) {
                console.log('Aucun score enregistré.');
            } else {
                console.log('Meilleurs scores:');
                scores.sort((a, b) => a.essaisUtilises - b.essaisUtilises);
                scores.forEach((score, index) => {
                    console.log(`${index + 1}. ${score.essaisUtilises}/${score.essaisDeBase} essais (nombre: ${score.nombreMystere}) - ${score.date}`);   
                });
            }
            console.log('\nAppuyez sur Entrée pour revenir au menu');
            rl.question('', () => startGame());
        }
    })
}

function jouer() {
    console.log(`\nTu as ${essaisRestants} essais pour deviner le nombre.`);
    demanderNombre();
}

function demanderNombre() {
    rl.question('Devine le nombre: ', (reponse) => {
        const nombre = parseInt(reponse);
        
        if (isNaN(nombre)) {
            console.log('Tu dois entrer un nombre valide.');
            demanderNombre();
            return;
        }
        
        essaisRestants--;
        
        if (nombre === nombreMystere) {
            console.log(`Bravo ! Tu as trouvé le nombre ${nombreMystere} !`);
            sauvegarderScore();
            recommencer();
        } else if (essaisRestants === 0) {
            console.log(`Dommage ! Le nombre était ${nombreMystere}.`);
            recommencer();
        } else {
            if (nombre < nombreMystere) {
                console.log(`Trop petit ! Il te reste ${essaisRestants} essais.`);
            } else {
                console.log(`Trop grand ! Il te reste ${essaisRestants} essais.`);
            }
            demanderNombre();
        }
    });
}

function sauvegarderScore() {
    const scores = lireScore();
    const essaisUtilises = (essaisDeBase - essaisRestants);
    const nouveauScore = {
        nombreMystere: nombreMystere,
        essaisDeBase: essaisDeBase,
        essaisUtilises: essaisUtilises,
    };
    scores.push(nouveauScore);
    
    try {
        fs.writeFileSync(scoreFile, JSON.stringify(scores, null, 2));
        console.log('Score sauvegardé !');
    } catch (error) {
        console.log('Erreur lors de la sauvegarde.');
    }
}

function recommencer() {
    console.log('\nVeux-tu rejouer ?');
    rl.question('Appuie sur Entrée pour revenir au menu...', () => {
        startGame();
    });
}

startGame();





