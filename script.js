// ===============================
// Battle Légendaire - script.js
// ===============================

// Informations du joueur
let player = {
    name: "Héros",
    health: 100,
    attack: 10,
    defense: 5,
    coins: 0,
    level: 1
};

// Démarrage
window.onload = function () {
    console.log("Battle Légendaire est lancé !");
    updateStats();
};

// Met à jour les statistiques
function updateStats() {

    if (document.getElementById("health")) {
        document.getElementById("health").textContent = player.health;
    }

    if (document.getElementById("attack")) {
        document.getElementById("attack").textContent = player.attack;
    }

    if (document.getElementById("defense")) {
        document.getElementById("defense").textContent = player.defense;
    }

    if (document.getElementById("coins")) {
        document.getElementById("coins").textContent = player.coins;
    }

    if (document.getElementById("level")) {
        document.getElementById("level").textContent = player.level;
    }
}

// Ajouter des pièces
function addCoins(amount) {
    player.coins += amount;
    updateStats();
}

// Perdre de la vie
function takeDamage(amount) {
    player.health -= amount;

    if (player.health < 0) {
        player.health = 0;
    }

    updateStats();
}

// Soigner
function heal(amount) {
    player.health += amount;

    if (player.health > 100) {
        player.health = 100;
    }

    updateStats();
}

// Monter de niveau
function levelUp() {
    player.level++;
    player.attack += 2;
    player.defense += 1;

    alert("Bravo ! Tu es maintenant niveau " + player.level + " !");
    updateStats();
}

// Changer de page
function openPage(page) {
    window.location.href = page;
}
