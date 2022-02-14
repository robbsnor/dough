import { Bingo } from "./bingo";
import { Objective } from "./bingo.model";

const myBingoObjectives: Objective[] = [
    { objective: 'Draw'},
    { objective: '3 kills with one Ult'},
    { objective: 'Stepped in a random Junkrat trap'},
    { objective: '3 Game winning stream'},
    { objective: '3 YEPROCKS in one game'},
    { objective: 'No on speaking in team chat'},
    { objective: '4+ man grav'},
    { objective: 'Quadruple kill'},
    { objective: '4 Gold medals (end of round)'},
    { objective: 'Died to Brigitte just swinging her flail'},
    { objective: 'Remech kill'},
    { objective: '"Can we get a POG in all capitals"'},
    { objective: 'Open 5 loot boxes', isDone: true },
    { objective: 'Mines kill someone seemingly 5 minutes after being placed'},
    { objective: 'Dva bomb only kills a venom mine'},
    { objective: 'Stuck in Orisa jail for a game'},
    { objective: 'Eat an ult'},
    { objective: '"Can we get an L O L in the chat"'},
    { objective: '"Blocked Earthshatter with face"'},
    { objective: 'Enviromental death casued by enemy'},
    { objective: '50 Elimns in onegame'},
    { objective: '"Not our map"'},
    { objective: 'POTG'},
    { objective: 'Gold objective time'},
    { objective: 'Sick Pinball Peter rollout'},
]

const emonggsBingo = new Bingo(
    myBingoObjectives, 
    document.querySelector('.emongg'),
    '5x5'
)

// console.log(myBingoCard);
