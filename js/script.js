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
        image : `Manager  angela-lopez-social-media-manager.jpg`
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

let memberString;

for (let i = 0; i < members.length; i++){

    const memberTeam = members[i];
    
    for (let key in memberTeam){
        // console.log(key)
        memberString = key + ` => ` + memberTeam[key];
        console.log(memberString)
        divElement.innerHTML += memberString + " <br /> ";
    }

}

