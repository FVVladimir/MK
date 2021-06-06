const arenas = document.querySelector('.arenas');
const button = document.querySelector('.button');

const scorpion = {
    player: 1,
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'fire', 'gun'],
    attack: function () {
        console.log(Scorpion.name + 'fight...');
    }
};

const subZero = {
    player: 2,
    name: 'subZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'ice', 'gun'],
    attack: function () {
        console.log(SubZero.name + '  ' + ' fight...');
    }
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
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomDamage();
    playerLife.style.width = player.hp + '%';

    if (player.hp < 0) {
        arenas.appendChild(playerLose(player.name));
        button.disabled = true;
    }
}

function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' lose';

    return loseTitle;
}

function randomDamage() {
    const damage = Math.ceil(Math.random() * 20);
    console.log(damage);
    return damage;
}

button.addEventListener('click', function () {
    console.log('kickasss!!!');
    changeHP(scorpion);
    changeHP(subZero);
});

arenas.appendChild(createPlayer(scorpion));
arenas.appendChild(createPlayer(subZero));