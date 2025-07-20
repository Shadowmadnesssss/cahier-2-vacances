const readline = require('readline');
// readline est un module qui permet de lire l'entrée utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    //createInterface est une fonction qui permet de créer une interface de lecture
    // stdin est le flux d'entrée standard (console.log)
    // stdout est le flux de sortie standard (console.log)
});

function calculatrice() {
    rl.question('Entrez un nombre: ', (nombre1Input) => {
        if(isNaN(nombre1Input)) {
            console.log("veuillez entrer un nombre valide");
            return calculatrice();
            //si l'utilisateur entre un nombre invalide, la fonction se relance
        }
        rl.question("operation ( +, -, *, /): ", (operation) => {
            if (!["+", "-", "*", "/"].includes(operation)) {
                console.log("veuillez entrer une operation valide");
                return calculatrice();
                //si l'utilisateur entre une operation invalide, la fonction se relance
            }
            rl.question("Entrez un nombre: ", (nombre2Input) => {
                if(isNaN(nombre2Input)) {
                    console.log("veuillez entrer un nombre valide");
                    return calculatrice();
                    //si l'utilisateur entre un deuxieme nombre invalide, la fonction se relance
                }
                //l'utilisateurs choisi un nombre le type de calcul qu'il souhaite faire et un deuxieme nombre
                
                const nombre1 = parseFloat(nombre1Input);
                const nombre2 = parseFloat(nombre2Input);
                let resultat;
                
                if( !(isNaN(nombre1) || isNaN(nombre2))) {
                
                if (operation === "+") {
                    resultat = nombre1 + nombre2;
                }
                else if (operation === "-") {
                    resultat = nombre1 - nombre2;
                }
                else if (operation === "*") {
                    resultat = nombre1 * nombre2;
                }
                else if (operation === "/") {
                    resultat = nombre1 / nombre2;
                    if (nombre2 === 0) {
                        console.log("division par 0 impossible");
                        return calculatrice();
                    }
                }
                else { 
                    resultat = "operation invalide";
                }
            
            }
            else {
                console.log("veuillez entrer des nombres valides");
                return calculatrice();
            }
 //logique pour faire le calcul

                console.log(`Le resultat de ${nombre1} ${operation} ${nombre2} est ${resultat}`);
                //resultat est le resultat du calcul
                rl.question("Voulez-vous faire un autre calcul ? (o/n): ", (reponse) => {
                    if (reponse === "o") {
                        console.log('boucle en cours...');
                        calculatrice();
                        //appel de la fonction calculatrice pour faire un autre calcul
                    }
                    else if (reponse === "n") {
                        rl.close();
                        //fermeture de la calculatrice  
                    }
                    else {
                        console.log("veuillez entrer o ou n");
                        rl.question("Voulez-vous faire un autre calcul ? (o/n):", (reponse) => {
                            if (reponse === "o") {
                                console.log('boucle en cours...');
                                calculatrice();
                                //appel de la fonction calculatrice pour faire un autre calcul
                            }
                            else if (reponse === "n") {
                                rl.close();
                                //fermeture de la calculatrice
                            }
                        });
                    }
                });
                //fermeture de la calculatrice (transformamble en boucle pour q'uelle se relance apres la fin du calcul)
            });
        });
    });
}
// Démarrage de la calculatrice
calculatrice();












