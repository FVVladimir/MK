const playerOne = {
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'fire', 'gun'],
    attack: function f() {
        console.log(playerOne.name + 'fight...');
    }
};

const playerTwo = {
    name: 'subZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'ice', 'gun'],
    attack: function f() {
        console.log(plaerTwo.name + '  ' + ' fight...');
    }
};

function createPlayer() {

    const player = document.createElement('div');
    player.classList.add('player1');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const img = document.createElement('img');
    img.src = playerOne.img;

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = '100%';

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = 'SCORPION';

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img);

    player.appendChild(progressBar);
    player.appendChild(character);

    const arenas = document.createElement('div');
    arenas.classList.add('arenas');

    // arenas.appendChild(playerOne);
    // arenas.appendChild(playerTwo);

    const root = document.querySelector('.root');
    root.appendChild(player);
}

createPlayer('player2', 50);
createPlayer();