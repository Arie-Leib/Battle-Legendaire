

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
function attackWolf() {

    if (!wolf.alive) {
        alert("Le loup est déjà vaincu !");
        return;
    }

    // Le héros attaque
    let damage = player.attack - wolf.defense;

    if (damage < 1) {
        damage = 1;
    }

    wolf.health -= damage;

    if (wolf.health < 0) {
        wolf.health = 0;
    }

    updateInterface();

    alert("Tu attaques le loup et tu lui infliges " + damage + " dégâts !");

    // Victoire
    if (wolf.health <= 0) {
        wolf.alive = false;

        addCoins(wolf.reward);

        alert("🏆 Tu as vaincu le loup !");
        return;
    }

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
