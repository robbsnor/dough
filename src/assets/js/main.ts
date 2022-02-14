import { Bingo } from "./bingo";
import { Objective } from "./bingo.model";

const myBingoObjectives: Objective[] = [
    { title: 'Draw'},
    { title: '3 kills with one Ult'},
    { title: 'Stepped in a random Junkrat trap'},
    { title: '3 Game winning stream'},
    { title: '3 YEPROCKS in one game'},
    { title: 'No on speaking in team chat'},
    { title: '4+ man grav'},
    { title: 'Quadruple kill'},
    { title: '4 Gold medals (end of round)'},
    { title: 'Died to Brigitte just swinging her flail'},
    { title: 'Remech kill'},
    { title: '"Can we get a POG in all capitals"'},
    { title: 'Open 5 loot boxes', isDone: true },
    { title: 'Mines kill someone seemingly 5 minutes after being placed'},
    { title: 'Dva bomb only kills a venom mine'},
    { title: 'Stuck in Orisa jail for a game'},
    { title: 'Eat an ult'},
    { title: '"Can we get an L O L in the chat"'},
    { title: '"Blocked Earthshatter with face"'},
    { title: 'Enviromental death casued by enemy'},
    { title: '50 Elimns in onegame'},
    { title: '"Not our map"'},
    { title: 'POTG'},
    { title: 'Gold objective time'},
    { title: 'Sick Pinball Peter rollout'},
]

const emonggsBingo = new Bingo(
    myBingoObjectives, 
    document.querySelector('.emongg'),
    '5x5'
)

// console.log(myBingoCard);
