// ===============================
// Battle Légendaire - main.js
// ===============================

// Statistiques du joueur
let player = {
    health: 100,
    attack: 10,
    defense: 5,
    coins: 0,
    level: 1
};

// Initialisation du jeu
function initGame() {
    console.log("Bienvenue dans Battle Légendaire !");
    updateInterface();
}

// Met à jour les informations affichées
function updateInterface() {

    const coins = document.getElementById("coins");
    if (coins) {
        coins.textContent = player.coins;
    }

    const level = document.getElementById("level");
    if (level) {
        level.textContent = player.level;
    }
}

// Ajouter des pièces
function addCoins(amount) {
    player.coins += amount;
    updateInterface();
}

// Perdre des points de vie
function takeDamage(amount) {
    player.health -= amount;

    if (player.health < 0) {
        player.health = 0;
    }

    updateInterface();
}

// Soigner le joueur
function heal(amount) {
    player.health += amount;

    if (player.health > 100) {
        player.health = 100;
    }

    updateInterface();
}

// Monter de niveau
function levelUp() {
    player.level++;
    player.attack += 2;
    player.defense += 1;

    alert("🎉 Niveau " + player.level + " !");
    updateInterface();
}

// Aller vers une autre page
function goTo(page) {
    window.location.href = page;
}

// Démarrage automatique
window.onload = initGame;
