export class KeyboardDisplay {
    private container: HTMLElement;

    constructor(
        container: HTMLElement
    ) {
        this.container = container;

        this.init();
    }

    public init() {
        this.handleEvents();
        this.renderKeyboard();
    }

    private handleEvents() {
        document.addEventListener('keydown', (e) => {
            const key = this.getKey(e);
            const keyEl = document.querySelector(`.keyboard-display__key--${ key.toLocaleLowerCase() }`)

            if(!keyEl) return;

            keyEl.classList.add('active');
        });

        document.addEventListener('keyup', (e) => {
            const key = this.getKey(e);
            const keyEl = document.querySelector(`.keyboard-display__key--${ key.toLocaleLowerCase() }`)

            if(!keyEl) return;

            keyEl.classList.remove('active');
        });


        document.addEventListener('click', () => {

            // clear all active keys
            document.querySelectorAll('.keyboard-display__key').forEach(key => {
                key.classList.remove('.active');
            });
        });
    }

    private getKey(keyboardEvent: KeyboardEvent) {
        let { code } = keyboardEvent;

        const key = code.replace('Key', '').replace('Digit', '').toLocaleLowerCase();

        return key;
    }

    private renderKeyboard () {
        this.container.innerHTML = `
            <div class="keyboard-display">
                <div class="keyboard-display__row keyboard-display__row--f-keys">
                    <div class="keyboard-display__key keyboard-display__key--escape">esc</div>
                    <div class="keyboard-display__key keyboard-display__key--f1">f1</div>
                    <div class="keyboard-display__key keyboard-display__key--f2">f2</div>
                    <div class="keyboard-display__key keyboard-display__key--f3">f3</div>
                    <div class="keyboard-display__key keyboard-display__key--f4">f4</div>
                    <div class="keyboard-display__key keyboard-display__key--f5">f5</div>
                    <div class="keyboard-display__key keyboard-display__key--f6">f6</div>
                    <div class="keyboard-display__key keyboard-display__key--f7">f7</div>
                    <div class="keyboard-display__key keyboard-display__key--f8">f8</div>
                    <div class="keyboard-display__key keyboard-display__key--f9">f9</div>
                    <div class="keyboard-display__key keyboard-display__key--f10">f10</div>
                    <div class="keyboard-display__key keyboard-display__key--f11">f11</div>
                    <div class="keyboard-display__key keyboard-display__key--f12">f12</div>
                </div>

                <div class="keyboard-display__row">
                    <div class="keyboard-display__key keyboard-display__key--backquote">-</div>
                    <div class="keyboard-display__key keyboard-display__key--1">1</div>
                    <div class="keyboard-display__key keyboard-display__key--2">2</div>
                    <div class="keyboard-display__key keyboard-display__key--3">3</div>
                    <div class="keyboard-display__key keyboard-display__key--4">4</div>
                    <div class="keyboard-display__key keyboard-display__key--5">5</div>
                    <div class="keyboard-display__key keyboard-display__key--6">6</div>
                    <div class="keyboard-display__key keyboard-display__key--7">7</div>
                    <div class="keyboard-display__key keyboard-display__key--8">8</div>
                    <div class="keyboard-display__key keyboard-display__key--9">9</div>
                    <div class="keyboard-display__key keyboard-display__key--0">0</div>
                    <div class="keyboard-display__key keyboard-display__key--minus">-</div>
                    <div class="keyboard-display__key keyboard-display__key--equal">=</div>
                    <div class="keyboard-display__key keyboard-display__key--backspace">backspace</div>
                </div>

                <div class="keyboard-display__row">
                    <div class="keyboard-display__key keyboard-display__key--tab">tab</div>
                    <div class="keyboard-display__key keyboard-display__key--q">q</div>
                    <div class="keyboard-display__key keyboard-display__key--w">w</div>
                    <div class="keyboard-display__key keyboard-display__key--e">e</div>
                    <div class="keyboard-display__key keyboard-display__key--r">r</div>
                    <div class="keyboard-display__key keyboard-display__key--t">t</div>
                    <div class="keyboard-display__key keyboard-display__key--y">y</div>
                    <div class="keyboard-display__key keyboard-display__key--u">u</div>
                    <div class="keyboard-display__key keyboard-display__key--i">i</div>
                    <div class="keyboard-display__key keyboard-display__key--o">o</div>
                    <div class="keyboard-display__key keyboard-display__key--p">p</div>
                    <div class="keyboard-display__key keyboard-display__key--bracketleft">[</div>
                    <div class="keyboard-display__key keyboard-display__key--bracketright">]</div>
                    <div class="keyboard-display__key keyboard-display__key--backslash">/</div>
                </div>

                <div class="keyboard-display__row">
                    <div class="keyboard-display__key keyboard-display__key--capslock">capslock</div>
                    <div class="keyboard-display__key keyboard-display__key--a">a</div>
                    <div class="keyboard-display__key keyboard-display__key--s">s</div>
                    <div class="keyboard-display__key keyboard-display__key--d">d</div>
                    <div class="keyboard-display__key keyboard-display__key--f">f</div>
                    <div class="keyboard-display__key keyboard-display__key--g">g</div>
                    <div class="keyboard-display__key keyboard-display__key--h">h</div>
                    <div class="keyboard-display__key keyboard-display__key--j">j</div>
                    <div class="keyboard-display__key keyboard-display__key--k">k</div>
                    <div class="keyboard-display__key keyboard-display__key--l">l</div>
                    <div class="keyboard-display__key keyboard-display__key--semicolon">;</div>
                    <div class="keyboard-display__key keyboard-display__key--quote">'</div>
                    <div class="keyboard-display__key keyboard-display__key--enter">enter</div>
                </div>

                <div class="keyboard-display__row">
                    <div class="keyboard-display__key keyboard-display__key--shiftleft">shift</div>
                    <div class="keyboard-display__key keyboard-display__key--z">z</div>
                    <div class="keyboard-display__key keyboard-display__key--x">x</div>
                    <div class="keyboard-display__key keyboard-display__key--c">c</div>
                    <div class="keyboard-display__key keyboard-display__key--v">v</div>
                    <div class="keyboard-display__key keyboard-display__key--b">b</div>
                    <div class="keyboard-display__key keyboard-display__key--n">n</div>
                    <div class="keyboard-display__key keyboard-display__key--m">m</div>
                    <div class="keyboard-display__key keyboard-display__key--comma">,</div>
                    <div class="keyboard-display__key keyboard-display__key--period">.</div>
                    <div class="keyboard-display__key keyboard-display__key--slash">/</div>
                    <div class="keyboard-display__key keyboard-display__key--shiftright">shift</div>
                </div>

                <div class="keyboard-display__row">
                    <div class="keyboard-display__key keyboard-display__key--controlleft">crtl</div>
                    <div class="keyboard-display__key keyboard-display__key--metaleft">[]</div>
                    <div class="keyboard-display__key keyboard-display__key--altleft">alt</div>
                    <div class="keyboard-display__key keyboard-display__key--space"></div>
                    <div class="keyboard-display__key keyboard-display__key--altright">alt</div>
                    <div class="keyboard-display__key keyboard-display__key--metaright">[]</div>
                    <div class="keyboard-display__key keyboard-display__key--contextmenu">_</div>
                    <div class="keyboard-display__key keyboard-display__key--controlright">crtl</div>
                </div>
            </div>
        `;
    }
}
