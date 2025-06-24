// friend.mjs

import { getScreen, showTemplateScreen, addTemplate, clear } from "../../util/screens.js";
import { type, waitForKey,input, cleanInput,isPrintable,moveCaretToEnd  } from "../../util/io.js";
import alert from "../../util/alert.js";

import pause from "../../util/pause.js";
import { typeSound } from "../../sound/index.js"
import say from "../../util/speak.js";

const output = [
    ">>> ERROR: DATA CORRUPTION DETECTED [0x80070057]",
    ">>> REBOOTING... [0xC000021A]",
    ">>> SYSTEM MALFUNCTION: REPAIR REQUIRED [0x0000001E]",
    ">>> LOG: TRACE IN PROGRESS [0xC0000409]",

];
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
   
const texts = {
    es: {     
    winText: `
[ NOTIFICACIÓN DEL SISTEMA ]
----------------------------
> ANULACIÓN DE NETWATCH EXITOSA
> BRECHA COMPLETADA
> ACCESO CONCEDIDO
> RASTREO NEUTRALIZADO
----------------------------
ESTADO: VÍNCULO ACTIVO
    `,
    failure:`[:: ERROR FATAL: NETWATCH DETECTADO ::]
CÓDIGO: 0x00000CE7-3AT
>> BRECHA CRÍTICA BLOQUEADA <<
[0xA77F3] ACCESO DENEGADO.
[0x4CC355] REGISTRO DE ACTIVIDAD CREADO.  
[0xB4D10] SISTEMA BLOQUEADO. TODOS LOS PRIVILEGIOS REVOCADOS.

PRESIONA CUALQUIER TECLA PARA SALIR...`, title1: "Acceso a la Red", title2: "Recopilar Datos", title3:
    "Simulación de Salida", desc1: "Infiltra el sistema para obtener acceso a la red.", desc2: "Recopila datos críticos de los registros del sistema.",
    desc3: "Ejecuta la simulación de salida para salir del sistema." },
    fr: {     winText: `
[ NOTIFICATION DU SYSTÈME ]
---------------------------
> RÉUSSITE DE L'OVERRIDE NETWATCH
> INTRUSION RÉUSSIE
> ACCÈS AUTORISÉ
> TRACE NEUTRALISÉ
---------------------------
STATUT: LIAISON ACTIVE
    `,
    failure:`[:: ERREUR FATALE : NETWATCH DÉTECTÉ ::] 
CODE : 0x00000CD2-98C  
>> VIOLATION CRITIQUE BLOQUÉE << 
[0xA77F3] ACCÈS REFUSÉ.  
[0x4CC355] JOURNAL D’ACTIVITÉ ENREGISTRÉ. 
[0xB4D10] SYSTÈME VERROUILLÉ. TOUS LES PRIVILÈGES RÉVOQUÉS.

APPUYEZ SUR UNE TOUCHE POUR QUITTER...`, title1: "Accès au Réseau", title2: "Collecter des Données", title3: "Simulation de Sortie", desc1: "Infiltrez le système pour obtenir un accès au réseau.", desc2: "Collectez des données critiques à partir des journaux du système.", desc3: "Exécutez la simulation de sortie pour quitter le système." },
    pt: {
      winText: `
[ NOTIFICAÇÃO DO SISTEMA ]
--------------------------
> OVERRIDE NETWATCH BEM-SUCEDIDO
> INVASÃO CONCLUÍDA
> ACESSO PERMITIDO
> RASTREAMENTO NEUTRALIZADO
--------------------------
STATUS: UPLINK ATIVO
    `,
    failure:`[:: ERRO FATAL: NETWATCH DETECTADO ::]
CÓDIGO: 0x00000C36-F5T 
>> BRECHA CRÍTICA BLOQUEADA <<  
[0xA77F3] ACESSO NEGADO.
[0x4CC355] LOG DE ATIVIDADE REGISTRADO.
[0xB4D10] SISTEMA BLOQUEADO. TODOS OS PRIVILÉGIOS REVOGADOS. 

PRESSIONE QUALQUER TECLA PARA SAIR...`, title1: "Acesso à Rede", title2: "Coletar Dados", title3: "Simulação de Saída", desc1: "Infiltre o sistema para obter acesso à rede.", desc2: "Coleta dados críticos dos registros do sistema.", desc3: "Execute a simulação de saída para sair do sistema." },
    en: {     winText: `
[ SYSTEM NOTIFICATION ]
-----------------------
> NETWATCH OVERRIDE SUCCESS
> BREACH SUCCESSFUL
> ACCESS GRANTED
> TRACE NEUTRALIZED
-----------------------
STATUS: UPLINK ACTIVE
    `, failure:`[:: FATAL ERROR: NETWATCH DETECTED ::] 
CODE: 0x00000CE7-3AT
>> CRITICAL BREACH BLOCKED << 
[0xA77F3] ACCESS DENIED.  
[0x4CC355] ACTIVITY LOG RECORDED. 
[0xB4D10] SYSTEM LOCKED. ALL PRIVILEGES REVOKED.

PRESS ANY KEY TO EXIT...`, title1: "Network Access", title2: "Data Retrieval", title3: "Exit Simulation", desc1: "Infiltrate the system to gain access to the network.", desc2: "Retrieve critical data from the system logs.", desc3: "Execute exit simulation to safely disengage from the system." }
  };


