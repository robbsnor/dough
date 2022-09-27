
export interface PopoverOptions {
    closeButton?: boolean;
    onOpen?: Function;
    onClose?: Function;
}

export class Popover {
    private html: string;
    private id: string;
    private options: PopoverOptions;

    constructor(
        html: string,
        id: string,
        options?: PopoverOptions
    ) {
        const defaultOptions: PopoverOptions = {
            closeButton: true
        }

        this.html = html;
        this.id = id;
        this.options = Object.assign({}, defaultOptions, options);
    }

    open() {
        document.body.append(this.template);

        this.closeEventListeners();

        if (this.options.onOpen) {
            this.options.onOpen();
        }
    }

    close() {
        document.querySelector(`.popover--id-${this.id}`).remove();

        if (this.options.onClose) {
            this.options.onClose();
        }
    }

    closeEventListeners() {
        const that = this;

        document.querySelector(`.popover`).addEventListener('click', function(e) {
            if (e.target !== this) return;
            that.close();
        });

        if (this.options.closeButton) {
            document.querySelector('.popover__close').addEventListener('click', () => {
                this.close();
            });
        };
    }

    get template() {
        const popover = document.createElement('div');
        popover.classList.add(`popover`, `popover--id-${this.id}`);
        const template = `
                ${this.options.closeButton ? `
                    <button class="popover__close">CLOSE</button>
                ` : ''}

                <div class="popover__container">
                    ${this.html}
                </div>
            </div>
        `;

        popover.innerHTML = template;

        return popover;
    };

}
