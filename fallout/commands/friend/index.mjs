// friend.mjs

import { getScreen, showTemplateScreen, addTemplate, clear } from "../../util/screens.js";
import { type, waitForKey,input, cleanInput,isPrintable,moveCaretToEnd  } from "../../util/io.js";

import pause from "../../util/pause.js";
import { typeSound } from "../../sound/index.js"
import say from "../../util/speak.js";



const gameData = {
    start:'./images/assets/start.png' ,
    pathA:'./images/assets/pathA.png' ,
    pathB:'./images/assets/pathA1_B.png' ,
    pathA1:'./images/assets/pathA1_B.png' ,
    pathB1:'./images/assets/pathB1.png' ,
    pathA2:'./images/assets/pathA2.png' ,
    pathA3:'./images/assets/pathA3.png' ,
    pathA4:'./images/assets/pathA4.png' ,
    pathFail:'./images/assets/end.png' ,
    pathWin:'./images/assets/pathWin.png' ,
    pathMatch:'./images/assets/giveMatch.png' ,
    
    en: {
      // English
givesMatches: "Your friend gave you a box of matches he had in his pocket. What do you do?"
,
nolight: "You don’t have any matches with you, and no other way to light up the note."
,
lostNote: "You tried to read the note in the dark, but it flew away."
,
tooWeak: "Your friend says he is too weak to go and doesn't have enough strength, he asks you to read the note."
,
        start: "You're trapped in a dungeon with your friend. You see a barrel. What do you do?",
        pathA: "The barrel rolls aside and you find a secret tunnel. What do you do?",
        pathB: "Your friend hands you a note. What do you do?",
        pathA1: "You start to escape, but your friend is too weak to go. They hand you a note. What do you do?",
        pathB1: "The note says 'Don't leave me here.' Do you want to leave your friend or stay?",
        pathA2: "It is too dark to read the note. What do you do?",
        pathA3: "You crawl through the tunnel to a beach. You see the water and the vast ocean ahead. What do you do?",
        pathA4: "In the water, you see a boat. What do you do?",
        pathWin: "You decided to stay with your friend. The tunnel collapsed and both of you got stuck. The dungeon started to fall in ruins, but you remained loyal beside your friend.",
        pathFail: "Congratulations, you're heading to a new world!",
        win1: "Congrats... Looks like you cracked Whiterose's enigma.",
        win2: "You saved your friend.",
        noteMessage: "The note says: 'Don't leave me here.'",
        invalid: "You can't do this here.",
        blockedPath: "The passage is now blocked. You can't go back."
    },
    es: {
    

// Spanish
givesMatches: "Tu amigo te dio una caja de cerillas que tenía en su bolsillo. ¿Qué haces?"
,
nolight: "No tienes cerillas contigo, y no tienes otra forma de iluminar la nota."
,
lostNote: "Intentaste leer la nota en la oscuridad, pero se fue volando."
,
tooWeak: "Tu amigo dice que está demasiado débil para ir y no tiene suficiente fuerza, te pide que leas la nota."
  ,
  
        start: "Estás atrapado en una mazmorra con tu amigo. Ves un barril. ¿Qué haces?",
        pathA: "El barril rueda a un lado y encuentras un túnel secreto. ¿Qué haces?",
        pathB: "Tu amigo te da una nota. ¿Qué haces?",
        pathA1: "Comienzas a escapar, pero tu amigo está demasiado débil para ir. Te da una nota. ¿Qué haces?",
        pathB1: "La nota dice 'No me dejes aquí'. ¿Quieres dejar a tu amigo o quedarte?",
        pathA2: "Es demasiado oscuro para leer la nota. ¿Qué haces?",
        pathA3: "Te arrastras por el túnel hasta una playa. Ves el agua y el vasto océano frente a ti. ¿Qué haces?",
        pathA4: "En el agua, ves un bote. ¿Qué haces?",
        pathWin: "Decidiste quedarte con tu amigo. El túnel colapsó y ambos quedaron atrapados. La mazmorras comenzó a caer en ruinas, pero permaneciste leal junto a tu amigo.",
        pathFail: "Felicidades, te diriges a un nuevo mundo!",
        win1: "Felicidades... Parece que resolviste el enigma de Whiterose.",
        win2: "Salvaste a tu amigo.",
        noteMessage: "La nota dice: 'No me dejes aquí.'",
        invalid: "No puedes hacer esto aquí.",
        blockedPath: "El pasaje está bloqueado. No puedes regresar."
    },
    fr: {


// French
givesMatches: "Votre ami vous a donné une boîte d'allumettes qu'il avait dans sa poche. Que faites-vous?"
,


nolight: "Vous n'avez pas d'allumettes avec vous, et aucun autre moyen d'éclairer la note."
,
lostNote: "Vous avez essayé de lire la note dans le noir, mais elle s'est envolée."
,
 
tooWeak: "Votre ami dit qu'il est trop faible pour y aller et qu'il n'a pas assez de force, il vous demande de lire la note."
,
        start: "Vous êtes piégé dans un donjon avec votre ami. Vous voyez un tonneau. Que faites-vous?",
        pathA: "Le tonneau roule de côté et vous trouvez un tunnel secret. Que faites-vous?",
        pathB: "Votre ami vous tend une note. Que faites-vous?",
        pathA1: "Vous commencez à vous échapper, mais votre ami est trop faible pour partir. Il vous tend une note. Que faites-vous?",
        pathB1: "La note dit 'Ne me laisse pas ici'. Voulez-vous laisser votre ami ou rester?",
        pathA2: "Il fait trop sombre pour lire la note. Que faites-vous?",
        pathA3: "Vous rampez à travers le tunnel jusqu'à une plage. Vous voyez l'eau et l'océan immense devant vous. Que faites-vous?",
        pathA4: "Dans l'eau, vous voyez un bateau. Que faites-vous?",
        pathWin: "Vous avez décidé de rester avec votre ami. Le tunnel s'est effondré et vous êtes restés coincés tous les deux. Le donjon a commencé à s'effondrer, mais vous êtes resté loyal auprès de votre ami.",
        pathFail: "Félicitations, vous vous dirigez vers un nouveau monde!",
        win1: "Félicitations... On dirait que vous avez résolu l'énigme de Whiterose.",
        win2: "Vous avez sauvé votre ami.",
        noteMessage: "La note dit : ' Ne me laisse pas ici.'",
        invalid: "Vous ne pouvez pas faire ça ici.",
        blockedPath: "Le passage est maintenant bloqué. Vous ne pouvez pas revenir."
    },
    pt: {


// Portuguese
givesMatches: "Seu amigo lhe deu uma caixa de fósforos que tinha no bolso. O que você faz?"
,
 

nolight: "Você não tem nenhum fósforo com você, e nenhum outro meio de iluminar a nota."
,
tooWeak: "Seu amigo diz que está fraco demais para ir e não tem força suficiente, ele pede para você ler a nota."
,
lostNote: "Você tentou ler a nota no escuro, mas ela voou para longe."
,
  
        start: "Você está preso em uma masmorra com seu amigo. Você vê um barril. O que você faz?",
        pathA: "O barril rola para o lado e você encontra um túnel secreto. O que você faz?",
        pathB: "Seu amigo lhe entrega uma nota. O que você faz?",
        pathA1: "Você começa a escapar, mas seu amigo está fraco demais para ir. Ele te entrega uma nota. O que você faz?",
        pathB1: "A nota diz 'Não me deixe aqui'. Você quer deixar seu amigo ou ficar?",
        pathA2: "Está muito escuro para ler a nota. O que você faz?",
        pathA3: "Você rasteja pelo túnel até uma praia. Você vê a água e o vasto oceano à frente. O que você faz?",
        pathA4: "Na água, você vê um barco. O que você faz?",
        pathWin: "Você decidiu ficar com seu amigo. O túnel desabou e ambos ficaram presos. A masmorra começou a cair em ruínas, mas você permaneceu leal ao lado de seu amigo.",
        pathFail: "Parabéns, você está indo para um novo mundo!",
        win1: "Parabéns... Parece que você resolveu o enigma de Whiterose.",
        win2: "Você salvou seu amigo.",
        noteMessage: "A nota diz: 'Não me deixe aqui.'",
        invalid: "Você não pode fazer isso aqui.",
        blockedPath: "A passagem está bloqueada. Não é possível voltar."
    }
};

    const options = {
      enter: [
// Simple verbs
/\benter\b/i, /\bentering\b/i, /\bexplore\b/i, /\binvestigate\b/i, /\bdiscover\b/i, 
/\bcreep\b/i, /\bfollow\b/i, /\bflee\b/i, /\bescape\b/i, /\bwalk\b/i, /\bstart\b/i, 
/\badvance\b/i, /\bmove\b/i, /\bproceed\b/i, /\bjourney\b/i, /\bget to\b/i, 
/\bhead\b/i, /\blaunch\b/i, /\bset off\b/i, /\bgo\b/i, /\btravel\b/i, /\bmake my way\b/i,

// Combinations with "tunnel"
    /\benter.*tunnel\b/i, /\bentering.*tunnel\b/i, /\benter.*the tunnel\b/i, /\bhide.*in the tunnel\b/i, 
    /\bdecide to enter.*the tunnel\b/i, /\bdecided.*to enter.*the tunnel\b/i, /\bcreeping.*into the tunnel\b/i,
    /\binside.*the tunnel\b/i, /\binvestigate.*the tunnel\b/i, /\bgoing to.*the tunnel\b/i, /\bgoing.*into the tunnel\b/i,
    /\bpath.*to.*the tunnel\b/i, /\barrive.*at the tunnel\b/i, /\bgoing.*toward.*the tunnel\b/i, 
    /\bfollowing.*to the tunnel\b/i, /\bcontinuing.*to the tunnel\b/i, /\bstep.*into the tunnel\b/i, /\bdescend.*into the tunnel\b/i,
    /\bheading.*to the tunnel\b/i, /\bset off.*for the tunnel\b/i, /\badvancing.*to the tunnel\b/i, 
    /\blaunching into.*the tunnel\b/i, /\bexploring.*the tunnel\b/i, /\bmake my way.*to the tunnel\b/i, /\bentering into.*the tunnel\b/i,
    /\bslipping into.*the tunnel\b/i, /\benter to explore.*the tunnel\b/i, /\bwalk to.*the tunnel\b/i,
    /\bcreeping toward.*the tunnel\b/i, /\bdecide to descend.*the tunnel\b/i, /\bhide in the tunnel\b/i,

// Escape and Flee Terms
    /\bflee to.*the tunnel\b/i, /\bflee into.*the tunnel\b/i, /\bescape to.*the tunnel\b/i,
    /\bhiding.*in the tunnel\b/i, /\bescape into.*the tunnel\b/i, /\bfleeing.*to the tunnel\b/i,
    /\bdecide to flee.*to the tunnel\b/i, /\bhide in the tunnel\b/i, /\bseeking refuge in the tunnel\b/i,
    /\bescaping.*to the tunnel\b/i, /\bseeking shelter.*in the tunnel\b/i, /\bflee.*straight to the tunnel\b/i,
    /\btake refuge.*in the tunnel\b/i, /\bdisappear into the tunnel\b/i, /\bfleeing toward.*the tunnel\b/i,
    /\bhiding in the tunnel\b/i, /\bfleeing.*the tunnel\b/i, /\bfleeing straight into.*the tunnel\b/i,

// Contextual Variations
    /\bset off.*for the tunnel\b/i, /\binside.*the tunnel\b/i, /\bentering into.*the tunnel\b/i,
    /\bapproaching.*the tunnel\b/i, /\bjourneying to.*the tunnel\b/i, /\bwalking toward.*the tunnel\b/i,
    /\badvancing toward.*the tunnel\b/i, /\bexploring.*the tunnel\b/i, /\bpreparing to enter.*the tunnel\b/i,
    /\badvancing into.*the tunnel\b/i, /\bgetting deeper into.*the tunnel\b/i, /\bcontinuing toward.*the tunnel\b/i,
    /\bgetting closer to.*the tunnel\b/i, /\bgoing into.*the tunnel\b/i, /\bslipping into.*the tunnel\b/i,
    /\bgetting lost in.*the tunnel\b/i, /\bstarting to enter.*the tunnel\b/i, /\bfollowing through the tunnel\b/i,
    /\bpath through the tunnel\b/i, /\bjourneying through the tunnel\b/i, /\bgetting further into.*the tunnel\b/i,

// Action Variants
    /\blaunch myself into.*the tunnel\b/i, /\bmake my entrance into.*the tunnel\b/i,


    // Verbos Simples
    /\bentro\b/i, /\bentrar\b/i, /\bentrando\b/i, /\bexplorar\b/i, /\binvestigar\b/i, /\bdescobrir\b/i, 
    /\besgueirar\b/i, /\bseguir\b/i, /\bfugir\b/i, /\bescapar\b/i, /\bcaminhar\b/i, /\biniciar\b/i, 
    /\badentrar\b/i, /\bpassar\b/i, /\bpartir\b/i, /\brumo\b/i, /\bchegar\b/i, /\blançar\b/i, 
    /\bmover\b/i, /\bavançar\b/i, /\benfrentar\b/i, /\binfiltrar\b/i, /\btransitar\b/i, /\bme encaminho\b/i,

    // Combinações com "Túnel"
    /\bentro.*t[uú]nel\b/i, /\bentrando.*t[uú]nel\b/i, /\bentrar.*t[uú]nel\b/i, /\bme escondo.*t[uú]nel\b/i, 
    /\bdecido entrar.*t[uú]nel\b/i, /\bdecidi.*entrar.*t[uú]nel\b/i, /\besgueirando.*t[uú]nel\b/i,
    /\badentro.*t[uú]nel\b/i, /\binvestigar.*t[uú]nel\b/i, /\bvou para o.*t[uú]nel\b/i, /\bvou.*no túnel\b/i,
    /\bcaminho.*para.*t[uú]nel\b/i, /\bchegar.*ao túnel\b/i, /\bvou.*em direção.*t[uú]nel\b/i, 
    /\bseguindo.*para o túnel\b/i, /\bcontinuo.*t[uú]nel\b/i, /\bpasso.*pelo túnel\b/i, /\bdesço.*para o túnel\b/i,
    /\bme dirijo.*t[uú]nel\b/i, /\bparto.*para.*t[uú]nel\b/i, /\bavançando.*para o túnel\b/i, 
    /\bme lanço.*no túnel\b/i, /\bexplorando.*t[uú]nel\b/i, /\bfazer meu caminho.*t[uú]nel\b/i, /\bentro em.*t[uú]nel\b/i,
    /\bme enfio.*no túnel\b/i, /\bentrar para explorar\b.*t[uú]nel\b/i, /\bcaminhar até.*t[uú]nel\b/i,
    /\besgueirando-se para.*t[uú]nel\b/i, /\bdecido descer.*o túnel\b/i, /\besconde no túnel\b/i,

    // Termos de Fuga e Escapar
    /\bfujo para.*t[uú]nel\b/i, /\bfugir para.*t[uú]nel\b/i, /\bescapo para.*t[uú]nel\b/i,
    /\bescondo.*no túnel\b/i, /\bescapar para.*t[uú]nel\b/i, /\bfugindo.*para o túnel\b/i,
    /\bdecido fugir.*para o túnel\b/i, /\bme escondo no túnel\b/i, /\brefugio no túnel\b/i,
    /\bescapando.*para o túnel\b/i, /\bprocurando refúgio.*no túnel\b/i, /\bfugir.*direto.*t[uú]nel\b/i,
    /\bme abrigar.*no túnel\b/i, /\bdesapareço no túnel\b/i, /\bfugindo em direção.*ao túnel\b/i,
    /\bescondendo-se.*no túnel\b/i, /\bfugindo.*t[uú]nel\b/i, /\bfugindo direto.*t[uú]nel\b/i,

    // Variações Contextuais
    /\bparto.*t[uú]nel\b/i, /\badentro.*do túnel\b/i, /\bentro em.*t[uú]nel\b/i,
    /\bme aproximo.*do túnel\b/i, /\brumo.*t[uú]nel\b/i, /\bindo para.*t[uú]nel\b/i,
    /\bcaminhando rumo.*ao túnel\b/i, /\bavançar em direção.*ao túnel\b/i, /\bexploro.*t[uú]nel\b/i,
    /\bme preparo para entrar.*t[uú]nel\b/i, /\bavançando para.*t[uú]nel\b/i, /\bentrando cada vez mais no túnel\b/i,
    /\bcontinuo em direção.*ao túnel\b/i, /\bme aproximo.*do túnel\b/i, /\bvou para dentro.*t[uú]nel\b/i,
    /\badentro.*do túnel\b/i, /\bme enfio.*para dentro.*t[uú]nel\b/i, /\bfazendo meu caminho.*t[uú]nel\b/i,
    /\bdescendo em direção.*ao túnel\b/i, /\bchego ao início.*do túnel\b/i, /\bcomeço a adentrar.*t[uú]nel\b/i,
    /\bsigo pelo túnel\b/i, /\bcaminho pelo túnel\b/i, /\badentro ainda mais.*no túnel\b/i,

    // Variantes de Ação
    /\blanço-me.*no túnel\b/i, /\bfazer minha entrada.*no túnel\b/i, /\bavançar fundo.*no túnel\b/i,
    /\bindo.*em direção.*ao túnel\b/i, /\brumo ao interior.*do túnel\b/i, /\bavanço.*ao encontro.*t[uú]nel\b/i,
    /\bme aproximo cada vez mais.*do túnel\b/i, /\bme aproximo do túnel\b/i, /\bcontinuo adentrando.*t[uú]nel\b/i,
    /\badentro mais.*no túnel\b/i, /\beu sigo.*dentro do túnel\b/i, /\btomo caminho.*para o túnel\b/i,
    /\bsigo diretamente.*ao túnel\b/i, /\bdescendo ao longo.*do túnel\b/i, /\bentro.*profundamente.*no túnel\b/i,
    /\bexploro interior.*do túnel\b/i, /\bfugindo cada vez mais.*ao túnel\b/i, /\bprocuro um esconderijo.*no túnel\b/i,
    /\bavanço adentrando.*no túnel\b/i, /\btomo rumo.*para o túnel\b/i, /\bsigo entrando.*no túnel\b/i,
    /\brumo fundo.*no túnel\b/i, /\beu entro bem dentro.*do túnel\b/i, /\beu entro até o final.*do túnel\b/i,

    // Expressões de Intenção
    /\bdecido me abrigar.*no túnel\b/i, /\bme aproximo.*para entrar.*t[uú]nel\b/i, /\bdecidi entrar ainda mais.*no túnel\b/i,
    /\bprocuro segurança.*no túnel\b/i, /\bme escondo diretamente.*no túnel\b/i, /\bdecido descer.*ao túnel\b/i,
    /\beu me movo.*ao longo.*do túnel\b/i, /\beu entro.*no meio.*do túnel\b/i, /\beu entro completamente.*no túnel\b/i,
    /\beu procuro um caminho.*no túnel\b/i, /\bentro.*ao túnel.*para explorar\b/i, /\beu sigo.*profundamente.*no túnel\b/i,
    /\bdecido ir.*para o túnel\b/i, /\beu vou até o final.*do túnel\b/i, /\bexploro o interior.*do túnel\b/i,
    /\btomo decisão.*ao entrar.*t[uú]nel\b/i, /\beu me lanço diretamente.*no túnel\b/i, /\bsigo o túnel.*até o fim\b/i,
    /\bprossigo.*entrando.*no túnel\b/i, /\bdecido seguir.*pelo túnel\b/i, /\bentro até.*o fundo.*do túnel\b/i,
    /\binvestigo.*o espaço.*no túnel\b/i, /\bprocuro.*no túnel\b/i, /\btomo meu rumo.*ao túnel\b/i
,    /\bentre\b/i, /\bentrer\b/i, /\bentrant\b/i, /\bexplorer\b/i, /\binvestiguer\b/i, /\bdécouvrir\b/i,
    /\binfiltrer\b/i, /\bsuivre\b/i, /\bfuir\b/i, /\béchapper\b/i, /\bmarcher\b/i, /\binitialiser\b/i,
    /\binfiltrer\b/i, /\btransiter\b/i, /\bme dirige\b/i, /\bapprocher\b/i, /\bdescendre\b/i,

    // Combinações com "Tunnel"
    /\bentre.*dans le tunnel\b/i, /\bentrant.*dans le tunnel\b/i, /\bentrer.*dans le tunnel\b/i,
    /\bme cache.*dans le tunnel\b/i, /\bje décide d'entrer.*dans le tunnel\b/i, /\bj'ai décidé\b.*d'entrer dans le tunnel\b/i,
    /\binfiltrer.*le tunnel\b/i, /\bexplorer.*le tunnel\b/i, /\bj'avance.*vers le tunnel\b/i,
    /\bmarche.*vers.*le tunnel\b/i, /\bdescend.*vers le tunnel\b/i, /\bje vais.*vers le tunnel\b/i,
    /\bje vais entrer.*dans le tunnel\b/i, /\bchemin vers le tunnel\b/i, /\bje m'approche du tunnel\b/i,
    /\bpartir.*vers le tunnel\b/i, /\bj'explore.*le tunnel\b/i, /\bje fais mon chemin.*vers le tunnel\b/i,
    /\bje me réfugie.*dans le tunnel\b/i, /\bje fuis vers le tunnel\b/i, /\bme diriger.*vers le tunnel\b/i,
    /\bcontinuer vers.*le tunnel\b/i, /\bme rendre dans.*le tunnel\b/i, /\bme lancer.*dans le tunnel\b/i,
    /\btrouver refuge.*dans le tunnel\b/i, /\bje pars pour.*le tunnel\b/i, /\bexplorant le tunnel\b/i,

    // Termos de Fuga e Escapar
    /\bje fuis vers.*le tunnel\b/i, /\bfuir dans.*le tunnel\b/i, /\béchapper dans.*le tunnel\b/i,
    /\bme cache dans.*le tunnel\b/i, /\béchapper vers.*le tunnel\b/i, /\bme réfugie dans.*le tunnel\b/i,
    /\bje décide de fuir.*dans le tunnel\b/i, /\bme protéger.*dans le tunnel\b/i, /\bm'echapper.*vers le tunnel\b/i,
    /\bje m'abrite dans.*le tunnel\b/i, /\bdisparaître dans le tunnel\b/i, /\bme cache directement.*dans le tunnel\b/i,
    /\bfuir en direction du tunnel\b/i, /\bfuyant dans le tunnel\b/i, /\bje m'aventure.*dans le tunnel\b/i,

    // Variações Contextuais
    /\bpartir dans le tunnel\b/i, /\bdescends dans le tunnel\b/i, /\bme réfugie dans le tunnel\b/i,
    /\bchemin vers le tunnel\b/i, /\bj'avance.*vers le tunnel\b/i, /\bj'ouvre.*le passage dans le tunnel\b/i,
    /\bj'entre dans.*le tunnel\b/i, /\bme rapproche du tunnel\b/i, /\bje poursuis dans.*le tunnel\b/i,
    /\bje décide de continuer.*dans le tunnel\b/i, /\bs'approcher.*du tunnel\b/i, /\bje vais m'aventurer.*dans le tunnel\b/i,
    /\bm'avancer.*dans le tunnel\b/i, /\bme lancer dans.*le tunnel\b/i, /\bje m'enfonce dans le tunnel\b/i,
    /\bm'approche dans le tunnel\b/i, /\bm'engager.*dans le tunnel\b/i, /\bexplorer encore plus loin.*dans le tunnel\b/i,

    // Variantes de Ação
    /\bse lancer.*dans le tunnel\b/i, /\bfaire mon entrée.*dans le tunnel\b/i, /\bprogresser dans le tunnel\b/i,
    /\bapprocher du tunnel\b/i, /\bs'approcher encore plus.*du tunnel\b/i, /\btrouver une sortie.*dans le tunnel\b/i,
    /\bme sauver dans.*le tunnel\b/i, /\bm'introduire.*dans le tunnel\b/i, /\bmarcher à travers.*le tunnel\b/i,
    /\bm'engager.*vers le tunnel\b/i, /\bpartir.*directement dans le tunnel\b/i, /\bcontinuer dans le tunnel\b/i,
    /\bapprocher le passage.*du tunnel\b/i, /\bm'approcher de.*la sortie du tunnel\b/i, /\bexplorant encore plus.*le tunnel\b/i,
    /\bexplorer profondément.*dans le tunnel\b/i, /\bme déplacer.*vers le tunnel\b/i, /\bm'enfuir directement.*dans le tunnel\b/i,

    // Expressões de Intenção
    /\bje décide de m'abriter.*dans le tunnel\b/i, /\bje m'approche.*pour entrer dans le tunnel\b/i,
    /\bje décide d'entrer encore plus loin.*dans le tunnel\b/i, /\bje cherche un abri.*dans le tunnel\b/i,
    /\bje me cache directement.*dans le tunnel\b/i, /\bje décide de descendre.*dans le tunnel\b/i,
    /\bje me déplace.*à travers.*le tunnel\b/i, /\bj'entre profondément.*dans le tunnel\b/i,
    /\bje fais mon chemin.*dans le tunnel\b/i, /\bje pars en exploration.*dans le tunnel\b/i,
    /\bj'avance.*profondément dans le tunnel\b/i, /\bje décide de continuer.*dans le tunnel\b/i,
    /\bje pars jusqu'au bout.*du tunnel\b/i, /\bje vais explorer.*le fond du tunnel\b/i,
    /\bje choisis de m'abriter.*dans le tunnel\b/i, /\bme protéger.*directement dans le tunnel\b/i,
    /\bje m'introduis directement.*dans le tunnel\b/i, /\bje progresse.*à l'intérieur du tunnel\b/i,
    /\bm'aventurer.*encore plus loin dans le tunnel\b/i, /\bm'enfoncer.*profondément dans le tunnel\b/i,
    /\bje vais encore plus loin.*dans le tunnel\b/i, /\bexplorer.*le passage intérieur du tunnel\b/i,
    /\bje décide de m'introduire.*encore plus dans le tunnel\b/i, /\bje cherche une issue.*dans le tunnel\b/i
,

    // Verbos Simples
    /\bentro\b/i, /\bentrar\b/i, /\bentrando\b/i, /\bexplorar\b/i, /\binvestigar\b/i, /\bdescubrir\b/i,
    /\besconderse\b/i, /\bseguir\b/i, /\bhuir\b/i, /\bescapar\b/i, /\bcaminar\b/i, /\biniciar\b/i,
    /\badentrarse\b/i, /\bpasar\b/i, /\bdirigirse\b/i, /\bacercarse\b/i, /\bdescender\b/i,

    // Combinações com "Túnel"
    /\bentro.*en el túnel\b/i, /\bentrando.*en el túnel\b/i, /\bentrar.*en el túnel\b/i,
    /\bme escondo.*en el túnel\b/i, /\bdecido entrar.*en el túnel\b/i, /\bdecidí.*entrar en el túnel\b/i,
    /\binfiltrar.*en el túnel\b/i, /\bexplorar.*el túnel\b/i, /\bme acerco.*al túnel\b/i,
    /\bme dirijo.*al túnel\b/i, /\bdescender.*hacia el túnel\b/i, /\bme muevo hacia.*el túnel\b/i,
    /\bvoy a entrar.*en el túnel\b/i, /\bhacia el túnel\b/i, /\bllegar.*al túnel\b/i, /\bseguir.*el túnel\b/i,
    /\bme refugio.*en el túnel\b/i, /\bhuyendo.*hacia el túnel\b/i, /\bfugarse.*al túnel\b/i,
    /\bparto hacia.*el túnel\b/i, /\bme lanzo.*al túnel\b/i, /\bavanzando hacia.*el túnel\b/i,
    /\bme voy.*al túnel\b/i, /\bllegando.*al túnel\b/i, /\bencaminarse.*al túnel\b/i, /\bfugir.*al túnel\b/i,
    /\bexplorando.*el túnel\b/i, /\binfiltrarme en.*el túnel\b/i, /\biniciar.*en el túnel\b/i,

    // Termos de Fuga e Escapar
    /\bhuyo hacia.*el túnel\b/i, /\bescapar al túnel\b/i, /\bfugarse al túnel\b/i,
    /\bme refugio en.*el túnel\b/i, /\bhuyendo hacia el túnel\b/i, /\bme escondo.*en el túnel\b/i,
    /\bdecido huir.*al túnel\b/i, /\bme escondo directamente.*en el túnel\b/i, /\bme pierdo.*en el túnel\b/i,
    /\bme abro camino.*al túnel\b/i, /\bfugir directamente.*al túnel\b/i, /\bme protejo.*en el túnel\b/i,
    /\bme escondo en lo profundo.*del túnel\b/i, /\bhuyo.*directamente al túnel\b/i, /\bdesaparezco.*en el túnel\b/i,

    // Variações Contextuais
    /\bparto en dirección.*al túnel\b/i, /\bme acerco al túnel\b/i, /\bvoy hacia el túnel\b/i,
    /\bcamino hacia el túnel\b/i, /\biniciar camino.*en el túnel\b/i, /\bavanzo al interior.*del túnel\b/i,
    /\bme voy hacia el túnel\b/i, /\bdecido entrar.*en el túnel\b/i, /\bme aproximo.*al túnel\b/i,
    /\bme dirijo hacia.*el túnel\b/i, /\bme lanzo.*en el túnel\b/i, /\bproseguir en el túnel\b/i,
    /\bmeterme.*en el túnel\b/i, /\bme abro paso.*en el túnel\b/i, /\bme muevo por.*el túnel\b/i,
    /\badentrándome en el túnel\b/i, /\bexploro cada vez más.*en el túnel\b/i, /\bseguir adentrándome.*en el túnel\b/i,

    // Variantes de Ação
    /\biniciar exploración.*en el túnel\b/i, /\bhaciendo mi camino.*al túnel\b/i, /\bexplorar.*lo profundo del túnel\b/i,
    /\bacercarme.*al túnel\b/i, /\bhacia la profundidad.*del túnel\b/i, /\bme aventuro en el túnel\b/i,
    /\bexploro el interior.*del túnel\b/i, /\bme muevo hacia adentro.*del túnel\b/i, /\bme aproximo aún más.*al túnel\b/i,
    /\bdecido avanzar.*en el túnel\b/i, /\bme preparo para entrar.*en el túnel\b/i, /\bme dirijo profundamente.*al túnel\b/i,
    /\biniciar travesía.*en el túnel\b/i, /\bme escondo bien dentro.*del túnel\b/i, /\bprogreso en el túnel\b/i,
    /\bencamino hacia lo más profundo.*del túnel\b/i, /\bme lanzo hacia lo profundo.*del túnel\b/i,
    /\bentrando cada vez más.*en el túnel\b/i, /\bmoverme en dirección.*al túnel\b/i,

    // Expressões de Intenção
    /\bme refugio aún más.*en el túnel\b/i, /\bdecido seguir.*adentrándome en el túnel\b/i,
    /\bme pierdo más.*en el túnel\b/i, /\bexplorando cada rincón.*del túnel\b/i, /\bme adentro por completo.*en el túnel\b/i,
    /\bseguir investigando.*en el túnel\b/i, /\bdescender hasta.*el túnel\b/i, /\bme muevo más allá.*en el túnel\b/i,
    /\bexploro cada rincón.*del túnel\b/i, /\btomar refugio.*en el túnel\b/i, /\bmoverme más profundamente.*en el túnel\b/i,
    /\binvestigar aún más.*en el túnel\b/i, /\bseguir avanzando.*en el túnel\b/i, /\bme pierdo completamente.*en el túnel\b/i,
    /\bme voy adentrando cada vez más.*en el túnel\b/i, /\bme pierdo en la oscuridad.*del túnel\b/i,
    /\bdecido continuar.*por el túnel\b/i, /\badentrarme profundamente.*en el túnel\b/i,
    /\binvestigar lo profundo.*del túnel\b/i, /\bllegar al fondo.*del túnel\b/i, /\bexploro hacia el final.*del túnel\b/i,
    /\bhacer mi camino.*hasta el túnel\b/i, /\bpermanecer en el túnel\b/i, /\bocultarme en el túnel\b/i,
    /\bescondiéndome en el túnel\b/i, /\bperderme completamente.*en el túnel\b/i, /\bexplorar el fondo.*del túnel\b/i,
    /\bme acerco cada vez más.*al túnel\b/i, /\bme sumerjo más.*en el túnel\b/i, /\bcontinúo avanzando.*en el túnel\b/i
,
    // Verbos simples e variantes (conjugações e formas alternativas)
    /\b(?:ent(?:ro|rar|rando|rei|remos|rei|ramos)|avanç(?:o|ar|ando)|explor(?:ar|o|ando)|vou|indo|seguir|procuro|entro\b)/i,
    /\b(?:esgueir(?:o|ar|ando)|caminh(?:o|ar|ando)|adentr(?:o|ar|ando)|dirig(?:o|ir|indo)|fug(?:ir|o)|escap(?:ar|o))\b/i,
    
    // Combinando verbos e variações com "túnel", capturando várias preposições e palavras de ligação
    /\b(?:decid(?:o|ir|indo) (?:me )?entrar|part(?:o|ir)|me (?:aproximo|aproximando)|come(?:ço|çar|çando)|cheg(?:o|ar|ando) ao?)? t[uú]nel\b/i,
    /\b(?:entr(?:ando|ar|rei|aria|ando) ?(?:no|para o|ao)? t[uú]nel|prossig(?:o|uir|uindo) ?(?:no|rumo ao|para o)? t[uú]nel)\b/i,
    /\b(?:me dirijo|vou) (?:em dire[cç][ãa]o|ao|para o) t[uú]nel\b/i,
    /\b(?:vou|me lan[cç]o|me aventuro|me movo|me enfio|me escondo) (?:no|para dentro do|rumo ao|at[ée] o) t[uú]nel\b/i,

    // Termos de fuga, esconderijo e busca de refúgio
    /\b(?:fu(?:g(?:ir|indo)|jo|jindo)|escap(?:o|ar|ando)|me refugi(?:o|ar|ando)|procur(?:o|ar|ando) abrigo|me perco) (?:dentro|no|ao) t[uú]nel\b/i,
    /\b(?:desapare(?:[çc]o|cer|cendo)|me escondo|busco refugio|fugindo em dire[cç][ãa]o ao) t[uú]nel\b/i,
    /\b(?:entro para fugir|escondendo-me no|em refugio no) t[uú]nel\b/i,
    /\b(?:evito o perigo ao entrar no|procuro refúgio no|abrigo no) t[uú]nel\b/i,

    // Combinações de palavras com ações e expressões contextuais
    /\b(?:me aventuro|vou explorar|come[çc]o a caminhar|me adentro cada vez mais|me aproximo|me enfio|vou pro) t[uú]nel\b/i,
    /\b(?:fa[çc]o meu caminho|come[çc]o a adentrar|avan[çc]ando rumo ao|me enfio de vez) no t[uú]nel\b/i,
    /\b(?:me escondo|me movo|me lan[çc]o) ao? t[uú]nel\b/i,
    /\b(?:percorro o|chego ao fundo do|avan[çc]o pelo|entro cada vez mais no) t[uú]nel\b/i,
    /\b(?:vou fundo|parto em dire[cç][ãa]o|decido adentrar|sigo diretamente) no t[uú]nel\b/i,

    // Outras formas de entrada e exploração
    /\b(?:fa[çc]o minha entrada|inicio a caminhada|prossigo para o|vou me enfiando) no t[uú]nel\b/i,
    /\b(?:me aprofundo|me arrisco|continuo explorando) o t[uú]nel\b/i,
    /\b(?:come[çc]o a investigar|decido ir mais fundo|vou explorar mais) o t[uú]nel\b/i,
    /\b(?:entro para ver|exploro cada canto|fa[çc]o caminho|caminho rumo ao) t[uú]nel\b/i,
    /\b(?:me embrenho|vou descendo|fa[çc]o um desvio para|procuro algo) no t[uú]nel\b/i,

    // Gírias, formas alternativas e expressões coloquiais
    /\b(?:me mando|dou um pulo|me taco|fa[çc]o uma visita|me jogo) no t[uú]nel\b/i,
    /\b(?:toco para o t[uú]nel|dou um jeito de entrar|sigo reto para o|corto caminho pelo) t[uú]nel\b/i,
    /\b(?:me aproximo devagar|me enfio na parada do|fa[çc]o uma caminhada até o) t[uú]nel\b/i,
    /\b(?:dou uma conferida|entro na vibe do|me envolvo no clima do|meto marcha pro) t[uú]nel\b/i,
    /\b(?:mergulho na parada do|vou direto ao ponto no|fa[çc]o minha rota pelo) t[uú]nel\b/i,
    /\b(?:chego e entro|me aproximo e dou um jeito de entrar) no t[uú]nel\b/i
],
stay: [
    // Verbos simples e variantes (conjugações e formas alternativas)
    /\b(?:stay|staying|remain|remaining|sit|sitting|wait|waiting|hang around|stick around|not leave|keep company)\b/i,

    // Expressões de "ficar com o amigo" e variações
    /\b(?:stay|stick around|hang out|keep company|remain|wait) (?:here|with him|beside him|next to him|by his side|nearby)\b/i,
    /\b(?:stay close to|sit with|be near|stay beside|remain by|keep close to|hang by) (?:my friend|him)\b/i,
    /\b(?:not go anywhere|decide to stay|sit around|sit down|sit on the ground|stay still|choose to stay) (?:with my friend|near him|beside him|right here)\b/i,
    /\b(?:I stay|I choose to stay|I remain|I sit down|I stick around|I keep him company|I hang out) (?:near him|with my friend|by his side|right here)\b/i,
    
    // Combinações para "permanecer com o amigo" e "fazer companhia"
    /\b(?:stay put|keep him company|keep him close|do nothing|just sit with him|stay calm|stick with him|not leave his side)\b/i,
    /\b(?:choose to stay|opt to remain|decide to keep him close|prefer to stay|end up staying|remain seated) (?:by his side|next to him|with my friend|right here)\b/i,
    /\b(?:stay calm|sit quietly|sit down with him|sit beside him|stay grounded|remain quiet|just be here|make no move)\b/i,
    /\b(?:I make no move|I sit and stay|I stay where I am|I stay here|I decide to stay|I keep my friend company|I sit down next to him)\b/i,
    
    // Expressões de "sentar" e "permanecer ao lado do amigo"
    /\b(?:sit next to him|sit on the ground|sit by him|sit here with him|sit beside my friend|sit close to my friend|just sit|just stay|stay close)\b/i,
    /\b(?:sit with him|stay seated|choose to stay here|decide to stay put|decide not to go|stay put|stay where I am|sit still|sit tight)\b/i,
    /\b(?:remain seated|keep my friend company|choose not to leave|not go anywhere|stay by his side|remain here|decide to remain)\b/i,
    
    // Variações contextuais de permanência e quietude
    /\b(?:keep him company|stay right here|remain sitting|stick by his side|decide to do nothing|do nothing and stay|stay put and wait)\b/i,
    /\b(?:stay close|just stay|not leave|not go anywhere|not move from here|decide to stay here|decide to stay still|stay by my friend)\b/i,
    /\b(?:I keep still|I sit quietly|I remain close|I make no attempt to leave|I decide to keep him company|I choose to stay beside him)\b/i,

    // Gírias e expressões coloquiais
    /\b(?:I’m sticking around|I’m not going anywhere|I’ll just chill here|I’ll hang tight|I’m staying put|I’ll keep him company|I’m sitting tight)\b/i,
    /\b(?:I’m here for him|I’ll hang around|I’ll keep him close|I’m not leaving|I’m sticking close|I’ll stay by his side|I’m chilling here)\b/i,
    /\b(?:chilling with him|hanging by him|chilling close by|sticking around with him|sitting right here with him|hanging out here)\b/i,
    /\b(?:keepin’ it cool here|I’m just kickin’ it here|I’m holding down the fort|keeping my friend company|I’m staying grounded here)\b/i,
    
    // Frases longas e estruturadas com decisão de ficar
    /\b(?:decide to stay put with him|choose to remain by his side|opt to stay here and wait|prefer to stay right here|decide to sit here and wait)\b/i,
    /\b(?:I stay with him|I hang out beside him|I sit down next to him|I stay right here with him|I’m sticking around)\b/i,
    /\b(?:I’m not leaving him|I decide to stay calm|I stay by his side|I sit and wait with him|I’ll stay here with him|I’m keeping him company)\b/i,
    
    // Outras formas de ficar em companhia ou permanecer ao lado
    /\b(?:stay and support him|sit and keep him company|sit and wait|sit close to him|stay close to my friend|decide to be here with him)\b/i,
    /\b(?:choose not to move|stay here for him|stay calm for him|wait beside him|not leaving him|stick by his side)\b/i,
    /\b(?:sit around|just be here|stay and talk to him|stay here and watch over him|stay with him for now|stay seated with him)\b/i,
    /\b(?:remain seated and wait|sit down and be here|stick around for him|sit still by his side|stay grounded by his side|sit here with him)\b/i,
    
    // Variações adicionais para "não sair", "não fazer nada" e "apoiar o amigo"
    /\b(?:I’m staying with him|I decide to stay here|I won’t leave him alone|I choose to stay here quietly|I’ll sit here and wait)\b/i,
    /\b(?:I’ll be by his side|I’ll wait with him|I’m here if he needs me|I’m here for my friend|staying by his side|supporting him quietly)\b/i,
    /\b(?:decide to be here with him|decide not to move|I’m sitting beside him|choosing to remain seated|just gonna stay here|sitting with him)\b/i,
    /\b(?:stick around by his side|hold steady with him|chill here with him|I’ll keep him company|I’m staying here for him)\b/i,
    /\b(?:I’m here beside him|I won’t leave his side|I’ll be here waiting|I’ll stay grounded|I’ll be sitting here quietly)\b/i
,
    // Verbos Simples e Variantes
    /\b(?:rester|reste|attendre|attendant|s’asseoir|m’assieds|garder compagnie|ne pas partir|se tenir prêt|ne rien faire|s’installer)\b[\.,\!\?]*/i,

    // Expressões para "ficar com o amigo" e variações
    /\b(?:rester|rester près de|rester avec|rester à côté de|garder compagnie|être avec|rester au côté de|attendre) (?:mon ami|lui)\b[\.,\!\?]*/i,
    /\b(?:je reste|je décide de rester|je préfère rester|je m’assois|je me tiens prêt) (?:près de lui|à côté de lui|avec lui|avec mon ami)\b[\.,\!\?]*/i,
    /\b(?:je ne pars pas|je reste ici|je choisis de rester|je choisis de ne rien faire|je reste calme|je reste là)\b[\.,\!\?]*/i,
    
    // Combinações para "permanecer avec l'ami" e "garder compagnie"
    /\b(?:garder compagnie|ne rien faire|se poser|juste être ici|rester tranquille|je ne fais rien et reste ici|je reste immobile)\b[\.,\!\?]*/i,
    /\b(?:je reste là pour lui|rester ici avec lui|je ne le quitte pas|je reste auprès de lui|je décide de rester)\b[\.,\!\?]*/i,
    /\b(?:je reste assis|je reste calmement|je reste pour lui|je garde sa compagnie|je m’assois tranquillement)\b[\.,\!\?]*/i,
    
    // Expressões de "s’asseoir" e "être là pour lui"
    /\b(?:je m’assois à côté de lui|je m’assois avec lui|je reste avec lui|je reste assis|je reste ici)\b[\.,\!\?]*/i,
    /\b(?:m’asseoir ici|je m’assois là|rester à ses côtés|rester là pour lui|rester ici calmement|rester assis)\b[\.,\!\?]*/i,
    /\b(?:je garde son soutien|je décide de ne pas bouger|je choisis de rester immobile|je reste et ne fais rien)\b[\.,\!\?]*/i,
    
    // Variações contextuais de permanecer em apoio ao amigo
    /\b(?:rester pour lui|je décide de rester ici|je ne vais nulle part|rester à son côté|je décide de rester calme)\b[\.,\!\?]*/i,
    /\b(?:je me pose ici|je reste avec lui|je choisis de rester à côté|je reste pour le soutenir|je ne bouge pas)\b[\.,\!\?]*/i,
    /\b(?:je décide de ne pas partir|je reste et je l’accompagne|je reste là tranquillement|je reste pour lui)\b[\.,\!\?]*/i,

    // Gírias e expressões coloquiais
    /\b(?:je traîne ici|je m’accroche ici|je vais rester ici|je reste là sans rien faire|je suis là pour lui)\b[\.,\!\?]*/i,
    /\b(?:je reste là pour le soutenir|je ne bouge pas|je suis là si il a besoin|je le soutiens|je reste calmement)\b[\.,\!\?]*/i,
    /\b(?:je m’installe|je prends un moment|je me mets à côté de lui|je suis posé ici|je garde sa compagnie)\b[\.,\!\?]*/i,
    /\b(?:je suis là pour lui|je ne le quitte pas|je reste juste ici|je reste au calme|je reste posé)\b[\.,\!\?]*/i,
    
    // Frases longas e estruturadas com decisão de ficar
    /\b(?:je choisis de rester à ses côtés|je décide de rester ici avec lui|je préfère ne pas partir)\b[\.,\!\?]*/i,
    /\b(?:je décide de rester calme|je reste tranquillement|je choisis de rester là|je reste juste là)\b[\.,\!\?]*/i,
    /\b(?:je décide d’être là pour lui|je reste ici et j’attends|je suis là à ses côtés)\b[\.,\!\?]*/i,
    
    // Outras formas de ficar em companhia ou em apoio


    /\b(?:rester là sans bouger|ne pas partir et rester|rester à ses côtés|être là pour lui|rester ici et attendre)\b[\.,\!\?]*/i,
    /\b(?:rester assis et ne rien faire|s’asseoir et être avec lui|rester près de lui|rester immobile)\b[\.,\!\?]*/i,
    /\b(?:choisir de rester ici|décider de rester tranquille|ne pas partir|ne pas bouger et rester là)\b[\.,\!\?]*/i,
    /\b(?:je reste pour lui|je décide de rester ici|je ne le laisse pas seul|je reste là pour lui)\b[\.,\!\?]*/i,
    // Verbos Simples e Variantes
    /\b(?:qued(?:o|arse|ando|ate aquí|ándome)|permanezco|permanecer|est(?:oy|ar|é)|acompañ(?:o|ar|ando)|me quedo|esper(?:o|ar))\b[\.,\!\?]*/i
    ,
    // Expressões para "ficar com o amigo" e variações 
    /\b(?:qued(?:o|arse|ando|ate aquí|ándome)|permanezco|permanecer|est(?:oy|ar|é)|acompañ(?:o|ar|ando)|me quedo|esper(?:o|ar))\b[\.,\!\?]*/i 
    ,
    /\b(?:quedar|quedarse|quedarse cerca de|permanecer|permanecer aquí|estar con|quedar junto a|estar junto a|esperar con) (?:mi amigo|él|al lado de él)\b[\.,\!\?]*/i,
    /\b(?:me quedo|decido quedarme|prefiero quedarme|me siento con él|me quedo junto a) (?:aquí|al lado de él|con él|con mi amigo)\b[\.,\!\?]*/i,
    /\b(?:no me voy|me quedo aquí|decido no irme|prefiero quedarme|me quedo en este lugar)\b[\.,\!\?]*/i,

    // Combinações para "permanecer con el amigo" e "hacer compañía"
    /\b(?:me quedo sin moverme|me quedo y le hago compañía|decido no irme|decido esperar aquí|no hago nada y me quedo)\b[\.,\!\?]*/i,
    /\b(?:decido quedarme a su lado|quedarme aquí para acompañarlo|no quiero dejarlo solo|quedarme cerca de él|lo acompaño)\b[\.,\!\?]*/i,
    /\b(?:me siento junto a él|me quedo para apoyarlo|decido quedarme con él|espero a su lado|permanezco con él)\b[\.,\!\?]*/i,

    // Expressões de "sentarse" e "estar ahí para él"
    /\b(?:me siento al lado de él|me siento con él|me quedo aquí con él|me quedo a su lado|estoy con él)\b[\.,\!\?]*/i,
    /\b(?:me quedo sentado aquí|me quedo al lado|me siento junto a mi amigo|me quedo sin moverme|decido quedarme cerca)\b[\.,\!\?]*/i,
    /\b(?:me quedo a su lado sin hacer nada|decido quedarme donde estoy|me quedo sin moverme)\b[\.,\!\?]*/i,

    // Variações contextuais de "quedarse" e apoio ao amigo
    /\b(?:me quedo con él|decido quedarme cerca|no me voy de aquí|decido no moverme|prefiero quedarme a su lado)\b[\.,\!\?]*/i,
    /\b(?:me quedo aquí|no hago nada|me mantengo a su lado|decido permanecer|me quedo tranquilamente)\b[\.,\!\?]*/i,
    /\b(?:decido esperar|me quedo acompañándolo|me quedo para apoyarlo|me siento a su lado|me quedo calmado)\b[\.,\!\?]*/i,

    // Gírias e expressões coloquiais
    /\b(?:me quedo con él sin moverme|no me muevo de aquí|me quedo acá|me hago presente para él|me quedo a su lado)\b[\.,\!\?]*/i,
    /\b(?:me quedo aquí con calma|aquí estoy para él|me quedo por si me necesita|decido quedarme cerca de él)\b[\.,\!\?]*/i,
    /\b(?:no lo dejo solo|me quedo para hacerle compañía|me mantengo aquí con él|me siento aquí tranquilo)\b[\.,\!\?]*/i,
    /\b(?:me quedo firme|me quedo apoyándolo|me quedo con él sin moverme|me mantengo junto a él)\b[\.,\!\?]*/i,
    
    // Frases longas e estruturadas com decisão de ficar
    /\b(?:decido no moverme de aquí|decido quedarme a su lado sin irme|prefiero quedarme cerca de él|me quedo en su compañía)\b[\.,\!\?]*/i,
    /\b(?:me quedo en el lugar|me quedo con calma|me quedo a su lado tranquilamente|me quedo en este lugar con él)\b[\.,\!\?]*/i,
    /\b(?:me quedo donde estoy|me quedo aquí por él|me mantengo en su lado|me quedo con él y no me muevo)\b[\.,\!\?]*/i,

    // Outras formas de ficar em companhia ou em apoio
    /\b(?:decido hacerle compañía|me quedo a su lado|me quedo aquí para él|permaneceré con él|decido apoyarlo)\b[\.,\!\?]*/i,
    /\b(?:me mantengo al lado de él|prefiero no irme|me quedo en calma junto a él|me siento con él para apoyarlo)\b[\.,\!\?]*/i,
    /\b(?:quedarme aquí y esperar|me quedo al lado de mi amigo|me siento para estar con él|me quedo en este sitio)\b[\.,\!\?]*/i,

    // Variações adicionais para "no salir" e "hacer compañía"
    /\b(?:decido no salir de aquí|no me aparto de él|me quedo aquí para apoyarlo|me siento tranquilo aquí)\b[\.,\!\?]*/i,
    /\b(?:no lo dejo solo|me quedo aquí para él|me quedo firme en este lugar|decido no alejarme)\b[\.,\!\?]*/i,
    /\b(?:me mantengo al lado de él sin moverme|me quedo para acompañarlo|me quedo en este sitio por él)\b[\.,\!\?]*/i
 ,
    // Verbos Simples e Variantes
    /\b(?:fic(?:o|ar|ando|ar com meu amigo)|permanec(?:o|er|endo)|est(?:ou|ar|ou com ele)|esper(?:o|ar|ando|ando aqui))\b[\.,\!\?]*/i,
    
    // Expressões para "ficar com o amigo" e variações
    /\b(?:fic(?:o|ar) (?:perto de|ao lado de|com meu amigo|junto a)|espero (?:com meu amigo|por ele)|permanecer(?: com ele)?|permaneço)\b[\.,\!\?]*/i,
    /\b(?:decido ficar|prefiro ficar|me sento perto dele|fico ao lado dele|fico com ele|fico ao lado de)\b[\.,\!\?]*/i,
    /\b(?:não vou sair|fico aqui|decido ficar aqui|espero aqui mesmo|fico onde estou|prefiro não ir embora)\b[\.,\!\?]*/i,

    // Combinações para "permanecer com o amigo" e "fazer companhia"
    /\b(?:permanecer quieto|ficar parado|espero com calma|decido não fazer nada|continuo com ele|fico aqui sem sair)\b[\.,\!\?]*/i,
    /\b(?:fico para apoiá-lo|decido não ir embora|me sento com ele|mantenho a companhia|fico calmo aqui|decido ficar aqui)\b[\.,\!\?]*/i,
    /\b(?:me mantenho perto de meu amigo|decido ficar ao lado dele|fico ao lado dele em silêncio|fico junto com ele)\b[\.,\!\?]*/i,

    // Expressões de "sentar" e "ficar ali para ele"
    /\b(?:me sento com meu amigo|decido esperar com ele|fico ao lado dele para dar suporte|me acomodo com ele|fico aqui mesmo)\b[\.,\!\?]*/i,
    /\b(?:me sento no chão|me sento ao lado dele|me sento junto a ele|espero aqui perto dele|me coloco ao lado de meu amigo)\b[\.,\!\?]*/i,
    /\b(?:decido me sentar ao lado de meu amigo|fico com ele em silêncio|não me movo|decido não sair daqui)\b[\.,\!\?]*/i,

    // Variações contextuais para "ficar" e "apoiar o amigo"
    /\b(?:decido não me afastar|espero aqui com ele|fico tranquilo ao lado de meu amigo|não vou a lugar nenhum)\b[\.,\!\?]*/i,
    /\b(?:fico aqui com calma|não faço nada e fico|decido não me mover|prefiro ficar aqui com ele|mantenho-me ao lado)\b[\.,\!\?]*/i,
    /\b(?:fico esperando com ele|mantenho a calma e fico|decido ficar onde estou|espero por ele aqui)\b[\.,\!\?]*/i,

    // Gírias e expressões coloquiais
    /\b(?:fico de boa|tô aqui com ele|não saio daqui|fico segurando a barra|fico de boa ao lado dele|tô aqui por ele)\b[\.,\!\?]*/i,
    /\b(?:não vou largar ele|fico aqui se precisar|me mantenho firme com ele|fico acompanhando ele|não deixo ele)\b[\.,\!\?]*/i,
    /\b(?:fico junto a ele|tô aqui do lado|fico com ele na moral|fico parado por aqui|tô aqui segurando a onda)\b[\.,\!\?]*/i,
    /\b(?:espero por ele|não largo ele|me mantenho aqui|tô aqui tranquilo com ele|fico com ele na paz)\b[\.,\!\?]*/i,

    // Frases longas e estruturadas com decisão de ficar
    /\b(?:decido esperar aqui com ele|prefiro não sair de perto|fico aqui para dar suporte|fico para não deixá-lo só)\b[\.,\!\?]*/i,
    /\b(?:me sento ao lado dele para apoiar|mantenho-me em silêncio aqui com ele|fico esperando ele aqui)\b[\.,\!\?]*/i,
    /\b(?:fico ao lado de meu amigo em paz|espero por ele|fico onde estou e aguardo|fico com ele no mesmo lugar)\b[\.,\!\?]*/i,

    // Outras formas de ficar em companhia ou em apoio
    /\b(?:decido estar aqui para ele|mantenho-me com ele|fico esperando para ajudar|fico ao lado dele para apoiar)\b[\.,\!\?]*/i,
    /\b(?:não saio do lado dele|decido não me afastar|fico com meu amigo|espero com ele|mantenho-me junto dele)\b[\.,\!\?]*/i,
    /\b(?:não faço nada além de esperar|fico ao lado para dar apoio|fico aqui e observo|me mantenho perto)\b[\.,\!\?]*/i,

    // Variações adicionais para "não sair" e "fazer companhia"
    /\b(?:decido não sair daqui|espero ao lado|fico para manter a companhia|fico para ajudar)\b[\.,\!\?]*/i,
    /\b(?:não me afasto|fico firme ao lado|me mantenho perto|fico por ele|fico na companhia dele)\b[\.,\!\?]*/i,
    /\b(?:espero ao lado dele|decido ficar ao lado dele|me mantenho junto a ele|tô por aqui com ele)\b[\.,\!\?]*/i
]
, 



      readNote: [
            /\bler.*nota\b[\.,\!\?]?/i,
    /\bler a carta\b[\.,\!\?]?/i,
    /\bler e entender\b[\.,\!\?]?/i,
    /\bver.*nota\b[\.,\!\?]?/i,
    /\bobservar.*nota\b[\.,\!\?]?/i,
    /\bexaminar.*nota\b[\.,\!\?]?/i,
    /\bestudar.*nota\b[\.,\!\?]?/i,
    /\bentender.*nota\b[\.,\!\?]?/i,
    /\bcompreender.*nota\b[\.,\!\?]?/i,
    /\bchecar.*nota\b[\.,\!\?]?/i,
    /\brevisar.*conteúdo\b[\.,\!\?]?/i,
    /\babrir.*nota para ler\b[\.,\!\?]?/i,
    /\babrir e ler\b[\.,\!\?]?/i,
    /\bolhar o que está escrito\b[\.,\!\?]?/i,
    /\banalisar.*texto\b[\.,\!\?]?/i,
    /\bver o que está escrito\b[\.,\!\?]?/i,
    /\bexaminar cuidadosamente\b[\.,\!\?]?/i,
    /\bobservar o conteúdo\b[\.,\!\?]?/i,
    /\bler detalhadamente\b[\.,\!\?]?/i,
    /\bestudar o texto\b[\.,\!\?]?/i,
    /\bolhar o conteúdo\b[\.,\!\?]?/i,
    /\bver mensagem\b[\.,\!\?]?/i,
    /\bcompreender o que está lá\b[\.,\!\?]?/i,
    /\babrir a nota e ler\b[\.,\!\?]?/i,
    /\bconferir o conteúdo\b[\.,\!\?]?/i,
    /\bchecar o que está escrito\b[\.,\!\?]?/i,
    /\banalisar o que está dentro\b[\.,\!\?]?/i,
    /\bscrutinar a nota\b[\.,\!\?]?/i,
    /\bler tudo\b[\.,\!\?]?/i,
    /\bestudar cuidadosamente\b[\.,\!\?]?/i,
    /\bobservar o texto\b[\.,\!\?]?/i,
    /\bolhar o que está lá\b[\.,\!\?]?/i,
    /\bver o conteúdo\b[\.,\!\?]?/i,
    /\babrir para ler\b[\.,\!\?]?/i,
    /\binvestigar o que está escrito\b[\.,\!\?]?/i,
    /\bentender o conteúdo\b[\.,\!\?]?/i,
    /\bver e interpretar\b[\.,\!\?]?/i,
    /\bexaminar o conteúdo\b[\.,\!\?]?/i,
    /\bobservar o que está escrito\b[\.,\!\?]?/i,
    /\banalisar o texto\b[\.,\!\?]?/i,
    /\bler e estudar\b[\.,\!\?]?/i,
    /\bler com atenção\b[\.,\!\?]?/i,
    /\bler com calma\b[\.,\!\?]?/i,
    /\bver o que diz a nota\b[\.,\!\?]?/i,
    /\bler a mensagem\b[\.,\!\?]?/i,
    /\bver o conteúdo detalhadamente\b[\.,\!\?]?/i,
    /\bexaminar a mensagem\b[\.,\!\?]?/i,
    /\bconferir a nota\b[\.,\!\?]?/i,
    /\bolhar o bilhete\b[\.,\!\?]?/i,
    /\bestudar o documento\b[\.,\!\?]?/i,
    /\bler para entender\b[\.,\!\?]?/i,
    /\bcompreender o significado\b[\.,\!\?]?/i,
    /\bver o que diz\b[\.,\!\?]?/i,
    /\babrir e estudar\b[\.,\!\?]?/i,
    /\banalisar cuidadosamente\b[\.,\!\?]?/i,
    /\bler e revisar\b[\.,\!\?]?/i,
    /\binvestigar o conteúdo\b[\.,\!\?]?/i,
    /\bentender o que está escrito\b[\.,\!\?]?/i,
    /\bchecar a mensagem\b[\.,\!\?]?/i,
    /\bobservar para entender\b[\.,\!\?]?/i,
    /\bler com cuidado\b[\.,\!\?]?/i,
    /\bler com pressa\b[\.,\!\?]?/i,
    /\bler devagar\b[\.,\!\?]?/i,
    /\bchecar com atenção\b[\.,\!\?]?/i,
    /\banalisar o que foi escrito\b[\.,\!\?]?/i,
    /\bobservar o documento\b[\.,\!\?]?/i
,
        // English
        /read.*note/i, /check.*note/i, /examine.*note/i, /I read.*note/i, /open.*note/i,
        /look.*note/i, /inspect.*note/i, /study.*note/i, /see.*note/i, /I observe.*note/i,
        /analyze.*note/i, /I review.*note/i, /check the contents/i, /what’s in.*note/i, 
        /look at the message/i, /take a closer look/i, /review contents/i, /open note to read/i, 
        /take time to read/i, /read through the note/i, /I open and read/i, /observe the message/i, 
        /scrutinize the note/i, /read what's written/i, /review what’s inside/i, /I go over.*note/i,
        /take note of contents/i, /analyze what's there/i, /study carefully/i, /read all/i,
        /inspect the contents/i, /I read it carefully/i, /glance over the note/i, /I examine/i,
        /take a look at what it says/i, /focus on.*note/i, /I inspect closely/i, /read message carefully/i,
        /look over what’s there/i, /inspect text/i, /what’s in this note/i, /review the note/i,
        /observe what’s inside/i, /what’s the message/i, /I read the message/i, /see message/i,
        /take a look inside/i, /open the note/i, /read and understand/i, /check what it says/i,

        // Spanish
        /leer.*nota/i, /checar.*nota/i, /mirar.*nota/i, /inspeccionar.*nota/i, /yo leo.*nota/i,
        /revisar.*nota/i, /abrir.*nota/i, /examinar.*nota/i, /analizar.*nota/i,
        /observar.*nota/, /ver.*nota/i, /ver contenido/i, /leer contenido/i, /ver mensaje/i, /observar lo que dice/i,
        /revisar el mensaje/i, /abrir para leer/i, /mirar de cerca/i, /ver qué contiene/i, /revisar lo que dice/i,
        /ver contenido de la nota/i, /analizar contenido/i, /yo reviso.*nota/i, /checar el mensaje/i,
        /leer el mensaje/i, /mirar contenido/i, /yo leo el mensaje/i, /revisar el contenido/i, /leer atentamente/i,
        /observar el contenido/i, /inspeccionar el mensaje/i, /ver lo que dice/i, /abrir para leer/i,
        /revisar texto/i, /mirar con calma/i, /analizar lo escrito/i, /leer cuidadosamente/i, /ver qué contiene/i,
        /leer lo que está en la nota/i, /examinar lo que está ahí/i, /yo observo el mensaje/i, /ver contenido/i,
        /yo leo.*texto/i, /examinar atentamente/i, /mirar lo que hay escrito/i, /leer cada detalle/i,
        /mirar lo que contiene la nota/i, /leer lo que hay/i, /examinar mensaje/i, /mirar mensaje/i,
        /revisar detenidamente/i, /observar qué contiene/i, /revisar lo que tiene/i, /checar el texto/i,
        /examinar lo que está en la nota/i, /revisar la escritura/i, /yo veo lo que dice/i, /leer con detenimiento/i,

        // French
        /lire.*note/i, /examiner.*note/i, /observer.*note/i, /consulter.*note/i,
        /voir.*note/i,
        /analyser.*note/i, /je lis.*note/i, /ouvrir.*note/i, /regarder.*note/i, /lire le contenu/i,
        /observer le message/i, /voir ce qu’il y a/i, /étudier.*note/i, /lire attentivement/i,
        /inspecter.*note/i, /observer ce qui est écrit/i, /analyser le contenu/i, /prendre connaissance.*note/i,
        ],
    start: {
        barrel: [
            // English
            /move.*barrel/i, /roll.*barrel/i, /push.*barrel/i, /shift.*barrel/i, /nudge.*barrel/i,
            /drag.*barrel/i, /slide.*barrel/i, /shove.*barrel/i, /kick.*barrel/i, /pull.*barrel/i,
            /lift.*barrel/i, /toss.*barrel/i, /I move.*barrel/i, /I push.*barrel/i, /I'm shifting.*barrel/i,
            /adjust.*barrel/i, /clear.*barrel/i, /budge.*barrel/i, /I’ll push.*barrel/i, /try.*move.*barrel/i,
            /attempt.*shift.*barrel/i, /make room.*barrel/i, /set aside.*barrel/i, /push it/i,
            /make.*barrel.*move/i, /start rolling.*barrel/i, /roll that/i, /heave.*barrel/i,
            
            // Spanish
            /muevo.*barril/i, /empujo.*barril/i, /arrastro.*barril/i, /yo intento mover.*barril/i,
            /yo empujo.*barril/i, /yo deslizo.*barril/i, /empujar.*barril/i, /empezar.*rodar.*barril/i,
            /yo trato.*barril/i, /hacer.*barril/i, /rodar.*barril/i, /tirar.*barril/i, /quitar.*barril/i,
            /barrel para mover/i, /mover.*drum/i, /cambiar.*posición.*barril/i, /mueve el tambor/i,
            /levanto.*barril/i, /yo empujo el tambor/i,

            // French
            /je déplace.*tonneau/i, /je pousse.*tonneau/i, /je fais.*bouger.*tonneau/i,
            /j'essaie.*déplacer.*tonneau/i, /en train.*déplacer.*tonneau/i, /pousser.*tonneau/i,
            /je roule.*tonneau/i, /je traîne.*tonneau/i, /je bouge.*tonneau/i, /j'arrache.*tonneau/i,
            /soulever.*tonneau/i, /faire.*tonneau/i, /je lance.*tonneau/i, /tonneau.*mover/i,
            /je commence.*rouler.*tonneau/i, /je lève.*tonneau/i, /je transporte.*tonneau/i,

            // Portuguese
/\b(?:(?:eu\s+)?(?:movo|movendo|mover|moviment(?:o|ando)|mex(?:o|endo))\s*(?:o|um)?\s*(?:barril|tambor)|(?:eu\s+)?(?:empurr(?:o|ando|ar)|chut(?:o|ando)|arrast(?:o|ando|ar)|levant(?:o|ando|ar)|pux(?:o|ando))\s*(?:o|um)?\s*(?:barril|tambor)|tentando\s*(?:mover|empurrar|tirar|arrastar)\s*(?:o|um)?\s*(?:barril|tambor)|sai(?:r|am)?\s*(?:da frente|do caminho)?\s*(?:do|de um|de o)?\s*(?:barril|tambor)|retiro\s*(?:o|um)?\s*(?:barril|tambor)|ajeito\s*(?:o|um)?\s*(?:barril|tambor)|vou\s+(?:mover|empurrar|arrastar|mexer|tirar)\s*(?:o|um)?\s*(?:barril|tambor))\b/i

],
        friend: [
            // English
            /sit.*friend/i, /stay.*friend/i, /I sit by.*friend/i, /stay with.*friend/i,
            /talk.*friend/i, /check.*friend/i, /help.*friend/i, /I comfort.*friend/i,
            /remain.*friend/i, /sit close.*friend/i, /I stay near.*friend/i, /talk.*near.*friend/i,
            /check.*near.*friend/i, /support.*friend/i, /watch.*friend/i, /stay by.*friend/i,
            /I wait with.*friend/i, /I am with.*friend/i, /friend by my side/i, /I keep company.*friend/i,
            /I stay beside.*friend/i, /sit down with.*friend/i, /wait for.*friend/i, /stay around/i,

            // Spanish
            /me siento.*amigo/i, /me quedo.*amigo/i, /yo hablo.*amigo/i, /yo cuido.*amigo/i,
            /acompaño.*amigo/i, /me quedo al lado.*amigo/i, /estoy con.*amigo/i,
            /hablo con.*amigo/i, /me siento al lado.*amigo/i, /me quedo con.*amigo/i,
            /yo ayudo.*amigo/i, /me quedo con el/i, /yo me acerco.*amigo/i, /le hablo/i, /estoy con él/i,
            /permanecer.*amigo/i, /me quedo cerca de.*amigo/i, /acompañar a.*amigo/i, /estar al lado/i,

            // French
            /je m'assois.*ami/i, /je reste.*ami/i, /je parle.*ami/i, /je vérifie.*ami/i,
            /je suis.*ami/i, /je reste avec.*ami/i, /je suis à côté.*ami/i, /je suis là pour.*ami/i,
            /je réconforte.*ami/i, /je m'occupe.*ami/i, /je veille.*ami/i, /je soutiens.*ami/i,
            /je reste.*ami/i, /rester.*ami/i, /parler avec.*ami/i, /être avec.*ami/i,
            /je suis là avec.*ami/i, /je m’assois auprès de.*ami/i, /je garde.*ami/i, /je m’approche/i,

            // Portuguese
    
    /.*\bsentar\b.*(com|ao lado de|junto a).*amigo\b.*/i, /.*\bfiquei\b.*(com|perto de|ao lado de).*amigo\b.*/i,
    /.*\bfiquei ao lado\b.*amigo\b.*/i, /.*\bfiquei com\b.*meu amigo\b.*/i, /.*\bfiquei esperando\b.*amigo\b.*/i,
    /.*\bapoio\b.*amigo\b.*/i, /.*\bficar\b.*com.*amigo\b.*/i, /.*\bpermaneci\b.*com.*amigo\b.*/i,
    /.*\bestou\b.*com.*amigo\b.*/i, /.*\bconversei\b.*amigo\b.*/i, /.*\bpermanecer\b.*com amigo\b.*/i,
    /.*\bconversar com\b.*amigo\b.*/i, /.*\bestar com\b.*amigo\b.*/i, /.*\besperar\b.*(com|por).*amigo\b.*/i,
    /.*\bme aproximei\b.*amigo\b.*/i, /.*\bcheguei perto de\b.*amigo\b.*/i, /.*\btentei ajudar\b.*amigo\b.*/i,
    /.*\beu me sentei perto de\b.*amigo\b.*/i, /.*\bfiquei ao lado\b.*dele\b.*/i, /.*\beu fico com\b.*amigo\b.*/i,
    /.*\bfico junto\b.*amigo\b.*/i, /.*\besperando com\b.*amigo\b.*/i, /.*\bme mantenho\b.*ao lado de.*amigo\b.*/i,
    /.*\bcontinuo perto\b.*amigo\b.*/i, /.*\beu fico ao lado de\b.*amigo\b.*/i, /.*\bsentar ao lado de\b.*amigo\b.*/i,
    /.*\bfiquei sentado\b.*com.*amigo\b.*/i, /.*\bsentei perto\b.*dele\b.*/i, /.*\bcontinuo junto\b.*amigo\b.*/i,
    /.*\btentei apoiar\b.*amigo\b.*/i, /.*\bfiquei esperando por\b.*amigo\b.*/i, /.*\bme coloco ao lado de\b.*amigo\b.*/i,
    /.*\bdecido esperar com\b.*amigo\b.*/i, /.*\bperto de\b.*amigo\b.*/i, /.*\bconverso com\b.*amigo\b.*/i,
    /.*\bme coloco\b.*junto de\b.*amigo\b.*/i, /.*\bfiquei de olho\b.*no meu amigo\b.*/i, /.*\bdecido ficar perto de\b.*amigo\b.*/i,
    /.*\bestar\b.*junto.*amigo\b.*/i, /.*\bme aproximei de\b.*amigo\b.*/i, /.*\bespero perto\b.*amigo\b.*/i,
    /.*\bestar perto\b.*dele\b.*/i, /.*\bdecido sentar\b.*ao lado de\b.*amigo\b.*/i, /.*\bdecidi\b.*esperar com\b.*amigo\b.*/i,
    /.*\bme mantenho\b.*ao lado\b.*dele\b.*/i, /.*\bdecido\b.*ficar.*com\b.*meu amigo\b.*/i, /.*\bcontinuo com\b.*amigo\b.*/i,
    /.*\bpermaneço ao lado\b.*dele\b.*/i, /.*\bcontinuo ali com\b.*amigo\b.*/i, /.*\bfico.*com ele\b.*/i,
    /.*\bfico perto\b.*dele\b.*/i, /.*\bfico aqui\b.*com.*amigo\b.*/i, /.*\bfiquei observando\b.*meu amigo\b.*/i,
    /.*\beu apoio\b.*meu amigo\b.*/i, /.*\bfiquei ao lado\b.*dele\b.*/i, /.*\bespero aqui\b.*com.*amigo\b.*/i,
    /.*\bpermaneci ao lado\b.*amigo\b.*/i, /.*\bfico aqui com\b.*amigo\b.*/i, /.*\bpermaneço com\b.*amigo\b.*/i

        ]
    },
pathA: {
    enter: [
        // Portuguese
        /.*\bentrar.*túnel\b.*/i, /.*\beu entro.*túnel\b.*/i, /.*\bdecido entrar.*túnel\b.*/i,
        /.*\bcontinuo.*túnel\b.*/i, /.*\bvou.*túnel\b.*/i, /.*\bcaminho até.*túnel\b.*/i,
        /.*\binicio.*túnel\b.*/i, /.*\bcaminhar para.*túnel\b.*/i, /.*\bexplorar.*túnel\b.*/i,
        /.*\bindo.*túnel\b.*/i, /.*\bvou para.*túnel\b.*/i, /.*\bindo em direção.*túnel\b.*/i,
        /.*\bme aproximo.*túnel\b.*/i, /.*\bdescendo.*túnel\b.*/i, /.*\bcaminho até o túnel\b.*/i,
        /.*\bvou direto.*túnel\b.*/i, /.*\bdescer no.*túnel\b.*/i, /.*\bentrar para.*túnel\b.*/i,
        /.*\bdecido descer.*túnel\b.*/i, /.*\bindo em direção ao.*túnel\b.*/i,

        // English
        /.*\benter.*tunnel\b.*/i, /.*\bI enter.*tunnel\b.*/i, /.*\bdecide to enter.*tunnel\b.*/i,
        /.*\bcontinue.*tunnel\b.*/i, /.*\bgoing to.*tunnel\b.*/i, /.*\bwalk towards.*tunnel\b.*/i,
        /.*\bI’m entering.*tunnel\b.*/i, /.*\bgoing down.*tunnel\b.*/i, /.*\bheading to.*tunnel\b.*/i,
        /.*\bmove towards.*tunnel\b.*/i, /.*\bstart moving.*tunnel\b.*/i, /.*\bexploring.*tunnel\b.*/i,
        /.*\bdecide to go into.*tunnel\b.*/i, /.*\bin.*tunnel\b.*/i, /.*\bI proceed into.*tunnel\b.*/i,
        /.*\bdescend into.*tunnel\b.*/i, /.*\bwalking into.*tunnel\b.*/i,

        // Spanish
        /.*\bentrar.*túnel\b.*/i, /.*\bentro.*túnel\b.*/i, /.*\bdecido entrar.*túnel\b.*/i,
        /.*\bcontinuo.*túnel\b.*/i, /.*\bme voy.*túnel\b.*/i, /.*\bme dirijo.*túnel\b.*/i,
        /.*\bexplorar.*túnel\b.*/i, /.*\bcomienzo.*túnel\b.*/i, /.*\bme adentro.*túnel\b.*/i,
        /.*\bdescender.*túnel\b.*/i, /.*\bvoy hacia.*túnel\b.*/i, /.*\bempiezo a bajar.*túnel\b.*/i,
        /.*\bcamino hacia.*túnel\b.*/i, /.*\bdecido.*túnel\b.*/i, /.*\bsigo.*túnel\b.*/i,

        // French
        /.*\bentrer.*tunnel\b.*/i, /.*\bj'entre.*tunnel\b.*/i, /.*\bje commence.*tunnel\b.*/i,
        /.*\bj'avance.*tunnel\b.*/i, /.*\bdescendre.*tunnel\b.*/i, /.*\bje vais vers.*tunnel\b.*/i,
        /.*\bm'engage.*tunnel\b.*/i, /.*\bexplorer.*tunnel\b.*/i, /.*\bprogresser.*tunnel\b.*/i,
        /.*\bje vais dans.*tunnel\b.*/i, /.*\bje commence à entrer.*tunnel\b.*/i,
        /.*\bj'avance dans.*tunnel\b.*/i, /.*\bje descends.*tunnel\b.*/i, /.*\bprendre.*tunnel\b.*/i
    ],

    stay: [
        // Portuguese
        /.*\bfico aqui\b.*/i, /.*\bdecido ficar\b.*/i, /.*\bparado\b.*/i, /.*\bnão vou me mover\b.*/i,
        /.*\bespero aqui\b.*/i, /.*\bme mantenho\b.*/i, /.*\bcontinuo aqui\b.*/i, /.*\bnão vou a lugar algum\b.*/i,
        /.*\bnão saio\b.*/i, /.*\bfiquei\b.*/i, /.*\bme seguro\b.*/i, /.*\bpermaneço\b.*/i, /.*\bficar parado\b.*/i,
        /.*\bpermanecer\b.*/i, /.*\bnão saio daqui\b.*/i, /.*\bficarei\b.*/i, /.*\bfico no mesmo lugar\b.*/i,

        // English
        /.*\bI stay\b.*/i, /.*\bstaying here\b.*/i, /.*\bremain\b.*/i, /.*\bnot moving\b.*/i, /.*\bstand still\b.*/i,
        /.*\bnot going anywhere\b.*/i, /.*\bhold position\b.*/i, /.*\bkeeping still\b.*/i, /.*\bI’m waiting\b.*/i,
        /.*\bstaying put\b.*/i, /.*\bholding my ground\b.*/i, /.*\bdecide to stay\b.*/i, /.*\bno moving\b.*/i,

        // Spanish
        /.*\bme quedo aquí\b.*/i, /.*\bno hago nada\b.*/i, /.*\bquedarse\b.*/i, /.*\bno me muevo\b.*/i,
        /.*\bme mantengo\b.*/i, /.*\bdecido quedarme\b.*/i, /.*\bme paro\b.*/i, /.*\bme quedo con\b.*/i,
        /.*\besperaré\b.*/i, /.*\bquieto\b.*/i, /.*\bquedo aquí\b.*/i, /.*\bno me voy\b.*/i, /.*\bme quedo\b.*/i,

        // French
        /.*\brester\b.*/i, /.*\bje reste ici\b.*/i, /.*\bpause\b.*/i, /.*\bje décide de rester\b.*/i,
        /.*\bje ne bouge pas\b.*/i, /.*\bje suis ici\b.*/i, /.*\bje reste avec\b.*/i, /.*\bje vais rester\b.*/i,
        /.*\bpremier choix\b.*/i, /.*\bje m’arrête\b.*/i, /.*\bje reste ici\b.*/i, /.*\bje ne vais nulle part\b.*/i
    ],

    call: [
        // English
        /.*\bcall.*friend\b.*/i, /.*\btake.*friend\b.*/i, /.*\bI bring my friend\b.*/i, /.*\bdrag.*friend\b.*/i,
        /.*\bcome along\b.*/i, /.*\bbring him with me\b.*/i, /.*\bI take him\b.*/i, /.*\btake friend along\b.*/i,
        /.*\bhelp my friend\b.*/i, /.*\bI pull my friend\b.*/i, /.*\bbring my friend\b.*/i, /.*\btogether with friend\b.*/i,
        /.*\bfriend comes with\b.*/i, /.*\bnot leave friend\b.*/i, /.*\bget friend\b.*/i, /.*\bgrab friend\b.*/i,
        /.*\bcall him along\b.*/i, /.*\bguide friend\b.*/i, /.*\bmake sure friend joins\b.*/i, /.*\bmy friend follows\b.*/i,

        // Spanish
        /.*\bllamo.*amigo\b.*/i, /.*\bme llevo.*amigo\b.*/i, /.*\btraigo.*amigo\b.*/i, /.*\blevo.*amigo\b.*/i,
        /.*\barrastro.*amigo\b.*/i, /.*\bvenir con amigo\b.*/i, /.*\bmi amigo viene\b.*/i, /.*\bno dejo a mi amigo\b.*/i,
        /.*\bme lo llevo\b.*/i, /.*\bamigo me acompaña\b.*/i, /.*\bme acompaña\b.*/i, /.*\bmi amigo conmigo\b.*/i,
        /.*\bme lleva.*amigo\b.*/i, /.*\bme lo traigo\b.*/i, /.*\bjunto con amigo\b.*/i, /.*\bme aseguro de llevar\b.*/i,
        /.*\bamigo conmigo\b.*/i, /.*\bmi amigo viene\b.*/i, /.*\blo traigo conmigo\b.*/i, /.*\blevar mi amigo\b.*/i,

        // French
        /.*\bj’emmène mon ami\b.*/i, /.*\bje prends mon ami\b.*/i, /.*\bje l’amène\b.*/i, /.*\bje l’emmène\b.*/i,
        /.*\bmon ami avec moi\b.*/i, /.*\bmon ami vient\b.*/i, /.*\bje ne le laisse pas\b.*/i, /.*\bje prends avec\b.*/i,
        /.*\bmon ami m’accompagne\b.*/i, /.*\bje vais avec mon ami\b.*/i, /.*\bje reste avec mon ami\b.*/i, 
        /.*\bmon ami me suit\b.*/i, /.*\bje le prends avec\b.*/i, /.*\bavec mon ami\b.*/i, /.*\bje le prends avec moi\b.*/i,
        /.*\bj’apporte mon ami\b.*/i, /.*\bensemble avec ami\b.*/i, /.*\bmon ami vient avec moi\b.*/i,
        /.*\bje vais emmener mon ami\b.*/i, /.*\bmon ami reste avec moi\b.*/i,

        // Portuguese
        /.*\blevo meu amigo\b.*/i, /.*\bchamo meu amigo\b.*/i, /.*\bcarrego meu amigo\b.*/i, /.*\bmeu amigo me acompanha\b.*/i,
        /.*\blevar junto meu amigo\b.*/i, /.*\btrago meu amigo\b.*/i, /.*\bnão deixo meu amigo\b.*/i, /.*\blevo ele junto\b.*/i,
        /.*\btrago ele comigo\b.*/i, /.*\btrazer ele comigo\b.*/i, /.*\bjunto com meu amigo\b.*/i, /.*\bpego meu amigo\b.*/i,
        /.*\btrazer meu amigo\b.*/i, /.*\bajudo meu amigo\b.*/i, /.*\blevo ele comigo\b.*/i, /.*\btrazer ele junto\b.*/i,
        /.*\bele acompanha\b.*/i, /.*\bele vem comigo\b.*/i, /.*\blevo ele junto\b.*/i, /.*\bele está comigo\b.*/i,
        /.*\bele fica comigo\b.*/i, /.*\blevo junto comigo\b.*/i, /.*\btrago meu amigo\b.*/i
    ]
},
pathB: [
  
  
    /\b(?:eu\s+)?(?:acend(?:o|endo|er|endo)|risco|vou\s+acender|quero\s+acender|tent(?:o|ar\s+acender)|uso|usando)\s*(?:um|o|algum)?\s*(?:fósforo|palito)\b/i,
    /\b(?:faço|cri(?:o|ando)|quero\s+fazer|vou\s+fazer|tent(?:o|ando\s+fazer))\s*(?:uma\s+chama|fogo)\s*(?:com\s+)?(?:fósforo|palito)?\b/i,
    /\b(?:coloc(?:o|ando)|ponh(?:o|endo))\s*(?:o|um)?\s*(?:fósforo|palito)\s*(?:no fogo|em chamas)?\b/i,
    /\b(?:provoc(?:o|ar|ando))\s*(?:fogo|chamas)\s*(?:com\s+)?(?:fósforo|palito)?\b/i,
    /\b(?:faço|crio|quero\s+criar|vou\s+criar|tent(?:o|ando\s+criar))\s*(?:uma\s+faísca|faisca)\s*(?:com\s+)?(?:fósforo|palito)?\b/i,
    /\b(?:acenda|acender)\s+(?:o|um)?\s*(?:fósforo|palito)?\b/i,
    /\b(?:riscar|risco|vou\s+riscar|quero\s+riscar)\s*(?:o|um)?\s*(?:fósforo|palito)?\b/i,
    /\b(?:uso|usando|vou\s+usar|quero\s+usar)\s*(?:o|um)?\s*(?:fósforo|palito)?\b/i,
    /\b(?:faço|fazer|vou\s+fazer)\s+(?:fogo|uma\s+chama|um\s+incêndio)\s*(?:com\s+)?(?:fósforo|palito)?\b/i,
    /\b(?:chama|faisca|incêndio)\s*(?:com\s+)?(?:fósforo|palito)?\b/i,
    /\b(?:vou\s+fazer|vou\s+acender|quero\s+acender|tentando\s+acender)\s+(?:um\s+fósforo|fogo)?\b/i,
    /\b(?:faça|crie|acenda|acendendo|risque)\s*(?:o|um)?\s*(?:fósforo|palito)?\b/i,
    /\b(?:incendeio|vou\s+incendiar|quero\s+incendiar|tent(?:o|ando\s+incendiar))\s*(?:o|um)?\s*(?:fósforo|palito|fogo)?\b/i,
    /\b(?:uso|utilizo)\s*(?:o|um)?\s*(?:fósforo|palito)?\b/i,
    /\b(?:quero\s+fazer\s+fogo|faço\s+uma\s+chama|crio\s+faisca)\s*(?:com\s+)?(?:fósforo|palito)?\b/i,
    /\b(?:fósforo|palito\s*(?:de\s+fósforo)?|faísca|chama|fogo)\b/i ,

    // English
    /light.*match/i, /ignite.*match/i, /burn.*match/i, /spark.*match/i, /strike.*match/i,
    /use.*match/i, /set fire.*match/i, /I light.*match/i, /I’m lighting.*match/i, /light it up/i,
    /I’ll light.*match/i, /I ignite.*match/i, /set.*match alight/i, /I strike.*match/i, /use a match/i,
    /I use.*match/i, /try to light.*match/i, /I want to light.*match/i, /fire.*match/i, /make a flame.*match/i,
    /put.*match.*fire/i, /create fire with.*match/i, /make fire/i, /ignite it/i, /make a spark/i,
    /get flame with.*match/i, /light a fire/i, /flame with.*match/i, /ignite the match/i, /match for fire/i,
    /create a spark/i, /strike a light/i, /I am sparking.*match/i, /light with.*match/i, /use flame.*match/i,
    /set light to.*match/i, /create flame with.*match/i, /matchstick/i, /I take.*match/i, /I create fire/i,
    /flare up.*match/i, /I want fire/i, /fire up/i, /spark up.*match/i, /bring.*match.*fire/i,
    /burn with.*match/i, /flame it up/i, /ignite.*stick/i, /strike flame/i, /I strike a spark/i,

    // Spanish
    /encender.*fósforo/i, /prender.*fósforo/i, /usar.*fósforo/i, /quemar.*fósforo/i, /hacer fuego.*fósforo/i,
    /hago fuego/i, /yo prendo.*fósforo/i, /enciendo el fósforo/i, /poner fuego.*fósforo/i, /yo enciendo.*fósforo/i,
    /crear fuego/i, /hacer una chispa/i, /chispa.*fósforo/i, /hacer flama/i, /conseguir fuego/i,
    /yo enciendo.*fósforo/i, /yo uso.*fósforo/i, /prender fuego con.*fósforo/i, /encender con fósforo/i,
    /hago chispa.*fósforo/i, /prender luz.*fósforo/i, /uso un fósforo/i, /prendo el fósforo/i,
    /intento encender.*fósforo/i, /crear chispa con.*fósforo/i, /fósforo para encender/i, /hago una llama/i,
    /prendo el fósforo/i, /usar fósforo para encender/i, /consigo chispa con.*fósforo/i, /haciendo fuego/i,
    /yo hago flama con.*fósforo/i, /enciende el fósforo/i, /poner flama.*fósforo/i, /hacer chispa/i,
    /conseguir una chispa/i, /crear fuego con.*fósforo/i, /hacer luz con.*fósforo/i, /yo prendo flama/i,
    /usar la llama/i, /yo enciendo con.*fósforo/i, /usar chispa de.*fósforo/i, /produzco chispa con.*fósforo/i,
    /hacer que el fósforo prenda/i, /hacer chispa con el fósforo/i, /generar fuego/i, /yo prendo la llama/i,

    // French
    /allumer.*allumette/i, /faire du feu.*allumette/i, /utiliser.*allumette/i, /je fais feu.*allumette/i, /mettre feu.*allumette/i,
    /je prends.*allumette/i, /je fais flamme.*allumette/i, /je fais une étincelle/i, /allumer avec.*allumette/i, /j’allume.*allumette/i,
    /allumer un feu avec.*allumette/i, /faire flamme avec.*allumette/i, /je crée une flamme/i, /je crée un feu/i, /faire une étincelle/i,
    /mettre flamme avec.*allumette/i, /faire feu avec.*allumette/i, /je mets feu.*allumette/i, /créer une étincelle/i, /je veux allumer/i,
    /faire lumière avec.*allumette/i, /produire une étincelle/i, /mettre en feu avec.*allumette/i, /faire un feu/i, /je veux allumer.*allumette/i,
    /enflammer.*allumette/i, /j’enflamme.*allumette/i, /faire une lumière avec.*allumette/i, /je déclenche.*allumette/i, /faire feu avec cette.*allumette/i,
    /créer un feu avec.*allumette/i, /je veux feu/i, /mettre le feu/i, /je produis une flamme avec.*allumette/i, /j'allume avec cette.*allumette/i,
    /j'utilise.*allumette/i, /je fais une lumière/i, /produire flamme/i, /faire une lumière avec.*allumette/i, /je mets flamme avec.*allumette/i,
    /faire flamme avec une allumette/i, /je déclenche du feu avec.*allumette/i, /je fais un incendie/i, /faire brûler.*allumette/i,
    /j’allume.*allumette/i, /je fais une lumière avec cette allumette/i, /faire brûler cette.*allumette/i, /je crée une flamme avec.*allumette/i,
    /je fais une étincelle/i, /je fais flamme avec cette allumette/i, /j'allume le feu avec cette allumette/i,

    // Portuguese
    /acender.*fósforo/i, /usar.*fósforo/i, /colocar fogo.*fósforo/i, /eu acendo.*fósforo/i, /eu faço fogo/i,
    /fazer uma chama/i, /acendo o fósforo/i, /faço luz com.*fósforo/i, /eu produzo fogo/i, /eu crio fogo/i,
    /queimar.*fósforo/i, /fazer flama com.*fósforo/i, /eu faço uma chama/i, /fazer uma luz/i, /faço faísca/i,
    /eu quero fogo/i, /uso fósforo/i, /fazer uma faísca com.*fósforo/i, /colocar chama com.*fósforo/i, /acendo com o fósforo/i,
    /produzir luz/i, /fazer brilhar.*fósforo/i, /riscar o fósforo/i, /acender uma luz com.*fósforo/i, /uso uma chama/i,
    /coloco fogo.*fósforo/i, /faço flama/i, /produzo luz/i, /faço luz com.*fósforo/i, /eu uso um fósforo/i,
    /faço faísca com.*fósforo/i, /faço fogo com.*fósforo/i, /produzo uma faísca/i, /gero luz/i, /acender fogo com.*fósforo/i,
    /faço uma faísca com.*fósforo/i, /criar chama com.*fósforo/i, /faço uma chama com.*fósforo/i, /produzo uma chama com.*fósforo/i,
    /chama de fósforo/i, /colocar fogo com.*fósforo/i, /risco o fósforo/i, /faço uma luz com.*fósforo/i, /fazer um fogo/i,
    /faço uma luz/i, /eu quero acender/i, /eu quero fazer fogo/i, /coloco fogo com.*fósforo/i, /eu quero faísca/i,
    /colocar fogo/i, /eu quero produzir fogo/i, /faço uma chama com o fósforo/i, /faço uma luz com o fósforo/i,
    /risco para acender/i, /fazer uma chama/i
],
    pathA1: [
    // English
    /read.*note/i, /inspect.*note/i, /look at.*note/i, /study.*note/i, /check.*note/i,
    /examine.*note/i, /observe.*note/i, /see.*note/i, /I read.*note/i, /I’m reading.*note/i,
    /open.*note/i, /review.*note/i, /take a look.*note/i, /analyze.*note/i, /see what’s written/i,
    /try to read.*note/i, /I look at.*note/i, /I observe.*note/i, /I inspect.*note/i, /check the note/i,
    /I take a closer look at.*note/i, /read the contents/i, /read what it says/i, /read what’s inside/i,
    /study the contents/i, /look at what’s inside/i, /I glance at.*note/i, /take note of.*note/i,
    /examine what’s written/i, /observe what’s written/i, /I am studying.*note/i, /take a look at it/i,
    /I’m trying to read.*note/i, /see if I can read.*note/i, /I start reading.*note/i, /focus on.*note/i,
    /I begin to read.*note/i, /take time to read.*note/i, /focus on reading.*note/i, /read it carefully/i,
    /I read over.*note/i, /examine what it says/i, /analyze what’s there/i, /try to understand.*note/i,
    /look closely at.*note/i, /scrutinize.*note/i, /review the writing/i, /look carefully at.*note/i,
    /focus on the text/i, /glance over.*note/i, /read carefully/i,

    // Spanish
    /leer.*nota/i, /mirar.*nota/i, /ver.*nota/i, /estudiar.*nota/i, /revisar.*nota/i,
    /consultar.*nota/i, /observar.*nota/i, /chequear.*nota/i, /yo leo.*nota/i, /intento leer.*nota/i,
    /analizar.*nota/i, /ver qué dice/i, /tratar de leer.*nota/i, /leer el contenido.*nota/i,
    /yo observo.*nota/i, /quiero ver.*nota/i, /quiero leer.*nota/i, /intento ver.*nota/i, /ver qué contiene/i,
    /estudiar el contenido/i, /yo veo.*nota/i, /examinar.*nota/i, /revisar qué dice.*nota/i,
    /miro.*nota/i, /observar detenidamente.*nota/i, /yo reviso.*nota/i, /mirar de cerca.*nota/i,
    /leer con cuidado/i, /mirar el mensaje/i, /leer mensaje/i, /yo leo el mensaje/i, /examinar el mensaje/i,
    /observar la letra/i, /revisar.*nota cuidadosamente/i, /analizar mensaje/i, /ver con calma.*nota/i,
    /leer cuidadosamente.*nota/i, /ver qué contiene.*nota/i, /revisar contenido/i, /estudiar el mensaje/i,
    /revisar el texto/i, /ver el mensaje/i, /mirar detenidamente.*nota/i, /examinar detenidamente.*nota/i,
    /yo trato de leer.*nota/i, /consultar el mensaje/i, /leer la escritura/i, /observar mensaje/i,
    /examinar contenido.*nota/i, /analizar lo que dice/i,

    // French
    /lire.*note/i, /regarder.*note/i, /observer.*note/i, /étudier.*note/i, /vérifier.*note/i,
    /consulter.*note/i, /examiner.*note/i, /analyser.*note/i, /je lis.*note/i, /je regarde.*note/i,
    /je consulte.*note/i, /prendre connaissance.*note/i, /voir ce qui est écrit/i, /lire le contenu/i,
    /je regarde ce qui est écrit/i, /observer attentivement.*note/i, /je vérifie.*note/i,
    /je consulte le contenu/i, /je souhaite lire.*note/i, /j’analyse.*note/i, /regarder ce qu’il y a.*note/i,
    /examiner attentivement.*note/i, /je lis attentivement.*note/i, /observer la note/i,
    /je lis ce qui est dedans/i, /je vérifie ce qui est écrit/i, /examiner le texte/i, /lire attentivement/i,
    /regarder de près.*note/i, /prendre le temps de lire/i, /examiner.*note/i, /observer de près/i,
    /étudier le texte/i, /regarder soigneusement/i, /consulter le message/i, /je parcours.*note/i,
    /je lis attentivement le contenu/i, /analyser ce qui est écrit/i, /je jette un œil.*note/i,
    /prendre le temps de lire/i, /comprendre.*note/i, /vérifier ce qu’il y a dedans/i, /voir ce qui est dedans/i,
    /je veux lire le message/i, /analyser le contenu/i, /j'examine le texte/i, /je consulte attentivement/i,
    /lire soigneusement.*note/i, /observer le contenu/i, /je veux voir le contenu/i,

    // Portuguese
    /ler.*nota/i, /observar.*nota/i, /consultar.*nota/i, /examinar.*nota/i, /ver.*nota/i,
    /estudar.*nota/i, /revisar.*nota/i, /verificar.*nota/i, /eu leio.*nota/i, /intento ler.*nota/i,
    /eu examino.*nota/i, /eu vejo.*nota/i, /eu consulto.*nota/i, /ler o conteúdo.*nota/i,
    /ver o que está escrito/i, /observar atentamente.*nota/i, /analisar.*nota/i, /eu observo.*nota/i,
    /ver o que diz/i, /ver o que tem dentro/i, /examinar o texto/i, /eu estudo.*nota/i,
    /consultar o conteúdo.*nota/i, /ver com calma.*nota/i, /eu tento ler.*nota/i, /ver cuidadosamente.*nota/i,
    /analisar o conteúdo/i, /consulto a nota/i, /examinar cuidadosamente.*nota/i, /ver o que contém.*nota/i,
    /eu vejo o conteúdo/i, /quero ler.*nota/i, /ler cuidadosamente.*nota/i, /verificar o que está escrito/i,
    /ver com atenção/i, /ler o que está escrito/i, /examinar com calma.*nota/i, /observar o que está escrito/i,
    /ver o texto/i, /verificar a mensagem/i, /ler a mensagem/i, /eu vejo a mensagem/i,
    /analisar a nota/i, /observar a letra/i, /consultar a escrita/i, /estudar a escrita/i,
    /ler o que tem na nota/i, /eu vejo o que está escrito/i, /eu tento ver o que diz/i,
    /revisar a nota/i, /examinar o conteúdo/i, /compreender o texto/i
],
pathB1:{
  stay: [
    // English (variations with partial words and flexible phrases)
    /stay.*fri/i, /rem.*fri/i, /keep.*com/i, /be.*side/i, /stay.*her/i, /I.*staying/i, 
    /not.*go/i, /won.*leave/i, /wait.*fr/i, /not.*leav/i, /not.*alon/i, /be.*fri/i, 
    /with.*fri/i, /I.*stay/i, /stay.*wit/i, /rem.*wit/i, /side.*fri/i, /close.*fri/i,
    /no.*aband/i, /be.*for.*fri/i, /be.*here.*fri/i, /wait.*her/i, /keep.*fri.*comp/i, 
    /I.*not.*going/i, /I.*not.*leav/i, /keep.*waiting/i, /be.*wit.*fri/i, /sta.*bes/i,
    /stay.*side/i, /not.*leave.*friend/i, /st.*fr/i, /rem.*fr/i, /decid.*stay/i, 
    /won.*abandon/i, /staying.*close/i, /no.*depart/i, /not.*part/i, /sta.*by/i, 
    /I’ll.*stay/i, /remain.*fri/i, /keep.*you.*com/i, /not.*going.*anywhere/i, /stand.*her/i,
    /stay.*fri.*com/i, /by.*your.*side/i, /staying.*her/i, /I.*stayi/i, /won.*leav/i,

    // Spanish (partial words and flexible phrases)
    /me.*qued/i, /perm.*am/i, /yo.*perm/i, /no.*voy/i, /no.*aband/i, /est.*con/i, 
    /me.*qued.*cont/i, /yo.*esp/i, /yo.*con/i, /me.*esper/i, /quedar.*amig/i, /no.*dej/i,
    /qued.*cont/i, /qued.*con/i, /con.*am/i, /aqui.*cont/i, /quedarme.*cont/i, 
    /perman.*aqui/i, /yo.*perm/i, /yo.*qued/i, /no.*me.*movi/i, /aqui.*con/i, 
    /con.*amigo/i, /yo.*aqui/i, /yo.*perm.*con/i, /no.*part/i, /perma.*am/i,
    /esp.*con.*amig/i, /me.*perm/i, /me.*mant.*cont/i, /no.*me.*separ/i,
    /no.*me.*dej/i, /con.*amigo/i, /perm.*contigo/i, /esper.*cont/i, /no.*sal/i,
    /est.*con.*amigo/i, /yo.*contigo/i, /me.*espera/i, /perm.*aqui/i, /qued.*aqui/i,
    /qued.*al.lado/i, /no.*salgo/i, /qued.*aqui.*contigo/i, /perma.*con/i, /no.*me.*movi/i,

    // French (partial words and flexible phrases)
    /je.*reste/i, /je.*su/i, /je.*avec/i, /je.*proche/i, /pas.*part/i, /pas.*quitt/i,
    /pas.*aband/i, /je.*gard/i, /je.*ten/i, /je.*compagn/i, /je.*t'accomp/i, 
    /je.*attend/i, /pas.*m'en.*all/i, /pas.*laiss/i, /je.*att/i, /je.*suis.*ici/i,
    /je.*reste.*ici/i, /je.*resterai/i, /je.*avec.*toi/i, /moi.*ici/i, /je.*ici/i,
    /je.*attend.*ici/i, /je.*en.*arrière/i, /pas.*pars/i, /je.*ici.*toi/i, 
    /rester.*côté/i, /pas.*pars/i, /reste.*côté/i, /je.*comp.*toi/i, 
    /rester.*à.*tes/i, /pas.*quitt.*ami/i, /pas.*m’élo/i, /pas.*vais.*m’en.*aller/i,
    /je.*attend.*à/i, /je.*t’accomp/i, /je.*tien.*compagn/i, /je.*reste.*avec.*toi/i,
    /je.*ne.*pars.*pas/i, /resterai.*près.*toi/i, /je.*vais.*ici/i, /ici.*pour.*toi/i,
    /rester.*ami/i, /je.*suis.*à.*côté/i, /je.*ne.*pars/i, /je.*veux.*ici/i, /pas.*m’en aller/i,

    // Portuguese (partial words and flexible phrases)
    /eu.*fico/i, /fico.*cont/i, /não.*vou/i, /não.*sai/i, /não.*aband/i, /eu.*perm/i,
    /não.*deixo/i, /perm.*aqui/i, /esper.*amig/i, /ficar.*aqui/i, /estar.*cont/i,
    /não.*me.*afast/i, /vou.*perma/i, /esper.*aqui/i, /perm.*aqui.*cont/i, /não.*deix/i,
    /ficar.*aqui/i, /fic.*cont/i, /não.*parto/i, /nao.*vou.*emb/i, /perm.*comigo/i,
    /esp.*aqui.*com/i, /eu.*vou.*perm/i, /estar.*aqui/i, /fica.*comigo/i, /nao.*deixarei/i,
    /perma.*cont/i, /perm.*com.*amig/i, /fic.*ao.*lad/i, /ficarei.*cont/i, /nao.*saio/i,
    /perma.*ao.*lad/i, /estar.*aqui.*com/i, /não.*irei.*emb/i, /perm.*comigo/i, 
    /perma.*aqui/i, /fic.*espera/i, /ficarei.*com.*amig/i, /vou.*estar.*aqui/i, 
    /vou.*est.*contigo/i, /esper.*lado/i, /fic.*junto/i, /ficar.*lado/i, /não.*te.*deix/i,
    /perman.*espera/i, /esperarei.*aqui/i, /ficarei.*ao.*lad/i, /esper.*lado.*amigo/i, /ficarei.*aqui/i
],
leave: [
    // English
    /leave/i, /I.*leave/i, /say.*goodbye/i, /go.*away/i, /depart/i, /I’m.*going/i, /I’ll.*go/i,
    /get.*out/i, /exit/i, /walk.*away/i, /I.*part/i, /head.*out/i, /I.*walk.*out/i, /I.*depart/i,
    /leaving/i, /going.*out/i, /move.*away/i, /step.*away/i, /I.*head.*out/i, /take.*my.*leave/i,
    /I.*walk.*away/i, /I.*go.*from/i, /leaving.*you/i, /not.*stay/i, /choose.*to.*go/i,
    /I.*choose.*to.*leave/i, /I.*walk.*from/i, /I.*escape/i, /I.*say.*farewell/i, /I.*go/i,
    /decide.*to.*leave/i, /I.*move.*on/i, /step.*out/i, /farewell/i, /leave.*you/i,
    /I.*step.*out/i, /I’m.*not.*staying/i, /I’m.*out.*of.*here/i, /I’m.*leaving.*now/i, 
    /turn.*back/i, /I.*go.*out/i, /I.*will.*go/i, /step.*from/i, /I’ll.*leave/i,
    /leaving.*behind/i, /depart.*from/i, /escape.*from/i, /move.*forward/i, /I.*withdraw/i,

    // Spanish
    /me voy/i, /salgo/i, /me.*despido/i, /yo.*me.*voy/i, /me.*largo/i, /me.*escapo/i, /me retiro/i,
    /dejo.*atrás/i, /dejo.*solo/i, /me aparto/i, /yo me.*alejo/i, /me marcho/i, /me alejo/i,
    /decido irme/i, /me despido de ti/i, /me voy ahora/i, /me voy lejos/i, /me voy de aquí/i,
    /yo salgo/i, /salgo ahora/i, /me.*alejo.*de.*ti/i, /me.*aparto/i, /me retiro ahora/i,
    /salir/i, /me.*voy lejos/i, /me voy para siempre/i, /me largo ahora/i, /me marcho de ti/i,
    /yo decido salir/i, /yo dejo aquí/i, /me.*alejo.*ahora/i, /me retiro/i, /voy a irme/i,
    /me voy para irme/i, /yo me largo/i, /me separo de ti/i, /dejar.*atrás/i, /me voy para siempre/i,
    /me.*voy lejos/i, /yo.*me despido/i, /me voy en paz/i, /salgo de aquí/i, /yo decido irme/i,
    /me separo de ti/i, /me.*retirando/i, /voy a marcharme/i, /yo salgo de aquí/i, /yo me despido de ti/i,

    // French
    /je pars/i, /je m'en vais/i, /je quitte/i, /je me retire/i, /je.*dis.*adieu/i, 
    /j’abandonne/i, /je.*vais.*partir/i, /je pars maintenant/i, /je te quitte/i, 
    /m’éloigne/i, /je vais partir/i, /je m'en vais maintenant/i, /m’éloigner/i,
    /je me retire maintenant/i, /je vais partir maintenant/i, /je pars pour toujours/i,
    /j’ai décidé de partir/i, /je laisse derrière moi/i, /je me détourne/i, /je tourne le dos/i,
    /je te laisse/i, /m’en aller/i, /je m’en vais définitivement/i, /m’éloigner de toi/i,
    /je pars définitivement/i, /je te dis au revoir/i, /je pars de cet endroit/i,
    /je vais m’éloigner/i, /je pars pour de bon/i, /j’abandonne cet endroit/i,
    /je vais sortir/i, /je me retire de toi/i, /je prends congé/i, /je vais sortir maintenant/i,
    /je quitte cet endroit/i, /je quitte ton côté/i, /je prends mon départ/i, 
    /je m’éloigne pour toujours/i, /je vais m’éloigner pour toujours/i, /je pars en paix/i, 
    /je tourne le dos/i, /je vais dire adieu/i, /je tourne le dos à cet endroit/i,
    /je vais sortir de cette situation/i, /je me libère/i, /je m'en vais d’ici/i, /je vais m'échapper/i,
    /je m’en vais maintenant/i, /je m'en vais pour de bon/i,

    // Portuguese
    /vou embora/i, /me.*despeço/i, /saio/i, /eu vou sair/i, /me.*retiro/i, /eu.*me.*despeço/i, 
    /eu.*parto/i, /me.*afasto/i, /deixo.*para trás/i, /me.*despeço de você/i, /digo adeus/i,
    /deixo você/i, /me.*vou agora/i, /eu vou embora agora/i, /eu vou sair agora/i,
    /me.*afasto agora/i, /me.*retiro daqui/i, /eu.*parto agora/i, /eu vou sair/i, /deixo.*você aqui/i,
    /me.*retiro.*agora/i, /me.*vou.*daqui/i, /eu vou partir/i, /me despeço de ti/i, /saio agora/i,
    /me.*desp./i, /vou.*saindo/i, /eu deixo este lugar/i, /me separo de você/i, 
    /me distancio de você/i, /me despeço para sempre/i, /me retiro para longe/i, /me afastar de você/i,
    /eu.*sigo em frente/i, /eu deixo você para trás/i, /eu vou embora de você/i, 
    /decido.*sair/i, /eu decido partir/i, /me vou embora/i, /eu vou partir/i, /me retiro de ti/i,
    /saindo.*daqui/i, /vou embora para sempre/i, /eu.*me vou/i, /eu te deixo aqui/i, /me despeço agora/i,
    /parto para sempre/i, /vou partir para sempre/i, /vou sair de uma vez/i, /vou.*fugir/i,
    /deixarei este lugar/i, /me.*afasto.*agora/i, /me.*despeço de ti/i, /me retiro de uma vez/i
]
},
pathA2: {
  voltar: [
        // English
        /leave/i, /go.*back/i, /turn.*back/i, /exit/i, /escape/i, /get.*out/i, 
        /walk.*out/i, /return/i, /backtrack/i, /head.*back/i, /step.*back/i,
        /I leave/i, /I go back/i, /I want to go back/i, /I decide to go back/i,
        /I’ll leave/i, /I’m going back/i, /back to where I started/i, /take me back/i,
        /I go back where I came from/i, /I’ll head back/i, /back to the start/i, 
        /I escape/i, /I go away/i, /I turn around/i, /step away/i, /retreat/i, 
        /move back/i, /I want to leave/i, /back up/i, /I change my mind/i,
        /let’s go back/i, /reverse/i, /I go backward/i, /I leave the tunnel/i,
        /out of here/i, /I’ll head out/i, /make an exit/i, /I try to go back/i,
        /I turn to leave/i, /backtrack to start/i, /return to where I was/i,
        /I want to turn around/i, /I’m heading back/i, /I step away/i, /leave the tunnel/i,
        /retreat from here/i, /I want to get out/i, /turn and leave/i, /I return/i,

        // Spanish
        /salir/i, /me voy/i, /regresar/i, /volver atrás/i, /regreso/i, /volver/i, /me doy vuelta/i,
        /regreso al inicio/i, /retorno/i, /me voy atrás/i, /salgo/i, /retroceder/i, /volver a donde estaba/i,
        /me retiro/i, /me devuelvo/i, /quiero salir/i, /regreso donde estaba/i, /salir del túnel/i,
        /vuelvo atrás/i, /me regreso/i, /volver a empezar/i, /ir para atrás/i, /quiero volver/i,
        /me quiero ir/i, /quiero ir para atrás/i, /decido irme/i, /quiero retroceder/i, /me voy de aquí/i,
        /salgo del túnel/i, /quiero devolverme/i, /me doy la vuelta/i, /voy atrás/i, /retirarme/i,
        /regreso atrás/i, /decido volver atrás/i, /me devuelvo al inicio/i, /quiero dar la vuelta/i,
        /volver al inicio/i, /me voy al inicio/i, /salir de aquí/i, /camino para atrás/i,
        /voy a donde empecé/i, /regreso a donde estaba/i, /doy la vuelta/i, /regreso a la entrada/i,
        /voy para la salida/i, /voy hacia atrás/i, /me alejo/i, /me retiro de aquí/i,

        // French
        /je pars/i, /je quitte/i, /je retourne/i, /revenir en arrière/i, /retourner/i, 
        /je retourne en arrière/i, /je fais demi-tour/i, /je reviens/i, /je veux retourner/i,
        /je quitte le tunnel/i, /je retourne à l’entrée/i, /je m’en vais/i, /je me retire/i,
        /je retourne au début/i, /je reviens où j’étais/i, /je repars/i, /repartir en arrière/i,
        /je m’en vais d’ici/i, /je veux sortir/i, /retour au début/i, /retourner au point de départ/i,
        /retour/i, /repartir d’où je viens/i, /retour au tunnel/i, /sortir du tunnel/i, /je veux partir/i,
        /je décide de revenir/i, /je fais marche arrière/i, /je pars du tunnel/i, /retour à l’entrée/i,
        /revenir là où j’étais/i, /je me retourne/i, /je veux revenir au départ/i, /je fais demi-tour/i,
        /je retourne au point de départ/i, /je sors d’ici/i, /je fais marche arrière/i, 
        /je retourne sur mes pas/i, /je reviens au début/i, /repartir d’où je viens/i,
        /je quitte cette place/i, /retour en arrière/i, /je m’éloigne/i, /je quitte cet endroit/i,
        /revenir d’où je viens/i, /je quitte ce lieu/i, /je veux repartir/i, /je pars en arrière/i,

        // Portuguese
        /sair/i, /voltar/i, /vou embora/i, /retornar/i, /ir embora/i, /volto/i, 
        /voltar atrás/i, /volto para o início/i, /quero sair/i, /deixar o túnel/i, /volto de onde vim/i,
        /sair do túnel/i, /eu me retiro/i, /voltar ao começo/i, /voltar para o começo/i,
        /sair daqui/i, /retorno para o começo/i, /vou voltar/i, /eu volto atrás/i,
        /vou embora do túnel/i, /me afastar/i, /voltar ao ponto inicial/i, /eu deixo o túnel/i,
        /voltar de onde estava/i, /voltar à entrada/i, /volto de onde estava/i, /deixar o local/i,
        /eu vou embora/i, /eu volto/i, /eu decido sair/i, /saindo daqui/i, /decido voltar atrás/i,
        /eu volto para trás/i, /eu retorno/i, /deixar o local/i, /voltar ao início/i,
        /quero retornar/i, /volto para a entrada/i, /eu saio daqui/i, /voltar ao começo/i,
        /voltar para o começo/i, /retorno ao começo/i, /vou dar a volta/i, /sair dessa área/i,
        /voltar para trás/i, /vou para a entrada/i, /eu vou embora/i, /eu me retiro/i, /sair dessa área/i
    ],
    lookAround: [
        // English
        /look around/i, /ignore.*note/i, /throw.*note/i, /toss.*note/i, /put.*note.*pocket/i,
        /leave.*note.*behind/i, /I ignore.*note/i, /I discard.*note/i, /I don’t read.*note/i,
        /I don’t care about.*note/i, /forget.*note/i, /keep.*note/i, /keep it in pocket/i,
        /hold.*note/i, /hold onto.*note/i, /drop.*note/i, /I don’t read it/i, /pocket.*note/i,
        /don’t read.*note/i, /ignore what's written/i, /toss it aside/i, /leave note behind/i,
        /put note aside/i, /not interested in note/i, /skip.*note/i, /avoid.*note/i,
        /I keep.*note/i, /put note away/i, /don’t examine.*note/i, /throw it away/i,
        /ignore it completely/i, /discard.*note/i, /I pass on.*note/i, /put note down/i,
        /move on without reading/i, /I don’t care to read/i, /leave note there/i, 
        /toss it/i, /toss it aside/i, /I’ll keep note for later/i, /not interested in reading/i,
        /put it in my pocket/i, /I place note in pocket/i, /I put note aside/i, 
        /I drop.*note/i, /I pocket the note/i, /I’ll keep it/i, /I don’t want to read it/i,
        /skip reading.*note/i, /I save note for later/i, /leave it alone/i,

        // Spanish
        /mirar alrededor/i, /ignorar.*nota/i, /tirar.*nota/i, /botar.*nota/i, /guardar.*nota/i, 
        /no leer.*nota/i, /yo ignoro.*nota/i, /descartar.*nota/i, /no me interesa.*nota/i,
        /olvidar.*nota/i, /dejar.*nota.*atrás/i, /poner.*nota en.*bolsillo/i, /dejar.*nota/i,
        /mantener.*nota/i, /guardar nota/i, /no leerla/i, /paso de leer.*nota/i, /tirar la nota/i,
        /dejarla sin leer/i, /ignorar lo que dice/i, /no leer.*contenido/i, /paso de.*nota/i,
        /pongo la nota a un lado/i, /guardo la nota/i, /no me importa la nota/i, /ignoro.*por completo/i,
        /dejo nota atrás/i, /la pongo en mi bolsillo/i, /guardar para luego/i, /no leer/i,
        /dejar en paz/i, /no quiero leerla/i, /no me interesa la nota/i, /dejarla ahí/i,
        /pongo nota en el bolsillo/i, /descartar la nota/i, /me olvido de la nota/i, /mantengo la nota/i,
        /paso sin leerla/i, /no reviso.*nota/i, /pongo.*nota.*a un lado/i, /pongo la nota en el bolsillo/i,
        /guardar la nota para después/i, /la ignoro/i, /la dejo sin importancia/i, /dejo la nota en paz/i,
        /la dejo en el bolsillo/i, /la ignoro completamente/i, /no leo la nota/i,

        // French
        /regarder.*alentour/i, /ignorer.*note/i, /jeter.*note/i, /laisser.*note/i, /mettre.*note.*poche/i,
        /ne pas lire.*note/i, /je ne lis pas.*note/i, /garder.*note/i, /je laisse la note/i,
        /je mets la note dans ma poche/i, /ne pas s’intéresser à.*note/i, /je ne regarde pas.*note/i,
        /je ne m'intéresse pas à.*note/i, /laisser tomber.*note/i, /je mets.*note de côté/i,
        /ignorer complètement.*note/i, /ne pas regarder.*note/i, /passer.*note/i, /je laisse tomber la note/i,
        /je garde la note/i, /je mets.*note de côté/i, /ne pas examiner.*note/i, /ignorer le contenu/i,
        /je mets.*note en poche/i, /pas besoin de la lire/i, /je ne lis pas/i, /je la laisse là/i,
        /je garde.*note pour plus tard/i, /ignorer la note/i, /ne pas ouvrir.*note/i,
        /mettre la note de côté/i, /je ne veux pas la lire/i, /ne pas toucher.*note/i,
        /je mets.*note dans la poche/i, /je n’examine pas.*note/i, /passer à côté/i, 
        /je laisse.*note/i, /je mets.*note à part/i, /garder pour plus tard/i, /je jette la note/i,
        /je ne suis pas intéressé par la note/i, /laisser la note là/i, /je la garde pour plus tard/i,

        // Portuguese
        /olhar em volta/i, /ignorar.*nota/i, /descartar.*nota/i, /jogar.*nota/i, /guardar.*nota/i,
        /não ler.*nota/i, /deixar.*nota/i, /botar.*nota.*no bolso/i, /colocar.*nota.*no bolso/i,
        /eu ignoro.*nota/i, /passar pela nota/i, /não me importar com.*nota/i, /deixar a nota para trás/i,
        /coloco.*nota no bolso/i, /manter a nota/i, /não quero ler/i, /não ligar para.*nota/i,
        /guardar para depois/i, /deixar a nota de lado/i, /não me interessa/i, /ignorar completamente/i,
        /não olhar a nota/i, /jogar a nota fora/i, /colocar a nota no bolso/i, /não estou interessado na nota/i,
        /deixar a nota no bolso/i, /esquecer a nota/i, /colocar de lado/i, /guardar no bolso/i,
        /não quero mexer na nota/i, /não pegar.*nota/i, /guardar para mais tarde/i,
        /não quero ler agora/i, /não tocar na nota/i, /ignoro.*nota/i, /descarto a nota/i,
        /ignorar completamente/i, /eu deixo a nota para depois/i, /eu coloco a nota no bolso/i,
        /passo sem ler/i, /não quero ver/i, /guardar.*nota para mais tarde/i, /não me preocupo com.*nota/i,
        /não me interesso pela nota/i, /vou ignorar.*nota/i, /não mexo com a nota/i, /pôr a nota no bolso/i
    ],
        
},
pathA3:{
  lookAround: [
    // English
    /look.*(around|beach|water|sea|ocean|shore|sand|scenery|view|horizon|area|surroundings)/i,
    /observe.*(beach|surroundings|water|landscape|scene|area|coastline|shore|view)/i,
    /see.*(beach|water|sand|waves|area|around|view|surroundings)/i,
    /explore.*(area|beach|surroundings|sand|view)/i,
    /check.*(area|beach|view|surroundings|scene)/i,
    /inspect.*(beach|water|scene|area|landscape)/i,
    /gaze.*(water|beach|waves|view|horizon|ocean)/i,
    /watch.*(waves|water|scene|surroundings|area|horizon)/i,
    /look at the (sand|beach|water|view|scene|horizon)/i,
    /survey.*(area|beach|landscape|surroundings)/i,
    /look out.*(over|around)/i,
    /take.*(in|look at|closer look at).*view/i,
    /I (observe|see|look at|watch|survey) the (beach|water|waves|area)/i,
    /look all around/i,

    // Spanish
    /mirar.*(alrededor|playa|mar|agua|arena|vista|entorno|paisaje|escena|costa|horizonte)/i,
    /ver.*(entorno|playa|alrededores|mar|agua|paisaje|escena|costa|alrededor|área)/i,
    /observar.*(playa|mar|agua|alrededores|paisaje|escena|entorno|vista|costa)/i,
    /explorar.*(entorno|área|playa|arena|alrededores)/i,
    /inspeccionar.*(playa|mar|alrededores|arena|entorno)/i,
    /ver qué.*(hay|se ve) (alrededor|en la playa)/i,
    /mirar.*(paisaje|entorno|escena|horizonte)/i,
    /examinar.*(alrededores|área|playa|escena)/i,
    /checar.*(área|entorno|playa|mar)/i,
    /ver.*(costa|vista|paisaje|mar|escena)/i,
    /observar el (mar|agua|paisaje|entorno|alrededores)/i,
    /mirar a los lados/i,
    /mirar hacia el (agua|mar|horizonte)/i,
    /ver el (panorama|área|entorno)/i,
    /mirar toda.*alrededor/i,

    // French
    /regarder.*(autour|plage|mer|eau|paysage|côte|scène|sable|vue|horizon)/i,
    /observer.*(alentours|plage|mer|eau|environnement|côte|scène|paysage|vue)/i,
    /voir.*(plage|mer|alentours|environnement|paysage|eau|côte|horizon)/i,
    /explorer.*(plage|alentours|côte|scène|environnement)/i,
    /examiner.*(plage|mer|eau|alentours|côte|environnement)/i,
    /inspecter.*(plage|mer|alentours|vue|côte)/i,
    /scruter.*(paysage|mer|environnement|scène)/i,
    /voir ce qui.*(autour|plage|alentours)/i,
    /observer le (panorama|horizon|océan|scène)/i,
    /regarder (ce qui est autour|les alentours|vers la mer)/i,
    /voir l’étendue/i,
    /regarder à (gauche|droite|l’entour|l’horizon|vers le bas)/i,
    /regarder autour de la plage/i,
    /regarder ce qu’il y a sur la plage/i,
    /voir tout autour/i,

    // Portuguese
    /olhar.*(em volta|praia|mar|água|areia|paisagem|vista|horizonte|entorno)/i,
    /ver.*(praia|entorno|redores|mar|água|cena|área|paisagem|vista|costa)/i,
    /observar.*(praia|mar|água|paisagem|vista|costa|entorno|área)/i,
    /explorar.*(área|praia|entorno|redores|mar)/i,
    /inspecionar.*(praia|mar|água|entorno|costa|redores)/i,
    /examinar.*(praia|areia|entorno|área)/i,
    /checar.*(praia|mar|entorno|área|vista)/i,
    /ver o que.*(há|existe) (na praia|ao redor)/i,
    /olhar para o (mar|entorno|horizonte|redores)/i,
    /observar os arredores/i,
    /observar ao redor da (praia|área|costa)/i,
    /explorar o que está por perto/i,
    /ver a paisagem/i,
    /ver as ondas/i,
    /olhar tudo ao redor/i,
    /observar.*vista/i,
    /ver ao redor da praia/i,
    /olhar para a água/i,
    /examinar os arredores/i,
    /dar uma olhada na praia/i
],
  readNote: [
    // English
    /read.*note/i, /check.*note/i, /examine.*note/i, /look.*note/i, /open.*note/i,
    /inspect.*note/i, /study.*note/i, /see.*note/i, /observe.*note/i, /analyze.*note/i, 
    /I read.*note/i, /I open and read/i, /I examine.*note/i, /I see.*message/i, 
    /review.*note/i, /what’s.*in.*note/i, /look at the message/i, /take.*closer.*look.*note/i,
    /understand.*note/i, /I analyze.*note/i, /check.*content/i, /look.*what’s.*inside/i,
    /I go over.*note/i, /glance.*over.*note/i, /I focus on.*note/i, /look inside note/i,
    /inspect the message/i, /read what’s written/i, /I check the note/i, /what is written/i,
    /review.*text/i, /scrutinize the note/i, /I take note of.*contents/i, /see contents/i,
    /go through.*note/i, /open note to read/i, /look closely at note/i, /I study what’s inside/i,

    // Spanish
    /leer.*nota/i, /checar.*nota/i, /mirar.*nota/i, /inspeccionar.*nota/i, /revisar.*nota/i,
    /examinar.*nota/i, /ver.*nota/i, /observar.*nota/i, /analizar.*nota/i, /estudiar.*nota/i,
    /leer atentamente/i, /mirar.*contenido/i, /abrir.*nota/i, /revisar.*contenido/i, 
    /leer el mensaje/i, /consultar.*nota/i, /ver.*texto/i, /mirar dentro/i, /ver contenido de.*nota/i,
    /examinar cuidadosamente/i, /ver qué hay en la nota/i, /leer lo que dice/i, /entender.*nota/i,
    /revisar el texto/i, /ver cada palabra/i, /inspeccionar la nota/i, /verificar lo escrito/i,
    /examinar lo que contiene/i, /ver lo que tiene/i, /revisar con detalle/i, /analizar el contenido/i,
    /leer todo/i, /mirar lo que contiene la nota/i, /ver el mensaje/i, /leer para entender/i,
    /revisar la nota/i, /ver el contenido de la nota/i, /inspeccionar mensaje/i,

    // French
    /lire.*note/i, /examiner.*note/i, /observer.*note/i, /consulter.*note/i, /voir.*note/i,
    /analyser.*note/i, /je lis.*note/i, /ouvrir.*note/i, /lire le contenu/i, /regarder.*note/i,
    /étudier.*note/i, /observer.*message/i, /prendre connaissance/i, /lire ce qui est écrit/i,
    /examiner.*contenu/i, /scruter.*note/i, /je lis le message/i, /découvrir ce qui est écrit/i,
    /lire attentivement/i, /je consulte.*note/i, /voir le texte/i, /vérifier le contenu/i,
    /examiner attentivement/i, /lire tout/i, /analyser ce qui est dedans/i, /regarder chaque mot/i,
    /observer ce qui est dedans/i, /découvrir ce qui se trouve dans.*note/i, /scruter le message/i,
    /vérifier le message/i, /voir ce qu’il y a/i, /étudier chaque détail/i, /voir ce qu’il y a d’écrit/i,
    /je vais lire.*note/i, /analyser avec soin/i, /je vois ce qu’il y a écrit/i, /je prends connaissance/i,

    // Portuguese
    /ler.*nota/i, /ver.*nota/i, /inspecionar.*nota/i, /examinar.*nota/i, /checar.*nota/i,
    /consultar.*nota/i, /verificar.*nota/i, /analisar.*nota/i, /observar.*nota/i, /estudar.*nota/i,
    /ler atentamente/i, /ver o que diz/i, /examinar cuidadosamente/i, /ler.*mensagem/i,
    /revisar.*nota/i, /ler o conteúdo/i, /abrir para ler/i, /conferir.*nota/i, /ver o que há na nota/i,
    /examinar o conteúdo/i, /analisar o que foi escrito/i, /ler com atenção/i, /olhar dentro da nota/i,
    /ver a mensagem/i, /ver conteúdo de.*nota/i, /estudar cuidadosamente/i, /examinar cada palavra/i,
    /eu leio a nota/i, /verificar o texto/i, /conferir o que está na nota/i, /ler o que está escrito/i,
    /revisar a mensagem/i, /examinar o conteúdo da nota/i, /ver o que contém/i, /ler para entender/i,
    /consultar o conteúdo/i, /observar o que está escrito/i, /conferir com atenção/i, /analisar cuidadosamente/i
]
  
},
pathA4: [
    // English
    /get.*boat/i, /board.*boat/i, /enter.*boat/i, /ride.*boat/i, /step.*boat/i,
    /go.*boat/i, /jump.*boat/i, /climb.*boat/i, /embark.*boat/i, /take.*boat/i,
    /head.*toward.*boat/i, /move.*boat/i, /I go.*boat/i, /approach.*boat/i,
    /go.*towards.*boat/i, /I board.*boat/i, /I get on.*boat/i, /make way.*boat/i,
    /walk.*boat/i, /get into.*boat/i, /I step onto.*boat/i, /onto the boat/i,
    /go.*to.*boat/i, /enter the boat/i, /step onto the boat/i, /I approach the boat/i,
    /I take the boat/i, /I’ll go in the boat/i, /I go to the boat/i, /I’ll enter.*boat/i,
    /jump into the boat/i, /I ride.*boat/i, /I’ll climb.*boat/i, /I head.*boat/i,
    /step toward the boat/i, /get myself on the boat/i, /board the ship/i, /I climb into.*boat/i,
    /swim.*boat/i, /I swim to.*boat/i, /I’m swimming.*boat/i, /I go swimming.*boat/i, /I start swimming.*boat/i,
    /I need help/i, /ask for help/i, /I call for help/i, /help me get.*boat/i, /I swim toward.*boat/i,
    /I’ll swim over to.*boat/i, /call for assistance/i, /ask someone for help/i,

    // Spanish
    /subir.*barco/i, /entrar.*barco/i, /embarcar.*barco/i, /ir.*barco/i, /subirse.*barco/i,
    /montar.*barco/i, /acercarse.*barco/i, /me acerco.*barco/i, /caminar.*barco/i,
    /camino.*barco/i, /me subo.*barco/i, /voy.*barco/i, /entro.*barco/i, /embarco en.*barco/i,
    /voy hacia el barco/i, /entrar al barco/i, /subirme al barco/i, /me voy en.*barco/i,
    /subir al barco/i, /acercarme.*barco/i, /voy a.*barco/i, /subir a bordo/i,
    /yo me embarco/i, /entrar dentro del barco/i, /me dirijo al barco/i, /me aproximo.*barco/i,
    /salto al barco/i, /subirme al barco/i, /me acerco al barco/i, /voy a bordo/i,
    /me subo al barco/i, /me monto en el barco/i, /me dirijo hacia el barco/i,
    /llego al barco/i, /entro en el barco/i, /me acerco hacia.*barco/i,
    /nadar.*barco/i, /me pongo a nadar hacia.*barco/i, /voy nadando al barco/i, /empiezo a nadar/i,
    /necesito ayuda/i, /pido ayuda/i, /voy a pedir ayuda/i, /necesito que me ayuden/i,

    // French
    /monter.*bateau/i, /embarquer.*bateau/i, /entrer.*bateau/i, /aller.*bateau/i, /grimper.*bateau/i,
    /monter.*à bord/i, /accéder.*bateau/i, /je monte dans le bateau/i, /je m’approche.*bateau/i,
    /prendre.*bateau/i, /je vais.*bateau/i, /je grimpe dans.*bateau/i, /je m’embarque/i,
    /je vais.*à bord/i, /je vais vers le bateau/i, /je vais embarquer/i, /je vais dans le bateau/i,
    /je monte à bord/i, /je saute dans le bateau/i, /j’embarque/i, /je me rends au bateau/i,
    /je me rapproche du bateau/i, /je me dirige vers.*bateau/i, /j’arrive au bateau/i,
    /j’entre dans le bateau/i, /je vais dans le bateau/i, /je vais nager vers le bateau/i,
    /nager.*bateau/i, /je nage vers.*bateau/i, /je commence à nager/i, /je me mets à nager/i,
    /je demande de l’aide/i, /j’appelle à l’aide/i, /aidez-moi à monter/i, /demande.*aide/i,
    /j’ai besoin d’aide pour.*bateau/i, /je crie à l’aide/i,

    // Portuguese
    /subir.*barco/i, /entrar.*barco/i, /embarcar.*barco/i, /ir.*barco/i, /chegar.*barco/i,
    /montar.*barco/i, /caminhar.*barco/i, /me dirijo.*barco/i, /me aproximo.*barco/i,
    /vou para o barco/i, /chegar ao barco/i, /me aproximo ao barco/i, /subo no barco/i,
    /embarco no barco/i, /vou embarcar/i, /subo a bordo/i, /entro no barco/i, /vou até o barco/i,
    /ir até o barco/i, /me aproximo do barco/i, /subir no barco/i, /embarco no navio/i,
    /me encaminho para o barco/i, /chego ao barco/i, /me preparo para embarcar/i, /entro a bordo/i,
    /nadar.*barco/i, /nado até o barco/i, /vou nadando.*barco/i, /eu vou nadar/i,
    /estou nadando até o barco/i, /nado em direção ao barco/i, /vou nadando/i,
    /preciso de ajuda/i, /chamar ajuda/i, /pedir ajuda/i, /vou pedir ajuda/i,
    /me ajudem.*(subir|embarcar)/i, /chamo ajuda para chegar no barco/i, /eu clamo por ajuda/i
],
    move: [
        // English
        /move.*in.*tunnel/i, /get.*in.*tunnel/i, /keep.*moving/i, /continue/i, /advance/i,
        /proceed.*forward/i, /go forward/i, /keep going/i, /keep walking/i, /push forward/i,
        /head forward/i, /step forward/i, /take.*next step/i, /move along/i, /move ahead/i,
        /progress.*forward/i, /head on/i, /go on/i, /keep heading/i, /march forward/i,
        /go forth/i, /I move on/i, /I keep going/i, /keep advancing/i, /press ahead/i,
        /step ahead/i, /push onward/i, /continue onward/i, /keep pushing/i, /press forward/i,
        /onward we go/i, /I forge ahead/i, /make way forward/i, /go further/i, /walk further/i,
        /progress onward/i, /head on further/i, /step further/i, /advance onward/i, /take a step/i,
        /onward/i, /let’s keep moving/i, /go on further/i, /head deeper/i, /journey forward/i,
        /keep journeying/i, /move down/i, /get going/i, /I keep on/i, /march on/i,
        /moving forward/i, /moving onward/i, /head forward/i, /pushing on/i, /I step forward/i,

        // Spanish
        /seguir.*adelante/i, /continuar.*caminando/i, /avanzar/i, /proseguir/i, /continuar/i,
        /sigo.*camino/i, /sigo adelante/i, /mantener.*movimiento/i, /continuar adelante/i, /seguir/i,
        /avanzando/i, /camino.*adelante/i, /seguir avanzando/i, /me muevo.*adelante/i, /proseguir adelante/i,
        /continuo.*camino/i, /camino hacia adelante/i, /prosigo/i, /moverse adelante/i, /mantengo movimiento/i,
        /sigo moviéndome/i, /camino más lejos/i, /voy más lejos/i, /me mantengo/i, /avanzando.*en.*camino/i,
        /avanzando por.*tunel/i, /me dirijo adelante/i, /voy adelante/i, /seguir adelante/i, /prosigo.*camino/i,
        /seguir andando/i, /caminar más/i, /voy.*camino/i, /emprender.*camino/i, /voy adelante/i,
        /dirijo adelante/i, /sigo hacia adelante/i, /voy en el camino/i, /avanzar en.*camino/i, /prosigo.*dirección/i,
        /ir adelante/i, /caminando adelante/i, /camino al frente/i, /avanzar en.*dirección/i, /prosigo adelante/i,
        /muevo adelante/i, /voy al frente/i, /avanzar adelante/i, /me voy adelante/i, /sigo andando/i,
        /mantengo camino/i, /camino recto/i, /mantengo movimiento/i, /muevo adelante/i, /me mantengo en camino/i,

        // French
        /continuer.*avancer/i, /progresser/i, /continuer.*chemin/i, /je continue/i, /je poursuis/i,
        /je progresse/i, /j’avance/i, /je continue.*avancer/i, /aller de l’avant/i, /en avant/i,
        /je vais.*avant/i, /je marche/i, /continuer à marcher/i, /je vais plus loin/i, /j’avance encore/i,
        /je continue le chemin/i, /progresser.*chemin/i, /je poursuis mon chemin/i, /je continue mon chemin/i,
        /aller encore/i, /je marche en avant/i, /je fais un pas en avant/i, /j’avance vers/i, /je vais plus avant/i,
        /chemin en avant/i, /en avant/i, /aller de l’avant encore/i, /continuer encore/i, /continuer en avant/i,
        /marchons en avant/i, /je progresse plus loin/i, /chemin avant/i, /je me dirige/i, /je poursuis encore/i,
        /en avant vers le chemin/i, /je me rends plus loin/i, /vers l’avant/i, /j’avance un peu/i,
        /vers un autre niveau/i, /je vais au chemin suivant/i, /je vais à l’étape suivante/i, /je poursuis encore plus/i,
        /continuer mon chemin encore/i, /je vais plus profond/i, /progresser dans la voie/i, /continuer à suivre/i,
        /je progresse encore/i, /je vais vers/i, /je progresse en avant/i, /je vais continuer/i,
        /je vais encore plus loin/i, /je me dirige en avant/i, /je marche en avant encore/i, /je continue à aller/i,

        // Portuguese
        /seguir.*em frente/i, /avançar/i, /continuar.*caminho/i, /eu sigo/i, /prosseguir/i,
        /mantenho o caminho/i, /continuo em frente/i, /vou para frente/i, /avanço/i, /vou em direção/i,
        /eu avanço/i, /caminho para frente/i, /continuar andando/i, /continuar avançando/i, /prosseguir caminho/i,
        /continuar em frente/i, /sigo para frente/i, /eu vou para frente/i, /avanço para frente/i, /andar para frente/i,
        /mantenho movimento/i, /continuar andando para frente/i, /continuo caminho/i, /seguir para frente/i, /em frente/i,
        /ir para frente/i, /vou adiante/i, /prosseguir andando/i, /continuar no caminho/i, /vou indo/i,
        /prosseguindo caminho/i, /seguir mais além/i, /caminho mais além/i, /eu ando para frente/i, /vou além/i,
        /eu sigo mais além/i, /mover para frente/i, /caminho reto/i, /continuo caminho reto/i, /continuo meu caminho/i,
        /vou até o fim/i, /continuidade em frente/i, /manter movimento/i, /prosseguir em frente/i, /avançar caminho/i,
        /vou para frente/i, /ando para frente/i, /andar para o túnel/i, /eu continuo/i, /vou adiante/i,
        /seguindo em frente/i, /movendo-me adiante/i, /sigo no caminho/i, /vou em frente/i, /prosseguindo além/i
    ]




}


