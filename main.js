const arenas = document.querySelector('.arenas');
const button = document.querySelector('.button');

const scorpion = {
    player: 1,
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'fire', 'gun'],
    attack: function () {
        console.log(this.name + 'fight...');
    },
    deductHP: deductHP,
    drowHP: drowHP,
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
    deductHP: deductHP,
    drowHP: drowHP,
};

function createElement(tag, className) {
    const OurTag = document.createElement(tag);
    OurTag.classList.add(className);
    return OurTag;
}

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
}

function changeHP(player) {
    // const playerLife = document.querySelector('.player' + player.player + ' .life');
    // player.hp -= randomDamage(20);

    if (player.hp < 0) {
        player.hp = 0;
    }

    // playerLife.style.width = player.hp + '%';
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

// function elHP(playerObj) {
//     const playerNamber = document.querySelector('.player' + playerObj.player);
//     console.log(playerNamber);
//     return playerNamber;
// };



// function renderHp(player) {
//     const playerLife = document.querySelector('.player' + player.player + ' .life');
//     playerLife.style.width = player.hp + '%';
//     console.log(playerLife);
//     return playerLife;
// };

function deductHP(dem) {

    return this.hp -= dem;

};
function drowHP() {
    const playerLife = document.querySelector('.player' + this.player + ' .life');
    return playerLife.style.width = this.hp + '%';
}

button.addEventListener('click', function () {
    console.log('kickasss!!!');
    changeHP(scorpion);
    changeHP(subZero);

    if (scorpion.hp == 0 || subZero.hp == 0) {
        button.disabled = true;
    }

    if (scorpion.hp === 0 && scorpion.hp < subZero.hp) {
        arenas.appendChild(playerWins(subZero.name));
    } else if (subZero.hp === 0 && subZero.hp < scorpion.hp) {
        arenas.appendChild(playerWins(scorpion.name));
    }
    // console.log(scorpion.name, subZero.name, scorpion.hp, subZero.hp);
    // renderHp(scorpion);
    // renderHp(subZero);
    console.log(scorpion.deductHP(randomDamage(20)));
    console.log(subZero.deductHP(randomDamage(20)));
    console.log(scorpion.drowHP());
    console.log(subZero.drowHP());
});

arenas.appendChild(createPlayer(scorpion));
arenas.appendChild(createPlayer(subZero));