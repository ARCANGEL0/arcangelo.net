import { getScreen, clear, main,boot,login} from "../../util/screens.js";
import {parse, type } from "../../util/io.js";
import Game from './Game.mjs';
import pause from "../../util/pause.js";

// Fast config for the typer
const FAST = {
	wait: 15,
	initialWait: 100
};

const audio = new Audio('./sound/type.wav');

function pAud(text) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      audio.play();
      index++;
    } else {
      clearInterval(interval);
    }
  }, 2 ) }
function sAud() {
  audio.pause();
  audio.currentTime = 0;
}
function delay(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// The main function, shows intro screen and the game screen
async function command() {
	clear();
	
	let win = await new Promise(resolve => {
		new Game({onQuit: resolve});
	});

	if (win) {
		await outro();
	} else {
		return await locked();
	}	
	
	return Promise.resolve();
}

export async function intro() {
	let intro = getScreen("intro");
   pAud("Welcome to ROBCO Industries (TM) Termlink Interface")
	await type("Welcome to ROBCO Industries (TM) Termlink Interface", FAST, intro);
pAud(">SET TERMINAL/INQUIRE")
	await type(">SET TERMINAL/INQUIRE", FAST, intro);
pAud("RIT-V300")

	await type("RIT-V300", FAST, intro);
pAud(">SET FILE/PROTECTION=OWNEESERTR:RWED ACCOUNTEESASDDEEWADES.F >SET HALT logout/MAINT")
pAud(">SET FILE/PROTECTION=OWNEESERTR:RWED ACCOUNTEESASDDEEWADES.F >SET HALT logout/MAINT")

	await type(
		[
			">SET FILE/PROTECTION=OWNER:RWED ACCOUNTS.F",
			">SET HALT logout/MAINT"
		],
		FAST,
		intro
	);
pAud("Initializing operational system of ROBCO Industries(TM) Kernel Drive MF Boot Agent v2.3.0 RETROS BIOS RBIOS-4.02.08.00 52EE5.E7.E8 Copyright 2222 ARCANGELO.net. Uppermem: 64 KB Root (5A8) Maintenance Mode")


	await type(
		[ 
		  " ",
			"Initializing ROBCO Industries(TM) MF Boot Agent v2.3.0",
			"RETROS BIOS",
			"RBIOS-4.02.08.00 52EE5.E7.E8",
			`Copyright ${new Date().getFullYear()} ARCANGELO.net.`,
			"Uppermem: 64 KB",
			"Root (5A8)",
			"Maintenance Mode"
		],
		FAST,
		intro
	);
pAud(">RUN DEBUG/ACCOUNTS.F")
	await type(">RUN DEBUG/ACCOUNTS.F", FAST, intro);
sAud()
	intro.remove();
	
	await parse("fallout")
}
 async function locked() {
	let locked = getScreen("locked");

	await type(
		["Terminal locked", " ", "Please contact an administrator"],
		{ useContainer: false },
		locked
	);

	await pause(50000);
	locked.remove();

	return Promise.resolve();
}

// Outro shows screen with buttons to logout (calls game()) or exit
export async function outro() {
	let outro = getScreen("outro");
function generateDynamicLine(char = "━") {
    // Get the width of the screen in pixels
    const screenWidth = window.innerWidth
    let adds = screenWidth*0.027
    if(screenWidth>520) { adds = screenWidth*0.045} 
    // Approximate width of the character in pixels (adjust based on your font size)
    const charWidth = 5; // Adjust if your font is different
    const charCount = Math.floor(screenWidth / charWidth)/3 + adds ;

    // Create a line with the specified character
    return char.repeat(charCount);
}
 




	await new Promise(async resolve => {
		
    function centerText(text) {
      const viewportWidth = window.innerWidth/24; // Set a fixed width for the console output (adjust as needed)
      
      
      const textWidth = text.length; // Approximate width based on character count
  
      // Calculate the number of spaces needed for centering


      
      let paddingSpaces = Math.max(0, Math.floor((viewportWidth - textWidth) / 2) + (viewportWidth/1.4));

      if(window.innerWidth < 420) {
        paddingSpaces = Math.max(0, Math.floor((viewportWidth - textWidth)-
        textWidth*2.4));
      }
      // Return the text with spaces before it
      return ' '.repeat(paddingSpaces) + text; // Add spaces before the text
  }
pAud()
  
  await type(
      [
          centerText("ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM"),
          centerText(`COPYRIGHT ${new Date().getFullYear()} ARCANGELO`),
          centerText("-SERVER 6-"),
          generateDynamicLine("━")  // This will produce a full-width line
      ],
      FAST,
      outro
  );

sAud()


let homeReturn, projectTitle, btnproject,termlink, bytesec,flowmvc, edgarbot, btnhome, btnsobre, btngal, btncontact, btnlang, btnreturn, sitext,sobretexto,hometexto,contactinfo, bbnsite, bbnvid
function updateTexts() {
		  inicio.innerText = btnhome
		  sobre.innerText = btnsobre
		  galeria.innerText = btngal
		  contato.innerText = btncontact
		  idioma.innerText= btnlang
		  
		}
// Function to handle language change
function changeLanguage(language) {
  
  
  if (language === 'pt') {
     contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. DADOS DE USUARIO\nLENDO INFORMACOES_DE_CONTACTO\n\n"
 termlink = "Robco.TERMLINK é um script em Python que emula o sistema de autenticação de terminal da série de jogos Fallout. Além de trazer o clima de Fallout, ele inclui funcionalidades integradas e personalizáveis em sua console RobCo, como ativar serviços do sistema, ler journalctl, um editor de texto e muito mais, tornando a inicialização do bash nostálgica e funcional."
  projectTitle = '>SET ROUTE/PATH=GET:ASC PROJETOS.F\n\n'
  flowmvc = 'FlowManager é um painel financeiro desenvolvido em Laravel usando a estrutura MVC, projetado para ajudar os usuários a gerenciar receitas e despesas, gerando relatórios mensais e anuais em PDF. Ele fornece uma visão organizada das atividades financeiras, sendo uma ferramenta útil para rastreamento e relatório financeiro.'
    bytesec = 'Reaper-MD é um bot de WhatsApp inspirado em "Mr. Robot", onde os usuários mergulham em uma experiência narrativa de hacking. Faça escolhas, desafie o status quo digital e decida: "Você é um 1 ou um 0?"'
 btnhome = '[INICIO]';
 btnsobre = '[SOBRE]';
 btngal = '[GALERIA]';
 btncontact = '[CONTATO]';
 btnlang = '[LANGUAGE/LANGUE]';
 btnreturn = '[VOLTAR]';
 sitext = 'WEBSITES QUE FIZ';
 bbnsite = '[WEBSITES]';
 bbnvid = "[GALERIA]";
 btnproject = "[PROJETOS]";
 sobretexto = [
  `\n>// Fala aí! Eu sou o Henry – desenvolvedor, gamer e criador digital, apaixonado por tecnologia que desafia limites (e minha paciência, às vezes).`,
  `Escrevo códigos que *geralmente* funcionam, crio interfaces criativas, e desenvolvo apps pra deixar a web mais interessante. Meus pronomes? TCP/IP.`,
  `Tenho experiência com JavaScript, Vue, React, Python, PHP, Node, e várias outras ferramentas que uso pra tirar ideias do papel. Front-end, back-end, banco de dados – se envolve código, eu tô dentro.`,
  `Atualmente, tô mergulhando em Cibersegurança e Arquitetura de Redes. Então, se você busca alguém que construa, quebre e (ás vezes) solucione o problema, sou o cara certo (?).`
];
 hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nBem-vindo ao meu portfólio, inspirado no icônico Termlink da ROBCO Industries da série Fallout.\n\nSou  Henry, desenvolvedor backend movido por uma paixão por software, redes e tudo relacionado à TI. Aqui, você encontrará uma amostra dos meus projetos, e meus links de contacto :) .\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
homeReturn = "--- PRESSIONE PARA CONTINUAR ---" 
} else if (language === 'es') {
    // Add translations in Spanish here
    termlink = "Robco.TERMLINK es un script en Python que emula el sistema de autenticación de terminal de la serie de juegos Fallout. No solo aporta la atmósfera de Fallout, sino que también incluye funciones integradas y personalizables en su consola RobCo, como activar servicios del sistema, leer journalctl, un editor de texto, y mucho más, haciendo que la inicialización de tu bash sea tanto nostálgica como funcional."
 contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. DATOS DE USUARIO\nLEYENDO INFORMACIÓN_DE_CONTACTO\n\n"
 flowmvc = 'FlowManager es un panel financiero desarrollado en Laravel utilizando la estructura MVC, diseñado para ayudar a los usuarios a gestionar ingresos y gastos, generando informes mensuales y anuales en formato PDF. Ofrece una visión organizada de las actividades financieras, convirtiéndose en una herramienta útil para el seguimiento y reporte financiero.'
     projectTitle = '>SET ROUTE/PATH=GET:ASC PROYECTOS.F\n\n'
bytesec = 'Reaper-MD es un bot de WhatsApp inspirado en "Mr. Robot", donde los usuarios se sumergen en una experiencia narrativa de hacking. Toma decisiones, desafía el status quo digital y decide: "¿Eres un 1 o un 0?"'
 btnhome = '[INICIO]';
 btnsobre = '[ACERCA DE]';
 btngal = '[GALERÍA]';
 btncontact = '[CONTACTO]';
 btnlang = '[IDIOMA/LANGUAGE]';
 btnreturn = '[VOLVER]';
 sitext = 'SITIOS WEB QUE HE CREADO';
bbnsite = '[SITIOS WEB]';
btnproject = "[PROYECTOS]";
 bbnvid = "[GALERIA]"
 sobretexto = [
  `\n>// ¡Hola! Soy Henry – desarrollador, gamer y creador digital con una pasión por la tecnología que desafía límites (y a veces mi paciencia).`,
  `Hago código que *casi siempre* funciona, diseño interfaces limpias, y creo apps para hacer la web un poco más interesante. ¿Mis pronombres? TCP/IP.`,
  `Me manejo bien con JavaScript, Vue, React, Python, PHP, Node, y otras herramientas que uso para llevar ideas a la realidad. Frontend, backend, bases de datos – si lleva código, ahí estoy.`,
  `Ahora mismo, estoy profundizando en Ciberseguridad y Ciencia de Datos, aprendiendo a hackear *éticamente* y hacer el mundo digital más seguro. Así que, si buscas a alguien que construya, rompa y (casi siempre) arregle las cosas, soy tu persona.`
];
 hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nBienvenido a mi portafolio, inspirado en el icónico Termlink de ROBCO Industries de la serie Fallout.\n\nSoy Henry, un desarrollador backend impulsado por una gran pasión por el software, las redes y todo lo relacionado con la informática. Aquí encontrarás una muestra de mi trabajo, cada proyecto un paso en mi viaje para construir e innovar en el mundo de la tecnología.\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
 homeReturn = "--- PRESIONE PARA CONTINUAR ---"
  } else if (language === 'fr') {
    // Add translations in French here
    projectTitle = '>SET ROUTE/PATH=GET:ASC PROJETS.F\n\n'
    termlink ="Robco.TERMLINK est un script Python qui émule le système d'authentification de terminal de la série de jeux Fallout. Non seulement il apporte l'ambiance de Fallout, mais il inclut également des fonctionnalités intégrées et modifiables sur sa console RobCo, telles que l'activation de services système, la lecture de journalctl, un éditeur de texte, et bien plus encore, rendant l'initialisation de votre bash à la fois nostalgique et fonctionnelle."
bytesec = 'ByteSec-MD est un bot WhatsApp inspiré de "Mr. Robot", où les utilisateurs plongent dans une expérience narrative de hacking. Faites des choix, défiez le statu quo numérique et décidez : "Êtes-vous un 1 ou un 0 ?"'
 contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. DONNÉES UTILISATEUR\nLECTURE INFORMATIONS_DE_CONTACT\n\n";
 flowmvc ="FlowManager est un tableau de bord financier développé en Laravel avec la structure MVC, conçu pour aider les utilisateurs à gérer les revenus et les dépenses tout en générant des rapports PDF mensuels et annuels. Il fournit une vue d'ensemble organisée des activités financières, en faisant un outil utile pour le suivi et le reporting financiers."
 btnhome = '[ACCUEIL]';
 btnsobre = '[À PROPOS]';
 btngal = '[GALERIE]';
 btncontact = '[CONTACT]';
 btnlang = '[LANGUE]';
 btnreturn = '[RETOUR]';
 btnproject = "[PROJETS]";
 sitext = 'LES SITES WEB QUE J\'AI CRÉÉS';
 bbnsite = '[SITES INTERNET]';
 bbnvid = "[GALERIE]"
 sobretexto = [
  `\n>// Salut ! Moi, c’est Henry – développeur, gamer et créateur digital, passionné par la tech qui repousse les limites (et parfois ma patience).`,
  `Je code des trucs qui *marchent presque toujours*, je conçois des interfaces propres, et je crée des applis pour rendre le web un peu plus cool. Mes pronoms ? TCP/IP.`,
  `Je maîtrise bien JavaScript, Vue, React, Python, PHP, Node, et d'autres outils que j'utilise pour donner vie aux idées. Front-end, back-end, bases de données – si ça a du code, j’y suis.`,
  `En ce moment, je me plonge dans la cybersécurité et la science des données, apprenant à hacker *éthiquement* pour rendre le monde digital plus sûr. Alors, si tu cherches quelqu'un qui construit, casse et (presque toujours) répare, je suis là.`
];
 hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nBienvenido a mi portafolio, inspirado en el icónico Termlink de ROBCO Industries de la serie Fallout.\n\nSoy Henry, un desarrollador backend impulsado por una gran pasión por el software, las redes y todo lo relacionado con la informática. Aquí encontrarás una muestra de mi trabajo, cada proyecto un paso en mi viaje para construir e innovar en el mundo de la tecnología.\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
homeReturn = "--- APPUYEZ POUR CONTINUER ---"

  } else {
    // Default language (English)
    flowmvc="FlowManager is a financial dashboard developed in Laravel using the MVC structure, designed to help users manage income and expenses while generating monthly and annual PDF reports. It provides an organized overview of financial activities, making it a useful tool for financial tracking and reporting."
    projectTitle = '>SET ROUTE/PATH=GET:ASC PROJECTS.F\n\n'
bytesec = 'ByteSec-MD is a WhatsApp bot inspired by "Mr. Robot," where users dive into a narrative-driven hacking experience. Make choices, challenge the digital status quo, and decide: "Are you a 1 or a 0?"'
termlink = "Robco.TERMLINK is a Python script that emulates the terminal authentication system from the Fallout game series. Not only does it deliver Fallout vibes, but it also includes built-in and customizable features on its RobCo console, like switching on system services, reading journalctl, a text editor, and more—making your bash initialization both nostalgic and functional."
    contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. USER DATA\nREADING CONTACT_INFORMATION\n\n";
    btnhome = '[HOME]';
    btnsobre = '[ABOUT]';
    btngal = '[GALLERY]';
    btncontact = '[CONTACT]';
    btnlang = '[IDIOMA/LANGUE]';
    btnreturn = '[RETURN]';
    sitext = 'WEBSITES I\'VE DONE';
    btnproject = "[PROJECTS]";
    bbnsite = '[WEBSITES]';
 bbnvid = "[GALLERY]"
    sobretexto = [
  `\n>// Hey there! I'm Henry – a developer, gamer, and digital creator with a love for tech that pushes boundaries (and sometimes my patience).`,
  `I code things that *mostly* work, design some creative and totally UX/UI guided interfaces (totally not), and build apps that aim to make the web a little cooler. My pronouns? TCP/IP.`,
  `I got experience in JavaScript, Vue, React, Python, PHP, Node, and a handful of other tools that help me bring ideas to life. Front-end, back-end, databases – you name it, I probably mess with it.`,
  `Right now, I’m diving into Offensive Cybersecurity & Software Engineering, learning to hack (*ethically*, of course) and build some useful tools . So if you're looking for someone who can build, break, and (usually) fix things, I’m your guy.`
];
    //Update other text as needed
    hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nWelcome to my portfolio, inspired by the iconic ROBCO Industries Termlink from the Fallout series.\n\nI’m Henry, a backend developer driven by a deep passion for software, networks, and all things IT. Here, you’ll find a showcase of my work and my contacts.\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
 homeReturn ="  --- PRESS ANY KEY TO CONTINUE ---"
  }


  // Store the selected language in localStorage
   localStorage.setItem('selectedLanguage', language);
}


// Handle initial language setup (use the stored language or default to English)
const storedLanguage = localStorage.getItem('selectedLanguage');
if (storedLanguage) {
  changeLanguage(storedLanguage);
} else {
  changeLanguage('en');
}




let contato = document.createElement("a");
		contato.innerText = btncontact;
		contato.classList.add("btn-contact")
		contato.href = "#";
		contato.onclick = () => {
			// remove all a tags and put a text with p and an a tag in the end to take back to preciois page.. Remove text and restore a tag buttons 
			   // Create a <p> element with a message
    const message = document.createElement('p');
    message.innerText = contactinfo
const contactTable = document.createElement('table');
contactTable.style.borderCollapse = 'collapse';

// Contact entries
const contacts = [
    { type: 'GitHub', name:'ARCANGEL0', link: 'https://github.com/ARCANGEL0/' },
    { type: 'WhatsApp/Phone ', name: '+351 927285125', link: 'https://api.whatsapp.com/send?phone=351927285125' },
    { type: 'Website',name: 'Arcangelo.net', link: 'https://arcangelo.net' },
    { type: 'Email',name:'henry.arcangello', link: 'mailto:rick_arcangelo@hotmail.com,henry.arcangello@proton.me,henry.arcangello@gmail.com' },
    { type: 'LinkedIn', name:'Henrique Arcangelo', link:
    'https://www.linkedin.com/in/henryarcangelo/' },
    { type: 'Hack The Box', name:'0x0C1053F', link: 'https://app.hackthebox.com/profile/126962' },
];

contacts.forEach(contact => {
    const row = contactTable.insertRow();
    const typeCell = row.insertCell();
    const linkCell = row.insertCell();

    typeCell.innerText = contact.type;
    typeCell.style.padding = '5px';
    typeCell.style.border = '1px solid #008000';

    linkCell.innerHTML = `<a href="${contact.link}" target="_blank">${contact.name}</a>`;
    linkCell.style.padding = '5px';
    linkCell.style.border = '1px solid #008000';
});


// Append the contact form to the message
message.appendChild(contactTable);

    // Create a "Go Back" <a> tag
    const goBackLink = document.createElement("a");
    goBackLink.innerText = btnreturn;
    goBackLink.classList.add("btnReturn")
    goBackLink.href = "#";
    goBackLink.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        message.remove();
        goBackLink.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()

type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
    };
sAud()

    // Remove the "Logout" and "Contact" buttons
    inicio.remove();
    sobre.remove();
    projetos.remove();
    galeria.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove();
pAud()

    // Append the message and "Go Back" link to the 'outro' element
type([message, goBackLink], { processChars: false , wait: 10 }, outro);
 sAud()
       
			
			
		};
		
		
let projetos = document.createElement("a");
		projetos.innerText = btnproject;
		projetos.classList.add("btn-project")
		projetos.href = "#";
		projetos.onclick = () => {	
      const messageP = document.createElement('p');
messageP.innerText = projectTitle;

const scrollableContainer = document.createElement('div');
scrollableContainer.style.overflowY = 'auto';
scrollableContainer.style.maxHeight = '60vh';
scrollableContainer.style.border = '0px solid #00ff00'; // Bright green border for the terminal look
scrollableContainer.style.padding = '30px';
scrollableContainer.style.color = '#00ff00'; // Bright green text


const projectsTable = document.createElement('table');
projectsTable.style.borderCollapse = 'collapse';
projectsTable.style.maxWidth = '70vw';
projectsTable.style.wordWrap = 'break-word';

const projs = [
    { type: bytesec, name:'ByteSec-MD', link: 'https://github.com/ARCANGEL0/ByteSec-MD' },
    { type: flowmvc , name: 'flowManager', link: 'https://github.com/ARCANGEL0/flowManager' },
    { type: termlink, name: 'Robco.TERMLINK', link: 'https://github.com/robco-termlink' },

];

projs.forEach(projk => {
    const rowP = projectsTable.insertRow();
    const typeCellP = rowP.insertCell();
    const linkCellP = rowP.insertCell();

    linkCellP.innerText = projk.type;
    typeCellP.style.padding = '5px';
    typeCellP.style.border = '1px solid #008000';
    typeCellP.style.whiteSpace = 'normal';
    typeCellP.style.minWidth = '10vw';

    typeCellP.innerHTML = `<a href="${projk.link}" target="_blank">${projk.name}</a>`;
    linkCellP.style.padding = '5px';
    linkCellP.style.border = '1px solid #008000';
    linkCellP.style.whiteSpace = 'normal';
});

scrollableContainer.appendChild(projectsTable);
messageP.appendChild(scrollableContainer);

const goBackLinkP = document.createElement("a");
goBackLinkP.innerText = btnreturn;
goBackLinkP.classList.add("btnReturn");
goBackLinkP.href = "#";
goBackLinkP.onclick = () => {
    messageP.remove();
    goBackLinkP.remove();
pAud()

    type([inicio, sobre, galeria, projetos, contato, idioma, terminal, logout], { processChars: false, wait: 10 }, outro);
sAud()

};

inicio.remove();
sobre.remove();
galeria.remove();
logout.remove();
projetos.remove();
contato.remove();
idioma.remove();
terminal.remove();
pAud()

type([goBackLinkP, messageP], { processChars: false, wait: 10 }, outro);
sAud()

    	};
		
		
		let galeria = document.createElement("a");



		galeria.innerText = btngal;
galeria.classList.add("btn-gal")
		galeria.href = "#";
		galeria.onclick = () => {
			
		inicio.remove();

    sobre.remove();

    galeria.remove();
    logout.remove();
    contato.remove();
    projetos.remove();
    idioma.remove();
    terminal.remove() 
    logout.remove()
    
  
  
    var divgallery = document.getElementsByClassName("typer")[4];
    

    
    
// Access the third "typer" element (remember, the index is zero-based)

    divgallery.classList.add('divgal')
    const backGal = document.createElement("a");
    backGal.innerText = btnreturn;
    backGal.style.marginTop = "10px"
    backGal.classList.add("btnReturn")
    backGal.href = "#";
    backGal.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        divgallery.remove();
        backGal.remove();
        divsites.remove()
        btnVid.remove()
        dvid.remove()
        divbuttons.remove()
        btnSites.remove()
        btnVid.remove()
   // outro.appendChild(logout);
        // outro.appendChild(contato);
        pAud()
        
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout], { processChars: false , wait: 10 }, outro);
sAud()

    };


