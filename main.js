const arenas = document.querySelector('.arenas');
const button = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'fire', 'gun'],
    attack: function () {
        console.log(Scorpion.name + 'fight...');
    }
};

const player2 = {
    player: 2,
    name: 'SubZero',
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
    const playerLife = document.querySelector('.player' + player.player + '.life');
    player.hp -= 20;
    playerLife.style.width = player.hp + '%';
}

button.addEventListener('click', function () {
    console.log('kickasss!!!');
    changeHP(player1);
    changeHP(player2);
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));