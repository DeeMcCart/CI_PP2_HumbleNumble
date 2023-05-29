document.addEventListener("DOMContentLoaded", () => {
    console.log('Dom Content loaded!'); // Adding a console output for testing purposes //
    setDate();
    /* DMcC 17/05/23:  the captureAttempt() function was used when javascript was pulling values from the user screen - */
    /* this approach has now changed so that the user is 'pushing' values to javaScript using the onclick() functions.. therefore may not be needed */
    //   captureAttempt();
});

function setDate() {
    /* DMcC 28/05/23 this function generates a date for the intro screen, formatted as per the Wordle date ie MMM DD, YYYY */
    console.log('In function setDate')
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    var monthName;
    switch (month) {
        case 0:
            monthName = 'Jan';
        case 1:
            monthName = 'Feb';
        case 2:
            monthName = 'Mar';
            break;
        case 3:
            monthName = 'Apr';
            break;
        case 4:
            monthName = 'May';
            break;
        case 5:
            monthName = 'Jun';
            break;
        case 6:
            monthName = 'Jul';
            break;
        case 7:
            monthName = 'Aug';
            break;
        case 8:
            monthName = 'Sept';
            break;
        case 9:
            monthName = 'Oct';
            break;
        case 10:
            monthName = 'Nov';
            break;
        case 11:
            monthName = 'Dec';
            break;
    }
    document.getElementById('todayDate').innerHTML = monthName + " " + day + ", " + year;
}

function playGame() {
    console.log('In function playGame');
    // DMcC 28/05/23:  Initial screen has now been included - so begin by changing the displays so that initial screen no longer visible, and //
    // header and game panel becomes visible //
    let intro = document.getElementById('intro');
    intro.classList.remove('yesDisplay');
    intro.classList.add('noDisplay');
    let gameHead = document.getElementById('gameHead');
    gameHead.classList.remove('noDisplay');
    let container = document.getElementById('container');
    container.classList.remove('noDisplay');

    // DMcC 29/05/23:  Automatically initialise the game with a new target solution //
    initSolution();
}

function initSolution() {
    // Startby clearing the screen of previous guess (if exists)*/
    clearScreen();

    /* DMcC 17/05/23:  Note This function sets attemptum and colNum back to 0 */
    document.getElementById('attemptNum').innerHTML = 1;
    document.getElementById('colNum').innerHTML = 0;

    // Below is some logic to select a possible solution.  This logic can be extended to generate random solutions - future fix //
    // Define an array to hold solution values.  This is a multi-dimension array which can be added to as new solutions are generated daily 
    // For now it will be used to pick a random entry from the array for that day's guess 
    let possSolution = [
        [1, "+", 2, "*", 5, 11, "Easy"],
        [5, '*', 20, "/", 10, 10, "Medium"],
        [20, '*', 10, '/', 4, 50, "Hard"],
        [1, '*', 2, "*", 3, 6, "Easy"],
        [15, '/', 3, '-', 2, 3, "Easy"],
        [2, '*', 5, "*", 10, 100, "Easy"],
        [3, '*', 18, "-", 8, 46, "Medium"],
        [17, '*', 3, "-", 20, 31, "Hard"],
        [17, '*', 5, "/", 5, 17, "Hard"],
        [18, '/', 3, "+", 7, 13, "Hard"],
        [15, '/', 5, '*', 3, 1, "Medium"]
    ];

    // DMcC 18/05/23: Use a random generator to choose from the array of possible solutions //
    let solIndex = Math.floor(Math.random() * possSolution.length);
    let targetValue = document.getElementsByClassName('targetValue');
    console.log(targetValue.innerHTML);
    console.log(targetValue.className, targetValue.length, targetValue.attributes);
    // Set targetvalue on all rows to be equal to the solution value (this will be re-verified for each row, it just acts as a user reminder) //
    for (let i = 0; i < targetValue.length; i++) {
        targetValue[i].innerHTML = possSolution[solIndex][5];
        console.log('In loop ' + targetValue[i].innerHTML);
    }
    console.log('targetValue after initialise ' + targetValue.innerHTML);

    // Populate single field with ID solution with string value of solution //
    // Also populate array with class solution with the individual values within the solution //
    let thisSolution = document.getElementById('solution');
    let solution = document.getElementsByClassName('solutionRow');
    thisSolution.innerHTML = ("");
    for (let j = 0; j < (possSolution[solIndex].length - 2); j++) {
        thisSolution.innerHTML = (thisSolution.innerHTML + possSolution[solIndex][j] + " ");
        solution[j].innerHTML = possSolution[solIndex][j];
    }
    thisSolution.innerHTML = (thisSolution.innerHTML + " = " + possSolution[solIndex][5]);
    solution[5].innerHTML = possSolution[solIndex][5];
    //console.log(thisSolution.innerHTML);
    //console.log(solution.innerHTML);
    console.log('End of function initSolution');
}