const { winText, title1, title2, title3, desc1, desc2, desc3 , failure} = texts[selectedLanguage];

// Game states
let state = {
    selectedRow: 0,
    selectedColumn: null,
    bufferSlots: [],
    gameStarted: false,
    gameOver: false,
    timer: 75.50 * 1000,
}

let timerState = {
    startTime: new Date().getTime(),
    lastTime: new Date().getTime(),
}
let gameScreen
const sequences = [
    "55 BD",
    "BD BD",
    "BD E9"
];

async function breach() {
    
    clear();
	say("BREACH DETECTED", 0.5, 0.8);
	return new Promise(async resolve => {
  let output 
    async function reboot() {

       document.querySelector('.center').classList.add('glitch')
  
        console.log('Wrong decision. . . . . . . ');
        await pause(2);
        
	let terminal = document.querySelector(".breach");
	let access = document.createElement("div");
	access.setAttribute("class", "hackFail");
access.innerHTML = `<pre>${failure}</pre>`;;
	terminal.appendChild(access);

        
        await pause(2);
        
        await waitForKey();
        access.remove()
        // Start the game again 
        gameScreen.remove()
   
    state.selectedRow = 0;
    state.selectedColumn = null;
    state.bufferSlots = [];
    state.gameStarted = false;
    state.gameOver = false;
    state.timer = 75.50 * 1000;

    timerState.startTime = new Date().getTime();
    timerState.lastTime = new Date().getTime();

    console.log('State and TimerState reset to defaults.');

        await start();
    }
    async function exitSimulation() {
    

       document.querySelector('.center').classList.add('win')
  
        console.log('Exiting simulation ');
        await pause(2);
        
                                           	let terminalWin = document.querySelector(".breach");
                                           	let accessWin = document.createElement("div");
 accessWin.setAttribute("class", "hackFail");
accessWin.innerHTML = `<pre>${winText}</pre>`;
terminalWin.appendChild(accessWin);

        
        await pause(2);
        
        await waitForKey();
        accessWin.remove()
        // Start the game again 
        gameScreen.remove()

        clear()
        resolve()
    
    

    }
       
    
function initGame() {
    highlightItems();
    document.querySelectorAll('.item').forEach(elem => {elem.addEventListener('click', selectItem)})
}

function highlightItems() {
    const rowOrColumn = state.selectedRow !== null ? 'row' : 'column';
    const rowOrColumnNumber = state.selectedRow !== null ? state.selectedRow : state.selectedColumn;
    const selectedRow = document.querySelectorAll(`.${rowOrColumn}-${rowOrColumnNumber}`);
    selectedRow.forEach(elem => {
        if (elem.className.includes('inactive')) {
            return;
        }
        elem.classList.add('active');
    });
}

function resetHighlight() {
    const rowOrColumn = state.selectedRow !== null ? 'row' : 'column';
    const rowOrColumnNumber = state.selectedRow !== null ? state.selectedRow : state.selectedColumn;
    const selectedRow = document.querySelectorAll(`.${rowOrColumn}-${rowOrColumnNumber}`);
    selectedRow.forEach(elem => {
        elem.classList.remove('active');
    });
}

function checkAllSequencesDone() {
    // Check if all sequences are marked as done
    return sequences.every(sequence => sequence === "XXXX");
}

function selectItem(e) {
    if (state.gameOver) {
        return;
    }
    if (!e.target.className.includes('active')) {
        return;
    }
    if (!state.gameStarted) {
        startGame();
    }
    if (state.bufferSlots.length < 5) {
        state.bufferSlots.push(e.target.innerText);
        updateBufferSlots();
    }
    if (state.selectedColumn === null) {
        resetHighlight();
        state.selectedRow = null;
        const columnNumber = Array.from(e.target.classList).find(item => item.includes('column')).split('-')[1];
        state.selectedColumn = columnNumber;
        highlightItems();
    } else {
        resetHighlight();
        state.selectedColumn = null;
        const rowNumber = Array.from(e.target.classList).find(item => item.includes('row')).split('-')[1];
        state.selectedRow = rowNumber;
        highlightItems();
    }
    e.target.classList.add('inactive');
    checkSequences();
    if (state.bufferSlots.length === 5) {
        state.gameStarted = false;
        state.gameOver = true;
        resetHighlight();

        if (checkAllSequencesDone()) {
            exitSimulation()
        } else {
            reboot();
        }

        return;
    }
}

function updateBufferSlots() {
    state.bufferSlots.forEach((buffer, index) => {
        document.getElementById('buffer-box-' + index).innerText = buffer;
    })
}

function checkSequences() {
    const joinedBuffers = state.bufferSlots.join(' ');
    const index = sequences.findIndex(sequence => joinedBuffers.includes(sequence))
    if (index > -1) {
        sequences[index] = "XXXX";
        document.getElementById('sequence-' + index).classList.add('done');
    };
}

function startGame() {
    state.gameStarted = true;
    timerState = {
        startTime: new Date().getTime(),
        lastTime: new Date().getTime(),
    }
    requestAnimationFrame(timer);
}

function timer() {
    if (state.gameStarted) {
        const now = new Date().getTime();
        state.timer -= now - timerState.lastTime;
        const displayTimer = (state.timer / 1000).toFixed(2);
        if (state.timer <= 0) {
            state.timer = 0;            
            resetHighlight();
            state.gameOver = true;
            state.gameStarted = false;
            reboot()
        }
        if (state.timer > 0) {
            requestAnimationFrame(timer);
        }
        document.getElementById('breach-timer-value').innerHTML = displayTimer;
        timerState.lastTime = now;
    }
}

function initMatrix() {
  

    ["sequence-0", "sequence-1", "sequence-2"].forEach((id, index) => {
      const seq = document.getElementById(id);
      seq.querySelector(".title").textContent = eval(`title${index + 1}`);
      seq.querySelector(".description").textContent = eval(`desc${index + 1}`);
    });
    const matrixElement = document.getElementById('matrix');

    const values = ['E9', '7A', 'BD', '55', '1C'];

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        row.classList.add("row")
        for (let k = 0; k < 6; k++) {
            const item = document.createElement('td');
            item.innerText = values[Math.floor(Math.random() * values.length)];
            item.classList.add('item');
            item.classList.add('row-' + i.toString());
            item.classList.add('column-' + k.toString());
            row.appendChild(item);
        }
        matrixElement.appendChild(row);
    }
}

// Closure for game start
async function start() {
    console.log('breaching')
    gameScreen = getScreen("breach");
    await addTemplate('hack', gameScreen);
            output = document.createElement("div");
            output.classList.add("output");
         
            gameScreen.appendChild(output);

            
    initMatrix();
    initGame();
}


       await start()

        
    
       
    })

}



const templates = ["breach"];
const stylesheets = ["breach"];


export { output, templates , stylesheets};
export default breach;