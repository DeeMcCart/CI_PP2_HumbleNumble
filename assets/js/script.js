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
    let possSolution = [
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
    // DMcC 17/05/23 Add code to test the writeGuess function is is intended to populate a row of guess to screen //
    writeGuess(1, possSolution[solIndex]);
}

// DMcC 17/05/23 The function below writeLetter is used to write a single letter of a guess onto the screen //
function writeLetter(rowNum, position, guessItem) {
   console.log("In function writeLetter!");
   console.log("writing to position: row: "+('row' + rowNum)+" position: "+position + " Guessed item: "+guessItem);
        let fred= document.getElementsByClassName('row' + rowNum)[position];
        console.log("Character found at position is: " +fred);
        fred.innerHTML = guessItem;
}



// DMcC 17/05/23 This function is used to write an entire line of guessArray to the screen //
// Parameters are rowNum (which links to a specified row# ID on-screen) and guessArray //
// eventually the fields will each be displayed individually when they are loaded/validated but the below is good for testing //
// Will need to add array parameters for guessed solutions to indicate if each entry is success(green) part-success(orange) fail(darkgrey) untested (blank))
function writeGuess(rowNum, guessArray) {
    console.log("In function writeGuess!");
    console.log("guessArray parameter is: " + guessArray + " type: " + typeof (guessArray));
   // Below not required as code above lists all elements of the array 
   // console.log("guessArray parameter is: ")
   // for (i = 0; i < guessArray.length; i++) {
   //     console.log(guessArray[i]);
   // }
    // DMcC 17/05/23 can strip out the 2 lines below and replace with calculation within array reference itelf // 
    let guessRow = document.getElementsByClassName('row' + rowNum);
    console.log("guessRow array before population: " + guessRow);
    for (i = 0; i < (guessRow.length); i++) {
        console.log(guessRow[i]);
        guessRow[i].innerHTML = guessArray[i];
    }

    // assign values of guessed Array to display row
    //for (i = 0; i < guessArray.length; i++) {
    //    guessRow[i].innerHTML = guessArray[i];
    //}


    console.log('guessRow after population' + guessRow);
    console.log("guessRow array after population: " + guessRow);
    for (i = 0; i < guessRow.length; i++) {
        console.log(guessRow[i]);
    }

}


// DMcC 15/05/23:  The function below is used to parse out a character-basesd array and calcualte the result
// Note that multiply done first, then divide, then add, then subtract 
// Note:  standard eval() function could have been used but was avoided due to widely published security concerns....
function calcArray(arrayParam) {
    let result = 0;
    console.log('Array passed is ' + arrayParam[0] + ' ' + arrayParam[1] + ' ' + arrayParam[2] + ' ' + arrayParam[3] + ' ' + arrayParam[4]);
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
    // DMcC 17/05/23 this function needs a little more work as the onclick function needs to be adapted to populate an array //
    // Checking that each of the keyboard entries is setup and associated with a number or character .....    
    const keys = document.querySelectorAll('.selection-row button');
console.log(keys);
    let userAttempt = [0, "+", 0, "+", 0, 0];
    for (j = 0; j < 5; j++) {
        console.log('value of j when entering loop is' + j);
        // Using logic identified by Ian Lenehan 'Build a Wordle clone using HTML, CSS & Javascript' to confirm that each key is populated //
        // DMcC 17/05/23 This is weird because its like a loop that never exits; I need a loop that executes fro the right number of guess times
        for (let i = 0; i < keys.length; i++) {
            keys[i].onclick = ({target}) => {
                userAttempt[j] = target.getAttribute("data-key");
                console.log('char ' +j + 'is: ' +userAttempt[j]); // Adding a console output for testing purposes, to show which key has been clicked //
                writeLetter(1, 1, userAttempt[j]);
             }
        }
    }

    console.log('Attempt is: ', userAttempt);

}

function checkSolution(arrayParam) {
    console.log('Array passed is ' + arrayParam[0] + ' ' + arrayParam[1] + ' ' + arrayParam[2] + ' ' + arrayParam[3] + ' ' + arrayParam[4]);
    console.log('ArrayParam[1]is' + arrayParam[1]);

}