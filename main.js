const arenas = document.querySelector('.arenas');
// const button = document.querySelector('.button');
const formFight = document.querySelector('.control');

const scorpion = {
    player: 1,
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'fire', 'gun'],
    attack: function () {
        console.log(this.name + 'fight...');
    },
    changeHP,
    elHP,
    renderHp,
};

const subZero = {
    player: 2,
    name: 'subZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'ice', 'gun'],
    attack: function () {
        console.log(this.name + '  ' + ' fight...');
    },
    changeHP,
    elHP,
    renderHp,
};

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

function createElement(tag, className) {
    const OurTag = document.createElement(tag);
    OurTag.classList.add(className);
    return OurTag;
};

function createPlayer(playerObj) {

    const player = createElement('div', 'player' + playerObj.player);
    const progressBar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');

    const img = createElement('img');
    img.src = playerObj.img;

    const life = createElement('div', 'life');
    life.style.width = playerObj.hp + '%';

    const name = createElement('div', 'name');
    name.innerText = playerObj.name;

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img);

    player.appendChild(progressBar);
    player.appendChild(character);

    return player;
};

function playerWins(name) {
    const loseTitle = createElement('div', 'loseTitle');
    if (name) {
        loseTitle.innerText = name + ' wins';
    } else {
        loseTitle.innerText = 'draw';
    }
    return loseTitle;
};

function randomDamage(nam) {
    const damage = Math.ceil(Math.random() * nam);
    // console.log(damage);
    return damage;
};

function changeHP(dam) {

    this.player.hp -= dam;

    if (this.player.hp <= 0) {

        this.player.hp = 0;
    };

    console.log(scorpion.changeHP(randomDamage(20)));

};

function elHP() {

    const playerNamber = document.querySelector('.player' + this.player);

    console.log(playerNamber);
    return playerNamber;
};



function renderHp(player) {
    const playerLife = document.querySelector('.player' + this.player + ' .life');
    playerLife.style.width = this.player.hp + '%';
    console.log(playerLife);
    return playerLife;
};


function createReloadButton() {
    const reload = createElement('div', 'reloadWrap');
    const reloadButton = createElement('button', 'button');
    reloadButton.innerText = '*RESTART*'
    reload.appendChild(reloadButton);
    arenas.appendChild(reload);

    reloadButton.addEventListener('click', function () {
        window.location.reload();
    });
};

formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const attack = {};

    for (let item of formFight) {

        if (item.checked && item.name === 'hit') {
            attack.value = randomDamage(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }
    console.log(scorpion.hp - attack.value);
    console.log('our attack', attack);
    console.log('computer attack', enemy);

});


function enemyAttack() {
    const hit = ATTACK[randomDamage(3) - 1];
    const defence = ATTACK[randomDamage(3) - 1];
    console.log(hit, defence);
    changeHP(scorpion);
    changeHP(subZero);
    return {
        value: randomDamage(HIT[hit]),
        hit,
        defence,
    }
}

// button.addEventListener('click', function () {
//     console.log('kickasss!!!');
//     changeHP(scorpion);
//     changeHP(subZero);

//     if (scorpion.hp === 0 || subZero.hp === 0) {
//         button.disabled = true;
//         createReloadButton();
//     }

//     if (scorpion.hp === 0 && scorpion.hp < subZero.hp) {
//         arenas.appendChild(playerWins(subZero.name));
//     } else if (subZero.hp === 0 && subZero.hp < scorpion.hp) {
//         arenas.appendChild(playerWins(scorpion.name));
//     } else if (scorpion.hp === 0 && subZero.hp === 0) {
//         arenas.appendChild(playerWins());
//     }
// console.log(scorpion.deductHP(randomDamage(20)));
// console.log(subZero.deductHP(randomDamage(20)));
// console.log(scorpion.drowHP());
// console.log(subZero.drowHP());
// });

arenas.appendChild(createPlayer(scorpion));
arenas.appendChild(createPlayer(subZero));