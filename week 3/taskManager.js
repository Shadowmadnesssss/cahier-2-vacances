const fs = require('fs');
const filePath = './tasks.json';
module.exports = {
    addtask,
    listtasks,
    removetask,
    updatetask,
    clearalltasks,
    completeTask,
    loadTasks
};

function loadTasks() {
    //loadTasks() = lit les taches depuis le fichier tasks.json 
    if (!fs.existsSync(filePath)) return [];
    //fs.existsSync(filePath) = verifie si le fichier tasks.json existe
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        //data = lit le contenu du fichier tasks.json, fs.readfilesync() = lit le fichier tasks.json de façon synchrone
        return JSON.parse(data || '[]');
        //JSON.parse() = transforme le contenu du fichier tasks.json en un objet javascript
    } catch (error) {
        console.log('Erreur lors de la lecture du fichier tasks.json');
        return [];
    }
}

function saveTasks(tasks) {
    //saveTasks() = enregistre les taches dans le fichier tasks.json
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    //fs.writeFileSync() = ecrit les taches dans le fichier tasks.json
}

function generateTaskId() {
    //generateTaskId() = genere un id unique pour une tache
    return Math.random().toString(36).substring(2, 15);
    //Math.random().toString(36).substring(2, 15) = genere un id unique pour une tache
}

function addtask(description) {
    //addtask() = ajoute une tache dans le fichier tasks.json
    if (!description || description.trim() === '') {
        //si la description est vide, on affiche un message d'erreur. trim() = supprime les espaces en début et en fin de la description
        console.log('La description ne peut pas être vide');
        return;
    }
    const tasks = loadTasks();
    const newTask = {
        id: generateTaskId(),
        description: description,
        status: 'à faire'
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Tache ajoutée avec succès: ${description}`);
}

function listtasks(filter = 'all') {
    //listtasks() = liste les taches dans le fichier tasks.json
    const tasks = loadTasks();
    let filteredTasks = tasks;
    if (filter === 'all') {
        filteredTasks = tasks;
    } else if (filter === 'à faire') {
        filteredTasks = tasks.filter(task => task.status === 'à faire');
    } else if (filter === 'faite') {
        filteredTasks = tasks.filter(task => task.status === 'faite');

    }
    if (filteredTasks.length === 0) {
        //si aucune tache n'est trouvée, on affiche un message d'erreur
        console.log('Aucune tache trouvée');
        return;
    }
    console.log('Liste des taches:');
    filteredTasks.forEach(task => {
        console.log(`${task.id} - ${task.description} - ${task.status}`);
    });
}

function removetask(id) {
    //removetask() = supprime une tache dans le fichier tasks.json
    const tasks = loadTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Tache non trouvée');
        return;
    }
    tasks.splice(index, 1);
    saveTasks(tasks);
    console.log(`Tache supprimée avec succès: ${id}`);
}

function updatetask(id, newDescription) {
    //updatetask() = met a jour une tache dans le fichier tasks.json
    const tasks = loadTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Tache non trouvée');
        return;
    }
    tasks[index].description = newDescription;
    saveTasks(tasks);
    console.log(`Tache mise a jour avec succès: ${id}`);
}

function clearalltasks() {
    //clearalltasks() = supprime toutes les taches dans le fichier tasks.json
    fs.writeFileSync(filePath, '[]');
    console.log('Toutes les taches ont été supprimées');
}

function completeTask(id) {
    //completeTask() = marque une tache comme terminée
    const tasks = loadTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Tache non trouvée');
        return;
    }
    tasks[index].status = 'faite';
    saveTasks(tasks);
    console.log(`Tache marquée comme faite: ${id}`);
}