//DMcC 18/05/23 Code below is used to clear screen of previous entries //
function clearScreen() {
    // DMcC 18/05/23:  Add code to remove colours previously applied to grid and keys a game has already been played //
    // DMcC 28/05/23:  Issue #001:  Not all previously coloured tiles are clearing - was using a single variable name and resetting it for each colour//
    // DMcC 28/05/23:  Issue 001 - problem identified, getElementsByClassName is a live node list which reduces in size as matching classes are removed //
    // Solution is to use a 'while' loop rather than a 'for' loop //
    let colouredTiles = document.getElementsByClassName('present');
    while (colouredTiles.length) {
        colouredTiles[0].classList.remove('present');
    }
    colouredTiles = document.getElementsByClassName('correct');
    while (colouredTiles.length) {
        colouredTiles[0].classList.remove('correct');
    }
    colouredTiles = document.getElementsByClassName('absent');
    while (colouredTiles.length) {
        colouredTiles[0].classList.remove('absent');
    }

    // Code below is used to clear out the contents of tiles for each row //
    for (i = 1; i < 7; i++) {
        let initRow = document.getElementsByClassName('row' + i);
        for (j = 0; j < initRow.length - 1; j++) {
            initRow[j].innerHTML = "";
        } // end j loop/ 
    } // end i loop/

    // Clear any result text which remains onscreen from a previous attempt //
    resultOverLay = document.getElementById('resultOverLay');
    resultOverLay.classList.remove('yesDisplay');
    resultOverLay.classList.add('noDisplay');
    resultText = document.getElementById('resultText');
    resultText.classList.remove('yesDisplay');
    resultText.classList.add('noDisplay');

} // end function clearScreen


// DMcC 17/05/23 Add code to test the writeGuess function is is intended to populate a row of guess to screen //
// writeGuess(1, possSolution[solIndex]); //



