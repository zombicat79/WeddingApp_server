const productData = [
    {
        name: {
            cat: "Aventura lunar",
            esp: "Aventura lunar",
            eng: "Moontrip"
        },
        description: {
            cat: "Un viatge en coet fins a la Lluna per a 2 persones, anada i tornada. Inclou allotjament a la Base Lunar Internacional del Pol Sud i activitats a l'exterior com excursions pels cràters més espectaculars. (No cal portar carmanyola: inclou àpats deshidratats).",
            esp: "Un viaje en cohete hacia la Luna para 2 personas, ida y vuelta. Incluye alojamiento en la Base Lunar Internacional del Polo Sur y actividades en el exterior como excursiones por los cráteres más espectaculares. (No hace falta traer fiambrera: incluye comidas deshidratadas).",
            eng: "A safe return rocket trip to the Moon for 2 people. Includes lodging at the International Moonbase in the Lunar South Pole and outdoor activities such as trekking in the most spectacular craters. (No need to bring food from home: it includes dehydrated meals)."
        },
        image: "https://imgix.bustle.com/uploads/image/2021/4/19/1b2d4014-5a46-403f-a494-b18759fd8a29-for_press_release.jpg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress",
        price: 200,
        default: true
    },
    {
        name: {
            cat: "Unicorn domèstic",
            esp: "Unicornio doméstico",
            eng: "Pet unicorn"
        },
        description: {
            cat: "Un animal fantàstic que portarà la núvia a tot arreu dalt d'acolorits arcs de Sant Martí. No requereix pinso ni emmalalteix. Ve totalment entrenat de fàbrica.",
            esp: "Un animal fantástico que llevará a la novia a todas partes sobre coloridos arcoiris. No necesita pienso ni se pone enfermo jamás. Viene totalmente entrenado de fábrica.",
            eng: "A fantastic animal that will take the bride around the world over colorful rainbows. Needs no feeding and never gets sick. It comes fully trained out of the box."
        },
        image: "https://images.photowall.com/products/57509/rainbow-unicorn-1.jpg?h=699&q=85",
        price: 150,
        default: true
    },
    {
        name: {
            cat: "Castell medieval",
            esp: "Castillo medieval",
            eng: "Medieval castle"
        },
        description: {
            cat: "L'habitatge perfecte per començar un projecte de vida en comú. Espaiós, amb desenes d'habitacions, camps de conreu i boscos particulars. No cal preocupar-se per la neteja. Servents inclosos (Ah! I un fantasma!).",
            esp: "La vivienda perfecta para empezar un proyecto de vida en común. Espacioso, con decenas de habitaciones, campos de cultivo y bosques particulares. No hay que preocuparse por la limpieza. Sirvientes incluidos (¡Ah! ¡Y un fantasma!).",
            eng: "The perfect home to start a shared life project. Spatious, with dozens of rooms, private forests and farming fields. No need to worry about cleaning and stuff. Servants are included (Oh! And a ghost as well!)."
        },
        image: "https://www.tuscasasrurales.com/blog/wp-content/uploads/2020/05/Castillos-en-Huesca.jpg",
        price: 250,
        default: true
    },
    {
        name: {
            cat: "Robot auxiliar multiús",
            esp: "Robot auxiliar multiuso",
            eng: "Helper multitasking robot"
        },
        description: {
            cat: "El company de pis ideal: ell fa tota la feina, des de rentar els plats fins a passejar el gos. No cal pagar-li res! I no es queixa! Sense perill que s'acabi rebelant i destruint la humanitat. Programat segons les 3 lleis de la robòtica d'Asimov.",
            esp: "El compañero de piso ideal: él se encarga de todas las tareas, desde lavar los platos hasta pasear al perro. ¡No hay que pagarle nada! ¡Y no se queja! Sin peligro de que se acabe rebelando y destruyendo la humanidad. Programado de acuerdo a las 3 leyes de la robótica de Asimov.",
            eng: "The ideal housemate: he takes up all the chores, from dishwashing to walking the dog. No need to pay him a cent! And he doesn't complain! Also, there's no danger he'll end up rebelling and obliterating humankind. Programmed according to Asimov's 3 laws of robotics."
        },
        image: "https://www.qries.com//assets/images/141941-1506423749.webp",
        price: 130,
        default: true
    },
    {
        name: {
            cat: "Joventut eterna",
            esp: "Juventud eterna",
            eng: "Eternal youth"
        },
        description: {
            cat: "El suc de la vida: un beuratge que mantindrà la parella sempre en forma i amb bon aspecte, encara que arribin a complir els 150 o 200 anys de casats. Destil·lat segons un seguit de processos alquímics antiquíssims i secrets. Sens dubte el regal més durador de tots.",
            esp: "El jugo de la vida: un brebaje que mantendrá a la pareja siempre en forma y con buen aspecto, aunque lleguen a cumplir 150 o 200 años de casados. Destilado según una serie de procedimientos alquímicos antiquísimos y secretos. Sin duda el regalo más duradero de todos.",
            eng: "The essence of life: a concoction that will always keep the couple fit and looking good, no matter if they make it to 150 or 200 years of marriage. Distilled according to a range of incredibly old and secret alchemical procedures. No doubt, the most durable gift."
        },
        image: "https://media.istockphoto.com/photos/antique-and-vintage-glass-bottles-on-dark-foggy-background-with-light-picture-id1033931010?k=6&m=1033931010&s=612x612&w=0&h=6vn06GsrWo_G73mcZIA1dBoGiGakPtqwNRfkUqPkXe4=",
        price: 180,
        default: true
    },
    {
        name: {
            cat: "Sort inesgotable",
            esp: "Suerte inacabable",
            eng: "Neverending luck"
        },
        description: {
            cat: "L'assegurança més completa del mercat. Obliga l'Univers a girar i expandir-se d'acord als interessos de la parella, o com a mínim a no oposar-s'hi frontalment. No cobreix jocs d'atzar ni loteries.",
            esp: "La poliza de seguros más completa del mercado. Obliga al Universo a girar y expandirse de acuerdo a los intereses de la pareja, o como mínimo a no oponerse a ellos frontalmente. No cubre juegos de azar ni loterías.",
            eng: "The most complete insurance product in the market. It obliges the Universe to revolve and expand according to the couple's own interests, or at least to not oppose them. Doesn't cover gambling nor lotteries."
        },
        image: "https://i.pinimg.com/474x/c6/dc/9f/c6dc9fd34acebacd22f1c0a758f35228.jpg",
        price: 170,
        default: true
    },
    {
        name: {
            cat: "Nen/a exemplar preeducat/da",
            esp: "Niño/a ejemplar preeducado/a",
            eng: "Exemplary pre-educated child"
        },
        description: {
            cat: "La filla o el fill perfecte amb què somia qualsevol família en vies d'ampliació: educat, amable, obedient i aplicat. I el millor de tot, si és que es pot demanar més: ja ve ensenyat! Ensinistrat per alguns dels genis més brillants que ha donat l'espècie humana, des d'Aristòtil fins a Einstein. (Descàrrec de responsabilitats: no, no vota al PP).",
            esp: "La hija o el hijo perfecto con el que sueña cualquier familia en vías de ampliarse: educado, amable, obediente y aplicado. Y lo mejor de todo, si es se puede pedir más: ¡viene ya enseñado! Instruido por algunos de los genios más brillantes que ha dado la especie humana, desde Aristóteles a Einstein. (Descargo de responsabilidades: no, no vota al PP).",
            eng: "The perfect child any family seeking to expand itself dreams about: kind, well-mannered, obedient and hardworking. And what's even better, if that is possible: he/she comes already trained! Mentored by some of the most brilliant geniuses humankind has produced, from Aristotle all the way to Einstein. (Disclaimer: no, he/she would never vote for Trump)."
        },
        image: "https://www.verpueblos.com/fotos_originales/5/2/2/00228522.jpg",
        price: 160,
        default: true
    },
    {
        name: {
            cat: "Platja paradisíaca privada",
            esp: "Playa paradisíaca privada",
            eng: "Private paradise beach"
        },
        description: {
            cat: "Un tros de paradís solitari al costat del mar, amb la seva arena blanca i aigües turqueses, i també amb els seus cocoters. Molt lluny de tot, sense guiris ni venedors ambulants ni turistes de diumenge. Tranquil·litat i pau absolutes: impossible que la parella es vegi pertorbada per una infame melodia reggaetonera de fons.",
            esp: "Un pedazo de paraíso solitario al lado del mar, con su arena blanca y aguas turquesas, y también con sus cocoteros. Muy lejos de todo: sin guiris ni vendedores ambulantes ni domingueros. Tranquilidad y paz absolutas: imposible que la pareja se vea perturbada por una infame melodía reggaetonera de fondo.",
            eng: "A chunk of lonely paradise next to the sea, complete with its white sands and turquoise waters, as well as its coconut trees. Very far away from everything: without tourists or harassing petty sellers. Absolute calm and peace: impossible that the couple be disturbed by some unspeakable background reggaeton groove."
        },
        image: "https://media.istockphoto.com/photos/paradise-beach-picture-id509488176?k=6&m=509488176&s=170667a&w=0&h=HdhZ2TkcyxHCRxAXqxeRyYWXIs5mkbLSgd6xVvmNYug=",
        price: 140,
        default: true
    },
    {
        name: {
            cat: 'Entrenador personal "tot-en-un"',
            esp: 'Entrenador personal "todo-en-uno"',
            eng: '"All-in-one" personal trainer'
        },
        description: {
            cat: "El guia espiritual i de vida definitiu. Creixement personal, intel·ligència emocional, lideratge empresarial i polític, cuina vietnamita, mestratge en llengües mortes i pirateria informàtica, ioga, pilates, crossfit extrem i ninjitsu. El tipus de sensei que tothom necessita per formar-se com a model social i afrontar l'experiència del matrimoni i la paternitat/maternitat amb un mínim de garanties d'èxit.",
            esp: "El guía espiritual y de vida definitivo. Crecimiento personal, inteligencia emocional, liderazgo empresarial y político, cocina vietnamita, maestría en lenguas muertas y piratería informática, yoga, pilates, crossfit extremo y ninjitsu. La clase de sensei que todo el mundo necesita para formarse como modelo social y afrontar la experiencia del matrimonio y la paternidad/maternidad con un mínimo de garantías de éxito.",
            eng: "The ultimate spiritual and life guide. Personal growth, emotional intelligence, political and corporate leadership, Vietnamese cuisine, mastery in dead languages and computer hacking, yoga, feng shui, extreme crossfit and ninjitsu. The type of sensei that everybody needs in order to become a role model and take on marriage and parenthood with a minimal guarantee of success."
        },
        image: "https://image-api.onlineeducation.center/v2/image/max-width/800/debate/b4f9f2b3bfdfb0905cd796c5f2bcd9606a98d231.jpg",
        price: 190,
        default: true
    },
    {
        name: {
            cat: "Gravadora-reproductora de pensaments",
            esp: "Grabador-reproductor de pensamientos",
            eng: "Thought player & recorder"
        },
        description: {
            cat: "L'instrument ideal per desxifrar en tot moment el què passa pel cap de la parella, sintonitzar amb els seus sentiments i empatitzar amb aquells problemes seus que mai no s'arriben a comprendre. No més malentesos ni expectatives incomplertes. Un autèntic salva-relacions. (Es desaconsella encaridament el seu ús com a eina d'invasió d'intimitat i espionatge).",
            esp: "El instrumento ideal para descifrar en todo momento aquello que pasa por la mente de la pareja, sintonizar con sus sentimientos y empatizar con esos problemas suyos que nunca llegan a comprenderse. No más malentendidos ni expectativas insatisfechas. Un auténtico salva-relaciones. (Se desaconseja encarecidamente su uso como herramiento de invasión de intimidad y espionaje).",
            eng: "The perfect device to decipher what's in one's partner's mind, tune in with his/her feelings and empathize with those problems of his/her that no-one ever gets to figure out. No more misunderstandings nor unsatisfied expectations. A real relationship-saver. (It is strongly advised not to use it as a tool for privacy invasion and espionage)."
        },
        image: "https://v1.nitrocdn.com/fYEZdJKjvuXkKgFpeJrbqdViLvHKUQUB/assets/static/source/rev-21bb997/wp-content/uploads/2018/04/voxlumiere_first_vcr-1024x488.jpg",
        price: 120,
        default: true
    },
    {
        name: {
            cat: "Nevera de l'abundància",
            esp: "Nevera de la abundancia",
            eng: "Magically plentiful fridge"
        },
        description: {
            cat: "La millor manera d'assegurar no solament la quantitat, sinó també la qualitat del menjar sempre disponible a casa. Equipat amb un amplíssim ventall de delicadeses culinàries creades pels xefs de més renom mundial, es reposa automàticament sense necessitat de passar pel Carrefour. A tenir molt en compte, també, que els aliments continguts en aquest electrodomèstic de fantasia ni engreixen ni caduquen.",
            esp: "La mejor forma de asegurarse no solo la cantidad, sino también la calidad de la comida siempre disponible en casa. Equipado con un amplísimo abanico de exquisiteces culinarias creadas por los chefs de más renombre mundial, se repone automáticamente sin necesidad de pasar por el Carrefour. A tener muy en cuenta, también, que los alimentos contenidos en este electrodoméstico de fantasía ni engordan ni caducan.",
            eng: "The best way to ensure not only the quantity but also the quality of the food always available at home. Equipped with a comprehensive range of culinary delicatessen created by the most renowned chefs in the world, it automatically restocks itself with no need to visit the supermarket. Also, another thing to take seriously into account: the foodstuff contained in this fantasy home appliance neither make anyone fat nor ever expire."
        },
        image: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/05/mini-nevera-lidl-2346149.jpg",
        price: 100,
        default: true
    },
    {
        name: {
            cat: "Màquina del temps",
            esp: "Máquina del tiempo",
            eng: "Time machine"
        },
        description: {
            cat: "Res de fer un cop d'ull a la societat hipertecnològica del futur o d'anar a visitar els dinosaures: aquesta és una màquina del temps eminentment pràctica, dissenyada de manera específica per facilitar la vida en comú. Imagina que la parella pogués avançar els minuts a velocitat ultraràpida durant les discussions i esbroncades, o que pogués retrocedir per corregir una cagada que els hagués portat a estar de morros. La manipulació del temps ho pot arreglar tot!",
            esp: "Nada de echarle un ojo a la sociedad hipertecnológica del futuro o de ir a visitar a los dinosaurios: esta es una máquina del tiempo eminentemente práctica, diseñada de manera específica para facilitar la vida en común. Imagina que la pareja pudiera adelantar los minutos a velocidad ultrarrápida durante las discusiones y peleas, o que pudiese retroceder para corregir una cagada que les hubiera llevado a estar de mal rollo. ¡La manipulación del tiempo puede arreglarlo todo!",
            eng: "Forget about peering into some hypertechnological society of the future or going visit the dinosaurs: this one is an essentially practical time machine, specifically designed to make marital life much easier. Imagine if the couple could fast-forward during some fight or argument, or maybe if they could go back in time to correct some terrible mistake that would later confront them with each other. Time manipulation can fix it all!"
        },
        image: "https://cdn.pixabay.com/photo/2020/07/16/06/24/alarm-5409840_960_720.jpg",
        price: 110,
        default: true
    }
];

module.exports = productData;