async function friend() {
  
  
	clear();
	say("Hi, elliot", 0.3, 0.8);
	await type('L o a d i n g. . . ');
	return new Promise(async resolve => {
		// LOGO
		clear()

            // Declare game variables at a higher scope
    let currentStage = 'start';
    let selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    let hasTriedToReturn = false;
    let img; 
    let consOutput; 
    let exitHeader
    let gameScreen
    // LOGO
    clear();
    async function logoTitle() { 
        let logoScreen = await showTemplateScreen("logo");
        pause(2);
        await waitForKey();
        logoScreen.remove();
    }
  
    await logoTitle();

    async function initializeGame() {
        // Main game screen
        gameScreen = getScreen("friend");

        // Create the output for messages
        let output = document.createElement("div");
        output.classList.add("output");
        output.style.padding = "8vh 2vw"; 
        gameScreen.appendChild(output);

        addTemplate("console", gameScreen);

        const terminal = document.querySelector(".output");

        exitHeader = document.createElement("div");
        consOutput = document.createElement("div");
        exitHeader.classList.add("exitHEADER");
        consOutput.classList.add("exitOUTPUT");

        img = document.createElement("img");
        img.style.width = "54vw";
        consOutput.style.width = "80vw";
        img.style.height = "32vh";
        img.style.marginLeft = "5vw";

        exitHeader.appendChild(img);
        exitHeader.appendChild(consOutput);
        terminal.appendChild(exitHeader);

        const input = document.createElement("span");
        input.setAttribute("id", "input");
        input.setAttribute("contenteditable", true);
        terminal.appendChild(input);

        // Game logic initialization
        currentStage = 'start'
        img.src = gameData[currentStage];
    }

    async function failGame() {
        console.log('Wrong decision. . . . . . . ');
        pause(30);

        // Remove the current game screen
        const gameScreen = document.querySelector('.output');
        if (gameScreen) {
            gameScreen.remove();
        }

        // Show logo and wait for input
        await logoTitle();

        // Re-initialize the game
        await initializeGame();

        // Start the game again
        await eXitGame();
    }

    async function eXitGame() {
        await type(gameData[selectedLanguage].start, {}, consOutput);
        let answerStart = await getReply();

        if (options.start.barrel.some(regex => regex.test(answerStart))) {
            clean();
            currentStage = 'pathA';
            img.src = gameData[currentStage];
            await type(gameData[selectedLanguage].pathA, {}, consOutput);
            await handlePathA();
        } else if (options.start.friend.some(regex => regex.test(answerStart))) {
            clean();
            currentStage = 'pathB';
            img.src = gameData[currentStage];
            await type(gameData[selectedLanguage].pathB, {}, consOutput);
            await handlePathB();
        } else { 
            clean();
            await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await eXitGame();
        }
    }

    // Initialize the game for the first time
    await initializeGame();
    // Start the game


    await eXitGame();


function clean() {
    const element = document.querySelector('.typer');
   if (element) {
        element.remove();
    } 
}



// Handle Path A flow (Secret Tunnel)
async function handlePathA() {
    let pathA1answer = await getReply();
    if (options.enter.some(regex => regex.test(pathA1answer))) {
        clean();
        currentStage = 'pathA1';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA1, {}, consOutput);
        await handlePathA1();
    } //enter tunnel 
    else if (options.move.some(regex => regex.test(pathA1answer)))
    {
        clean();
        currentStage = 'pathA1';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA1, {}, consOutput);
        await handlePathA1();
    }
    else if (options.stay.some(regex => regex.test(pathA1answer)))
    {
        clean();
        currentStage = 'pathB';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathB, {}, consOutput);
        await handlePathB();
    }
    else { clean()
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
        await handlePathA();
        
    }
} // fixed