const btnSites = document.createElement("a");
    btnSites.innerText = bbnsite;
    btnSites.style.marginTop = "10px"
    btnSites.classList.add("btnReturn")
    btnSites.href = "#";
    btnSites.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
       divbuttons.remove()
        dvid.remove();
        btnSites.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([btnVid,divsites], { processChars: false , wait: 10 }, outro);
sAud()
    };
const btnVid = document.createElement("a");
    btnVid.innerText = bbnvid;
    btnVid.style.marginTop = "10px"
    btnVid.classList.add("btnReturn")
    btnVid.href = "#";
    btnVid.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
  divsites.remove();
  btnVid.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([btnSites,divbuttons, dvid ], { processChars: false , wait: 10 }, outro);
 sAud()
    };


		  
		// Array de URLs de imagens
const VideosUrl = [
    'images/gallery/alpha2.mp4',
    'images/gallery/Videos/lna.mp4',
    'images/gallery/Videos/lnadigital.mp4',
      'images/gallery/Videos/escoteiros.mp4',
    'images/gallery/Videos/arcUI.mp4',
    'images/gallery/Videos/hadesign.mp4',
        'images/gallery/Videos/GreenWaste.mp4',
    'images/gallery/Videos/arcUI.mp4',

    'images/gallery/Videos/pong.mp4',
];

