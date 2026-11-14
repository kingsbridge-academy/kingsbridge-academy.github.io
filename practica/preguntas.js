/* ==========================================================
   BANCO DE PREGUNTAS · KINGSBRIDGE ENGLISH ACADEMY
   Para agregar una pregunta, copia un bloque y cambia los datos:
     id     identificador único (ej. "B1-09")
     nivel  "A1", "B1", "B2" o "C1"
     tema   nombre del tema (agrupa el progreso del estudiante)
     q      la frase; el espacio en blanco se escribe con ____
     o      lista de opciones (2 a 4)
     c      posiciones de las correctas, empezando en 0 (puede ser más de una)
     e      explicación en español
     x      ejemplo en inglés
     tip    consejo corto
   ========================================================== */
window.KB_CONFIG = {
  academia: "Kingsbridge English Academy",
  whatsapp: "https://wa.me/kingsbridge.academy"
};

window.KB_PREGUNTAS = [

/* ---------------------- A1 (con tema de aviación) ---------------------- */
{id:"A1-01",nivel:"A1",tema:"Verb to be",q:"I ____ a pilot.",o:["am","is","are","be"],c:[0],e:"Con I se usa am: I am.",x:"I am a pilot.",tip:"I am · he, she, it is · we, you, they are."},
{id:"A1-02",nivel:"A1",tema:"Have / has",q:"She ____ a red plane.",o:["has","have","haves","are"],c:[0],e:"Con he, she e it se usa has.",x:"He has a blue helicopter.",tip:"I, you, we, they have · he, she, it has."},
{id:"A1-03",nivel:"A1",tema:"Plurales",q:"Two ____ are in the sky.",o:["plane","planes","planees","a plane"],c:[1],e:"Cuando hay más de uno, el sustantivo lleva -s.",x:"Three birds are on the runway.",tip:"Más de uno: agrega -s."},
{id:"A1-04",nivel:"A1",tema:"Preposiciones",q:"The plane is flying ____ the clouds.",o:["above","at","on","over"],c:[0,3],e:"Above y over significan encima de. At y on no se usan aquí.",x:"The helicopter is flying over the river.",tip:"Above = over = encima de."},
{id:"A1-05",nivel:"A1",tema:"Present continuous",q:"Look! The plane ____ now.",o:["is flying","flies","fly","flying"],c:[0],e:"Look! y now indican una acción que ocurre en este momento: is + verbo con -ing.",x:"The pilot is talking to the tower now.",tip:"Ahora mismo = am, is o are + verbo-ing."},
{id:"A1-06",nivel:"A1",tema:"Can",q:"A bird ____ fly, but a car can't.",o:["can","cans","is","does"],c:[0],e:"Can nunca cambia: I can, she can, they can.",x:"Pilots can fly planes.",tip:"Can + verbo sin to."},
{id:"A1-07",nivel:"A1",tema:"Question words",q:"____ is the pilot? He is Mr. Smith.",o:["Who","What","Where","When"],c:[0],e:"Who pregunta por una persona.",x:"Who is your teacher?",tip:"Who = quién · What = qué · Where = dónde · When = cuándo."},
{id:"A1-08",nivel:"A1",tema:"Vocabulario",q:"The plane takes off from the ____.",o:["runway","kitchen","river","garden"],c:[0],e:"La pista de despegue y aterrizaje de un aeropuerto se llama runway.",x:"The plane lands on the runway.",tip:"Take off = despegar · land = aterrizar."},
{id:"A1-09",nivel:"A1",tema:"Artículos",q:"He is ____ engineer.",o:["an","a","any","two"],c:[0],e:"Engineer empieza con sonido de vocal, por eso se usa an.",x:"She is an actress.",tip:"An antes de sonido de vocal."},
{id:"A1-10",nivel:"A1",tema:"Plurales",q:"I have two ____.",o:["child","childs","children","childrens"],c:[2],e:"Child tiene plural irregular: children.",x:"The teacher has ten children in the class.",tip:"Irregulares: man-men, woman-women, child-children."},

/* ------------------------------- B1 ------------------------------- */
{id:"B1-01",nivel:"B1",tema:"Tiempos verbales",q:"I ____ in Leticia since 2015.",o:["live","have lived","am living","lived"],c:[1],e:"Con since y una situación que continúa hasta hoy se usa el present perfect.",x:"She has worked here since 2019.",tip:"Since + inicio · for + duración, con present perfect."},
{id:"B1-02",nivel:"B1",tema:"Condicionales",q:"If it ____ tomorrow, we will stay at home.",o:["rains","will rain","rained","would rain"],c:[0],e:"En el primer condicional, la cláusula con if va en presente simple y el resultado con will.",x:"If you study, you will pass the exam.",tip:"If + presente, will + verbo."},
{id:"B1-03",nivel:"B1",tema:"Verbos modales",q:"You ____ wear a seatbelt. It's the law.",o:["must","have to","might","can"],c:[0,1],e:"Must y have to expresan obligación. Might indica posibilidad y can, permiso o capacidad.",x:"Passengers have to show their passports.",tip:"Obligación: must / have to."},
{id:"B1-04",nivel:"B1",tema:"Comparativos",q:"This exam is ____ than the last one.",o:["more difficult","difficulter","most difficult","more difficulter"],c:[0],e:"Los adjetivos largos forman el comparativo con more + adjetivo.",x:"English is more interesting than I thought.",tip:"Adjetivos cortos: -er · largos: more."},
{id:"B1-05",nivel:"B1",tema:"Used to",q:"When I was a child, I ____ play outside every day.",o:["used to","would","was used to","am used to"],c:[0,1],e:"Used to y would describen hábitos del pasado. Be used to significa estar acostumbrado.",x:"We used to visit the river every Sunday.",tip:"Used to + verbo = hábito que ya no existe."},
{id:"B1-06",nivel:"B1",tema:"Voz pasiva",q:"The airport ____ in 1998.",o:["built","was built","has built","is building"],c:[1],e:"El aeropuerto recibe la acción de construir, por eso se usa la pasiva: was + participio.",x:"The bridge was finished last year.",tip:"Pasiva = to be + participio."},
{id:"B1-07",nivel:"B1",tema:"Estilo indirecto",q:"She said she ____ tired.",o:["was","were","will be","has been"],c:[0],e:"En el estilo indirecto el presente suele retroceder al pasado: am se vuelve was.",x:"He said he was hungry.",tip:"Presente se vuelve pasado cuando reportas lo dicho."},
{id:"B1-08",nivel:"B1",tema:"Gerundio e infinitivo",q:"I enjoy ____ English with my students.",o:["to speak","speaking","speak","spoke"],c:[1],e:"Después de enjoy se usa el verbo con -ing.",x:"She enjoys reading before bed.",tip:"Enjoy, avoid, finish + verbo-ing."},

/* ------------------------------- B2 ------------------------------- */
{id:"B2-01",nivel:"B2",tema:"Wish",q:"I wish I ____ more time to study.",o:["have","had","would have","have had"],c:[1],e:"Para un deseo sobre el presente se usa wish + pasado simple.",x:"I wish I lived closer to the sea.",tip:"Wish + pasado simple = deseo presente · wish + had + participio = pasado."},
{id:"B2-02",nivel:"B2",tema:"Condicionales",q:"If she ____ the train, she would have arrived on time.",o:["hadn't missed","didn't miss","wouldn't miss","hasn't missed"],c:[0],e:"El tercer condicional usa had + participio en la condición y would have + participio en el resultado.",x:"If we had left earlier, we would have caught the flight.",tip:"Pasado irreal: had + participio / would have + participio."},
{id:"B2-03",nivel:"B2",tema:"Relativos",q:"The man ____ car was stolen called the police.",o:["who","whose","which","whom"],c:[1],e:"Whose indica posesión: el coche del hombre.",x:"She is the teacher whose students won the contest.",tip:"Whose = de quien, de quienes."},
{id:"B2-04",nivel:"B2",tema:"Phrasal verbs",q:"I can't ____ with all this noise.",o:["put up","put off","put on","put out"],c:[0],e:"Put up with significa tolerar. Los otros phrasal verbs no encajan con with.",x:"I can't put up with his rudeness any longer.",tip:"Put up with = aguantar, tolerar."},
{id:"B2-05",nivel:"B2",tema:"Conectores",q:"____ it was raining, we went for a walk.",o:["Although","Despite","In spite","However"],c:[0],e:"Although introduce una cláusula con sujeto y verbo. Despite necesita un sustantivo, y however va entre comas o al inicio de otra oración.",x:"Although he was tired, he kept working.",tip:"Although + cláusula · despite + sustantivo."},
{id:"B2-06",nivel:"B2",tema:"Colocaciones",q:"He ____ a mistake and apologised.",o:["made","did","had","took"],c:[0],e:"En inglés se dice make a mistake.",x:"Everyone makes mistakes when they learn.",tip:"Make a mistake · do homework · take a break."},
{id:"B2-07",nivel:"B2",tema:"Voz pasiva",q:"He is said ____ the richest man in town.",o:["to be","being","that is","is"],c:[0],e:"La estructura is said + to + infinitivo se usa para opiniones generales.",x:"The museum is believed to be over 300 years old.",tip:"He is said / believed / known to be…"},
{id:"B2-08",nivel:"B2",tema:"Cuantificadores",q:"There isn't ____ milk left.",o:["many","much","a few","few"],c:[1],e:"Milk es incontable, por eso se usa much.",x:"We don't have much time.",tip:"Incontable: much · contable: many."},

/* ------------------------------- C1 ------------------------------- */
{id:"C1-01",nivel:"C1",tema:"Inversión",q:"Hardly ____ the building when the alarm went off.",o:["had we entered","we had entered","did we enter","we entered"],c:[0],e:"Con Hardly al inicio se invierten sujeto y auxiliar, y se usa pasado perfecto para la acción anterior.",x:"Hardly had she sat down when the phone rang.",tip:"Hardly, no sooner y scarcely: pasado perfecto con inversión."},
{id:"C1-02",nivel:"C1",tema:"Colocaciones",q:"The new policy is expected to ____ a significant impact on rural communities.",o:["make","have","do","cause"],c:[0,1],e:"Se dice have an impact on y make an impact on. Do y cause no forman esta colocación.",x:"The merger will have a lasting impact on the industry.",tip:"Con impact sirven make y have."},
{id:"C1-03",nivel:"C1",tema:"Phrasal verbs",q:"The negotiations ____ after both sides refused to compromise.",o:["broke down","gave in","called off","fell apart"],c:[0,3],e:"Break down y fall apart funcionan sin objeto. Call off exige un objeto, y give in significa rendirse.",x:"Talks between the two unions broke down late on Friday.",tip:"Mira si el phrasal verb necesita objeto o no."},
{id:"C1-04",nivel:"C1",tema:"Verbos irregulares",q:"The company's profits have ____ steadily over the past decade.",o:["raised","arisen","risen","arose"],c:[2],e:"Rise no lleva objeto: rise, rose, risen. Raise necesita objeto y arise significa surgir.",x:"Living costs have risen sharply since 2020.",tip:"Rise sube solo · raise, alguien sube algo."},
{id:"C1-05",nivel:"C1",tema:"It's high time",q:"It is high time the council ____ something about the traffic problem.",o:["do","did","does","will do"],c:[1],e:"Tras It's (high) time se usa el pasado simple con sentido de presente.",x:"It's about time you told her the truth.",tip:"It's time + sujeto + pasado simple."},
{id:"C1-06",nivel:"C1",tema:"Inversión",q:"Under no circumstances ____ left unattended.",o:["should luggage be","luggage should be","should luggage been","luggage be"],c:[0],e:"Under no circumstances al inicio exige inversión: should + sujeto + verbo.",x:"On no account must the door be left open.",tip:"Under no circumstances, on no account y rarely: inversión."},
{id:"C1-07",nivel:"C1",tema:"Conectores formales",q:"She succeeded in the end, ____ the many obstacles in her path.",o:["despite","in spite of","although","notwithstanding"],c:[0,1,3],e:"Despite, in spite of y notwithstanding van seguidos de un sustantivo. Although introduce una cláusula con sujeto y verbo.",x:"Notwithstanding the risks, the board approved the plan.",tip:"Conector + sustantivo o conector + cláusula: eso decide la respuesta."},
{id:"C1-08",nivel:"C1",tema:"Colocaciones",q:"The findings ____ doubt on the reliability of the earlier study.",o:["cast","threw","put","laid"],c:[0,1],e:"Cast doubt on y throw doubt on son colocaciones correctas. Put y lay no se usan con doubt en este sentido.",x:"The new evidence cast doubt on his alibi.",tip:"Memoriza el verbo junto al sustantivo."},
{id:"C1-09",nivel:"C1",tema:"Condicionales",q:"If I ____ harder at school, I would have a better job now.",o:["studied","had studied","would have studied","have studied"],c:[1],e:"Condicional mixto: pasado perfecto en la condición (pasado irreal) y would + infinitivo en el resultado presente.",x:"If she had accepted the offer, she would be living in Paris now.",tip:"Condición en pasado, consecuencia en presente."},
{id:"C1-10",nivel:"C1",tema:"Estructuras enfáticas",q:"____ was the lack of funding that forced the project to close.",o:["What","It","That","There"],c:[1],e:"La estructura enfática es It was… that… y destaca un elemento de la frase.",x:"It was her honesty that impressed the interviewers.",tip:"It is / was + elemento destacado + that."}

];
