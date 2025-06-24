// friend.mjs

import { getScreen, showTemplateScreen, addTemplate, clear } from "../../util/screens.js";
import { type, waitForKey,input, cleanInput,isPrintable,moveCaretToEnd  } from "../../util/io.js";

import pause from "../../util/pause.js";
import { typeSound } from "../../sound/index.js"
import say from "../../util/speak.js";


    


async function rick() {
  
  

	clear();
	say("you got rick rolled!", 0.3, 0.8);
	
	return new Promise(async resolve =>
	{


let rickrolled = new Audio('commands/rick/rick.mp3');
	rickrolled.play();
/////start
clear()

     let begin = await showTemplateScreen("rickroll");
        pause(10);
        await waitForKey();
        rickrolled.pause();
        begin.remove();
        	clear()
				resolve();
	clear()




	});
    

}



const stylesheets = ["rick"];
const templates = ["rick"];
export default rick;
export { templates,stylesheets };