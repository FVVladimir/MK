const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'fire', 'gun'],
    attack: function () {
        console.log(Scorpion.name + 'fight...');
    }
};

const player2 = {
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'ice', 'gun'],
    attack: function () {
        console.log(SubZero.name + '  ' + ' fight...');
    }
};

function createPlayer(playerNamber, PlayerName, hp) {

    const player = document.createElement('div');
    player.classList.add('player1');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const img = document.createElement('img');
    // img.src = img;
    img.src = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif';

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = hp + '%';

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = PlayerName;

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img);

    player.appendChild(progressBar);
    player.appendChild(character);

    const arenas = document.querySelector('.arenas');
    arenas.appendChild(player);
    // arenas.appendChild(player2);


}

createPlayer(player1, 'Scoppion', 50);
createPlayer(player2, 'SubZero', 100);