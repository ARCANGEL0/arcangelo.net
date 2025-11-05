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
    const screenWidth = window.innerWidth / 3
  let adds = 0 
   if(screenWidth>520) { adds = screenWidth*0.025} 
    // Approximate width of the character in pixels (adjust based on your font size)
    const charWidth = 2; // Adjust if your font is different
    const charCount = Math.floor(screenWidth / charWidth)/3 + (adds);

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
pAud("ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM COPYRIGHT 2075 ARCANGELO   -SERVER 6-")
  
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




let homeReturn, projectTitle,btnterminal, btnproject,termlink, ezymap,flowmvc, edgarbot, arcangelos,gamesTitle, halflife,breach, dino, rogue, rick, btngames, pong, laravel, scripts,exitgame,pokemon, btnhome, btnsobre, btngal, btncontact, btnlang, btnreturn, sitext,sobretexto,hometexto,contactinfo, bbnsite, bbnvid
function updateTexts() {
		  inicio.innerText = btnhome
		  sobre.innerText = btnsobre
		  galeria.innerText = btngal
		  projetos.innerText = btnproject
		  contato.innerText = btncontact
		  idioma.innerText= btnlang
		  games.innerText= btngames
		  terminal.innerText= btnterminal
		}
// Function to handle language change
function changeLanguage(language) {
  
  if (language === 'pt') {
  ezymap = "🔍 Terminal interativo para Nmap com predefinições de varredura, alternância de flags, seleção de scripts NSE e construção de comandos em tempo real."    
    btngames = "[JOGOS]"
    btnterminal = "[TERMINAL]"
    halflife = "Isso mesmo, o clássico λ𝖺𝗅𝖿 𝗅𝗂𝖿𝖾, ícone da Era dourada dos games, agora no navegador. Todo o crédito vai para o x8BitRain por essa obra — eu só fiz uns ajustes e coloquei no meu portfólio porque, convenhamos, essa lenda não podia ficar de fora."

    gamesTitle = "ACESSANDO ARQUIVO: JOGOS... [RobCo TERMINAL] | STATUS: ONLINE"
    
    exitgame = "Inspirado naquele jogo RPG baseado em texto que Elliot Alderson joga em Mr. Robot (S4E11). Consegue achar a saída? Você é um 1, ou só mais um 0?"
    
    pokemon = "Um jogo de batalha Pokémon baseado na web. Tem ataques, itens e tudo mais. Não é muito polido, a responsividade é um lixo, mas é um caos divertido."
    
    breach = "Sim, aquele mini-jogo de hacking do Cyberpunk 2077 que todo mundo adora, o NETTECH Breach Protocol. Siga a matriz e hackeie como o V."
    
    rogue = "Um jogo rogue-like aleatório que fiz na web."
    
    dino = "O famoso jogo do dinossauro do Chrome, mas... ‘minimalista’."
    
    rick = "O melhor jogo do meu portfólio. Sério, você vai adorar."
    
          laravel = "Este é um projeto pessoal para testar o Laravel com CRUD, explorando a manipulação de SQL através do Eloquent, simulando um ambiente comercial e criando um painel de controle para gerenciar clientes e transações."

      pong = "Projeto rápido que criei em Python, fazendo um jogo de pingue-pongue jogável por um ou dois jogadores, usando pygame, algumas mecânicas e uma IA (um monte de ifelses)."

      scripts = "Alguns scripts bagunçados que escrevi, usados principalmente para máquinas de Capture the Flag, alguns webshells, scripts de utilidade e automação em asp, php, python, o que você quiser."

          contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. DADOS DE USUARIO\nLENDO INFORMACOES_DE_CONTACTO\n\n"
      termlink = "Robco.TERMLINK é um script em Python que emula o sistema de autenticação de terminal da série de jogos Fallout. Além de trazer o clima de Fallout, ele inclui funcionalidades integradas e personalizáveis em sua console RobCo, como ativar serviços do sistema, ler journalctl, um editor de texto e muito mais, tornando a inicialização do bash nostálgica e funcional."
        projectTitle = '>SET ROUTE/PATH=GET:ASC PROJETOS.F\n\n'
        flowmvc = 'FlowManager é um painel financeiro desenvolvido em Laravel usando a estrutura MVC, projetado para ajudar os usuários a gerenciar receitas e despesas, gerando relatórios mensais e anuais em PDF. Ele fornece uma visão organizada das atividades financeiras, sendo uma ferramenta útil para rastreamento e relatório financeiro.'
        edgarbot = "𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 é um bot multi-dispositivo para WhatsApp, inspirado em um dos meus escritores favoritos, Edgar A. Poe. Ele vem com uma variedade de ferramentas para utilitários, desenvolvimento, hacking, gerenciamento de grupos, diversão, jogos e baixadores, projetado para ser meu assistente IA pessoal no WhatsApp. Não gosto de depender do ChatGPT; prefiro criar meu próprio modelo para atender às minhas necessidades."
        btnhome = '[INICIO]';
      btnsobre = '[SOBRE]';
      btngal = '[GALERIA]';
      btncontact = '[CONTATO]';
      btnlang = '[Language/Idioma/Langue/Язык/言語]'
      btnreturn = '[VOLTAR]';
      sitext = 'WEBSITES QUE FIZ';
      bbnsite = '[WEBSITES]';
      bbnvid = "[GALERIA]";
      btnproject = "[PROJETOS]";
      sobretexto = [
        `\n>// Fala aí! Eu sou o Henry. Sou um desenvolvedor, apaixonado por tecnologia que desafia limites (e minha paciência, às vezes).`,
        `Escrevo códigos que *geralmente* funcionam, crio interfaces criativas, e desenvolvo apps pra deixar a web mais interessante. Meus pronomes? TCP/IP.`,
        `Tenho experiência com JavaScript, Vue, React, Python, PHP, Node,Java e várias outras ferramentas que uso pra tirar ideias do papel. Front-end, back-end, banco de dados – se envolve código, eu tô dentro.`,
        `Atualmente, tô estudando Engenharia da Computação. Então, se você busca alguém que construa, quebre e (ás vezes) solucione o problema, sou o cara certo (?).`
      ];
      hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nBem-vindo ao meu portfólio, inspirado no icônico Termlink da ROBCO Industries da série Fallout.\n\nSou  Henry, desenvolvedor backend movido por uma paixão por software, redes e tudo relacionado à TI. Aqui, você encontrará uma amostra dos meus projetos e meus links de contacto :) .\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
      homeReturn = "--- PRESSIONE PARA CONTINUAR ---" 
      arcangelos = "ArcangelOS Distro é meu portfólio pessoal, projetado para simular um ambiente KDE Linux, assim como este terminal do Fallout. Ele apresenta ferramentas para download, fotos, alguns dos meus projetos e de mim mesmo. Talvez um dia eu crie minha própria distro."
} 
else if (language === 'es') {
      btnterminal="[TERMINAL]"
      ezymap = "🔍 Terminal interactivo para Nmap con ajustes preestablecidos de escaneo, alternancia de flags, selección de scripts NSE y construcción de comandos en tiempo real."  
  btngames = "[JUEGOS]"
  halflife = "Así es, el clásico λ𝖺𝗅𝖿 𝗅𝗂𝖿𝖾, el amanecer dorado de los videojuegos, ahora en la web. Todo el crédito es para x8BitRain por hacerlo jugable en línea — yo solo ajusté algunas cosas y lo sumé a mi portafolio porque, sinceramente, esta joya tenía que estar."

  gamesTitle = "ACCESANDO ARCHIVO: JUEGOS... [RobCo TERMINAL] | ESTADO: ONLINE"
  
  exitgame = "Inspirado en ese juego RPG basado en texto que juega Elliot Alderson en Mr. Robot (S4E11). ¿Puedes encontrar la salida? ¿Eres un 1 o solo otro 0?"
  
  pokemon = "Un juego de batalla Pokémon basado en la web. Tiene ataques, objetos y todo eso. No está muy pulido, la respuesta es un desastre, pero es un caos divertido."
  
  breach = "Sí, ese mini-juego de hacking de Cyberpunk 2077 que a todos les encanta, el NETTECH Breach Protocol. Sigue la matriz y hackea como V."
  
  rogue = "Un juego rogue-like aleatorio que hice en la web. Los controles están algo desordenados, pero bueno, es jugable."
  
  dino = "El famoso juego del dinosaurio de Chrome, pero... digamos que es un poco más ‘minimalista’."
  
  rick = "El mejor juego de mi portafolio. En serio, te va a encantar."
  
        laravel = "Este es un proyecto personal que hice para probar Laravel con CRUD, jugando con SQL a través de Eloquent, simulando un entorno comercial y creando un panel para gestionar clientes y transacciones."

    pong = "Un proyecto rápido que hice en Python, un juego de ping-pong para jugar solo o con alguien más, usando pygame, algunas mecánicas chidas y una IA (bastante loca, pero funciona)."

    scripts = "Bueno, estos son unos scripts desordenados que escribí, más que nada para máquinas Capture the Flag y ciberseguridad, algunos códigos útiles y automatización en asp, php, python, bash, lo que sea."

        termlink = "Robco.TERMLINK es un script en Python que emula el sistema de autenticación de terminal de la serie de juegos Fallout. No solo aporta la atmósfera de Fallout, sino que también incluye funciones integradas y personalizables en su consola RobCo, como activar servicios del sistema, leer journalctl, un editor de texto, y mucho más, haciendo que la inicialización de tu bash sea tanto nostálgica como funcional."
    contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. DATOS DE USUARIO\nLEYENDO INFORMACIÓN_DE_CONTACTO\n\n"
    flowmvc = 'FlowManager es un panel financiero desarrollado en Laravel utilizando la estructura MVC, diseñado para ayudar a los usuarios a gestionar ingresos y gastos, generando informes mensuales y anuales en formato PDF. Ofrece una visión organizada de las actividades financieras, convirtiéndose en una herramienta útil para el seguimiento y reporte financiero.'
        projectTitle = '>SET ROUTE/PATH=GET:ASC PROYECTOS.F\n\n'
        edgarbot = "𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 es un bot multi-dispositivo de WhatsApp, inspirado en uno de mis escritores favoritos, Edgar A. Poe. Viene con una variedad de herramientas para utilidades, desarrollo, hacking, gestión de grupos, diversión, juegos y descargadores, diseñado para ser mi asistente IA personal en WhatsApp. No me gusta depender de ChatGPT; prefiero crear mi propio modelo para adaptarlo a mis necesidades."
        btnhome = '[INICIO]';
    btnsobre = '[ACERCA DE]';
    btngal = '[GALERÍA]';
    btncontact = '[CONTACTO]';
    btnlang = '[Language/Idioma/Langue/Язык/言語]'
    btnreturn = '[VOLVER]';
    sitext = 'SITIOS WEB QUE HE CREADO';
    bbnsite = '[SITIOS WEB]';
    btnproject = "[PROYECTOS]";

    bbnvid = "[GALERIA]"
    arcangelos = "ArcangelOS Distro es mi portafolio personal, diseñado para simular un entorno KDE Linux, similar a este terminal de Fallout. Presenta herramientas para descargar, fotos y muestras de mis proyectos y de mí mismo. Tal vez algún día cree mi propia distro."
    sobretexto = [
      `\n>// ¡Hola! Soy Henry – desarrollador, gamer y creador digital con una pasión por la tecnología que desafía límites (y a veces mi paciencia).`,
      `Hago código que *casi siempre* funciona, diseño interfaces limpias, y creo apps para hacer la web un poco más interesante. ¿Mis pronombres? TCP/IP.`,
      `Me manejo bien con JavaScript, Vue, React, Python, PHP, Node, y otras herramientas que uso para llevar ideas a la realidad. Frontend, backend, bases de datos – si lleva código, ahí estoy.`,
      `Actualmente, me estoy adentrando en Ciberseguridad Ofensiva e Ingeniería de Software, aprendiendo a hackear (éticamente, por supuesto) y a construir algunas herramientas útiles. Así que, si buscas a alguien que pueda construir, romper y (generalmente) arreglar cosas, soy yosoy.`
    ];
    hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nBienvenido a mi portafolio, inspirado en el icónico Termlink de ROBCO Industries de la serie Fallout.\n\nSoy Henry, un desarrollador backend impulsado por una gran pasión por el software, las redes y todo lo relacionado con la informática. Aquí encontrarás una muestra de mi trabajo, cada proyecto un paso en mi viaje para construir e innovar en el mundo de la tecnología.\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
    homeReturn = "--- PRESIONE PARA CONTINUAR ---"
} 

  else if (language === 'ja') {
   ezymap = "🔍 Nmap用のインタラクティブなターミナル。スキャンプリセット、フラグ切り替え、NSEスクリプト選択、リアルタイムのコマンド構築が可能。"  
    btngames = "[ゲーム]"
    halflife = "そう、あの名作 λ𝖺𝗅𝖿 𝗅𝗂𝖿𝖾。ゲーム黄金期の伝説が、ついにWebで遊べるように。移植したのはx8BitRain、僕は少しだけ手を加えてポートフォリオに載せただけ。この名作は外せないからね。"

    gamesTitle = "ファイルアクセス中: ゲーム... [RobCo TERMINAL] | ステータス: オンライン"
    
    exitgame = "Mr. Robot（S4E11）でエリオット・オールダーソンがプレイしているテキストベースのRPGゲームにインスパイアされたもの。脱出方法を見つけられるか？あなたは1なのか、それともただの0なのか？"
    
    pokemon = "Webベースのポケモンバトルゲーム。攻撃、アイテム、その他色々。あまり洗練されていないし、レスポンスはひどいけど、楽しい混乱だよ。"
    
    breach = "あのCyberpunk 2077のハッキングミニゲーム、みんなが大好きなNETTECH Breach Protocolだよ。マトリックスを追って、Vみたいにハックしよう。"
    
    rogue = "ウェブで作ったランダムなローグライクゲーム。操作はちょっとバタバタしてるけど、まぁ遊べるよ。"
    
    dino = "有名なChromeの恐竜ゲームだけど... ちょっと‘ミニマル’だね。"
     btnterminal ="[コマンド]"
    rick = "ポートフォリオの中で一番のゲームだよ。絶対気に入ると思う。"
    
      laravel = "これはLaravelでCRUDを試すために作った個人的なプロジェクトで、Eloquentを使ってSQLをいじりながら、商業環境をシミュレートして、クライアントや取引を管理するためのパネルを作った感じ。"

      pong = "Pythonで作った簡単なプロジェクトで、1人でも2人でも遊べるピンポンゲームを作成。pygame使って、いくつかのメカニクスとAI（ちょっとカオスだけど、動く）も搭載。"

      scripts = "これ、ちょっとごちゃごちゃしたスクリプトだけど、主にCapture the Flagのマシンやサイバーセキュリティ用に書いたやつ。役立つコードと自動化のスクリプトをasp、php、python、bashで書いてる感じ、なんでもあり。"

          // デフォルト言語（英語）
      flowmvc = "FlowManagerは、Laravelを使用してMVC構造で開発された財務ダッシュボードで、ユーザーが収入と支出を管理し、月次および年次のPDFレポートを生成できるように設計されています。これは、財務活動の整理された概要を提供し、財務の追跡と報告に役立つツールです。";
      projectTitle = '>SET ROUTE/PATH=GET:ASC PROJECTS.F\n\n';
      edgarbot = "𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱は、私の好きな作家エドガー・アラン・ポーにインスパイアされたWhatsAppのマルチデバイスボットです。ユーティリティ、開発、ハッキング、グループ管理、楽しさ、ゲーム、ダウンローダーのさまざまなツールが備わっており、WhatsAppで私のパーソナルAIアシスタントとして設計されています。私はChatGPTに頼るのが好きではありません。自分のニーズに合わせて自分のモデルを作ることを好みます。";
      arcangelos = "ArcangelOS Distroは、KDE Linux環境を模倣するように設計された私の個人的なポートフォリオです。このFalloutターミナルのように、ダウンロード用のツール、写真、私のプロジェクトと自分自身の紹介が含まれています。いつか自分のディストリビューションを作るかもしれません。";
      termlink = "Robco.TERMLINKは、Falloutゲームシリーズのターミナル認証システムをエミュレートするPythonスクリプトです。Falloutの雰囲気を提供するだけでなく、RobCoコンソールに組み込まれたカスタマイズ可能な機能（システムサービスの起動、journalctlの読み取り、テキストエディターなど）があり、Bashの初期化を懐かしくかつ機能的にします。";
      contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. USER DATA\nREADING CONTACT_INFORMATION\n\n";
      btnhome = '[ホーム]';
      btnsobre = '[について]';
      btngal = '[ギャラリー]';
      btncontact = '[連絡先]';
      btnlang = '[Language/Idioma/Langue/Язык/言語]'
      btnreturn = '[戻る]';
      sitext = '私が作成したウェブサイト';
      btnproject = "[プロジェクト]";
      bbnsite = '[ウェブサイト]';
      bbnvid = "[ギャラリー]";
      sobretexto = [
        `\n>// こんにちは！私はヘンリーです — 開発者、ゲーマー、デジタルクリエイターで、境界を押し広げる技術（時には私の忍耐力も）に情熱を持っています。`,
        `私は、*ほぼ*動作するコードを作り、クリエイティブで完全にUX/UIガイドに沿ったインターフェース（まったくそうではない）をデザインし、ウェブを少しクールにすることを目指してアプリを構築しています。私の代名詞は？TCP/IP。`,
        `JavaScript、Vue、React、Python、PHP、Nodeなどの技術に精通しており、アイデアを実現するためのツールを使いこなしています。フロントエンド、バックエンド、データベース — 名前を挙げれば、おそらくそれに触れているでしょう。`,
        `今は、オフェンシブサイバーセキュリティとソフトウェアエンジニアリングに取り組んでおり、ハッキング（*倫理的に*もちろん）を学び、いくつかの便利なツールを作っています。ですので、何かを作り、壊し、（通常は）修正することができる人を探しているなら、私はその人です。`
      ];
      // 必要に応じて他のテキストを更新
      hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ログ#27にアクセス中...\n\n--- ログエントリ開始 ---\n\nFalloutシリーズの象徴的なROBCO Industries Termlinkからインスパイアされたポートフォリオへようこそ。\n\n私はヘンリー、ソフトウェア、ネットワーク、IT全般に情熱を注ぐバックエンド開発者です。ここでは、私の仕事の紹介と連絡先を見つけることができます。\n\n> システムステータス: すべて正常";
      homeReturn = "  --- 続行するには、任意のキーを押してください ---";

}
  else if (language === 'ru') {
    ezymap = "🔍 Интерактивный терминал для Nmap с предустановками сканирования, переключателями флагов, выбором скриптов NSE и построением команды в реальном времени."  
    btngames = "[ИГРЫ]"
    halflife = "Да, именно он — классика λ𝖺𝗅𝖿 𝗅𝗂𝖿𝖾, золотая эра игр, теперь в браузере. Все заслуги у x8BitRain за этот порт — я лишь немного доработал и добавил в портфолио, потому что такая легенда не могла остаться в стороне."

    gamesTitle = "ДОСТУП К ФАЙЛУ: ИГРЫ... [RobCo TERMINAL] | СТАТУС: ОНЛАЙН"
    
    exitgame = "Вдохновлено тем RPG, в которое играет Элиот Олдерсон в Mr. Robot (S4E11). Сможешь найти выход? Ты 1 или просто еще один 0?"
    
    pokemon = "Веб-игра с покемонами. Есть атаки, предметы и все такое. Не очень отполировано, отклик — полный бардак, но это веселье в хаосе."
    
    breach = "Да, этот мини-игра по хакерству из Cyberpunk 2077, который всем нравится — NETTECH Breach Protocol. Следи за матрицей и хакни как V."
    
    rogue = "Рандомная rogue-like игра, которую я сделал на вебе. Управление немного сумбурное, но, эй, играть можно."
    
    dino = "Знаменитая игра с динозавром из Chrome, но... скажем, она более ‘минималистична’."
    
    rick = "Лучшая игра в моем портфолио. Серьезно, тебе понравится."
    
    laravel = "Это личный проект для тестирования Laravel с CRUD, я ковыряюсь с SQL через Eloquent, моделирую коммерческую среду и делаю панель для управления клиентами и транзакциями."

    pong = "Быстрый проект на Python, сделал игру в пинг-понг, можно играть одному или вдвоем, использую pygame, пару механик и ИИ (немного сумасшедший, но работает)."

    scripts = "Короче, вот несколько беспорядочных скриптов, которые я написал, в основном для машин Capture the Flag и кибербезопасности, полезные коды и автоматизация на asp, php, python, bash — короче, что угодно."
    btnproject = "[ПРОЕКТЫ]";
    flowmvc = "FlowManager — это финансовая панель, разработанная на Laravel с использованием структуры MVC, предназначенная для помощи пользователям в управлении доходами и расходами, а также для генерации ежемесячных и ежегодных отчетов в формате PDF. Она предоставляет организованный обзор финансовых операций, что делает ее полезным инструментом для отслеживания и отчетности по финансам.";
    projectTitle = '>SET ROUTE/PATH=GET:ASC PROJECTS.F\n\n';
    edgarbot = "𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 — это многофункциональный бот для WhatsApp, вдохновленный одним из моих любимых писателей, Эдгаром А. По. Он оснащен различными инструментами для утилит, разработки, хакерских задач, управления группами, развлечений, игр и загрузчиков, и предназначен быть моим персональным ИИ-ассистентом в WhatsApp. Я не люблю полагаться на ChatGPT; я предпочитаю создавать свою модель, чтобы она соответствовала моим нуждам.";
    arcangelos = "ArcangelOS Distro — это мой личный портфолио, созданный для имитации среды KDE Linux, похожей на этот терминал Fallout. В нем есть инструменты для скачивания, фотографии и демонстрации моих проектов и себя. Возможно, когда-нибудь я создам свою собственную дистрибуцию.";
    termlink = "Robco.TERMLINK — это Python-скрипт, эмулирующий систему аутентификации терминала из серии игр Fallout. Он не только передает атмосферу Fallout, но также включает встроенные и настраиваемые функции на своей консоли RobCo, такие как включение системных служб, чтение журналов systemctl, текстовый редактор и многое другое, что делает инициализацию bash одновременно ностальгичной и функциональной.";
    contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. USER DATA\nREADING CONTACT_INFORMATION\n\n";
    btnhome = '[ДОМАШНЯЯ СТРАНИЦА]';
    btnsobre = '[ОБО МНЕ]';
    btngal = '[ГАЛЕРЕЯ]';
    btncontact = '[КОНТАКТ]';
    btnlang = '[Language/Idioma/Langue/Язык/言語]'
    btnreturn = '[ВЕРНУТЬСЯ]';
    sitext = 'ВЕБ-САЙТЫ, КОТОРЫЕ Я СОЗДАЛ';
    btnterminal= '[ИНТЕРФЕЙС КОМАНДНОЙ СТРОКИ]'
    bbnsite = '[ВЕБ-САЙТЫ]';
    bbnvid = "[ГАЛЕРЕЯ]";
    sobretexto = [
      `\n>// Привет! Я Генри — разработчик, геймер и цифровой создатель, увлеченный технологиями, которые раздвигают границы (и иногда моё терпение).`,
      `Я пишу код, который *в основном* работает, разрабатываю креативные интерфейсы, ориентированные на UX/UI (совсем не так), и строю приложения, которые делают веб немного круче. Мои местоимения? TCP/IP.`,
      `У меня есть опыт работы с JavaScript, Vue, React, Python, PHP, Node и другими инструментами, которые помогают мне воплощать идеи в жизнь. Front-end, back-end, базы данных — называй, и я, вероятно, с этим возился.`,
      `Сейчас я погружаюсь в Offensive Cybersecurity и Software Engineering, учусь хакерству (*этически*, конечно) и строю полезные инструменты. Так что, если вам нужен кто-то, кто может строить, ломать и (обычно) чинить вещи, я тот, кто вам нужен.`
    ];
    // Обновить другие тексты по мере необходимости
    hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ДОСТУП К ЖУРНАЛАМ #27...\n\n--- ИНИЦИАЛИЗАЦИЯ ЗАПИСИ ---\n\nДобро пожаловать в моё портфолио, вдохновленное культовым терминалом ROBCO Industries из серии Fallout.\n\nЯ Генри, backend-разработчик, движимый глубокой страстью к программному обеспечению, сетям и всему, что связано с IT. Здесь вы найдете демонстрацию моих работ и моих контактов.\n\n> СТАТУС СИСТЕМЫ: ВСЕ СИСТЕМЫ НОРМАЛЬНЫ";
    homeReturn = "  --- НАЖМИТЕ ЛЮБУЮ КНОПКУ, ЧТОБЫ ПРОДОЛЖИТЬ ---";

}
  else if (language === 'fr') {
   ezymap = "🔍 Terminal interactif pour Nmap avec préréglages de scan, commutateurs de flags, sélection de scripts NSE et construction de commandes en temps réel."  
  btnterminal="[TERMINAL]" 
    halflife = "C’est bien ça, le classique λ𝖺𝗅𝖿 𝗅𝗂𝖿𝖾, l’âge d’or du jeu vidéo, porté sur le web. Tout le mérite revient à x8BitRain pour l’avoir mis en ligne — j’ai juste apporté quelques retouches et l’ai ajouté à mon portfolio car ce bijou devait y être."

    btngames = "[JEUX]"

gamesTitle = "ACCES AU FICHIER : JEUX... [RobCo TERMINAL] | ÉTAT : EN LIGNE"

exitgame = "Inspiré par ce jeu RPG textuel que joue Elliot Alderson dans Mr. Robot (S4E11). Tu peux trouver la sortie ? Es-tu un 1, ou juste un autre 0 ?"

pokemon = "Un jeu de bataille Pokémon basé sur le web. Il a des attaques, des objets et tout ça. Ce n'est pas très poli, la réactivité est nulle, mais c’est un chaos amusant."

breach = "Ouais, ce mini-jeu de hacking de Cyberpunk 2077 que tout le monde adore, le NETTECH Breach Protocol. Suis la matrice et hacke-le comme V."

rogue = "Un jeu rogue-like aléatoire que j’ai fait sur le web. Les contrôles sont un peu partout, mais bon, il est jouable."

dino = "Le célèbre jeu du dinosaure Chrome, mais... disons que c’est un peu plus ‘minimaliste’."

rick = "Le meilleur jeu de mon portfolio. Sérieusement, tu vas l’adorer."
 
        laravel = "C'est un projet perso que j'ai fait pour tester Laravel avec CRUD, en bidouillant avec SQL via Eloquent, en simulant un environnement commercial et en créant un panneau pour gérer les clients et les transactions."

        pong = "Un projet rapide que j'ai fait en Python, un jeu de ping-pong à jouer seul ou à deux, avec pygame, quelques mécaniques sympas et une IA (un peu chaotique, mais ça marche)."
        
        scripts = "Alors voilà, ce sont des scripts un peu brouillons que j'ai écrits, principalement pour des machines Capture the Flag et la cybersécurité, des codes utiles et de l'automatisation générale en asp, php, python, bash, bref tout ce qu'il faut."
        
        projectTitle = '>SET ROUTE/PATH=GET:ASC PROJETS.F\n\n'
        termlink ="Robco.TERMLINK est un script Python qui émule le système d'authentification de terminal de la série de jeux Fallout. Non seulement il apporte l'ambiance de Fallout, mais il inclut également des fonctionnalités intégrées et modifiables sur sa console RobCo, telles que l'activation de services système, la lecture de journalctl, un éditeur de texte, et bien plus encore, rendant l'initialisation de votre bash à la fois nostalgique et fonctionnelle."
        edgarbot = "𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 est un bot multi-appareil pour WhatsApp, inspiré par l'un de mes écrivains préférés, Edgar A. Poe. Il propose une variété d'outils pour les utilitaires, le développement, le hacking, la gestion de groupes, le divertissement, les jeux et les téléchargeurs, conçu pour être mon assistant IA personnel sur WhatsApp. Je n'aime pas dépendre de ChatGPT; je préfère créer mon propre modèle pour répondre à mes besoins."
        contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. DONNÉES UTILISATEUR\nLECTURE INFORMATIONS_DE_CONTACT\n\n";
    flowmvc ="FlowManager est un tableau de bord financier développé en Laravel avec la structure MVC, conçu pour aider les utilisateurs à gérer les revenus et les dépenses tout en générant des rapports PDF mensuels et annuels. Il fournit une vue d'ensemble organisée des activités financières, en faisant un outil utile pour le suivi et le reporting financiers."
    btnhome = '[ACCUEIL]';
    btnsobre = '[À PROPOS]';
    btngal = '[GALERIE]';
    btncontact = '[CONTACT]';
    btnlang = '[Language/Idioma/Langue/Язык/言語]'
    btnreturn = '[RETOUR]';
    btnproject = "[PROJETS]";
    sitext = 'LES SITES WEB QUE J\'AI CRÉÉS';
    bbnsite = '[SITES INTERNET]';
    bbnvid = "[GALERIE]"
    sobretexto = [
      `\n>// Salut ! Moi, c’est Henry – développeur, gamer et créateur digital, passionné par la tech qui repousse les limites (et parfois ma patience).`,
      `Je code des trucs qui *marchent presque toujours*, je conçois des interfaces propres, et je crée des applis pour rendre le web un peu plus cool. Mes pronoms ? TCP/IP.`,
      `Je maîtrise bien JavaScript, Vue, React, Python, PHP, Node, et d'autres outils que j'utilise pour donner vie aux idées. Front-end, back-end, bases de données – si ça a du code, j’y suis.`,
      `n ce moment, je me plonge dans la cybersécurité offensive et l’ingénierie logicielle, apprenant à hacker (éthiquement, bien sûr) et à construire quelques outils utiles. Donc, si vous cherchez quelqu’un capable de construire, casser et (généralement) réparer des choses, je suis la personne qu'il vous faut.`
    ];
    arcangelos = "ArcangelOS Distro est mon portfolio personnel, conçu pour simuler un environnement KDE Linux, un peu comme ce terminal Fallout. Il propose des outils à télécharger, des photos et des présentations de mes projets et de moi-même. Peut-être qu'un jour je créerai ma propre distro."
    hometexto = "> ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\n> ACCESSING LOGS #27...\n\n--- LOG ENTRY INITIALIZED ---\n\nBienvenido a mi portafolio, inspirado en el icónico Termlink de ROBCO Industries de la serie Fallout.\n\nSoy Henry, un desarrollador backend impulsado por una gran pasión por el software, las redes y todo lo relacionado con la informática. Aquí encontrarás una muestra de mi trabajo, cada proyecto un paso en mi viaje para construir e innovar en el mundo de la tecnología.\n\n> SYSTEM STATUS: ALL SYSTEMS NORMAL\n\n";
    homeReturn = "--- APPUYEZ POUR CONTINUER ---"
}
else {
  halflife = "That's right, the classic λ𝖺𝗅𝖿 𝗅𝗂𝖿𝖾, the golden dawn of games, ported to web. Full credit goes to x8BitRain for making it playable online — I just made a few tweaks and dropped it in my portfolio because, honestly, this gem had to be here."
  ezymap = "🔍 Interactive terminal-based Nmap launcher with scan presets, flag toggles, NSE script selection, and real-time command building. "
      btngames = "[GAMES]"
btnterminal="[TERMINAL]"
    gamesTitle = "ACCESSING FILE: GAMES... [RobCo TERMINAL] | STATUS: ONLINE"

    exitgame = "Inspired by that Text-Based RPG game Elliot Alderson plays in Mr. Robot (S4E11). Can you find the escape? Are you a 1, or just another 0?"

    pokemon = "A web-based Pokémon battle game. It's got attacks, items, and all that jazz. Not super polished, but it's fun chaos."

    breach = "Yeah, that one hacking mini-game from Cyberpunk 2077 that everybody loves, the NETTECH Breach Protocol. Follow the matrix and hack it like V."

    rogue = "A random rogue-like game I threw together on the web. The controls are a little all over the place, but hey, it’s playable."

    dino = "The famous Chrome dinosaur game, but... let’s just say it’s a little more ‘minimalistic’."

    rick = "The best game in my portfolio. Seriously, you’ll love it."

laravel = "A personal project I made to test Laravel with CRUD, tinkering with SQL via Eloquent, simulating a business environment, and creating a panel to manage clients and transactions."

pong = "A quick project I made in Python, a ping-pong game playable solo or with two players, using pygame."

scripts = "So these are some messy scripts I wrote, mainly for Capture the Flag machines and cybersecurity, useful code and general automation in ASP, PHP, Python, Bash — basically everything you need."


        flowmvc="FlowManager is a financial dashboard developed in Laravel using the MVC structure, designed to help users manage income and expenses while generating monthly and annual PDF reports. It provides an organized overview of financial activities, making it a useful tool for financial tracking and reporting."
        projectTitle = '>SET ROUTE/PATH=GET:ASC PROJECTS.F\n\n'
    edgarbot = "𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 is a WhatsApp multi-device bot, inspired by one of my favorite writers, Edgar A. Poe. It comes with a variety of tools for utilities, development, hacking, group management, fun, games, and downloaders, designed to be my personal AI assistant on WhatsApp. I don't like relying on ChatGPT; I prefer creating my own model to fit my needs.'"
    arcangelos = "ArcangelOS Distro is my personal portfolio, designed to simulate a KDE Linux environment, much like this Fallout terminal. It features tools for download, photos, and showcases of my projects and myself. Maybe one day I’ll create my own distro."
    termlink = "Robco.TERMLINK is a Python script that emulates the terminal authentication system from the Fallout game series. Not only does it deliver Fallout vibes, but it also includes built-in and customizable features on its RobCo console, like switching on system services, reading journalctl, a text editor, and more—making your bash initialization both nostalgic and functional."
        contactinfo = "[TERMLINK PROTOCOL]\n> RIT-V300. USER DATA\nREADING CONTACT_INFORMATION\n\n";
        btnhome = '[HOME]';
        btnsobre = '[ABOUT]';
        btngal = '[GALLERY]';
        btncontact = '[CONTACT]';
    btnlang = '[Language/Idioma/Langue/Язык/言語]'
        btnreturn = '[RETURN]';
        sitext = 'WEBSITES I\'VE DONE';
        btnproject = "[PROJECTS]";
        bbnsite = '[WEBSITES]';
    bbnvid = "[GALLERY]"
        sobretexto = [
      `\n>// Hey there! I'm Henry – a developer, gamer, and digital creator with a love for tech that pushes boundaries (and sometimes my patience).`,
      `I code things that *mostly* work, design some creative and totally UX/UI guided interfaces (totally not), and build apps that aim to make the web a little cooler. My pronouns? TCP/IP.`,
      `I got experience in JavaScript, Vue, React, Python, PHP, Node, and a handful of other tools that help me bring ideas to life. Front-end, back-end, databases – you name it, I probably mess with it.`,
      `Right now, I’m diving into Offensive Cybersecurity & Software Engineering, learning to hack (*ethically*, of course) and build some useful tools . So if you're looking for someone who can build, break, and (usually) fix things, I'm the guy.`
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
    { type: 'Instagram', name:'h.arcangelo', link: 'https://instagram.com/h.arcangelo' },
    { type: 'WhatsApp/Phone', name: '+351 927285125', link: 'https://api.whatsapp.com/send?phone=351927285125' },
    { type: 'Website',name: 'ArcangelOS', link: 'https://arcangelo.net' },
    { type: 'Email',name:'henrique.c.arcangelo@gmail.com', link: 'mailto:rick_arcangelo@hotmail.com,henry.arcangello@proton.me,henry.arcangello@gmail.com' },
    { type: 'LinkedIn', name:'Henrique Arcangelo', link:'https://www.linkedin.com/in/henryarcangelo/' },
    { type: 'Hack The Box', name:'xSam4el', link: 'https://app.hackthebox.com/profile/126962' },
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
        pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);
    };


    // Remove the "Logout" and "Contact" buttons
    inicio.remove();
    sobre.remove();
    projetos.remove();
    galeria.remove();
    games.remove();
    
    contato.remove();
    idioma.remove();
    terminal.remove();
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

    // Append the message and "Go Back" link to the 'outro' element
