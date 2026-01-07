// friend.mjs

import { getScreen, showTemplateScreen, addTemplate, clear } from "../../util/screens.js";
import { type, waitForKey,input, cleanInput,isPrintable,moveCaretToEnd  } from "../../util/io.js";

import pause from "../../util/pause.js";
import { typeSound } from "../../sound/index.js"
import say from "../../util/speak.js";


    let selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
const messages = {
    en: [
        "Booting GBA...",
        "Pokedex.v1.5 ready!",
        "Trainer spotted >> [READY]",
        "Battle Zone > Active!",
        "⚡ A trainer has appeared! ⚡",
        "L o a d i n g . . .",
        ". . . . . . . . . .",
        "⚔️ Get ready to battle! ⚔️"
    ],
    pt: [
        "Iniciando GBA...",
        "Pokedex.v1.5 pronta!",
        "Treinador detectado >> [PRONTO]",
        "Zona de Batalha > Ativa!",
        "⚡ Um treinador surgiu! ⚡",
        "C a r r e g a n d o . . .",
        ". . . . . . . . . .",
        "⚔️ Prepare-se para a batalha! ⚔️"
    ],
    es: [
        "Cargando GBA...",
        "Pokedex.v1.5 lista!",
        "Entrenador localizado >> [LISTO]",
        "Zona de Batalla > Activa!",
        "⚡ ¡Un entrenador apareció! ⚡",
        "C a r g a n d o . . .",
        ". . . . . . . . . .",
        "⚔️ ¡Prepárate para la batalla! ⚔️"
    ],
    fr: [
        "Démarrage GBA...",
        "Pokedex.v1.5 prêt!",
        "Entraîneur repéré >> [PRÊT]",
        "Zone de Combat > Active!",
        "⚡ Un entraîneur est arrivé! ⚡",
        "C h a r g e m e n t . . .",
        ". . . . . . . . . .",
        "⚔️ Préparez-vous pour le combat! ⚔️"
    ]
};

const output = messages[selectedLanguage];


