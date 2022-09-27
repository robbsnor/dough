import { KeyboardDisplay } from "./keyboard-display";
const container = document.querySelector('.keyboard-container') as HTMLElement;

const options = {
    onKeyDown: (event: KeyboardEvent) => {
        console.log(event);
    },
    onKeyUp: (event: KeyboardEvent) => {
        console.log(event);
    }
}

new KeyboardDisplay(container, options);