// DMcC 15/05/23:  The function below is used to parse out a character-based array and calcualte the result
// Note that multiply done first, then divide, then add, then subtract 
// Note:  standard eval() function could have been used but was avoided due to widely published security concerns....
function calcArray(arrayParam) {
    console.log('Within function calcArray');
    let result = 0;
    console.log('Array passed is ' + arrayParam[0] + ' ' + arrayParam[1] + ' ' + arrayParam[2] + ' ' + arrayParam[3] + ' ' + arrayParam[4]);
    console.log('ArrayParam[1]is' + arrayParam[1]);
    switch (arrayParam[1]) {
        case "*":
            switch (arrayParam[3]) {
                case "*":
                    result = +arrayParam[0] * +arrayParam[2] * +arrayParam[4];
                    break;
                case "/":
                    result = +arrayParam[0] * +arrayParam[2] / +arrayParam[4];
                    break;
                case "+":
                    result = (+arrayParam[0] * +arrayParam[2]) + +arrayParam[4];
                    break;
                case "-":
                    result = (+arrayParam[0] * +arrayParam[2]) - +arrayParam[4];
                    break;
                default:
                    alert('second operator not recognised');
                    break;
            }
            break;
        case "/":
            switch (arrayParam[3]) {
                case "*":
                    result = +arrayParam[0] / (+arrayParam[2] * +arrayParam[4]);
                    break;
                case "/":
                    result = +arrayParam[0] / +arrayParam[2] / +arrayParam[4];
                    break;
                case "+":
                    result = (+arrayParam[0] / +arrayParam[2]) + +arrayParam[4];
                    break;
                case "-":
                    result = (+arrayParam[0] / +arrayParam[2]) - +arrayParam[4];
                    break;
                default:
                    alert('second operator not recognised');
                    break;
            }
            break;
        case "+":
            switch (arrayParam[3]) {
                case "*":
                    result = +arrayParam[0] + (+arrayParam[2] * +arrayParam[4]);
                    break;
                case "/":
                    result = +arrayParam[0] + (+arrayParam[2] / +arrayParam[4]);
                    break;
                case "+":
                    result = +arrayParam[0] + +arrayParam[2] + +arrayParam[4];
                    break;
                case "-":
                    result = +arrayParam[0] + +arrayParam[2] - +arrayParam[4];
                    break;
                default:
                    alert('second operator not recognised');
                    break;
            }
            break;
        case "-":
            switch (arrayParam[3]) {
                case "*":
                    result = +arrayParam[0] - (+arrayParam[2] * +arrayParam[4]);
                    break;
                case "/":
                    result = +arrayParam[0] - (+arrayParam[2] / +arrayParam[4]);
                    break;
                case "+":
                    result = +arrayParam[0] - +arrayParam[2] + +arrayParam[4];
                    break;
                case "-":
                    result = +arrayParam[0] - +arrayParam[2] - +arrayParam[4];
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
    // console.log('result is ' + result + ', exiting function calcArray');
    return (result);
}

// DMcC 18/05/23:  Think the function below is no longer needed //
// function captureAttempt() {
// DMcC 17/05/23 Start with capturing what attempt number we are on: //
//   let attemptNum = document.getElementById('attemptNum').innerHTML;
//   console.log("Within captureAttempt function, attempt number is " + attemptNum);
//   let userTry = [0, "+", 0, "+", 0, 0];
//}

// The below function keyClick is invoked when the user clicks any of the buttons //
// This function needs to establish: //
// - which attempt is this?  
function keyClick(selectedKey) {
    // DMcC 17/05/23 Start with capturing what attempt number we are on: //
    let attemptNum = document.getElementById('attemptNum').innerHTML;
    // DMcC 17/05/23 also determine what is the next column number to populate: //
    let colNum = document.getElementById('colNum').innerHTML;
    console.log("Within keyClick function, attempt number " + attemptNum + "column Number " + colNum + "character " + selectedKey);
    writeLetter(attemptNum, colNum, selectedKey);
    document.getElementById('colNum').innerHTML = (++colNum);
}

function backSpace() {
    console.log("Within function backSpace");
    let attemptNum = document.getElementById('attemptNum').innerHTML;
    let colNum = (document.getElementById('colNum').innerHTML - 1);
    let guess = document.getElementsByClassName('row' + attemptNum);
    if (colNum >= 0) {
        guess[colNum].innerHTML = " ";
        document.getElementById('colNum').innerHTML = colNum;
    }
}

function checkSolution() {
    // this function is invoked when the user presses the enter button //
    // It determines the current guess row //
    // performs error checking to ensure: //
    // 1. Proposed solution is in structure num op num op num - error message if not and exit function //
    // 2. Proposed solution calculates to correct total (this should already be populated as part of the entry process) //
    // .... any other error checking needed here //
    // 
    // and then it must parse each element of the proposed solution and check it against the target solution //
    // depending on the result for each element, set the class for the identified element (in row grid) and set the class //
    // for the identified element (in keyboard display) //
    // setting the class to ...... (one of three values) will invoke the css display to change the item colour //

    // First - retrieve the current attempt number //
    console.log("Within function checkSolution");
    let attemptNum = document.getElementById('attemptNum').innerHTML;
    const solution = document.getElementsByClassName('solutionRow');
    // Retrieve array of keyboard keys, will be needed later for colouring with present/ correct/ absent //
    const keys = document.querySelectorAll('.selection-row button');
    console.log('Values of keys is ' + keys);

    console.log('Solution for comparison is' + solution);
    // then pick up the 5 elements from that row //
    let guess = document.getElementsByClassName('row' + attemptNum);
    // console.log("The number of items retrieved with class "+'row'+attemptNum+' is '+guess.length);
    let guessItems = [guess[0].innerHTML, guess[1].innerHTML, guess[2].innerHTML, guess[3].innerHTML, guess[4].innerHTML];

    // console.log('Guessed array passed is '+ guess[0].innerHTML + ' ' + guess[1].innerHTML + ' ' + guess[2].innerHTML + ' ' + guess[3].innerHTML + ' ' + guess[4].innerHTML + ' ' + guess[5].innerHTML);
    // console.log('Guessed array items passed is '+ guessItems);
    let calcTarget = calcArray(guessItems);
    // console.log('Calculated target returned to checkSolution is '+calcTarget);
    let fred = document.getElementsByClassName('row' + attemptNum);
    // console.log('Current value of target for this row is '+fred[5].innerHTML);
    if (fred[5].innerHTML != calcTarget) {
        alert('Calculated total not equal to target value!');
    }
    fred[5].innerHTML = calcTarget;

    console.log('Current value of target for this row is ' + fred[5].innerHTML);
    console.log('More logic needed in checkSolution to double check total and to check each of the items');
    // reset the 'correct element' counter //
    let correctCount = 0;
    /* first check each element of the array to see if it is found anywhere within the solution array */
    for (i = 0; i < (guess.length - 1); i++) {
        // console.log('Checking guess ' + guess[i].innerHTML + ' for matches');
        // the following logic adapted from various research sources //
        //console.log('Solution has the following content, is it an array? ' + solution);
        //console.log('Solution has the following type, is it an array? ' + solution.type);
        if (Array.isArray(solution)) {
            let found = solution.find(x => (x.innerHTML === guess[i].innerHTML));
            console.log('Found ' + found + ' within the solution array');
        } else {
            console.log('solution is not an array');
        }

        for (j = 0; j < solution.length; j++) {
            // console.log('Checking solution ' + solution[j].innerHTML + ' for matches'); //
            // Do a first check here to find the guess array item within the solution array //
            // this would be handy becuase it can be greyed out if absent //
            // if I did a find of 2, would it also find 20? //

            if ((guess[i].innerHTML) === (solution[j].innerHTML)) {
                if (i === j) {
                    // add a class onto the guess[i] item to change the display colour on grid//
                    guess[i].classList.add('correct');
                    // increment the count of correct matches //
                    correctCount++;
                    console.log('Number of correct items is ' + correctCount);
                    // Find the matching keyboard item and add a class to change its display colour on keyboard //
                    key = document.getElementById(guess[i].innerHTML);
                    key.classList.add('correct');
                    if (correctCount == 5) {
                        console.log('All elements guessed, turning remainder of line green');
                        // Turn the last two columns of the line green as well to make it really visible //
                        jack = (document.getElementsByClassName('row' + attemptNum))[5];
                        jack.classList.add('correct');
                    }
                } else {
                    /* present but not in the correct position */
                    guess[i].classList.add('present');
                    // Find the matching keyboard item and add a class to change its display colour on keyboard //
                    key = document.getElementById(guess[i].innerHTML);
                    key.classList.add('present');
                }
            } // end of (guess[i].innerHTML) === (solution[j].innerHTML)

        } // End for loop j cycle (checking through each j item of solution array) //

        // if j has reached  need to check if a particular guess[i] didnt find a match in all of solution... 
        // may need to reverse the above....else {
        if (guess[i].classList.contains('correct') || guess[i].classList.contains('present')) {
            //this element has been located in solution - nothing more needed
        } else {
            // add an absent status to pickup colour coding
            guess[i].classList.add('absent');
            // Find the matching keyboard item and add a class to change its display colour on keyboard //
            key = document.getElementById(guess[i].innerHTML);
            key.classList.add('absent');
        }

    } // End for loop i cycle (checking through each i item of guessed array)//

    // Check if full solution has been reached - ie correctCount = 5 - if so then break out and give the user a congratulations message;
    if (correctCount == 5) {
        console.log('correctCount is 5, ending game!');
        endGame(attemptNum);
        // DMcC 28/05/23 - would also like to set the 2 remaining characters on the line to green so the total row appears green //
    }
    // else Increment attempt number and reset current letter position//
    else {
        document.getElementById('attemptNum').innerHTML = ++attemptNum;
        document.getElementById('colNum').innerHTML = 0;
    }
} // End of function checkSolution()

// DMcC 17/05/23 The function below writeLetter is used to write a single letter of a guess onto the screen //
function writeLetter(rowNum, position, guessItem) {
    console.log("In function writeLetter!");
    console.log("writing to position: row: " + ('row' + rowNum) + " position: " + position + " Guessed item: " + guessItem);
    let fred = document.getElementsByClassName('row' + rowNum)[position];
    console.log("Character found at position is: " + fred);
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

function endGame(attemptNum) {
    console.log('Function endGame, number of attempts was ' + attemptNum);
    resultOverLay = document.getElementById('resultOverLay');
    resultOverLay.classList.remove('noDisplay');
            resultOverLay.classList.add('yesDisplay');
    resultText = document.getElementById('resultText');
            resultText.classList.remove('noDisplay');
            resultText.classList.add('yesDisplay');

    switch (attemptNum) {
        case ('1'):
            resultText.innerHTML = 'Genius';
            break;
        case ('2'):
            resultText.innerHTML = 'Magnificent';
            break;
        case ('3'):
            resultText.innerHTML = 'Impressive';
            break;
        case ('4'):
            resultText.innerHTML = 'Splendid';
            break;
        case ('5'):
            resultText.innerHTML = 'Great';
            break;
        case ('6'):
            resultText.innerHTML = 'Whew!';
            break;
        default:
            alert('No match found for attemptNum ' + attemptNum);

            resultOverLay.classList.remove('noDisplay');
            resultOverLay.classList.add('yesDisplay');
            resultText.classList.remove('noDisplay');
            resultText.classList.add('yesDisplay');

    }
}

function hideHelp() {
    // Hide the help text when the close button is selected //
    let helpOverLay = document.getElementById('helpOverLay');
    helpOverLay.classList.remove('yesDisplay');
    helpOverLay.classList.add('noDisplay');

    let helpText = document.getElementById('helpText');
    helpText.classList.remove('yesDisplay');
    helpText.classList.add('noDisplay');
}

function help() {
    let helpOverLay = document.getElementById('helpOverLay');
    helpOverLay.classList.remove('noDisplay');
    helpOverLay.classList.add('yesDisplay');

    let helpText = document.getElementById('helpText');
    helpText.classList.remove('noDisplay');
    helpText.classList.add('yesDisplay');
}