async function pokemon() {
  
  

	clear();
	say("BATTLE", 0.3, 0.8);
	
	return new Promise(async resolve =>
	{
	  let gameScreen
	  let pokemon = []
	  let tempPokemon = []
	  	  // Check if all enemy Pokémon are fainted
const langTexts = {
	en: {
	  win: "I can't believe I lost to YOU! How could this happen?!",
	  lose: "You are too weak! Better train harder next time!"
	},
	es: {
	  win: "¡No puedo creer que te haya perdido! ¿Cómo pudo pasar esto?",
	  lose: "¡Eres demasiado débil! ¡Entrena más para la próxima!"
	},
	fr: {
	  win: "Je n'arrive pas à croire que j'ai perdu contre TOI ! Comment est-ce possible ?!",
	  lose: "Tu es trop faible ! Entraîne-toi mieux pour la prochaine fois !"
	},
	pt: {
	  win: "Não acredito que perdi para VOCÊ! Como isso aconteceu?!",
	  lose: "Você é muito fraco! Treine mais para a próxima vez!"
	}
  };
  let langSelected = localStorage.getItem('selectedLanguage') || 'en'
  

let playerParty = [];
let enemyParty = [];

let titlesfx = new Audio('commands/pokemon/assets/sfx/pokemonopening.mp3');
let battlesfx = new Audio('commands/pokemon/assets/sfx/pokemonbattle.mp3');
let victorysfx = new Audio('commands/pokemon/assets/sfx/pokemonvictory.mp3');

let playerPokemon;
let enemyPokemon;


	  

	  
	  let moves = {
    'tackle': {
        name: 'TACKLE',
        damage: 15,
        target: 'enemy'
    },
    'thundershock': {
        name: 'THUNDERSHOCK',
        damage: 25,
        target: 'enemy'
	},
	'scratch': {
		name: 'SCRATCH',
		damage: 4,
		target: 'enemy'
	},
	'ember': {
		name: 'EMBER',
		damage: 6,
		target: 'enemy'
	},
	'quick attack': {
		name: 'QUICK ATTACK',
		damage: 20,
		target: 'enemy'
	},
	'thunder': {
		name: 'THUNDER',
		damage: 40,
		target: 'enemy'
	},
	'fire blast': {
		name: 'FIRE BLAST',
		damage: 60,
		target: 'enemy'
	},
	'mega punch': {
		name: 'MEGA PUNCH',
		damage: 35,
		target: 'enemy'
	},
	'hydro pump': {
		name: 'HYDRO PUMP',
		damage: 60,
		target: 'enemy'
	},
	'skull bash': {
		name: 'SKULL BASH',
		damage: 35,
		target: 'enemy'
	},
	'acid': {
		name: 'ACID',
		damage: 28,
		target: 'enemy'
	},
	'belch': {
		name: 'BELCH',
		damage: 60,
		target: 'enemy'
	},
	'psychic': {
		name: 'PSYCHIC',
		damage: 40,
		target: 'enemy'
	},
	'rest': {
		name: 'REST',
		damage: -.6,
		target: 'self'
	},
	'solar beam': {
		name: 'SOLAR BEAM',
		damage: 60,
		target: 'enemy'
	},
	'body slam': {
		name: 'BODY SLAM',
		damage: 35,
		target: 'enemy'
	},
	'slash': {
		name: 'SLASH',
		damage: 35,
		target: 'enemy'
	},
	'hyper beam': {
		name: 'HYPERBEAM',
		damage: 70,
		target: 'enemy'
	},
	'hi jump kick': {
		name: 'HI JUMP KICK',
		damage: 50,
		target: 'enemy'
	},
	'mega kick': {
		name: 'MEGA KICK',
		damage: 60,
		target: 'enemy'
	},
	'lick': {
		name: 'LICK',
		damage: 35,
		target: 'enemy'
	},
	'low sweep': {
		name: 'LOW SWEEP',
		damage: 35,
		target: 'enemy'
	},
	'dynamic punch': {
		name: 'DYNAMIC PUNCH',
		damage: 50,
		target: 'enemy'
	}
};

var itemList = [];

let items = {
	'potion': {
		name: 'POTION',
		damage: -.3,
		target: 'self',
		amount: 3
	}
};

itemList.push(items);



class Pokemon {
	constructor(pokename, level, maxhealth, moves, imgfront, imgback) {
		this.pokename = pokename;
		this.level = level;
		this.health = maxhealth;
		this.maxhealth = maxhealth;
		this.moves = moves;
		this.imgfront = imgfront;
		this.imgback = imgback;
		this.alive = true;
	}

	decrementHealth(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			if (this.owner == 'player') {
				playerPokemon = this.faint(playerPokemon, playerParty);
			}
			if (this.owner == 'enemy') {
				enemyPokemon = this.faint(enemyPokemon, enemyParty);
			}
		}
		if (this.health > this.maxhealth) {
			this.health = this.maxhealth;
		}
	}
	attack(target, move) {
		if (move.target == 'self') {
			this.decrementHealth(Math.round(this.maxhealth * move.damage));
		} else {
		target.decrementHealth(move.damage);
		}
	}
	useItem(target, item) {
		if (item.target == 'self') {
			this.decrementHealth(this.maxhealth * item.damage);
		}
	}
	// Faint function will pull the next pokemon in the array into the battle
	faint(currentPokemon, party) {
		var foundPokemon = false;
		if (this.health <= 0) {
			console.log('fainted!');
			this.alive = false;
			for (var i = 0; i < party.length; i++) {
				if (party[i].alive == true) {
					foundPokemon = true;
					currentPokemon = party[i];
					console.log(currentPokemon.pokename)
					break;
				}
			}
			if (foundPokemon == false) {
				endGame();
			}
			return currentPokemon;
		}
	}
};


/////start
clear()

     let begin = await showTemplateScreen("start");
        pause(2);
        await waitForKey();
        begin.remove();
        



     let intro = await showTemplateScreen("intro");

	titlesfx.play();

        pause(2);
        await waitForKey();
        intro.remove();
        
		
let  pokemonGame = await showTemplateScreen("game");
const metaViewport = document.createElement('meta');

metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0'; 
document.head.appendChild(metaViewport); 

document.getElementById('battle').style.visibility = 'visible';	
addListeners()
pause(2);
titlesfx.pause();
transition();

        
///// fim
function potionGet() {


    playerPokemon.useItem(playerParty[0], items['potion']);
    if (playerPokemon.moves[0].target != 'self') {
		document.getElementById('pkmn').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmn').style.animation = '';
		}, 1000);
	}
	enemyPokemon.faint(enemyPokemon, enemyParty);
	removeListeners();
	setTimeout(function() {
		enemyAttack();
		addListeners();
	}, 1000);

	showPokemon();
	
    
	console.log('jp pokemon in ' + items.potion.damage);

	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('itemscancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('potion').style.zIndex = '-1';
	document.getElementById('b2').style.zIndex = '-1';
}





function transition() {
	document.getElementById('black').src = 'commands/pokemon/assets/img/black.png';
	document.getElementById('black').style.zIndex = '1';

	pokemon.push(new Pokemon('PIKACHU', 50, 117, [moves['tackle'], moves['thundershock']], 'commands/pokemon/assets/img/pikachu.png', 'commands/pokemon/assets/img/pikachuback.png'));
pokemon.push(new Pokemon('CHARIZARD', 50, 163, [moves['fire blast'], moves['mega punch']], 'commands/pokemon/assets/img/charizard.png', 'commands/pokemon/assets/img/charizardback.png'));
pokemon.push(new Pokemon('BLASTOISE', 50, 180, [moves['hydro pump'], moves['skull bash']], 'commands/pokemon/assets/img/blastoise.png', 'commands/pokemon/assets/img/blastoiseback.png'));
pokemon.push(new Pokemon('KADABRA', 50, 128, [moves['psychic'], moves['rest']], 'commands/pokemon/assets/img/kadabra.png', 'commands/pokemon/assets/img/kadabraback.png'));
pokemon.push(new Pokemon('VENUSAUR', 50, 171, [moves['solar beam'], moves['body slam']], 'commands/pokemon/assets/img/venusaur.png', 'commands/pokemon/assets/img/venusaurback.png'));
pokemon.push(new Pokemon('JOLTEON', 50, 152, [moves['quick attack'], moves['thunder']], 'commands/pokemon/assets/img/jolteon.png', 'commands/pokemon/assets/img/jolteonback.png'));
pokemon.push(new Pokemon('ARBOK', 50, 133, [moves['acid'], moves['belch']], 'commands/pokemon/assets/img/arbok.png', 'commands/pokemon/assets/img/arbokback.png'));
pokemon.push(new Pokemon('SCYTHER', 50, 155, [moves['slash'], moves['hyper beam']], 'commands/pokemon/assets/img/scyther.png', 'commands/pokemon/assets/img/scytherback.png'));
pokemon.push(new Pokemon('STARMIE', 50, 146, [moves['hydro pump'], moves['rest']], 'commands/pokemon/assets/img/starmie.png', 'commands/pokemon/assets/img/starmieback.png'));
pokemon.push(new Pokemon('HITMONLEE', 50, 138, [moves['hi jump kick'], moves['mega kick']], 'commands/pokemon/assets/img/hitmonlee.png', 'commands/pokemon/assets/img/hitmonleeback.png'));
pokemon.push(new Pokemon('HAUNTER', 50, 120, [moves['lick'], moves['psychic']], 'commands/pokemon/assets/img/haunter.png', 'commands/pokemon/assets/img/haunterback.png'));
pokemon.push(new Pokemon('MACHAMP', 50, 190, [moves['low sweep'], moves['dynamic punch']], 'commands/pokemon/assets/img/machamp.png', 'commands/pokemon/assets/img/machampback.png'));


	setTimeout(function() {
	battlesfx.play();
	}, 1000);

	setTimeout(function() {
	document.getElementById('black').style.zIndex = '-1';
	initGame();
	}, 3800)
}

//Starts the game and sets the beginning pokemon at random
//Pokemon max of six for enemy and player
async function initGame() {

  console.log('adding pokemoj');
  console.log(pokemon)
  // Ensure pokemon array is not empty
  if (!pokemon || pokemon.length < 12) {
    console.error('Not enough Pokemon available for initialization');
    return;
  }
  
  for (let i = 0; i < 6; i++) {
    // Ensure safe array access
    tempPokemon = pokemon.splice(Math.floor(Math.random() * pokemon.length), 1)[0];
    if (!tempPokemon) {
      console.error('Failed to fetch a Pokemon for the player');
      return;
    }
    tempPokemon.owner = 'player';
    playerParty.push(tempPokemon);

    tempPokemon = pokemon.splice(Math.floor(Math.random() * pokemon.length), 1)[0];
    if (!tempPokemon) {
      console.error('Failed to fetch a Pokemon for the enemy');
      return;
    }
    tempPokemon.owner = 'enemy';
    enemyParty.push(tempPokemon);
  }

  playerPokemon = playerParty[0];
  console.log(playerPokemon);
  enemyPokemon = enemyParty[0];

  // Display Pokemon
  showPokemon();
  
}

async function runAway() {
	


  document.getElementById('endingtext').textContent = langTexts[langSelected].lose;



	document.getElementById('ending').src = 'commands/pokemon/assets/img/pkmnvictory.png';
	document.getElementById('ending').style.zIndex = '1';
	document.getElementById('endingtext').style.zIndex = '1';
	battlesfx.pause();
	victorysfx.play();
	
	console.log('end game')
	
}
function showPokemon(){
	console.log(enemyPokemon);
	document.getElementById('pkmnback').src = playerPokemon.imgback;
	document.getElementById('pkmn').src = enemyPokemon.imgfront;
	document.getElementById('pkmnback-name').textContent = playerPokemon.pokename;
	document.getElementById('pkmn-name').textContent = enemyPokemon.pokename;
	document.getElementById('pkmnback-maxhp').textContent = playerPokemon.maxhealth;
	document.getElementById('pkmnback-hp').textContent = playerPokemon.health;
	document.getElementById('attack1').textContent = playerPokemon.moves[0].name;
	document.getElementById('attack2').textContent = playerPokemon.moves[1].name;

	// This animates the health bar when attacked
	var percentage = playerPokemon.health / playerPokemon.maxhealth;
	document.getElementById('player-hp-bar').style.width = ((30 * percentage) + "vw");
	percentage = enemyPokemon.health / enemyPokemon.maxhealth;
	document.getElementById('enemy-hp-bar').style.width = ((30 * percentage) + "vw");
}

function switchPokemon() {
	console.log('switched pokemon');
}

function itemButton() {
	console.log('----showingitems------')
	document.getElementById('itemscancel').style.zIndex = '1';
	document.getElementById('potion').style.zIndex = '1';
	document.getElementById('b2').style.zIndex = '1';
	
}

function fightButton() {
	console.log('----showing attacks------')
	document.getElementById('attackcancel').style.zIndex = '1';
	document.getElementById('attack1').style.zIndex = '1';
	document.getElementById('attack2').style.zIndex = '1';
	document.getElementById('b2').style.zIndex = '1';
}

function pkmnButton() {

}

function cancelButton() {
	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('itemscancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('potion').style.zIndex = '-1';
	document.getElementById('b2').style.zIndex = '-1';

}

function attack1() {
	playerPokemon.attack(enemyPokemon, playerPokemon.moves[0]);
	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('b2').style.zIndex = '-1';
	if (playerPokemon.moves[0].target != 'self') {
		document.getElementById('pkmn').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmn').style.animation = '';
		}, 1000);
	}
	enemyPokemon.faint(enemyPokemon, enemyParty);
	removeListeners();
	setTimeout(function() {
		enemyAttack();
		addListeners();
	}, 1000);

	showPokemon();
}