type([message, goBackLink], { processChars: false , wait: 10 }, outro);
 
       
			
			
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
                      { type: edgarbot, name:'𝔈𝔡𝔤𝔞𝔯 ꓥ𝔩𝔩𝔞𝔫 𝔅𝔬𝔱', link: 'https://github.com/ARCANGEL0/edgarbot-MD' },
                      { type: flowmvc , name: '𝗙𝗹𝗼𝘄 ᮿ𝘔𝘢𝘯𝘢𝘨𝘦𝘳', link: 'https://github.com/ARCANGEL0/flowManager' },
                      { type: ezymap , name: ' 🜅 𝘌𝘻𝘺𝘔𝘢𝘱', link: 'https://github.com/ARCANGEL0/EzyMap' },
                      { type: termlink, name: '𝗥𝗼𝗯𝗖𝗼.𝖳𐄒𝖱𝖬𝖫𝖨𝖭𝖪', link: 'https://github.com/robco-termlink' },
                      { type: arcangelos, name: '𝛌𝗿𝗰𝗮𝗻𝗴𝗲𝗹ꓳS Lɪɴᴜx', link: 'https://arcangelo.net' },
                      { type: scripts, name: '𝚂𝚑𝚎𝚕𝚕 𝚂𝚌𝚛𝚒𝚙𝚝𝚜', link: 'https://github.com/ARCANGEL0/Scripts' },
                      { type: pong, name: '𝘗𝘺𝘵𝘩𝘰𝘯 𝘗𝘐̆𝘯𝘨𝘗ø𝘯𝘨', link: 'https://github.com/ARCANGEL0/PythonPong' },
                      { type: laravel, name: '𝗟𝗮𝗿𝗮𝘃𝗲𝗹 Dᴀsʜʙᴏᴀʀᴅ', link: 'https://github.com/ARCANGEL0/LaravelDashboard' },
                      
                      
                      

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
                      pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

                      type([inicio, sobre, galeria, projetos, games, contato, terminal, idioma], { processChars: false, wait: 10 }, outro);


                  };
                  inicio.remove();
                  sobre.remove();
                  projetos.remove();
                  galeria.remove();
                  games.remove();
                  
                  contato.remove();
                  idioma.remove();
                  terminal.remove();
                  pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")


                  type([goBackLinkP, messageP], { processChars: false, wait: 10 }, outro);


         };
            
		
	
  
         let games = document.createElement("a");
         games.innerText = btngames;
         games.classList.add("btn-games")
         games.href = "#";
         games.onclick = () => {	
                       const messageP2 = document.createElement('p');
                       messageP2.innerText = gamesTitle;
     
                       const scrollableContainerGame = document.createElement('div');
                       scrollableContainerGame.style.overflowY = 'auto';
                       scrollableContainerGame.style.maxHeight = '60vh';
                       scrollableContainerGame.style.border = '0px solid #00ff00'; // Bright green border for the terminal look
                       scrollableContainerGame.style.padding = '30px';
                       scrollableContainerGame.style.color = '#00ff00'; // Bright green text
     
     
                       const projectsTableGame = document.createElement('table');
                       projectsTableGame.style.borderCollapse = 'collapse';
                       projectsTableGame.style.maxWidth = '70vw';
                       projectsTableGame.style.wordWrap = 'break-word';
     
                       const gams = [
                           { type: exitgame, name:'ｅＸｉｔ  ᚤ', link: 'https://arcangelo.net/fallout?run=friend' },
                           { type: breach , name: '𝗡𝗘𝝥𝗘𝗖𝗛 𝗕𝗥𝝣𝗔𝗖𝗛 𝗣𝗥⛶𝗧𝗢𝗖𝚹𝗟', link: 'https://arcangelo.net/fallout?run=friend' },
                           { type: halflife, name: '𝖧λ𝖫𝖥 - 𝖫𝖨𝖥𝖤', link: 'https://arcangelo.net/valve' },
                           { type: dino, name: 'Dɪɴᴏ ࠅ', link: 'https://arcangelo.net/fallout?run=dino' },
                           { type: pokemon, name: '𝙿𝚘́𝚔𝚎𝚖𝚘𝚗 ⦺', link: 'https://arcangelo.net/fallout?run=pokemon' },
                           { type: rogue, name: '𝗥𝗼𝗴𝘂𝗲 ꗃ', link: 'https://arcangelo.net/fallout?run=rogue' },
                           { type: rick, name: '？？？？', link: 'https://arcangelo.net/fallout?run=rick' },
                           
                           
     
                       ];
     
                       gams.forEach(game => {
                           const rowG = projectsTableGame.insertRow();
                           const typeCellG = rowG.insertCell();
                           const linkCellG = rowG.insertCell();
     
                           linkCellG.innerText = game.type;
                           typeCellG.style.padding = '5px';
                           typeCellG.style.border = '1px solid #008000';
                           typeCellG.style.whiteSpace = 'normal';
                           typeCellG.style.minWidth = '10vw';
     
                           typeCellG.innerHTML = `<a href="${game.link}" target="_blank">${game.name}</a>`;
                           linkCellG.style.padding = '5px';
                           linkCellG.style.border = '1px solid #008000';
                           linkCellG.style.whiteSpace = 'normal';
                       });
     
                       scrollableContainerGame.appendChild(projectsTableGame);
                       messageP2.appendChild(scrollableContainerGame);
     
                       const goBackLinkG = document.createElement("a");
                       goBackLinkG.innerText = btnreturn;
                       goBackLinkG.classList.add("btnReturn");
                       goBackLinkG.href = "#";
                       goBackLinkG.onclick = () => {
                           messageP2.remove();
                           goBackLinkG.remove();
                           pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
     
                           type([inicio, sobre, galeria, projetos, games, contato, terminal, idioma], { processChars: false, wait: 10 }, outro);
     
     
                       };
     
                       inicio.remove();
                       sobre.remove();
                       galeria.remove();
                       
                       projetos.remove();
                       games.remove();

                       contato.remove();
                       idioma.remove();
                       terminal.remove();
                       pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
     
     
                       type([goBackLinkG, messageP2], { processChars: false, wait: 10 }, outro);
     
     
              };
                 
  
       
       
       
              let galeria = document.createElement("a");
