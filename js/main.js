console.log('Hello World!'); // Adding a console output for testing purposes //
document.addEventListener("DOMContentLoaded",() => { 
const keys=document.querySelectorAll('.selection-row button');
console.log (keys);

for (let i=0; i<keys.length; i++) {
    keys[i].onclick =({target}) => {
        const key=target.getAttribute("data-key");
        console.log(key); // Adding a console output for testing purposes //
    };
}
}
);