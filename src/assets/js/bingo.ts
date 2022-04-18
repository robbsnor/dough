import { cloneDeep } from "lodash";
import { Objective, BoardSize } from "./bingo.model";

export class Bingo {
    private originalObjectives: Objective[];
    private objectives: Objective[];
    private bingoEl: HTMLDivElement;
    private boardSize: BoardSize;

    constructor(
        objectives: Objective[],
        bingoEl: HTMLDivElement,
        boardSize: BoardSize
    ) {
        this.originalObjectives = cloneDeep(objectives);
        this.objectives = objectives;
        this.bingoEl = bingoEl;
        this.boardSize = boardSize;

        this.init();
    }

    init() {
        this.loadFromLocalStorage();
    }

    initListeners() {
        // handle cards click
        const objectives  = document.querySelectorAll('.bingo__objective');
        objectives.forEach(( objective, i ) => {
            objective.addEventListener('click', () => {
                this.toggleDone(i);
                this.saveToLocalStorage();
                console.log('clicked card');
            })
        });

        // clear board
        const clearBtn = document.querySelector('.bingo__clear');
        clearBtn.addEventListener('click', () => {
            this.deleteLocalStorage();
        }, { once: true })
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

        console.log(this.objectives);
        console.log(this.originalObjectives);

    }

    clearDone(i: number) {
        document.querySelectorAll('.bingo__objective')[i].classList.remove('is-done');
        this.objectives[i].isDone = false
    }

    toggleDone(i: number) {
        this.objectives[i].isDone ? this.clearDone(i) : this.setDone(i);
    }

    saveToLocalStorage() {
        localStorage.setItem('bingo_objectives', JSON.stringify(this.objectives));
    }

    loadFromLocalStorage() {
        const objectives = JSON.parse(localStorage.getItem('bingo_objectives'));

        if (objectives) this.objectives = objectives;

        this.drawBoard();
        this.initListeners();
    }

    deleteLocalStorage() {
        localStorage.removeItem('bingo_objectives');

        this.objectives = this.originalObjectives;

        this.drawBoard();
        this.initListeners();
    }
}