// Handle Path A1 flow (Escape Alone)
async function handlePathA1() {
    let pathA2answer = await getReply();

    if (options.readNote.some(regex => regex.test(pathA2answer))) {
        clean();
        currentStage = 'pathA2';
        img.src = gameData[currentStage];
        await type(`${gameData[selectedLanguage].pathA2}`, {}, consOutput);
        await handlePathA2();
    } 
    else if (options.move.some(regex => regex.test(pathA2answer))) {
        clean();
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA3, {}, consOutput);
        await handlePathA3();
    } 
    else if (options.pathA.call.some(regex => regex.test(pathA2answer))) {
        clean();
    const message = `${gameData[selectedLanguage].tooWeak}. ${gameData[selectedLanguage].pathA3}`;
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathA3();
    } 
    else { clean()
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await handlePathA1();
    }
} // fixed

// Handle Path A2 flow (read in darkness)
async function handlePathA2() {
    let pathA2answer = await getReply();

    if (options.move.some(regex => regex.test(pathA2answer))) {
        clean();
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA3, {}, consOutput);
        await handlePathA3();
    } 
    else if (options.pathA2.lookAround.some(regex => regex.test(pathA2answer))) {
        clean();
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA3, {}, consOutput);
        await handlePathA3();
    } 
    else if (options.pathB.some(regex => regex.test(pathA2answer))) {
        const message = `${gameData[selectedLanguage].nolight}. ${gameData[selectedLanguage].pathA3}`;
        clean();
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathA3();
    } 
    else if (options.pathA2.voltar.some(regex => regex.test(pathA2answer))) {
        const message = `${gameData[selectedLanguage].blockedPath}. ${gameData[selectedLanguage].pathA3}`;
        clean();
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathA3();
    } 
    else if (options.readNote.some(regex => regex.test(pathA2answer))) {
        const message = `${gameData[selectedLanguage].lostNote}. ${gameData[selectedLanguage].pathA3}`;
        clean();
        currentStage = 'pathA3';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathA3();
    } 
    else { clean()
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await handlePathA2();
    }
} //fixed