const style = document.createElement("style");

// Define the CSS content
const cssContent = `
  .galMainDiv {
    display: flex;
    flex-direction: row;
    width: 50vw; 
    height: 50vh;
  }

    .galMainDiv video {
    max-width: 30%;
    width: 30vw;
    height: 45vh;
    border-radius: 4px;
    background: black;
  }

   .sitesheader:hover{
    color: yellow !important;
    background: transparent !important;
   }
  .next { 
--slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% 0 0 0);
  --slice-2: inset(50% 0 30% 0);
  --slice-3: inset(10% 0 85% 0);
  --slice-4: inset(40% 0 43% 0);
  --slice-5: inset(80% 0 5% 0);
  content: "LGN";


  left: 0;
  right: 0;
  bottom: 0;

  transform: scaleX(-1);
  }

  .carousel-button { 
    height: 60px;
    padding: 40px;
   margin: 150px 150px 0 150px;
  }


/* Mobile / Tablet layout */
@media screen and (max-width: 768px) {
    .galMainDiv {
        flex-direction: column;  /* stack vertically */
        align-items: center;
        width: 80vw !importan;
    }
    .btnContainer {
        flex-direction: row;     /* buttons side by side */
        margin-bottom: 10px;
    }
    .carousel-button {
     margin: 6vw 2vw 8vh 5vw !important
     height: 6vh !important
}

.galMainDiv video {
     display: block;
    max-width: 200% !important;
    width:  80vw !important;
    height: 300px !important;
    border-radius: 4px;
    background: black;
}
.sites > img:nth-of-type(2) {
    top: 5% !important; 
    left: 0% !important;
    width: 20% !important;
}
.sites > img:nth-of-type(4) {
    top: 18% !important;
    left: 42% !important; 
}

}
   .sites {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    position: relative;
  }

  .sites img {
    position: relative;
    width: 150px;
    height: auto;
    transition: transform 0.3s ease, filter 0.3s ease;
    object-fit: contain;
  }

  .sites img:hover {
    transform: scale(1.1);
    filter: brightness(1.4);
  }

  .galMainDiv {
    display: flex;
    flex-direction: row;
    width: 50vw; 
    height: 50vh;
  }

  .next { 
--slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% 0 0 0);
  --slice-2: inset(50% 0 30% 0);
  --slice-3: inset(10% 0 85% 0);
  --slice-4: inset(40% 0 43% 0);
  --slice-5: inset(80% 0 5% 0);
  content: "LGN";


  left: 0;
  right: 0;
  bottom: 0;

  transform: scaleX(-1);
  }

  .carousel-button { 
    height: 60px;
    padding: 40px;
     margin: 6vw 2vw 8vh 5vw !important
  }
:root {
  --img-size: 180px;
  --bright-green: #00FF00;  /* Terminal Bright Green */
}

.sites {
  position: relative;
  width: 56vw;
  height: 55vh;
  overflow: hidden;
}

/* Base styling for images */
.sites > img {
  
  position: absolute;
  width: 15vw;
  height: auto;
  object-fit: cover;
  filter: opacity(0.3) drop-shadow(0 5px 2px green) invert(17%) sepia(74%) saturate(179%) hue-rotate(81deg);
  /* invert(67%) sepia(74%) saturate(179%) hue-rotate(81deg) brightness(113%) contrast(128%); */
}




.sites > img:nth-of-type(1) {

    top: 33%;
    left: -3%;
    width: 15%;
  }
.sites > img:nth-of-type(2) {
  top: -15%; 
  left: 10%;
  width: 20%;
}
.sites > img:nth-of-type(3) {
    top: 46%;
    width: 21%;
    left: 21%;
  }
.sites > img:nth-of-type(4) {
  top: 11%; 
  left: 42%;
}

/* Glitch overlay */
.sites > img::after {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

/* 4) Hook each ::after to its own image URL */
.sites > img:nth-of-type(1)::after {
  background-image: url("images/Escoteiros.png");
}
.sites > img:nth-of-type(2)::after {
  background-image: url("images/Arc.png");
}
.sites > img:nth-of-type(3)::after {
  background-image: url("images/Info.png");
}
.sites > img:nth-of-type(4)::after {
  background-image: url("images/Lna.png");
}

/* Glitch keyframes: horizontal bands and movement */
@keyframes glitch-slices {
  0% {
    clip: rect(10px, var(--img-size), 40px, 0);
    transform: translateX(0);
  }
  15% {
    clip: rect(60px, var(--img-size), 90px, 0);
    transform: translateX(-8px);
  }
  30% {
    clip: rect(110px, var(--img-size), 140px, 0);
    transform: translateX(6px);
  }
  45% {
    clip: rect(30px, var(--img-size), 70px, 0);
    transform: translateX(-6px);
  }
  60% {
    clip: rect(80px, var(--img-size), 120px, 0);
    transform: translateX(10px);
  }
  75% {
    clip: rect(50px, var(--img-size), 85px, 0);
    transform: translateX(-5px);
  }
  100% {
    clip: rect(0px, var(--img-size), var(--img-size), 0);
    transform: translateX(0);
  }
}

/* Hover effect: Brighten green */
.sites > img:hover {
  filter: opacity(0.8) drop-shadow(0 9px 2px green) invert(67%) sepia(74%) saturate(179%) hue-rotate(81deg);
  /* invert(67%) sepia(74%) saturate(179%) hue-rotate(81deg) brightness(113%) contrast(128%); */

  cursor: pointer; /* Show cursor pointer on hover */
}

/* Additional horizontal sync distortion animation */
@keyframes sync-shift {
  0% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
  
  @keyframes noise-anim {
  --steps: 20;
  0% {
    clip: rect(random(100)px, 9999px, random(100)px, 0);
  }
  100% {
    clip: rect(random(100)px, 9999px, random(100)px, 0);
  }
}
  100% {
    transform: translateX(-3px);
  }
}



img{
  animation: glitchz 0.5s ease-in infinite alternate-reverse;;
}

@keyframes glitchz {
  0%, 100% {
    transform: translate(0px, 0px) skew(0deg);
  }

  2%, 96% {
    transform: translate(0px, 0px) skew(0deg);
  }
  4%, 94% {
    transform: translate(0px, 0px) skew(0deg);
  }
  6%, 92% {
    transform: translate(0px, 0px) skew(0deg);
  }
  8%, 90% {
    transform: translate(0px, 0px) skew(0deg);
  }
  10%, 88% {
    transform: translate(0px, 0px) skew(0deg);
  }
  12%, 86% {
    transform: translate(0px, 0px) skew(0deg);
  }
  14%, 84% {
    transform: translate(0px, 0px) skew(0deg);
  }
  16%, 82% {
    transform: translate(0px, 0px) skew(0deg);
  }
  18%, 80% {
    transform: translate(0px, 0px) skew(0deg);
  }

  20%, 78% {
    transform: translate(-1px, 0px) skew(-1deg);
  }
  22%, 76% {
    transform: translate(1px, 0px) skew(1deg);
  }
  24%, 74% {
    transform: translate(0px, 0px) skew(0deg);
  }

  26%, 72% {
    transform: translate(-1px, 0px) skew(-1deg);
  }
  28%, 70% {
    transform: translate(1px, 0px) skew(1deg);
  }
  30%, 68% {
    transform: translate(0px, 0px) skew(0deg);
  }

  32%, 66% {
    transform: translate(-1px, 0px) skew(-2deg);
  }
  34%, 64% {
    transform: translate(1px, 0px) skew(2deg);
  }
  36%, 62% {
    transform: translate(0px, 0px) skew(0deg);
  }

  38%, 60% {
    transform: translate(-2px, 0px) skew(-1deg);
  }
  40%, 58% {
    transform: translate(2px, 0px) skew(1deg);
  }
  42%, 56% {
    transform: translate(0px, 0px) skew(0deg);
  }

  44%, 54% {
    transform: translate(-1px, 0px) skew(0deg);
  }
  46%, 52% {
    transform: translate(1px, 0px) skew(0deg);
  }

  48%, 50% {
    transform: translate(0px, 0px) skew(0deg);
  }
}



  .sites img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 255, 0, 0.3);
    border-radius: 10px;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  .sites img:hover::after {
    opacity: 1;
  }

  .sites img:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(transparent, transparent 2px, rgba(0, 255, 0, 0.3) 2px, rgba(0, 255, 0, 0.3) 4px);
    animation: scanlines 1.5s infinite linear;
    border-radius: 10px;
    pointer-events: none;
  }

  @keyframes scanlines {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 10px;
    }
  }

  /* Horizontal sync shift effect */
  @keyframes sync-shift {
    0% {
      transform: translateX(-3px);
    }
    50% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(-3px);
    }
  }

  .sites img:hover {
    animation: sync-shift 0.3s ease-in-out infinite;
  }
`;