divgallery.appendChild(backGal);
divgallery.appendChild(btnSites)
divgallery.appendChild(btnVid)

btnVid.remove()

const divbuttons = document.createElement("div");
divbuttons.classList.add("galbtns")

const dvid = document.createElement("div");
dvid.classList.add("dvid")

const prevBtn = document.createElement("a");
prevBtn.textContent = "⬿";
prevBtn.classList.add('carousel-button')
divbuttons.appendChild(prevBtn);

const nextBtn = document.createElement("a");
nextBtn.textContent = "⤳";
nextBtn.classList.add('carousel-button')
divbuttons.appendChild(nextBtn);

let currentIndex = 0;

prevBtn.onclick = () => {
	currentIndex--
     if (currentIndex<=VideosUrl.length && currentIndex>0) {
    

vid.src=VideosUrl[currentIndex]
     }
     if (currentIndex<0){
     	 currentIndex=0
vid.src=VideosUrl[currentIndex]    
     
}

}
nextBtn.onclick = () => {
	currentIndex++
     if (currentIndex<VideosUrl.length && currentIndex>=0) {
     
vid.src=VideosUrl[currentIndex]

     }
     if (currentIndex>VideosUrl.length){
     	 currentIndex=0
vid.src=VideosUrl[currentIndex]    
     
}
}
divbuttons.style.marginTop='20px'
divbuttons.style.marginBottom='20px'
const vid = document.createElement("video");

