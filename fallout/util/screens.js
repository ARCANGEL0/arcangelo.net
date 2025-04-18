import { parse, type, prompt, input } from "./io.js";
import pause from "./pause.js";
import alert from "./alert.js";
import say from "./speak.js";
import { intro, outro} from '../commands/fallout/index.mjs'
import friend from '../commands/friend/index.mjs'
import { on, off,power } from "./power.js";


const FAST = {
	wait: 15,
	initialWait: 100
};


function addStylesheet(href) {
	let head = document.getElementsByTagName("HEAD")[0];

	// Create new link Element
	let link = document.createElement("link");

	// set the attributes for link element
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = href;

	// Append link element to HTML head
	head.appendChild(link);
}


/** Boot screen */
export async function boot() {

// Check for the "trigger" URL parameter
const urlParams = new URLSearchParams(window.location.search);
const triggerParam = urlParams.get("run");

if (triggerParam=='terminal') {
  // start terminal
await power()
  console.log('TERMINAL')
  login();
  
}
else if(triggerParam=='debug') {
  say("DEBUG MODE ACTIVATED");
  alert('debug mode')
 
  return !0
}
else if(triggerParam=='exit') {
	await power()
	console.log('Inspired by Mr.Robot Season 4 FRIEND Game --Arcangelo')
	await parse('friend');
   
	return !0
  }
 else {
	try {

		if(triggerParam !== null ) { 
        await parse(triggerParam);
	} else { throw 'error'}
      } catch (e) {
        if (e.message) await type(e.message);
		await power()	
		intro();
		
	}

    }
}

/** Login screen */
export async function login() {
const storedLanguage = localStorage.getItem('selectedLanguage');



if (storedLanguage === 'pt') {
  await type('>/ ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL');
  await type('// DIGITE AJUDA PARA VER COMANDOS OU VOLTAR PARA RETORNAR');
} else if (storedLanguage === 'en') {
  await type('>/ ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL');
  await type('// TYPE HELP TO SEE COMMANDS OR RETURN TO GO BACK');
} else if (storedLanguage === 'es') {
  await type('>/ ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL');

  await type('// ESCRIBE AYUDA PARA VER LOS COMANDOS O VOLVER PARA REGRESAR');
} else if (storedLanguage === 'fr') {
  await type('>/ ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL');
  await type('// TAPEZ AIDE POUR VOIR LES COMMANDES OU RETOUR POUR REVENIR');
}
else {
  await type('>/ ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL');
  await type('// TYPE HELP TO SEE COMMANDS OR RETURN TO GO BACK');
}
main()
}


