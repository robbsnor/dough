import { Objective } from "./bingo.model";
import { BoardSize } from "./bingo.model";

export class Bingo {
    private objectives: Objective[];
    private bingoEl: HTMLDivElement;
    private boardSize: BoardSize;

    constructor(
        objectives: Objective[],
        bingoEl: HTMLDivElement,
        boardSize: BoardSize
    ) {
        this.objectives = objectives;
        this.bingoEl = bingoEl;
        this.boardSize = boardSize;
        
        this.init();
    }

    init() {
        this.drawBoard();
        this.initListeners();
    }

    initListeners() {
        // handle if cards are done
        const objectives  = document.querySelectorAll('.bingo__objective');
        objectives.forEach(objective => {
            objective.addEventListener('click', () => {                
                this.toggleDone(objective);
            })
        });
    }

    drawBoard() {        
        this.bingoEl.classList.add('bingo', `bingo--${this.boardSize}`);
        this.bingoEl.innerHTML = '';

        this.objectives.forEach(( objective ) => {
            this.bingoEl.innerHTML += `
                <div class="bingo__objective${objective.isDone ? ' is-done' : ''}">${ objective.objective }</div>
            `;
        });
    }

    setDone(objective: Element) {
        objective.classList.add('is-done');
    }

    unsetDone(objective: Element) {
        objective.classList.remove('is-done');
    }

    toggleDone(objective: Element) {
        objective.classList.contains('is-done') ? this.unsetDone(objective) : this.setDone(objective);
    }
}