vid.src=VideosUrl[currentIndex]
vid.autoplay = true
vid.style.width = '65%'
vid.style.height='20rem'

dvid.appendChild(vid)


divgallery.appendChild(divbuttons)
divgallery.appendChild(dvid)

let divsites = document.createElement("div");
divsites.classList.add("divsites");
let divsimages = document.createElement("div")
divsimages.style.display = "flex";
divsimages.style.flexWrap = "wrap"; // Allow elements to wrap to the next line

let escoteiro = document.createElement("img");
escoteiro.src = "images/Escoteiros.png";
escoteiro.onclick = () => {
  window.open("https://77gemar-jairmattenauer.com", "_blank");
};

let arc = document.createElement("img");
arc.src = "images/Arc.png";
arc.onclick = () => {
  window.open("https://arcangel0.github.io/ARC_UI", "_blank");
};

let info = document.createElement("img");
info.src = "images/Info.png";
info.onclick = () => {
  window.open("https://arcangeloinfo.com.br", "_blank");
};

let lna = document.createElement("img");
lna.src = "images/Lna.png";
lna.onclick = () => {
  window.open("https://lnaassessoriadigital.com", "_blank");
};
let sitestxt = document.createElement("a");
sitestxt.innerText = sitext
sitestxt.classList.add("sitesheader")
sitestxt.style.marginTop="6%"
divsites.appendChild(sitestxt)
divsimages.appendChild(escoteiro);
divsimages.appendChild(arc);
divsimages.appendChild(info);
divsimages.appendChild(lna);

