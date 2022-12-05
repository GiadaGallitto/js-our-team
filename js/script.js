// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

const members = [
    {
        name : `Wayne Barnett`,
        role : `Founder & CEO`, 
        image : `wayne-barnett-founder-ceo.jpg`,
    },

    {
        name : `Angela Caroll`, 
        role : `Chief Editor`, 
        image : `angela-caroll-chief-editor.jpg`
    },

    {
        name : `Walter Gordon`, 
        role : `Office Manager`, 
        image : `walter-gordon-office-manager.jpg`
    },

    {
        name : `Angela Lopez`, 
        role : `Social Media`, 
        image : `angela-lopez-social-media-manager.jpg`
    },

    {
        name : `Scott Estrada`, 
        role : `Developer`, 
        image : `scott-estrada-developer.jpg`
    },

    {
        name : `Barbara Ramos`, 
        role : `Graphic Designer`, 
        image : `barbara-ramos-graphic-designer.jpg`
    },
];

let divElement = document.getElementById("output");

// const img = document.createElement("img");

let memberString;

for (let i = 0; i < members.length; i++){

    const memberTeam = members[i];
    
    // for (let key in memberTeam){
    //     memberString = key + ` => ` + memberTeam[key];
    //     console.log(memberString)
    //     divElement.innerHTML += memberString + " <br /> ";
    // }

    let card = createNewCard(memberTeam.name, memberTeam.role, memberTeam.image)
    divElement.classList.add("d-flex", "flex-wrap", "container")
    divElement.append(card)
    console.log(card)
}

function createNewCard(infoName, infoRole, infoImage){
    const card = document.createElement("div");
    card.classList.add("card", "card-size");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    let cardImage = document.createElement("img")
    cardImage.src = "./img/" + infoImage

    
    let cardName = document.createElement("div")
    cardName.classList.add("card-title")
    cardName.innerHTML = infoName
    
    let cardRole = document.createElement("div")
    cardRole.classList.add("card-text")
    cardRole.innerHTML = infoRole
    
    cardBody.append(cardName, cardRole)
    
    card.append(cardImage, cardBody)

    return card
}