export async function main() {
  
  let command = await input();
  try {
    
    
    // commands
// commands
if (command == "help") {
  type("> ROBCO INDUSTRIES 2075-2077\nMAKE ANY QUESTION OR ASK SOMETHING\nTYPE 'CLS' TO CLEAN SCREEN\nTYPE 'RETURN' TO GO TO LOGIN\n\nAVAILABLE COMMANDS:\n\n- clear         - cowsay\n- debug         - dino\n- fallout       - fire\n- friend        - hack\n- home          - logout\n- matrix        -\n- pokemon       - quit\n- reboot        - rick\n- rogue         - screensaver\n- systemshock   - text-editor");
} else if (command == "ayuda") {
  type("> ROBCO INDUSTRIES 2075-2077\nHAGA CUALQUIER PREGUNTA O PIDA ALGO\nESCRIBA 'CLS' PARA LIMPIAR LA PANTALLA\nESCRIBA 'VOLVER' PARA VOLVER AL INICIO\n\nCOMANDOS DISPONIBLES:\n\n- clear         - cowsay\n- debug         - dino\n- fallout       - fire\n- friend        - hack\n- home          - logout\n- matrix        \n- pokemon       - quit\n- reboot        - rick\n- rogue         - screensaver\n- systemshock   - text-editor");
} else if (command == "aide") {
  type("> ROBCO INDUSTRIES 2075-2077\nPOSEZ TOUTE QUESTION OU DEMANDEZ QUELQUE CHOSE\nTAPEZ 'CLS' POUR EFFACER L'ÉCRAN\nTAPEZ 'RETOUR' POUR REVENIR À LA CONNEXION\n\nCOMMANDES DISPONIBLES:\n\n- clear         - cowsay\n- debug         - dino\n- fallout       - fire\n- friend        - hack\n- home          - logout\n- matrix        \n- pokemon       - quit\n- reboot        - rick\n- rogue         - screensaver\n- systemshock   - text-editor");
} else if (command == "ajuda") {
  type("> ROBCO INDUSTRIES 2075-2077\nFAÇA QUALQUER PERGUNTA OU PEÇA ALGO\nDIGITE 'CLS' PARA LIMPAR A TELA\nDIGITE 'VOLTAR' PARA VOLTAR AO LOGIN\n\nCOMANDOS DISPONÍVEIS:\n\n- clear         - cowsay\n- debug         - dino\n- fallout       - fire\n- friend        - hack\n- home          - logout\n- matrix        \n- pokemon       - quit\n- reboot        - rick\n- rogue         - screensaver\n- systemshock   - text-editor");
}


    else if (command == 'cls'){
      clear()
    }
   else if (command === "voltar" || command === "retour" || command === "return" || command === "volver") {
     
      clear()
      
      
      alert('LOADING. . .')
      addStylesheet(`commands/fallout/fallout.css`);
      loadTemplates(`commands/fallout/fallout.html`);
      outro();
var element = document.getElementById("input");
if (element) {
    element.remove();
}
return; 
    } 
    
    
    
    
    else {
      // gpt em co.andos
      try {

        await parse(command);
      
      } catch (e) {
        if (e.message) await type(e.message);
      }


    }
  } catch (e) {
    if (e.message) {
      console.log(e.message) 
      await type('ERROR:')
      await type(e.message);
  }
  }
  main();
}

export function addClasses(el, ...cls) {
	let list = [...cls].filter(Boolean);
	el.classList.add(...list);
}

export function getScreen(...cls) {
	let div = document.createElement("div");
	addClasses(div, "fullscreen", ...cls);
	document.querySelector("#crt").appendChild(div);
	return div;
}

export function toggleFullscreen(isFullscreen) {
	document.body.classList.toggle("fullscreen", isFullscreen);
}

/** Attempts to load template HTML from the given path and includes them in the <head>. */
export async function loadTemplates(path) {
	let txt = await fetch(path).then((res) => res.text());
	let html = new DOMParser().parseFromString(txt, "text/html");
	let templates = html.querySelectorAll("template");

	templates.forEach((template) => {
		document.head.appendChild(template);
	});
}

/** Clones the template and adds it to the container. */
export async function addTemplate(id, container, options = {}) {
	let template = document.querySelector(`template#${id}`);
	if (!template) {
		throw Error("Template not found");
	}
	// Clone is the document fragment of the template
	let clone = document.importNode(template.content, true);

	if (template.dataset.type) {
		await type(clone.textContent, options, container);
	} else {
		container.appendChild(clone);
	}

	// We cannot return clone here
	// https://stackoverflow.com/questions/27945721/how-to-clone-and-modify-from-html5-template-tag
	return container.childNodes;
}

/** Creates a new screen and loads the given template into it. */
export async function showTemplateScreen(id) {
	let screen = getScreen(id);
	await addTemplate(id, screen);
	return screen;
}

/**
 * Creates an element and adds it to the given container (or terminal screen if undefined).
 * @param {String} type The type of element to create.
 * @param {Element} container The container to add the created element to.
 * @param {String} cls The class to apply to the created element.
 * @param {Object} attrs Extra attributes to set on the element.
 */
export function el(
	type,
	container = document.querySelector(".terminal"),
	cls = "",
	attrs
) {
	let el = document.createElement(type);
	addClasses(el, cls);

	container.appendChild(el);

	if (attrs) {
		Object.entries(attrs).forEach(([key, value]) => {
			el.setAttribute(key, value);
		});
	}
	return el;
}

/**
 * Creates a <div> and adds it to the screen.
 * @param {Element} container The container to add the created element to.
 * @param {String} cls The class to apply to the created element.
 */
export function div(...args) {
	return el("div", ...args);
}

export function clear(screen = document.querySelector(".terminal")) {
	screen.innerHTML = "";
}

