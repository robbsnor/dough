const squares = document.querySelectorAll('.square');

const vw = document.body.offsetWidth;
const vh = document.body.offsetHeight;

document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    const mouseYPercentage = 100 / vh * y;
    const mouseXPercentage = 100 / vw * x;   

    squares.forEach((square: HTMLDivElement, i: number) => {
        console.log(i);
        
        setTimeout(() => {    
            square.style.cssText = `
                transform: translate(calc((${mouseXPercentage}% - 50%) * ${i * .1} * .2), calc((${mouseYPercentage}% - 50%) * ${i * .1} * .2)) scale(${ 1 - ( i * .04) });
            `;            
        }, 20 * i);
    });
    
})
