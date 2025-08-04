const readline = require('readline');
const taskManager = require('./taskManager.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function afficherMenu() {
    console.log('\n=== GESTIONNAIRE DE TACHES ===');
    console.log('1. Ajouter une tâche');
    console.log('2. Voir toutes les tâches');
    console.log('3. Voir les tâches à faire');
    console.log('4. Voir les tâches faites');
    console.log('5. Marquer une tâche comme faite');
    console.log('6. Modifier une tâche');
    console.log('7. Supprimer une tâche');
    console.log('8. Effacer toutes les tâches');
    console.log('0. Quitter');
    console.log('===========================');
}

function demanderChoix() {
    rl.question('Votre choix: ', (choix) => {
        switch(choix) {
            case '1':
                rl.question('Description de la tâche: ', (description) => {
                    taskManager.addtask(description);
                    demanderChoix();
                });
                break;
            case '2':
                taskManager.listtasks('all');
                demanderChoix();
                break;
            case '3':
                taskManager.listtasks('à faire');
                demanderChoix();
                break;
            case '4':
                taskManager.listtasks('faite');
                demanderChoix();
                break;
            case '5':
                rl.question('ID de la tâche à marquer comme faite: ', (id) => {
                    taskManager.completeTask(id);
                    demanderChoix();
                });
                break;
            case '6':
                rl.question('ID de la tâche à modifier: ', (id) => {
                    rl.question('Nouvelle description: ', (description) => {
                        taskManager.updatetask(id, description);
                        demanderChoix();
                    });
                });
                break;
            case '7':
                rl.question('ID de la tâche à supprimer: ', (id) => {
                    taskManager.removetask(id);
                    demanderChoix();
                });
                break;
            case '8':
                taskManager.clearalltasks();
                demanderChoix();
                break;
            case '0':
                console.log('Au revoir!');
                rl.close();
                break;
            default:
                console.log('Choix invalide!');
                demanderChoix();
        }
    });
}

// Démarrage de l'application
console.log('Chargement des tâches...');
afficherMenu();
demanderChoix();