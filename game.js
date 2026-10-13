// ===============================
// Battle Légendaire - game.js
// ===============================

let player = {
    health: 100,
    attack: 10,
    defense: 5,
    coins: 0,
    level: 1
};

let enemy = {
    name: "Loup",
    health: 50,
    attack: 8
};

function startGame() {
    console.log("Battle Légendaire démarre !");
    updateStats();
}

function attackEnemy() {
    enemy.health -= player.attack;

    if (enemy.health < 0) {
        enemy.health = 0;
    }

    alert("Tu attaques le " + enemy.name + " !");

    if (enemy.health === 0) {
        winBattle();
    } else {
        enemyAttack();
    }

    updateStats();
}

function enemyAttack() {
    let damage = enemy.attack - player.defense;

    if (damage < 1) {
        damage = 1;
    }

    player.health -= damage;

    if (player.health < 0) {
        player.health = 0;
    }

    if (player.health === 0) {
        alert("Tu as perdu !");
    }
}

function winBattle() {
    alert("Victoire !");
    player.coins += 20;
    player.level += 1;

    enemy.health = 50 + (player.level * 10);
    enemy.attack = 8 + player.level;
}

function healPlayer() {
    player.health += 20;

    if (player.health > 100) {
        player.health = 100;
    }

    updateStats();
}

function updateStats() {
    console.log("Vie :", player.health);
    console.log("Attaque :", player.attack);
    console.log("Défense :", player.defense);
    console.log("Pièces :", player.coins);
    console.log("Niveau :", player.level);
    console.log("Vie du loup :", enemy.health);
}

window.onload = startGame;
