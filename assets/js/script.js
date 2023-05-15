console.log('Hello World!'); // Adding a console output for testing purposes //
document.addEventListener("DOMContentLoaded",() => { 

// Checking that each of the keyboard entries is setup and associated with a number or character .....    
const keys=document.querySelectorAll('.selection-row button');
console.log (keys);

// Using logic identified by Ian Lenehan 'Build a Wordle clone using HTML, CSS & Javascript' to confirm that each key is populated //
for (let i=0; i<keys.length; i++) {
    keys[i].onclick =({target}) => {
        const key=target.getAttribute("data-key");
        console.log(key); // Adding a console output for testing purposes, to show which key has been clicked //
    };
}
}
);

// Define an array to hold solution values.  This is a multi-dimension array which can be added to as new solutions are generated daily 
// For now it will be used to pick a random entry from the array for that day's guess 
function initSolution()
{
    let sol1 = [1, "+", 2, "*", 5, 11, "Unused"];
    let sol2= [10, '/', 5, "*", 20, 40, "Unused"];
    let sol3 = [20, '*', 10, '/', 4, 50, "Unused"];
    let possSolution = [sol1, sol2, sol3];
    console.log(possSolution);
    let solIndex=2;

    let targetValue = document.getElementsByClassName('targetValue');
    // console.log (targetValue.innerHTML);
    console.log (targetValue.className, targetValue.length, targetValue.attributes);
    for (let i=0; i<targetValue.length; i++) {
        targetValue[i].innerHTML=possSolution[solIndex][5];
        console.log('In loop ' + targetValue[i].innerHTML);
    }
    console.log('targetValue after initialise');
    console.log (targetValue.innerHTML);

    let thisSolution = document.getElementById('solution');
    console.log(thisSolution);
    thisSolution.innerHTML=("");
    //console.log(thisSolution);
    for (let j=0; j<(possSolution[solIndex].length -2); j++) {
    thisSolution.innerHTML = (thisSolution.innerHTML + possSolution[solIndex][j] + " "); }
    thisSolution.innerHTML = (thisSolution.innerHTML + " = "+ possSolution[solIndex][5] );
    console.log(thisSolution.innerHTML);
}