divsimages.style.display = "flex";
divsites.appendChild(divsimages)
divgallery.appendChild(divsites);
divsites.remove()
		}; // function end fim galeriq
		
		let sobre = document.createElement("a");



		sobre.innerText = btnsobre;
		sobre.classList.add("btn-sobre")

		sobre.href = "#";
		sobre.onclick = async () =>  {		
		
		
		
		
		inicio.remove();

    sobre.remove();

    galeria.remove();
    logout.remove();
    projetos.remove();
    contato.remove();
    idioma.remove();
    terminal.remove() 
    logout.remove()
    
    var divsobre = document.getElementsByClassName("typer")[4];
    

    
    
// Access the third "typer" element (remember, the index is zero-based)

    divsobre.classList.add('divsob')
    const backSobre = document.createElement("a");
    backSobre.innerText = btnreturn;
    backSobre.classList.add("btnReturn")
    backSobre.style.marginTop = "10px"
    backSobre.href = "#";
    backSobre.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        divsobre.remove();
        backSobre.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()
    };
    
 
      const gifImage2 = document.createElement("img");
      
		gifImage2.src = "images/me.gif";

gifImage2.style.height = "36vh"

gifImage2.style.width = "48vw"
		  
gifImage2.style.display = "block";
gifImage2.style.margin = "0 5vw";
		   
		  


