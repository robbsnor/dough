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
        objectives.forEach(( objective, i ) => {
            objective.addEventListener('click', () => {                
                this.toggleDone(i);
            })
        });
    }

    drawBoard() {        
        this.bingoEl.classList.add('bingo', `bingo--${this.boardSize}`);
        this.bingoEl.innerHTML = '';

        this.objectives.forEach(( objective ) => {
            this.bingoEl.innerHTML += `
                <div class="bingo__objective${objective.isDone ? ' is-done' : ''}">${ objective.title }</div>
            `;
        });
    }

    setDone(i: number) {
        document.querySelectorAll('.bingo__objective')[i].classList.add('is-done');
        this.objectives[i].isDone = true
    }

    unsetDone(i: number) {
        document.querySelectorAll('.bingo__objective')[i].classList.remove('is-done');
        this.objectives[i].isDone = false
    }

    toggleDone(i: number) {
        this.objectives[i].isDone ? this.unsetDone(i) : this.setDone(i);
    }
}