function attack2() {
	playerPokemon.attack(enemyPokemon, playerPokemon.moves[1]);
	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('b2').style.zIndex = '-1';
	if (playerPokemon.moves[1].target != 'self') {
		document.getElementById('pkmn').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmn').style.animation = '';
		}, 1000);
	}
	console.log(enemyPokemon.health);
	enemyPokemon.faint(enemyPokemon, enemyParty);
	removeListeners();
	setTimeout(function () {
		enemyAttack();
		addListeners();
	}, 1000);
	showPokemon();
}

function enemyAttack() {
	var attackMove = Math.floor(Math.random() * enemyPokemon.moves.length);
	console.log('attacked with',enemyPokemon.moves[attackMove].name);
	enemyPokemon.attack(playerPokemon,enemyPokemon.moves[attackMove]);
	if (enemyPokemon.moves[attackMove].target != 'self') {
		document.getElementById('pkmnback').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmnback').style.animation = '';
		}, 1000);
	}
	showPokemon();
	playerPokemon.faint(playerPokemon, playerParty);
}


function addListeners() {
	document.getElementById('endingtext').addEventListener('click', quit);
	document.getElementById('run').addEventListener('click', runAway);
	document.getElementById('potion').addEventListener('click', potionGet);
	document.getElementById('items').addEventListener('click', itemButton);
	document.getElementById('fight').addEventListener('click', fightButton);
	document.getElementById('itemscancel').addEventListener('click', cancelButton);
	document.getElementById('attackcancel').addEventListener('click', cancelButton);
	document.getElementById('attack1').addEventListener('click', attack1);
	document.getElementById('attack2').addEventListener('click', attack2);
	
}

