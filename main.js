

// ===============================
// Statistiques du joueur
// ===============================
const player = {
    name: "Héros",
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 5,
    coins: 0,
    level: 1,
    potions: 3
};

// ===============================
// Statistiques du loup
// ===============================
const wolf = {
    name: "Loup",
    health: 50,
    maxHealth: 50,
    attack: 8,
    defense: 2,
    reward: 10,
    alive: true
};

// ===============================
// Initialisation du jeu
// ===============================
function initGame() {
    updateInterface();
}

window.onload = initGame;

// Démarrage automatique
window.onload = initGame;
// ===============================
// Mise à jour de l'interface
// ===============================
function updateInterface() {

    const health = document.getElementById("health");
    if (health) health.textContent = player.health;

    const attack = document.getElementById("attack");
    if (attack) attack.textContent = player.attack;

    const defense = document.getElementById("defense");
    if (defense) defense.textContent = player.defense;

    const level = document.getElementById("level");
    if (level) level.textContent = player.level;

    const coins = document.getElementById("coins");
    if (coins) coins.textContent = player.coins;

    const wolfHealth = document.getElementById("wolfHealth");
    if (wolfHealth) wolfHealth.textContent = wolf.health;
}

// ===============================
// Ajouter des pièces
// ===============================
function addCoins(amount) {
    player.coins += amount;
    updateInterface();
}

// ===============================
// Soigner le joueur
// ===============================
function usePotion() {

    if (player.potions <= 0) {
        alert("Tu n'as plus de potion !");
        return;
    }

    player.potions--;

    player.health += 30;

    if (player.health > player.maxHealth) {
        player.health = player.maxHealth;
    }

    updateInterface();
}// ===============================
// Combat contre le loup
// ===============================
// ===============================
// Combat contre le loup
// ===============================

    // Le loup attaque en retour
    let wolfDamage = wolf.attack - player.defense;

    if (wolfDamage < 1) {
        wolfDamage = 1;
    }

    player.health -= wolfDamage;

    if (player.health < 0) {
        player.health = 0;
    }

    updateInterface();

    alert("Le loup t'attaque et te fait " + wolfDamage + " dégâts !");

    // Défaite
    if (player.health <= 0) {
        alert("💀 Tu as été vaincu !");
    }
}// ===============================
// Monter de niveau
// ===============================
function levelUp() {

    player.level++;
    player.maxHealth += 20;
    player.health = player.maxHealth;
    player.attack += 5;
    player.defense += 2;

    alert("🎉 Bravo ! Tu passes au niveau " + player.level + " !");

    updateInterface();
}

// ===============================
// Recommencer un combat
// ===============================
function resetWolf() {

    wolf.health = wolf.maxHealth;
    wolf.alive = true;

    updateInterface();
}

// ===============================
// Retour au menu
// ===============================
function backToMenu() {
    window.location.href = "index.html";
}

// ===============================
// Aller vers l'inventaire
// ===============================
function openInventory() {
    window.location.href = "inventory.html";
}

// ===============================
// Aller vers la boutique
// ===============================
function openShop() {
    window.location.href = "shops.html";
}
// ===============================
// Vérifier si le joueur est vivant
// ===============================
function checkPlayer() {

    if (player.health <= 0) {
        player.health = 0;

        updateInterface();

        alert("💀 Tu as perdu la bataille !");
        return false;
    }

    return true;
}

// ===============================
// Vérifier si le loup est vaincu
// ===============================
function checkWolf() {

    if (wolf.health <= 0) {

        wolf.health = 0;
        wolf.alive = false;

        player.coins += wolf.reward;

        alert("🏆 Tu as vaincu le loup !");
        alert("💰 Tu gagnes " + wolf.reward + " pièces !");

        updateInterface();

        return true;
    }

    return false;
}

// ===============================
// Nouvelle bataille
// ===============================
function newBattle() {

    wolf.health = wolf.maxHealth;
    wolf.alive = true;

    updateInterface();
}// ===============================
// Fonctions des boutons
// ===============================

// Bouton Attaquer
function attack() {
    attackWolf();
}

// Bouton Potion
function potion() {
    usePotion();
}

// Bouton Monter de niveau
function levelButton() {
    levelUp();
}

// Bouton Inventaire
function inventory() {
    alert("Inventaire (bientôt disponible)");
}

// Bouton Boutique
function shop() {
    window.location.href = "shops.html";
}

// Bouton Retour
function back() {
    window.location.href = "index.html";
}

// ===============================
// Fin du fichier
// ===============================
updateInterface();
// ===============================
// Préparer le combat suivant
// ===============================
function nextBattle() {

    wolf.alive = true;

    wolf.maxHealth += 10;
    wolf.health = wolf.maxHealth;

    wolf.attack += 2;

    updateInterface();
}


