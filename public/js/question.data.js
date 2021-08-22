const questionData = [
    {
        body: {
            cat: "On va néixer el David?",
            esp: "¿Dónde nació David?",
            eng: "Where was David born?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "Mataró",
                esp: "Mataró",
                eng: "Mataró"
            },
            {
                cat: "Barcelona",
                esp: "Barcelona",
                eng: "Barcelona" 
            },
            {
                cat: "L'Hospitalet",
                esp: "L'Hospitalet",
                eng: "L'Hospitalet"
            }
        ],
        intLevel: 1,
        points: 10,
        penalty: 3,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "On va néixer la Cristina?",
            esp: "¿Dónde nació Cristina?",
            eng: "Where was Cristina born?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Reus",
                esp: "Reus",
                eng: "Reus"
            },
            {
                cat: "Tarragona",
                esp: "Tarragona",
                eng: "Tarragona" 
            },
            {
                cat: "Flix",
                esp: "Flix",
                eng: "Flix"
            }
        ],
        intLevel: 1,
        points: 10,
        penalty: 3,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Amb quina mena d'animal domèstic conviuen la Cristina i el David?",
            esp: "¿Con qué tipo de animal doméstico conviven Cristina y David?",
            eng: "What sort of pet shares Cristina and David's life?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "Gos",
                esp: "Gat",
                eng: "Fura"
            },
            {
                cat: "Perro",
                esp: "Gato",
                eng: "Hurón" 
            },
            {
                cat: "Dog",
                esp: "Cat",
                eng: "Ferret"
            }
        ],
        intLevel: 1,
        points: 10,
        penalty: 3,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quants individus no-humans completen la unitat familiar de la Cristina i el David?",
            esp: "¿Cuántos individuos no-humanos completan la unidad familiar de Cristina y David?",
            eng: "How many non-human individuals complete Cristina and David's household?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "2",
                esp: "1",
                eng: "4"
            },
            {
                cat: "2",
                esp: "1",
                eng: "4" 
            },
            {
                cat: "2",
                esp: "1",
                eng: "4"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin tipus d'entitat ha fundat la Cristina i duu actualment el seu nom?",
            esp: "¿Qué tipo de entidad ha fundado Cristina y actualmente lleva su nombre?",
            eng: "What kind of entity bearing her own name did Cristina found?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Consultoria",
                esp: "Cocteleria",
                eng: "Escola"
            },
            {
                cat: "Consultoría",
                esp: "Coctelería",
                eng: "Escuela" 
            },
            {
                cat: "Consultancy firm",
                esp: "Cocktail bar",
                eng: "School"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Amb quin país manté la Cristina un lligam especial?",
            esp: "¿Con qué país mantiene Cristina un lazo especial?",
            eng: "What country is Cristina especially bounded to?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Estats Units",
                esp: "Cambodja",
                eng: "Egipte"
            },
            {
                cat: "Estados Unidos",
                esp: "Camboya",
                eng: "Egipto" 
            },
            {
                cat: "USA",
                esp: "Cambodia",
                eng: "Egypt"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quant de temps ininterromput va estar el David viatjant al voltant del món?",
            esp: "¿Cuánto tiempo ininterrumpido estuvo David viajando alrededor del mundo?",
            eng: "How long was David's uninterrupted trip around the world?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "10 mesos",
                esp: "10 meses",
                eng: "10 months"
            },
            {
                cat: "6 mesos",
                esp: "6 meses",
                eng: "6 months" 
            },
            {
                cat: "2 anys",
                esp: "2 años",
                eng: "2 years"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin és el país més llunyà que ha visitat el David?",
            esp: "¿Cuál es el país más lejano que ha visitado David?",
            eng: "Which is the farthest country David has ever visited?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "Argentina (Patagonia)",
                esp: "Argentina (Patagonia)",
                eng: "Argentina (Patagonia)"
            },
            {
                cat: "Groenlàndia",
                esp: "Groenlandia",
                eng: "Greenland" 
            },
            {
                cat: "Nova Zelanda",
                esp: "Nueva Zelanda",
                eng: "New Zealand"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quants anys porten junts la Cristina i el David?",
            esp: "¿Cuántos años llevan juntos Cristina y David?",
            eng: "How many years have Cristina and David been together?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "7",
                esp: "9",
                eng: "4"
            },
            {
                cat: "7",
                esp: "9",
                eng: "4" 
            },
            {
                cat: "7",
                esp: "9",
                eng: "4"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Comptant aquesta, quantes vegades s'han casat la Cristina i el David?",
            esp: "Contando esta, ¿cuántas veces se han casado Cristina y David?",
            eng: "Taking this one into account, how many times have Cristina and David got married?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "1",
                esp: "2",
                eng: "3"
            },
            {
                cat: "1",
                esp: "2",
                eng: "3" 
            },
            {
                cat: "1",
                esp: "2",
                eng: "3"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin tipus de marca gairebé idèntica comparteixen la Cristina i el David?",
            esp: "¿Qué tipo de marca casi idéntica comparten Cristina y David?",
            eng: "What kind of almost identical body mark do Cristina and David share?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "Tatuatge",
                esp: "Tatuaje",
                eng: "Tatoo"
            },
            {
                cat: "Cicatriu",
                esp: "Cicatriz",
                eng: "Scar" 
            },
            {
                cat: "Piga",
                esp: "Peca",
                eng: "Mole"
            }
        ],
        intLevel: 1,
        points: 10,
        penalty: 3,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quina és l'època de l'any preferida de la Cristina?",
            esp: "¿Cuál es la época del año preferida de Cristina?",
            eng: "What is Cristina's favorite time of the year?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Estiu",
                esp: "Verano",
                eng: "Summer"
            },
            {
                cat: "El seu aniversari",
                esp: "Su cumpleaños",
                eng: "Her birthday" 
            },
            {
                cat: "Nadal",
                esp: "Navidad",
                eng: "Christmas"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin personatge de fantasia ha conegut personalment la Cristina?",
            esp: "¿Qué personaje de fantasía ha conocido Cristina personalmente?",
            eng: "What fantasy character did Cristina get to know in person?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Pare Noel",
                esp: "Papá Noel",
                eng: "Santa Klaus"
            },
            {
                cat: "Mickey Mouse",
                esp: "Mickey Mouse",
                eng: "Mickey Mouse" 
            },
            {
                cat: "Spiderman",
                esp: "Spiderman",
                eng: "Spiderman"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "A quin d'aquests països va viure el David?",
            esp: "¿En cuál de estos países vivió David?",
            eng: "In which of the following countries did David live?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "Estats Units",
                esp: "Estados Unidos",
                eng: "USA"
            },
            {
                cat: "Regne Unit",
                esp: "Reino Unido",
                eng: "United Kingdom" 
            },
            {
                cat: "Alemanya",
                esp: "Alemania",
                eng: "Germany"
            }
        ],
        intLevel: 1,
        points: 10,
        penalty: 3,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "A quina edat es va independitzar la Cristina?",
            esp: "¿A qué edad se independizó Cristina?",
            eng: "What age did Cristina go live on her own?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "27",
                esp: "27",
                eng: "27"
            },
            {
                cat: "25",
                esp: "25",
                eng: "25" 
            },
            {
                cat: "22",
                esp: "22",
                eng: "22"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "En quin tipus d'entorn es va criar la Cristina?",
            esp: "¿En qué tipo de entorno se crió Cristina?",
            eng: "In which kind of environment was Cristina raised?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Camp",
                esp: "Campo",
                eng: "Countryside"
            },
            {
                cat: "Platja",
                esp: "Playa",
                eng: "Beachside" 
            },
            {
                cat: "Ciutat",
                esp: "Ciudad",
                eng: "City"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin és el monstre preferit del David?",
            esp: "¿Cuál es el monstruo preferido de David?",
            eng: "Which is David's favorite monster?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "Vampir",
                esp: "Vampiro",
                eng: "Vampire"
            },
            {
                cat: "Mort vivent",
                esp: "Muerto viviente",
                eng: "Living dead" 
            },
            {
                cat: "Home-llop",
                esp: "Hombre-lobo",
                eng: "Werewolf"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "On es van conèixer la Cristina i el David?",
            esp: "¿Donde se conocieron Cristina y David?",
            eng: "Where did Cristina and David first meet?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "Festa",
                esp: "Fiesta",
                eng: "Party"
            },
            {
                cat: "Tinder",
                esp: "Tinder",
                eng: "Tinder" 
            },
            {
                cat: "Feina",
                esp: "Trabajo",
                eng: "Workplace"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quants anys de diferència es porten la Cristina i el David?",
            esp: "¿Cuántos años de diferencia se llevan Cristina y David?",
            eng: "What is the age difference between Cristina and David?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "12",
                esp: "12",
                eng: "12"
            },
            {
                cat: "7",
                esp: "7",
                eng: "7" 
            },
            {
                cat: "9",
                esp: "9",
                eng: "9"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quants idiomes coneix el David (en diversos graus de fluïdesa)?",
            esp: "¿Cuántos idiomas conoce David (en distintos grados de fluidez)?",
            eng: "How many languages does David know (in varying fluency degrees)?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "3",
                esp: "3",
                eng: "3"
            },
            {
                cat: "7",
                esp: "7",
                eng: "7" 
            },
            {
                cat: "4",
                esp: "4",
                eng: "4"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "En quin estat dels Estats Units va viure la Cristina durant un any aproximadament?",
            esp: "¿En qué estado de los Estados Unidos vivió Cristina durante aproximadamente un año?",
            eng: "In what US state did Cristina live for approximately one year?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "Texas",
                esp: "Texas",
                eng: "Texas"
            },
            {
                cat: "California",
                esp: "California",
                eng: "California" 
            },
            {
                cat: "Minnesota",
                esp: "Minnesota",
                eng: "Minnesota"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 2,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin és el país preferit del David?",
            esp: "¿Cuál es el país preferido de David?",
            eng: "Which is David's favorite country?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "Itàlia",
                esp: "Italia",
                eng: "Italy"
            },
            {
                cat: "Marroc",
                esp: "Marruecos",
                eng: "Morocco" 
            },
            {
                cat: "Filipines",
                esp: "Filipinas",
                eng: "Philippines"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin és l'heroi de ficció preferit del David?",
            esp: "¿Cuál es el héroe de ficción preferido de David?",
            eng: "Which is David's favorite fiction hero?"
        },
        subject: "David",
        possibleAnswers: [
            {
                cat: "Batman",
                esp: "Batman",
                eng: "Batman"
            },
            {
                cat: "Indiana Jones",
                esp: "Indiana Jones",
                eng: "Indiana Jones" 
            },
            {
                cat: "Son Goku",
                esp: "Son Goku",
                eng: "Son Goku"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin és el gènere literari preferit de la Cristina?",
            esp: "¿Cuál es el género literario favorito de Cristina?",
            eng: "Which is Cristina's favorite literary genre?"
        },
        subject: "Cristina",
        possibleAnswers: [
            {
                cat: "",
                esp: "",
                eng: ""
            },
            {
                cat: "",
                esp: "",
                eng: "" 
            },
            {
                cat: "",
                esp: "",
                eng: ""
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 1,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Al voltant de quina data assenyalada van començar a sortir la Cristina i el David?",
            esp: "¿Alrededor de qué fecha señalada empezaron a salir Cristina y David?",
            eng: "Around which public holiday did Cristina and David start to date?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "Cap d'Any",
                esp: "Fin de Año",
                eng: "New Year"
            },
            {
                cat: "Sant Valentí",
                esp: "San Valentín",
                eng: "Valentine's Day" 
            },
            {
                cat: "Diada Nacional de Catalunya",
                esp: "",
                eng: "Workplace"
            }
        ],
        intLevel: 3,
        points: 30,
        penalty: 7,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
    {
        body: {
            cat: "Quin és el nom carinyós que usa el David normalment per interpel·lar la Cristina?",
            esp: "¿Cuál es el nombre cariñoso que usa David para interpelar a Cristina?",
            eng: "Which is the affectionate name David normally uses to address Cristina?"
        },
        subject: "both",
        possibleAnswers: [
            {
                cat: "Cari",
                esp: "Cari",
                eng: 'Cari - short word for "cariño" '
            },
            {
                cat: "Platja",
                esp: "Playa",
                eng: "Beachside" 
            },
            {
                cat: "Solet",
                esp: "Ciudad",
                eng: "City"
            }
        ],
        intLevel: 2,
        points: 20,
        penalty: 5,
        rightAnswer: 0,
        response: {
            cat: "",
            esp: "",
            eng: ""
        }
    },
]

module.exports = questionData;
