import { Popover, PopoverOptions } from './popover.service';

const html = `
    <h2>Subscribe to our newsletter</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
`;

const options: PopoverOptions = {
    closeButton: true,
    onClose: () => {
        console.log('closed');
    }
}

const popover = new Popover(html, 'one', options);

document.querySelector('.button').addEventListener('click', () => {
    popover.open();
})