function removeListeners() {


	document.getElementById('endingtext').removeEventListener('click', quit);
	document.getElementById('run').removeEventListener('click', runAway);
	document.getElementById('potion').removeEventListener('click', potionGet);
	document.getElementById('items').removeEventListener('click', itemButton);
	document.getElementById('fight').removeEventListener('click', fightButton);
	document.getElementById('itemscancel').removeEventListener('click', cancelButton);
	document.getElementById('attackcancel').removeEventListener('click', cancelButton);
	document.getElementById('attack1').removeEventListener('click', attack1);
	document.getElementById('attack2').removeEventListener('click', attack2);
	

}


async function quit() {

	console.log('quitting game')
		pokemonGame.remove();
victorysfx.pause();
	clear()
				resolve();
	clear()

}
async function endGame() {




const enemyAllFainted = enemyParty.every(pokemon => !pokemon.alive);
const playerAllFainted = playerParty.every(pokemon => !pokemon.alive);

if (enemyAllFainted) {
  document.getElementById('endingtext').textContent = langTexts[langSelected].win;
} else if (playerAllFainted) {
  document.getElementById('endingtext').textContent = langTexts[langSelected].lose;
}


	document.getElementById('ending').src = 'commands/pokemon/assets/img/pkmnvictory.png';
	document.getElementById('ending').style.zIndex = '1';
	document.getElementById('endingtext').style.zIndex = '1';
	battlesfx.pause();
	victorysfx.play();
	removeListeners()
	console.log('end game')

}



	  // game

	});
    

}



const stylesheets = ["pokemon"];
const templates = ["pokemon"];
export default pokemon;
export { output, templates,stylesheets };