divsobre.appendChild(backSobre)

pAud()
	await type(
			sobretexto,
			FAST,
			divsobre 
		);
divsobre.appendChild(gifImage2)
sAud()	

}
		let terminal = document.createElement("a");
		terminal.innerText = "[TERMINAL]";
     terminal.classList.add("btn-terminal")
		terminal.href = "#";
		terminal.onclick = () => {
		  outro.remove();
		  login()
		};
		
			let inicio = document.createElement("a");
    
		inicio.innerText = btnhome;
    inicio.classList.add('btn-home')
		inicio.href = "#";
		inicio.onclick = () =>  {		
		  
      

		  const gifImage = document.createElement("img");
		  // Create a new <p> elemen
		  const divinicio = document.createElement("div")
		  divinicio.classList.add("divinicio")
		  const divtextinicio = document.createElement("div")
		  divtextinicio.classList.add("divtextinicio") 
		  const divgif = document.createElement("div")
		  divgif.classList.add("divgif")
const iniciotext = document.createElement("p");

// Set the text for the <p> element
iniciotext.innerText = hometexto

iniciotext.classList.add("inicioheader")

// Assuming you have a container div with an id of "portfolio" to append the <p> element to


gifImage.src = "images/Code.gif";

gifImage.style.marginTop = "15px"
gifImage.style.marginBottom= "15px"
gifImage.style.width = "92vw"
gifImage.style.height= "50vh"
// Append the image to divgif



iniciotext.style.top = "0";
iniciotext.style.left = "0";
iniciotext.style.width = "87vw";
iniciotext.style.height = "100%";
iniciotext.style.margin = "0";
divinicio.style.marginLeft = "20px"
divinicio.appendChild(divtextinicio);
divinicio.appendChild(divgif);
divtextinicio.appendChild(iniciotext);



		  const goBackLinkIn = document.createElement("a");
    goBackLinkIn.innerText = homeReturn;
    goBackLinkIn.classList.add('btnReturn')
    goBackLinkIn.style.marginTop = "10px"
    goBackLinkIn.href = "#";
    goBackLinkIn.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        divinicio.remove();
        goBackLinkIn.remove();
        // outro.appendChild(logout);
pAud()
        // outro.appendChild(contato);
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()
    };

  
    // Remove the "Logout" and "Contact" buttons
    inicio.remove();
    sobre.remove();
    galeria.remove();
    projetos.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove();

    // Append the message and "Go Back" link to the 'outro' element