// Handle Path B2 flow (Read note with friend)
async function handlePathB2() {
    let pathB2answer = await getReply();

    if (options.move.some(regex => regex.test(pathB2answer))) {
        clean();
        currentStage = 'pathMatch';
        const message = `${gameData[selectedLanguage].givesMatches}`;
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathB2();
    } 
    else if (options.pathB.some(regex => regex.test(pathB2answer))) {
        const message = `${gameData[selectedLanguage].pathB1}`;
        clean();
        currentStage = 'pathB1';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathB3(); // leads to open note
    } 
    else if (options.pathB1.leave.some(regex => regex.test(pathB2answer))) {
        const message = gameData[selectedLanguage].pathA
        clean();
        currentStage = 'pathA';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathA();
    } 
    else { 
          clean();
        const message = `${gameData[selectedLanguage].invalid}`;
        await type(message, {}, consOutput);
        await handlePathB2();
    }
} //fixed

// Handle lighr a match flow B3
async function handlePathB3() {
    let pathB2answer = await getReply();

    if (options.stay.some(regex => regex.test(pathB2answer))) {
        clean();
        currentStage = 'pathWin';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathWin, {}, consOutput);
        await winGame();
        
        
    } 
    //fim game
    
    else if (options.pathB1.leave.some(regex => regex.test(pathB2answer))) {
        const message = gameData[selectedLanguage].pathA
        clean();
        currentStage = 'pathA';
        img.src = gameData[currentStage];
        await type(message, {}, consOutput);
        await handlePathA();
    } 
    else { clean()
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await handlePathB3();
    }
} // fixed