// Set the content of the <style> element
style.textContent = cssContent;

// Append the <style> element to the <head> of the document
document.head.appendChild(style);


		galeria.innerText = btngal;
galeria.classList.add("btn-gal")
		galeria.href = "#";
		galeria.onclick = () => {
			
		inicio.remove();

    sobre.remove();
    games.remove();

    galeria.remove();
    
    contato.remove();
    projetos.remove();
    idioma.remove();
    terminal.remove() 
    
    
  
  
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
        mainGalDiv.remove()
        btnSites.remove()
        btnVid.remove()
   // outro.appendChild(logout);
        // outro.appendChild(contato);
        pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

        
type([inicio, sobre, galeria, projetos, games, contato, terminal,idioma], { processChars: false , wait: 10 }, outro);


    };


const btnSites = document.createElement("a");
    btnSites.innerText = bbnsite;
    btnSites.style.marginTop = "10px"
    btnSites.classList.add("btnReturn")
    btnSites.href = "#";
    btnSites.onclick = () => {
        // Remove the message and "Go Back" link and restore the "Logout" and "Contact" buttons
       mainGalDiv.remove()
        btnSites.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([btnVid,divsites], { processChars: false , wait: 10 }, outro);

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
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([btnSites,mainGalDiv ], { processChars: false , wait: 10 }, outro);
 
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

const mainGalDiv = document.createElement("div")
mainGalDiv.classList.add("galMainDiv")
mainGalDiv.style.display = "flex"
mainGalDiv.style.alignItems = "center"
mainGalDiv.style.justifyContent = "center"
mainGalDiv.style.width = "80vw"

const prevBtn = document.createElement("a");
prevBtn.textContent = "<";
prevBtn.classList.add('carousel-button')

const nextBtn = document.createElement("a");
nextBtn.textContent = "<"; // make it visually different
nextBtn.classList.add('carousel-button')
nextBtn.classList.add('next')

let currentIndex = 0;

const vid = document.createElement("video");
vid.src = VideosUrl[currentIndex];
vid.autoplay = true;
vid.controls = true;
vid.loop = true;
vid.style.display = "block";
vid.style.maxWidth = "60%";
vid.style.width = "60%";
vid.style.height = "auto";
vid.style.borderRadius = "4px";
vid.style.background = "black";

// Navigation handlers
function updateVideo() {
  currentIndex = Math.max(0, Math.min(currentIndex, VideosUrl.length - 1));
  vid.src = VideosUrl[currentIndex];
  vid.play().catch(()=>{});
}

prevBtn.onclick = () => {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) currentIndex = 0;
  updateVideo();
}
nextBtn.onclick = () => {
  currentIndex = currentIndex + 1;
  if (currentIndex >= VideosUrl.length) currentIndex = VideosUrl.length - 1;
  updateVideo();
}