pAud()
type([divinicio, goBackLinkIn], { processChars: false , wait: 10 }, outro);
 sAud()   
		
		};
		
		
		let idioma = document.createElement("a");
    idioma.classList.add("btn-lang")


		idioma.innerText = btnlang;

		idioma.href = "#";
		idioma.onclick = () => {

inicio.remove();
    sobre.remove();
    galeria.remove();
    projetos.remove();
    logout.remove();
    contato.remove();
    idioma.remove();
    terminal.remove();
			
const backLang = document.createElement("a");
    backLang.innerText = btnreturn
    backLang.classList.add("btnReturn")
    backLang.href = "#";
    backLang.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
        port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()
    };

    // Remove the "Logout" and "Contact" buttons
    


let port = document.createElement("a");
		port.innerText = "[PORTUGUÊS]";
		port.href = "#";
		port.onclick = () => { 
		  
		  changeLanguage('pt')
		  
		  updateTexts()
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()		  
		}
		
let eng = document.createElement("a");
		eng.innerText = "[ENGLISH]";
		eng.href = "#";
		eng.onclick = () => { 
		  changeLanguage('en')
		  
		  updateTexts() 
		  
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()
		}
		
let spa = document.createElement("a");
		spa.innerText = "[ESPANÕL]";
		spa.href = "#";
		spa.onclick = () => { 
		  changeLanguage('es')
		  updateTexts()
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()
		}
		
let fre = document.createElement("a");
		fre.innerText = "[FRANÇAIS]";
		fre.href = "#";
		fre.onclick = () => { 
		  changeLanguage('fr')
		  updateTexts()
		  port.remove();
        spa.remove();
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud()
type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout ], { processChars: false , wait: 10 }, outro);
sAud()
		}
    // Append the message and "Go Back" link to the 'outro' element
pAud()
type([backLang,port, eng, spa, fre], { processChars: false , wait: 10 }, outro);
sAud()		  
		};
		let logout = document.createElement("a");
		logout.innerText = "[LOGOUT]";
		logout.href = "#";
		logout.onclick = () => {
      outro.remove();
			new Game({onQuit: resolve});
		};

	;
pAud()
		 type([inicio, sobre, galeria, projetos, contato,idioma, terminal, logout], { processChars: false , wait: 5 }, outro);
sAud()
		logout.focus();
	});

	outro.remove();
}

const stylesheets = ["fallout"];
const templates = ["fallout"];

export { stylesheets, templates };
export default command;
