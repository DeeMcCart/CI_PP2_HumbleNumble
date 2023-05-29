/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
    setDate();
});

/* This function generates a date for the intro screen, formatted as per the Wordle date ie MMM DD, YYYY */
function setDate() {
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    var monthName;
    switch (month) {
        case 0:
            monthName = 'Jan';
            break;
        case 1:
            monthName = 'Feb';
            break;
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

/**
 * playGame() is the main function which is called when the user presses the Play button from the main screen
 * Begins by changing the displays so that 'intro' modal no longer visible, and makes header and game panel visible 
 * Calls function initSolution() to initialise the game with a new target solution //
 */
function playGame() {
    let intro = document.getElementById('intro');
    intro.classList.remove('yesDisplay');
    intro.classList.add('noDisplay');
    let gameHead = document.getElementById('gameHead');
    gameHead.classList.remove('noDisplay');
    let container = document.getElementById('container');
    container.classList.remove('noDisplay');

    initSolution();
}

/*  Function initSolution() initialises the game as follows:
 *    - start by clearing the screen of previous guess (if exists; for testing the game was set to run repeatedly);
 *    - reset attemptNum to 1 and colNum to 0; 
 *    - select a possible solution randomly from a predefined multi-dimensional array of solution values.  
 *    - (This logic can be extended to generate random solutions - future feature) 
 *    - For now it will be used to pick a random entry from the array for that day's guess 
 *    -  // DMcC 18/05/23: Use a random generator to choose from the array of possible solutions //
 *      
 */


function initSolution() {
    clearScreen();
    document.getElementById('attemptNum').innerHTML = 1;
    document.getElementById('colNum').innerHTML = 0;

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

    let solIndex = Math.floor(Math.random() * possSolution.length);
    let targetValue = document.getElementsByClassName('targetValue');

    // Set targetvalue on all rows to be equal to the solution value (this will be re-verified for each row, it just acts as a user reminder) //
    for (let i = 0; i < targetValue.length; i++) {
        targetValue[i].innerHTML = possSolution[solIndex][5];
    }
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
}


/**
 * DMcC 18/05/23 Code below is used to clear screen of previous entries 
 */
// DMcC 18/05/23:  Removes colours previously applied to grid and keys when a game has already been played //
// DMcC 28/05/23:  Issue #001:  Not all previously coloured tiles are clearing - was using a single variable name and resetting it for each colour//
// DMcC 28/05/23:  Issue 001 - problem identified, getElementsByClassName is a live node list which reduces in size as matching classes are removed //
// Solution is to use a 'while' loop rather than a 'for' loop //
function clearScreen() {
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
    for (let i = 1; i < 7; i++) {
        let initRow = document.getElementsByClassName('row' + i);
        for (let j = 0; j < initRow.length - 1; j++) {
            initRow[j].innerHTML = "";
        } // end j loop/ 
    } // end i loop/
    // delay 1 seconds, then clear error message
    clearResult(0);
} // end function clearScreen


function clearResult(delaySecs) {
    // DMcC 29/05/23:  Pause for specified number of seconds... //
    sleep(delaySecs * 1000);

    // Clear any result text which remains onscreen from a previous attempt //
    let resultOverLay = document.getElementById('resultOverLay');
    resultOverLay.classList.remove('yesDisplay');
    resultOverLay.classList.add('noDisplay');
    let resultText = document.getElementById('resultText');
    resultText.classList.remove('yesDisplay');
    resultText.classList.add('noDisplay');
}

/**  
 * Function sleep is to delay in some situations eg error message on-screen - give the user time to read it before clearing
 * @param (miliSeconds: integer)
 */
function sleep(miliSeconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliSeconds >= new Date().getTime()) { // pausing for the specified miliseconds}
    }
}

/** DMcC 15/05/23:  The function below is used to parse out a character-based array and calcualte the result
 * Note that multiply done first, then divide, then add, then subtract 
 * Note:  standard eval() function could have been used but was avoided due to widely published security concerns....
 * @param {array} is an equation passed to this function for evaluation
 * @return {number} is the result of calculating the equation
 */
function calcArray(arrayParam) {
    let result = 0;
    switch (arrayParam[1]) {
        case "*":
            switch (arrayParam[3]) {
                case "*":
                    // DMcC 29/05/23 removing the plus sign from the calcs below, just monitor if it causes a problem... */
                    result = parseInt(arrayParam[0],10) * parseInt(arrayParam[2],10) * parseInt(arrayParam[4],10);
                    break;
                case "/":
                    result = ((parseInt(arrayParam[0]) * parseInt(arrayParam[2],10)) / parseInt(arrayParam[4],10)).toFixed(0);
                    break;
                case "+":
                    result = (parseInt(arrayParam[0]) * parseInt(arrayParam[2],10)) + parseInt(arrayParam[4]);
                    break;
                case "-":
                    result = (parseInt(arrayParam[0]) * parseInt(arrayParam[2],10)) - parseInt(arrayParam[4]);
                    break;
                default:
                    alert('second operator ' + arrayParam[3] + ' not recognised');
                    break;
            }
            break;
        case "/":
            switch (arrayParam[3]) {
                case "*":
                    result = (parseInt(arrayParam[0],10) / (parseInt(arrayParam[2],10) * parseInt(arrayParam[4],10))).toFixed(0);
                    break;
                case "/":
                    result = (parseInt(arrayParam[0],10) / parseInt(arrayParam[2],10) / parseInt(arrayParam[4],10)).toFixed(0);
                    break;
                case "+":
                    result = ((parseInt(arrayParam[0],10) / parseInt(arrayParam[2],10)) + parseInt(arrayParam[4],10)).toFixed(0);
                    break;
                case "-":
                    result = (parseInt(arrayParam[0],10) / parseInt(arrayParam[2],10)) - parseInt((arrayParam[4],10)).toFixed(0);
                    break;
                default:
                    alert('second operator ' + arrayParam[3] + ' not recognised');
                    break;
            }
            break;
        case "+":
            switch (arrayParam[3]) {
                case "*":
                    result = parseInt(arrayParam[0], 10) + (parseInt(arrayParam[2], 10) * parseInt(arrayParam[4], 10));
                    break;
                case "/":
                    result = (parseInt(arrayParam[0], 10) + (parseInt(arrayParam[2], 10) / parseInt(arrayParam[4], 10))).toFixed(0);
                    break;
                case "+":
                    result = parseInt(arrayParam[0], 10) + parseInt(arrayParam[2], 10) + parseInt(arrayParam[4], 10);
                    break;
                case "-":
                    result = (parseInt(arrayParam[0], 10) + parseInt(arrayParam[2], 10)) - parseInt(arrayParam[4], 10);
                    break;
                default:
                    alert('second operator' + arrayParam[3] + ' not recognised');
                    break;
            }
            break;
        case "-":
            switch (arrayParam[3]) {
                case "*":
                    result = parseInt(arrayParam[0],10) - (parseInt(arrayParam[2],10) * parseInt(arrayParam[4],10));
                    break;
                case "/":
                    result = (parseInt(arrayParam[0],10) - (parseInt(arrayParam[2],10) / parseInt(arrayParam[4],10)).toFixed(0));
                    break;
                case "+":
                    result = parseInt(arrayParam[0],10) - (parseInt(arrayParam[2],10) + parseInt(arrayParam[4],10));
                    break;
                case "-":
                    result = parseInt(arrayParam[0],10) - parseInt(arrayParam[2],10) - parseInt(arrayParam[4],10);
                    break;
                default:
                    alert('second operator ' + arrayParam[3] + ' not recognised');
                    break;
            }
            break;
        default:
            alert('first operator ' + arrayParam[1] + ' not recognised');
            break;

    }
    return (result);
}

/** function keyClick() is invoked when the user clicks any of the buttons 
 *    This function needs to establish: //
 *    - which attempt is this?  - Start with capturing what attempt number we are on: 
 *    - If attempt number 7 is reached then game is over & call function endGame to end gracefully
 *    - also determine what is the next column number to populate: 
 *    - 29/05/23 - DMcC - workaround for clearing an error message (e.g. 'Incorrect total') remaining from //
 *    - a previous row - if an entry has been made on a new row (column 1) then clear any on-screen display or error messages with a half-second delay
 *    - Use the writeLetter function to display the letter at the correct position within the on-screen grid.
 *    - Increment the current column number.
 * @param(keyboard key)  ie 1 to 20 or + - * /   
 */
function keyClick(selectedKey) {
    let attemptNum = document.getElementById('attemptNum').innerHTML;
    if (attemptNum == 7) {
        endGame(7);
    } else {
        let colNum = document.getElementById('colNum').innerHTML;
        if (colNum == 0) {
            clearResult(0.5);
        }
        writeLetter(attemptNum, colNum, selectedKey);
        document.getElementById('colNum').innerHTML = (++colNum);
    }
}

/**
 * function backSpace() is used to blank out the inner HTML of the previous guess entry and decrement the current column number 
 */
function backSpace() {
    let attemptNum = document.getElementById('attemptNum').innerHTML;
    let colNum = (document.getElementById('colNum').innerHTML - 1);
    let guess = document.getElementsByClassName('row' + attemptNum);
    if (colNum >= 0) {
        guess[colNum].innerHTML = " ";
        document.getElementById('colNum').innerHTML = colNum;
    }
}

/* Function checkSolution() is invoked when the user presses the enter button 
 *    It determines the current guess row
 *    performs error checking to ensure:
 * 1. Proposed solution is in structure num op num op num - error message if not and exit function 
 * 2. Proposed solution calculates to correct total (this should already be populated as part of the entry process) 
 *    and then it must parse each element of the proposed solution and check it against the target solution 
 * depending on the result for each element, set the class for the identified element (in row grid) and set the class 
 * for the associated element (in keyboard display)
 * Setting the class to absent /present /correct will invoke the css display to change the tile/button colour to grey/ orange/ green
 *   First - retrieve the current attempt number 
 */
function checkSolution() {
    let attemptNum = document.getElementById('attemptNum').innerHTML;
    const solution = document.getElementsByClassName('solutionRow');
    // then pick up the 5 elements from that row //
    let guess = document.getElementsByClassName('row' + attemptNum);
    let guessItems = [guess[0].innerHTML, guess[1].innerHTML, guess[2].innerHTML, guess[3].innerHTML, guess[4].innerHTML];
    let calcTarget = calcArray(guessItems);
    let fred = document.getElementsByClassName('row' + attemptNum);
    if (fred[5].innerHTML != calcTarget) {
        // alert('Calculated total not equal to target value!');//
        displayResult('Incorrect calc!');
        fred[5].innerHTML = calcTarget;
        // DMcC 29/05/23 - need to take some action here to display incorrect result and to return to the start of the line //
        // tried clearResult with a 2-second timer but it executed in parallel and didnt cause the required delay => workaround clear message at start of next line//
    }
    fred[5].innerHTML = calcTarget;
    // reset the 'correct element' counter //
    let correctCount = 0;
    /* first check each element of the array to see if it is found anywhere within the solution array */
    for (let i = 0; i < (guess.length - 1); i++) {
        for (let j = 0; j < solution.length; j++) {
            // Do a first check here to find the guess array item within the solution array //
            // this would be handy becuase it can be greyed out if absent //
            // if I did a find of 2, would it also find 20? //

            if ((guess[i].innerHTML) === (solution[j].innerHTML)) {
                if (i === j) {
                    // add a class onto the guess[i] item to change the display colour on grid//
                    guess[i].classList.add('correct');
                    // increment the count of correct matches //
                    correctCount++;
                    // Find the matching keyboard item and add a class to change its display colour on keyboard //
                    let key = document.getElementById(guess[i].innerHTML);
                    key.classList.add('correct');
                    if (correctCount == 5) {
                        // Turn the last two columns of the line green as well to make it really visible //
                        let jack = (document.getElementsByClassName('row' + attemptNum))[5];
                        let jill = document.getElementsByClassName('equalSign')[attemptNum];
                        jack.classList.add('correct');
                        jill.classList.add('correct');
                    }
                } else {
                    /* present but not in the correct position */
                    guess[i].classList.add('present');
                    // Find the matching keyboard item and add a class to change its display colour on keyboard //
                    let key = document.getElementById(guess[i].innerHTML);
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
            let key = document.getElementById(guess[i].innerHTML);
            key.classList.add('absent');
        }

    } // End for loop i cycle (checking through each i item of guessed array)//

    // Check if full solution has been reached - ie correctCount = 5 - if so then break out and give the user a congratulations message;
    if (correctCount == 5) {
        endGame(attemptNum);
      }
    // else Increment attempt number and reset current letter position//
    else {
        document.getElementById('attemptNum').innerHTML = ++attemptNum;
        // If attempt number 7 is reached then game is over //
        if (attemptNum == 7) {
            endGame(7);
        } else {
            document.getElementById('colNum').innerHTML = 0;
        }
    }
} // End of function checkSolution()

/**  Function writeLetter() is used to write a single letter of a guess onto the screen 
 * @param(rowNum integer)
 * @param(position integer)
 * @param(guessItem character)
 */
function writeLetter(rowNum, position, guessItem) {
    let fred = document.getElementsByClassName('row' + rowNum)[position];
    fred.innerHTML = guessItem;
}

/** Function writeGuess() is used to write an entire line of guessArray to the screen //
 * Parameters are rowNum (which links to a specified row# ID on-screen) and guessArray //
 * eventually the fields will each be displayed individually when they are loaded/validated but the below is good for testing //
 * Will need to add array parameters for guessed solutions to indicate if each entry is success(green) part-success(orange) fail(darkgrey) untested (blank))
 */
function writeGuess(rowNum, guessArray) {
    let guessRow = document.getElementsByClassName('row' + rowNum);
    console.log("guessRow array before population: " + guessRow);
    for (let i = 0; i < (guessRow.length); i++) {
        console.log(guessRow[i]);
        guessRow[i].innerHTML = guessArray[i];
    }

    console.log('guessRow after population' + guessRow);
    console.log("guessRow array after population: " + guessRow);
    for (let i = 0; i < guessRow.length; i++) {
        console.log(guessRow[i]);
    }
}

/**  Function endGame() is used to bring a graceful end to the game
 * @param {attemptNum: integer}
 */
function endGame(attemptNum) {
    const solution = document.getElementById('solution');
    switch (attemptNum) {
        case ('1'):
            displayResult('Genius');
            break;
        case ('2'):
            displayResult('Magnificent');
            break;
        case ('3'):
            displayResult('Impressive');
            break;
        case ('4'):
            displayResult('Splendid');
            break;
        case ('5'):
            displayResult('Great');
            break;
        case ('6'):
            displayResult('Whew!');
            break;
        default:
            displayResult(solution.innerHTML);
    }
}

/** Function displayResult() displays text in results box for various scenarious - error message, success message etc 
 * @param {displayText: string}
 */
function displayResult(displayText) {
    let resultOverLay = document.getElementById('resultOverLay');
    resultOverLay.classList.remove('noDisplay');
    resultOverLay.classList.add('yesDisplay');
    let resultText = document.getElementById('resultText');
    resultText.classList.remove('noDisplay');
    resultText.classList.add('yesDisplay');
    resultText.innerHTML = displayText;
}

/*
 * Function hideHelp - hides the help modal screen when the close button is selected 
 */
function hideHelp() {
    let helpOverLay = document.getElementById('helpOverLay');
    helpOverLay.classList.remove('yesDisplay');
    helpOverLay.classList.add('noDisplay');

    let helpText = document.getElementById('helpText');
    helpText.classList.remove('yesDisplay');
    helpText.classList.add('noDisplay');
}

/*
 * Function help - enables display of helptext modal screen 
 */
function help() {
    let helpOverLay = document.getElementById('helpOverLay');
    helpOverLay.classList.remove('noDisplay');
    helpOverLay.classList.add('yesDisplay');

    let helpText = document.getElementById('helpText');
    helpText.classList.remove('noDisplay');
    helpText.classList.add('yesDisplay');
}