// Controls container used for mobile layout (buttons side-by-side on top)
const controlsDiv = document.createElement("div");
controlsDiv.style.display = "flex";
controlsDiv.style.flexDirection = "row";
controlsDiv.style.gap = "12px";
controlsDiv.style.alignItems = "center";
controlsDiv.style.justifyContent = "center";
controlsDiv.style.width = "100%";
controlsDiv.style.marginBottom = "12px";

// Render layout depending on viewport width
function renderLayout() {
  const mobile = window.innerWidth <= 600; // adjust breakpoint as desired

  // Clear main container
  while (mainGalDiv.firstChild) mainGalDiv.removeChild(mainGalDiv.firstChild);

  if (mobile) {
    // Mobile: Controls row on top, video below
    controlsDiv.appendChild(prevBtn);
    controlsDiv.appendChild(nextBtn);

    prevBtn.style.order = "0";
    nextBtn.style.order = "1";

    // Style adjustments for mobile
    prevBtn.style.padding = "8px 12px";
    nextBtn.style.padding = "8px 12px";
    prevBtn.style.fontSize = "16px";
    nextBtn.style.fontSize = "16px";

    vid.style.width = "92%";
    vid.style.maxWidth = "92%";

    mainGalDiv.style.flexDirection = "column";
    mainGalDiv.appendChild(controlsDiv);
    mainGalDiv.appendChild(vid);
  } else {
    // Desktop: Button | Video | Button
    prevBtn.style.padding = "12px 18px";
    nextBtn.style.padding = "12px 18px";
    prevBtn.style.fontSize = "18px";
    nextBtn.style.fontSize = "18px";

    vid.style.width = "60%";
    vid.style.maxWidth = "60%";

    mainGalDiv.style.flexDirection = "row";
    mainGalDiv.appendChild(prevBtn);
    mainGalDiv.appendChild(vid);
    mainGalDiv.appendChild(nextBtn);
  }
}

