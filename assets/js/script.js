document.addEventListener("DOMContentLoaded", () => {
    console.log('Dom Content loaded!'); // Adding a console output for testing purposes //


    // the below logic umoved to function captureAttempt()
    // Using logic identified by Ian Lenehan 'Build a Wordle clone using HTML, CSS & Javascript' to confirm that each key is populated //
    //for (let i = 0; i < keys.length; i++) {
      //  keys[i].onclick = ({
        //    target
        //}) => {
         //   const key = target.getAttribute("data-key");
           // console.log(key); // Adding a console output for testing purposes, to show which key has been clicked //
        //};
   // }
      captureAttempt();
});

// Define an array to hold solution values.  This is a multi-dimension array which can be added to as new solutions are generated daily 
// For now it will be used to pick a random entry from the array for that day's guess 
function initSolution() {
    let possSolution=[
    [1, "+", 2, "*", 5, 11, "Unused"],
    [10, '/', 5, "*", 20, 40, "Unused"],
    [20, '*', 10, '/', 4, 50, "Unused"],
    ];
    
    console.log(possSolution);
    let solIndex = 1;
    let result = calcArray(possSolution[solIndex]);
    console.log('Calcuated result from calcArray is ', result);

    let targetValue = document.getElementsByClassName('targetValue');
    // console.log (targetValue.innerHTML);
    console.log(targetValue.className, targetValue.length, targetValue.attributes);
    for (let i = 0; i < targetValue.length; i++) {
        targetValue[i].innerHTML = possSolution[solIndex][5];
        console.log('In loop ' + targetValue[i].innerHTML);
    }
    console.log('targetValue after initialise');
    console.log(targetValue.innerHTML);

    let thisSolution = document.getElementById('solution');
    console.log(thisSolution);
    thisSolution.innerHTML = ("");
    //console.log(thisSolution);
    for (let j = 0; j < (possSolution[solIndex].length - 2); j++) {
        thisSolution.innerHTML = (thisSolution.innerHTML + possSolution[solIndex][j] + " ");
    }
    thisSolution.innerHTML = (thisSolution.innerHTML + " = " + possSolution[solIndex][5]);
    console.log(thisSolution.innerHTML);
}

// DMcC 15/05/23:  The function below is used to parse out a character-basesd array and calcualte the result
// Note that multiply done first, then divide, then add, then subtract 
function calcArray(arrayParam) {
    let result = 0;
    console.log('Array passed is ' + arrayParam[0] + ' ' + arrayParam[1] + ' ' + arrayParam[2] + ' ' + arrayParam[3] + ' ' + arrayParam[4] );
    console.log('ArrayParam[1]is' + arrayParam[1]);
    switch (arrayParam[1]) {
        case "*":
            switch (arrayParam[3]) {
                case "*":
                    result = arrayParam[0] * arrayParam[2] * arrayParam[4];
                    break;
                case "/":
                    result = arrayParam[0] * arrayParam[2] / arrayParam[4];
                    break;
                case "+":
                    result = (arrayParam[0] * arrayParam[2]) + arrayParam[4];
                    break;
                case "-":
                    result = (arrayParam[0] * arrayParam[2]) - arrayParam[4];
                    break;
                default:
                    alert('second operator not recognised');
                    break;
            }
            break;
            case "/":
                switch (arrayParam[3]) {
                    case "*":
                        result = arrayParam[0] / arrayParam[2] * arrayParam[4];
                        break;
                    case "/":
                        result = arrayParam[0] / arrayParam[2] / arrayParam[4];
                        break;
                    case "+":
                        result = (arrayParam[0] / arrayParam[2]) + arrayParam[4];
                        break;
                    case "-":
                        result = (arrayParam[0] / arrayParam[2]) - arrayParam[4];
                        break;
                    default:
                        alert('second operator not recognised');
                        break;
                }
                break;
                case "+":
                    switch (arrayParam[3]) {
                        case "*":
                            result = arrayParam[0] + (arrayParam[2] * arrayParam[4]);
                            break;
                        case "/":
                            result = arrayParam[0] + (arrayParam[2] / arrayParam[4]);
                            break;
                        case "+":
                            result = arrayParam[0] + arrayParam[2] + arrayParam[4];
                            break;
                        case "-":
                            result = arrayParam[0] + arrayParam[2] - arrayParam[4];
                            break;
                        default:
                            alert('second operator not recognised');
                            break;
                    }
                    break;
                    case "-":
                        switch (arrayParam[3]) {
                            case "*":
                                result = arrayParam[0] - (arrayParam[2] * arrayParam[4]);
                                break;
                            case "/":
                                result = arrayParam[0] - (arrayParam[2] / arrayParam[4]);
                                break;
                            case "+":
                                result = arrayParam[0] - arrayParam[2] + arrayParam[4];
                                break;
                            case "-":
                                result = arrayParam[0] - arrayParam[2] - arrayParam[4];
                                break;
                            default:
                                alert('second operator not recognised');
                                break;
                        }
                        break;
                    default:
                        alert('first operator ' + arrayParam[1] + ' not recognised');
                        break;

    }
    return (result);
}

function captureAttempt() {
    // Checking that each of the keyboard entries is setup and associated with a number or character .....    
    const keys = document.querySelectorAll('.selection-row button');
    let userAttempt=[0, "+", 0, "+", 0, 0];
    for (j=0; j<userAttempt.length; j++) {
        console.log('value of j when entering loop is' +j);
    // Using logic identified by Ian Lenehan 'Build a Wordle clone using HTML, CSS & Javascript' to confirm that each key is populated //
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({
            target
        }) => {
            userAttempt[j] = target.getAttribute("data-key");
            console.log('char '+j +'is: '+ userAttempt[j]); // Adding a console output for testing purposes, to show which key has been clicked //
        j++;
        }
    }
}

    console.log('Attempt is: ', userAttempt);
    
}

function checkSolution(arrayParam) {
console.log('Array passed is ' + arrayParam[0] + ' ' + arrayParam[1] + ' ' + arrayParam[2] + ' ' + arrayParam[3] + ' ' + arrayParam[4] );
    console.log('ArrayParam[1]is' + arrayParam[1]);
    
}