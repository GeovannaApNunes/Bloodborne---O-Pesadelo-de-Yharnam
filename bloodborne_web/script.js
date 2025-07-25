function selectCharacter(character) {
    const detailsSection = document.getElementById('character-details');
    const characterImage = document.getElementById('character-image');
    const characterName = document.getElementById('character-name');
    const characterDescription = document.getElementById('character-description');

    // Dados dos personagens
    const characters = {
        hunter: {
            name: "O Caçador",
            image: "assets-js/hunter.webp",
            description: "O protagonista da jornada em Yharnam. Um forasteiro que busca uma cura, mas encontra um pesadelo sangrento."
        },
        gehrman: {
            name: "Gehrman",
            image: "assets-js/gehrman_js.webp",
            description: "O primeiro Caçador, mentor dos novos guerreiros. Preso no Sonho do Caçador, esconde um segredo terrível."
        },
        ladyMaria: {
            name: "Lady Maria",
            image: "assets-js/maria.jpg",
            description: "Uma caçadora lendária, discípula de Gehrman. Sua lâmina carmesim já derramou sangue em batalhas épicas."
        },
        eileen: {
            name: "Eileen, o Corvo",
            image: "assets-js/eileen-js.jpg",
            description: "Uma caçadora experiente que segue um código de honra. Ela caça aqueles que sucumbiram à loucura da caçada."
        },
        micolash: {
            name: "Micolash, Anfitrião do Pesadelo",
            image: "assets-js/micolash-js.jpg",
            description: "O líder insano do Pesadelo de Mensis. Ele manipula o poder dos Grandes em busca de iluminação."
        },
        laurence: {
            name: "Laurence, o Primeiro Vigário",
            image: "assets-js/laurence-js.jpeg",
            description: "O fundador da Igreja do Remédio. Sua ambição o levou a um destino trágico como uma fera flamejante."
        },
        theDoll: {
            name: "A Boneca",
            image: "assets-js/doll.jpeg",
            description: "Uma figura misteriosa que ajuda os caçadores no Sonho do Caçador. Sua origem é envolta em mistério."
        },
        vicarAmelia: {
            name: "Vigária Amelia",
            image: "assets-js/vigaria.jpeg",
            description: "Uma líder devota da Igreja do Remédio. Sua transformação em uma fera simboliza a corrupção da fé."
        },
        martyrLogarius: {
            name: "Mártir Logarius",
            image: "assets-js/martir-js.jpg",
            description: "O guardião do segredo dos Cainhurst. Ele se sacrificou para proteger o mundo de um poder sombrio."
        },
    iosefka: {
        name: "Iosefka",
        image: "assets-js/iosefka-js.jpg",
        description: "Uma médica que oferece ajuda aos caçadores. Sua verdadeira natureza é envolta em mistério e intriga."
    },
    adella: {
        name: "Adella, a Irmã de Sangue",
        image: "assets-js/Adella-js.jpg",
        description: "Uma freira que cuida dos caçadores feridos. Sua devoção a um caçador a leva a um destino sombrio."
    },
    djura: {
        name: "Djura",
        image: "assets-js/djura-js.jpg",
        description: "Um caçador solitário que protege os habitantes de Old Yharnam. Sua história é marcada por tragédia e redenção."
    },
    henriett: {
        name: "Henriett",
        image: "assets-js/henriett-js.jpeg",
        description: "Uma caçadora que ajuda os guerreiros em suas jornadas. Ela é uma aliada confiável em tempos de necessidade."
    },
    edgar: {
        name: "Edgar, o Caçador",
        image: "assets-js/edgar-js.webp",
        description: "Um caçador habilidoso que enfrenta os horrores da noite. Sua coragem é um exemplo para todos os guerreiros."
    },
    };

    // Atualiza os detalhes do personagem
    characterImage.src = characters[character].image;
    characterName.textContent = characters[character].name;
    characterDescription.textContent = characters[character].description;

    // Exibe a seção de detalhes
    detailsSection.classList.remove('hidden');
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('hidden');
}


