document.addEventListener("DOMContentLoaded", function () {


    const cardContainer = document.getElementById("container")
    const card = document.querySelector(".card")
    const templateCard = document.querySelector('.template-card');


    const users = [
        {
            id: 1,
            name: "Mariano Ismael García Guzmán",
            description: "Un desarrollador apasionado de México. Me gusta el diseño inteligente, compartir emociones en la música, la automatización de procesos y crear experiencias digitales cautivadoras",
            link: "https://github.com/MarianoGarciaGz",
            defaultImg: "./assets/img/mariano.png"
        },
        {
            id: 2,
            name: "Christian Rojas Aaya",
            description: "Un chico con visión. Me gustan los retos, es por ello que participo en torneos de programación competitva, tengo mi propia empresa de desarrollo de software ",
            link: "https://www.linkedin.com/in/chris-rojas-a5183928a",
            defaultImg: "./assets/img/defaultImage.jpg"
        },
        {
            id: 3, 
            name: "Daniela Briseño Pompa",
            description: "Estudiante de ISC, tengo la idea de que siempre se debe de nutrir la mente con información y el cuerpo con ejercicio, por eso hago deporte y participo en competencias de programación",
            link: "https://www.linkedin.com/in/daniela-brise%C3%B1o-1820ab29a",
            defaultImg: "./assets/img/defaultImage.jpg"
        },
        {
            id: 4, 
            name: "Seth Ricardo Millán Dávalos ",
            description: "Estudiante apasionado por la programación y deporte, amante de la disciplina y el progreso, si hay algo que no se, lo aprendo, si hay algo en lo que no soy bueno, trabajo duro ",
            link: "null",
            defaultImg: "./assets/img/defaultImage.jpg"
        },
        {
            id: 5,
            name: "Rodrigo Vega Linares",
            description: "Estudiante dedicado y apasionado por la seguridad",
            link: "https://github.com/rovega007",
            defaultImg: "./assets/img/defaultImage.jpg",
        },
        {
            id: 6,
            name: "Christian Armando Ocaña Bautista",
            description: "Sólo yo",
            link: "null",
            defaultImg: "./assets/img/defaultImage.jpg",
        },
        {
            id: 7,
            name: "Angel Cortes Ruiz",
            description: "Entusiasta del desarrollo de software, siempre buscando nuevas tecnologias por aprender. Enfoque en desarrollo web fullstack",
            link: "https://www.linkedin.com/in/angelcortesruiz/",
            defaultImg: "./assets/img/defaultImage.jpg"
        },
        {
            id: 8,
            name: "Aide Pérez Andrade",
            description: "Estudiante de ingenieria en sistemas",
            link: "linkedin.com/in/aide-perez-731046294",
            defaultImg: "./assets/img/defaultImage.jpg"
        },
        {
            id: 9, 
            name: "Isabel Vera Corona",
            description: "Estudiante de ISC. Me gusta desafiarme a mi misma y emprender nuevos proyecto. No tengo tiempo pero te puedo ayudar :) . ",
            link: "null",
            defaultImg: "./assets/img/defaultImage.jpg"
        }
    ];


    users.forEach(user => {
        const newCard = card.cloneNode(true);
        

        newCard.querySelector('.card-img').setAttribute('src', user.defaultImg);
        newCard.querySelector('.card-title').textContent = user.name;
        newCard.querySelector('.card-p').textContent = user.description;
        newCard.querySelector('.card-title').textContent = user.name;
        newCard.querySelector(".card-btn").style.display = "none";
        newCard.querySelector(".card-btn--linkedin").style.display = "none";
        

        if (user.link.includes("linkedin")) {
            newCard.querySelector(".card-btn--linkedin").setAttribute('href', user.link);
            newCard.querySelector(".card-btn--linkedin").style.display = "block";
        } else if (user.link.includes("github")){
            newCard.querySelector(".card-btn").setAttribute('href', user.link);
            newCard.querySelector(".card-btn").style.display = "block";
        }
    
        cardContainer.appendChild(newCard);

    })
    templateCard.style.display = 'none';
})