// Handle Path A3 flow (Beach)
async function handlePathA3() {
    let pathA3answer = await getReply();
    if (options.readNote.some(regex => regex.test(pathA3answer))) {
            currentStage = 'pathB1';
        img.src = gameData[currentStage];
      let message = `${gameData[selectedLanguage].noteMessage}.
      ${gameData[selectedLanguage].pathA3}`
        await type(message, {}, consOutput);
        await handlePathA3(); // Stay on pathA3 after reading note
    } else if (options.pathA3.lookAround.some(regex => regex.test(pathA3answer))) {
        clean();
        currentStage = 'pathA4';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA4, {}, consOutput);
        await handlePathA4();    
    } else if (options.pathB1.leave.some(regex => regex.test(pathA3answer))) {
        clean();
        currentStage = 'pathA4';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA4, {}, consOutput);
        await handlePathA4();    }
    else if (options.pathA2.voltar.some(regex => regex.test(pathA3answer))) {
        const message = `${gameData[selectedLanguage].blockedPath}. ${gameData[selectedLanguage].pathA3}`;
        clean();
   
        await type(message, {}, consOutput);
        await handlePathA3();
    } 
    
    else { clean()
      
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await handlePathA3();
    }
} // fixed

// Handle Path A4 flow (Boat - Freedom Ending)
async function handlePathA4() {
    let pathA4answer = await getReply();
    if (options.pathA4.some(regex => regex.test(pathA4answer))) {
        clean();
        currentStage = 'pathFail';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathFail, {}, consOutput);
        await failGame()
    } else { clean()
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await handlePathA4();
    }
} // fixed