// Initial render and responsive handler
renderLayout();
window.addEventListener('resize', () => {
  // On resize ensure controlsDiv doesn't keep duplicate children
  if (!controlsDiv.contains(prevBtn) && !controlsDiv.contains(nextBtn)) {
    // nothing
  }
  renderLayout();
});

mainGalDiv.style.marginTop='20px'
mainGalDiv.style.marginBottom='20px'
divgallery.appendChild(mainGalDiv)

let divsites = document.createElement("div");
divsites.classList.add("divsites");
let divsimages = document.createElement("div")
			divsimages.classList.add("sites");
divsimages.style.display = "flex";
divsimages.style.flexWrap = "wrap"; // Allow elements to wrap to the next line

let escoteiro = document.createElement("img");
escoteiro.src = "images/Escoteiros.png";
escoteiro.onclick = () => {
  window.open("https://arcangel0.github.io/77GEMAR", "_blank");
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
  window.open("https://arcangelo.net/LNA", "_blank");
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
    
    projetos.remove();
    contato.remove();
    idioma.remove();
    terminal.remove() 
    
    games.remove();

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
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

    };
    
 
      const gifImage2 = document.createElement("img");
      
		gifImage2.src = "images/me.gif";

gifImage2.style.height = "36vh"

gifImage2.style.width = "48vw"
		  
