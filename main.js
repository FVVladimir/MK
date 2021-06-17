import randomDamage from "./utils.js";
import createElement from "./createElement.js";
import { ATTACK } from "./attack.js";

const arenas = document.querySelector('.arenas');
const button = document.querySelector('.button');
const formFight = document.querySelector('.control');
const chat = document.querySelector('.chat');

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

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
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

function changeHP(dam) {

    this.hp -= dam;

    if (this.hp <= 0) {

        this.hp = 0;
    };

};

function elHP() {
    const playerNamber = document.querySelector('.player' + this.player + ' .life');
    return playerNamber;
};

function renderHp() {
    this.elHP().style.width = this.hp + '%';
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

function playerAttack() {

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

    return attack;
};

function showResult() {

    if (scorpion.hp === 0 || subZero.hp === 0) {
        button.disabled = true;
        createReloadButton();
    }

    if (scorpion.hp === 0 && scorpion.hp < subZero.hp) {
        arenas.appendChild(playerWins(subZero.name));
    } else if (subZero.hp === 0 && subZero.hp < scorpion.hp) {
        arenas.appendChild(playerWins(scorpion.name));
    } else if (scorpion.hp === 0 && subZero.hp === 0) {
        arenas.appendChild(playerWins());
    }

}


function enemyAttack() {
    const hit = ATTACK[randomDamage(3) - 1];
    const defence = ATTACK[randomDamage(3) - 1];

    scorpion.changeHP(randomDamage(20));
    subZero.changeHP(randomDamage(20));
    scorpion.renderHp();
    subZero.renderHp();
    return {
        value: randomDamage(HIT[hit]),
        hit,
        defence,
    }
};

function generateLogs(type, player1, player2) {
    const text = logs[type][randomDamage(10)].replace('[playerKick]', scorpion.name).replace('[playerDefence]', subZero.name);
    const el = `<p>${text}<p>`;
    chat.insertAdjacentHTML('afterbegin', el);
};

formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if (player.defence !== enemy.hit) {
        scorpion.changeHP(enemy.value);
        scorpion.renderHp();
        generateLogs('hit', subZero, scorpion);
    };

    if (enemy.defence !== player.hit) {
        subZero.changeHP(player.value);
        subZero.renderHp();
        generateLogs('hit', scorpion, subZero);
    };

    showResult();

    console.log('our attack', player);
    console.log('computer attack', enemy);

});

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