// Handle Path B flow (Friend Interaction)
async function handlePathB() {
    let pathBanswer = await getReply();
    
    if (options.readNote.some(regex => regex.test(pathBanswer))) {
        clean();
        currentStage = 'pathA2';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA2, {}, consOutput);
        await handlePathB2();
    }
    else if (options.move.some(regex => regex.test(pathBanswer))) {
        clean();
        currentStage = 'pathA';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathA, {}, consOutput);
        await handlePathA();
    }
    else if (options.pathB.some(regex => regex.test(pathBanswer))) {
        await type(gameData[selectedLanguage].givesMatches, {}, consOutput); 
        clean();
        currentStage = 'pathB1';
        img.src = gameData[currentStage];
        await type(gameData[selectedLanguage].pathB3, {}, consOutput);
        await handlePathB3();
    }
    else { clean()
        await type(gameData[selectedLanguage].invalid, {}, consOutput);
            await handlePathB();
    }
} // fixed

// Stay with friend end
async function winGame() {
  pause(10)
  clean()
  exitHeader.remove()
  await type(gameData[selectedLanguage].win1); 
  pause(30)
  clean()
  await type(gameData[selectedLanguage].win2); 
  pause(35)
  gameScreen.remove()
  clean()
  clear()
  resolve()
} // fixed