gifImage2.style.display = "block";
gifImage2.style.margin = "0 5vw";
		   
		  


divsobre.appendChild(backSobre)

pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

	await type(
			sobretexto,
			FAST,
			divsobre 
		);
divsobre.appendChild(gifImage2)
	

}
		let terminal = document.createElement("a");
		terminal.innerText = btnterminal;
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
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

        // outro.appendChild(contato);
type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

    };

  
    // Remove the "Logout" and "Contact" buttons
    inicio.remove();
    sobre.remove();
    galeria.remove();
    projetos.remove();
    
    games.remove();

    contato.remove();
    idioma.remove();
    terminal.remove();

    // Append the message and "Go Back" link to the 'outro' element
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([divinicio, goBackLinkIn], { processChars: false , wait: 10 }, outro);
    
		
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
    
    games.remove();
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
        rus.remove()
        jap.remove()
        eng.remove()
        fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

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
      rus.remove()
      jap.remove()
      eng.remove()
      fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);
		  
		}
		
let eng = document.createElement("a");
		eng.innerText = "[ENGLISH]";
		eng.href = "#";
		eng.onclick = () => { 
		  changeLanguage('en')
		  
		  updateTexts() 
		  
		  port.remove();
      spa.remove();
      rus.remove()
      jap.remove()
      eng.remove()
      fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

		}
		let rus = document.createElement("a");
		rus.innerText = "[русский]";
		rus.href = "#";
		rus.onclick = () => { 
		  changeLanguage('ru')
		  
		  updateTexts() 
		  
		  port.remove();
      spa.remove();
      rus.remove()
      jap.remove()
      eng.remove()
      fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

		}
    let jap = document.createElement("a");
		jap.innerText = "[日本語]";
		jap.href = "#";
		jap.onclick = () => { 
		  changeLanguage('ja')
		  
		  updateTexts() 
		  
		  port.remove();
      spa.remove();
      rus.remove()
      jap.remove()
      eng.remove()
      fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

		}
