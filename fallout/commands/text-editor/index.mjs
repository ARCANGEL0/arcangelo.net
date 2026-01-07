import { clear, el } from "util/screens.js";
import { moveCaretToEnd } from "util/io.js";
import { typeSound } from "sound";
import debounce from 'util/debounce.js';

const translations = {
    en: "Press CTRL+C to exit",
    pt: "Pressione CTRL+C para sair",
    es: "Presione CTRL+C para salir",
    fr: "Appuyez sur CTRL+C pour quitter"
};

// Get the selected language from localStorage or default to English
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Get the output message based on the selected language
const output = translations[selectedLanguage] || translations['en']; // Fallback to English if the language is not found

const KEY_TEXT_EDITOR = 'text-editor';

const debouncedSave = debounce((value) => {
    localStorage.setItem(KEY_TEXT_EDITOR, value)
}, 100);

async function textEditor() {

	return new Promise(resolve => {
        let previous = localStorage.getItem(KEY_TEXT_EDITOR) || '';

		clear();

        let typer = el('span');
        typer.innerHTML = previous;

        const onKeyDown = async event => {
			typeSound();
			if (event.key === 'c' && event.ctrlKey) {
                event.preventDefault();
				// Ctrl+C => exit
				clear();
                resolve();
            } else {
                debouncedSave(typer.innerHTML);
            }
		}
		const onClick = () => {
			moveCaretToEnd(typer);
		}
		typer.classList.add("typer", "active");
		typer.setAttribute("contenteditable", true);
		typer.addEventListener("click", onClick);
		typer.addEventListener("keydown", onKeyDown);
		typer.focus();
	});
}

export { output };

export default textEditor;
