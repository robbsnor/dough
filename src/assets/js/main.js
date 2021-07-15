class Accordion {
    constructor() {
        this.accordions = document.getElementsByClassName('accordion');
        this.headers = document.getElementsByClassName('accordion__header');
        this.bodys = document.getElementsByClassName('accordion__body');
        this.bodysContent = document.getElementsByClassName('accordion__body-content');

        this.options = {
            animationSpeed: 200
        }
        
        this.init();
    }

    init() {
        // register click events
        Array.from(this.headers).forEach((header, i) => {
            header.addEventListener('click', () => {
                this.toggle(i);
            });
        });
    }

    open(i) {
        console.log('open');

        this.accordions[i].classList.add('open');
        let h = this.bodysContent[i].clientHeight;

        this.bodys[i].style.height = `${h}px`;

        setTimeout(() => {
            this.bodys[i].style.height = `auto`;
        }, this.options.animationSpeed);

    }

    close(i) {
        console.log('close');
        let h = this.bodysContent[i].clientHeight;
        this.bodys[i].style.height = `${h}px`;
        
        setTimeout(() => {
            this.accordions[i].classList.remove('open');
            this.bodys[i].style.height = `${0}px`;
        }, 1);
    }

    toggle(i) {
        if (this.accordions[i].classList.contains('open')) {
            this.close(i);
        }
        else {
            this.open(i);
        }
    }

    openAll() {
        for (let i = 0; i < this.accordions.length; i++) {
            this.open(i);            
        }
    }

    closeAll() {
        for (let i = 0; i < this.accordions.length; i++) {
            this.close(i);            
        }
    }
}

const acc = new Accordion();

document.getElementById('close-all').addEventListener('click', () => {
    acc.closeAll();
})

document.getElementById('open-all').addEventListener('click', () => {
    acc.openAll();
})