let spa = document.createElement("a");
		spa.innerText = "[ESPANÕL]";
		spa.href = "#";
		spa.onclick = () => { 
		  changeLanguage('es')
		  updateTexts()
		  port.remove();
      spa.remove();
      rus.remove()
      jap.remove()
      eng.remove()
      fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

		}
		
let fre = document.createElement("a");
		fre.innerText = "[FRANÇAIS]";
		fre.href = "#";
		fre.onclick = () => { 
		  changeLanguage('fr')
		  updateTexts()
		  port.remove();
      spa.remove();
      rus.remove()
      jap.remove()
      eng.remove()
      fre.remove()
        backLang.remove();
        // outro.appendChild(logout);
        // outro.appendChild(contato);
        pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        type([inicio, sobre, galeria, projetos, games, contato, terminal ,idioma], { processChars: false , wait: 10 }, outro);

		}
    // Append the message and "Go Back" link to the 'outro' element
    pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    type([backLang,port, eng, spa, fre,rus,jap], { processChars: false , wait: 10 }, outro);
		  
		};


	;
  pAud("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
  type([inicio, sobre, galeria, projetos, games, contato, terminal,idioma], { processChars: false , wait: 5 }, outro);

	});

	outro.remove();
}

const stylesheets = ["fallout"];
const templates = ["fallout"];

export { stylesheets, templates };
export default command;