// Start the game

   
        
	////////////////
	});
    

}

async function getReply(pw) {
    return new Promise((resolve) => {
        // This handles all user input
        const onKeyDown = (event) => {
            typeSound();
            // ENTER
            if (event.keyCode === 13) {
                event.preventDefault();
                event.target.setAttribute("contenteditable", false);
                let result = cleanInput(event.target.textContent);
                resolve(result);
            }
            
            // BACKSPACE
            else if (event.keyCode === 8) {
                // Prevent inserting a <br> when removing the last character
                if (event.target.textContent.length === 1) {
                    event.preventDefault();
                    event.target.innerHTML = "";
                }
            }
            // Check if character can be shown as output (skip if CTRL is pressed)
            else if (isPrintable(event.keyCode) && !event.ctrlKey) {
                event.preventDefault();
                // Wrap the character in a span
                let span = document.createElement("span");

                let keyCode = event.keyCode;
                let chrCode = keyCode - 48 * Math.floor(keyCode / 48);
                let chr = String.fromCharCode(96 <= keyCode ? chrCode : keyCode);
                // Add span to the input
                span.classList.add("char");
                span.textContent = chr;
                event.target.appendChild(span);

                // For password field, fill the data-pw attr with asterisks
                // which will be shown using CSS
                if (pw) {
                    let length = event.target.textContent.length;
                    event.target.setAttribute("data-pw", Array(length).fill("*").join(""));
                }
                moveCaretToEnd(event.target);
            }
        };

        // Check if there's an existing input span and remove it
        let terminal = document.querySelector(".output");
        let existingInput = terminal.querySelector("#input");
        if (existingInput) {
            terminal.removeChild(existingInput);
        }

        // Add input to terminal
        let input = document.createElement("span");
        input.setAttribute("id", "input");
        input.setAttribute("contenteditable", true);
        input.addEventListener("keydown", onKeyDown);
        terminal.appendChild(input);
        input.focus();
    });
}

async function displayOutput(txt,output) {
  
		output.innerHTML = "";
				await type(txt, { initialWait: 0 }, output);
				await pause(2);
}

export async function exitGame() { 


      friend()

}

const templates = ["friend"];
export { templates };
export default friend;