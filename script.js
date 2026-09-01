
const DEFAULT_BINGO_SPACES = `fih 
unhappy person
Shitty food item 
transport (location)
urrrm the freak i am (middle of fucking nowhere))
freaky
organs
herbert 
pervert 
mammal
miliary (used for war)
dead person
free space (citations)
bald 
church related
germany sports related
movie from 2000s - 2010s
list
nothing burger
smash
funny name
politics event 
over 5'11 foot
yap-fest 
warning
stem stuff
person shares name with someone we know
scam 
painting in the forefront 
media we know`

const NUM_ROWS = 5;
const NUM_COLUMNS = NUM_ROWS;

let hasAlerted = false;

window.onload = makeBingoBoard

function makeBingoBoard() {
    const spaces = DEFAULT_BINGO_SPACES.split("\n");
    for (let i=0; i<NUM_ROWS; i++) {
        for (let j=0; j<NUM_COLUMNS; j++) {

            // Reset bingo space
            toggleSpace(i, j, false, true);

            // Add content
            let index = Math.floor(Math.random()*spaces.length);

            const spaceContent = spaces[index];
            spaces.splice(index, 1)

            const rowDiv = document.querySelector("#bingo-row-"+j.toString());
            const cellDiv = rowDiv.querySelector(".bingo-column-"+i.toString());

            cellDiv.innerHTML = spaceContent;
        }
    }
    hasAlerted = false;
}

function refreshWikiFrame() {
    document.getElementById("wiki-frame").src = document.getElementById("wiki-frame").src
}

function toggleSpace(row, column, checkForBingo=true, forceUnselected=false) {
    const rowDiv = document.querySelector("#bingo-row-"+row.toString());
    const cellDiv = rowDiv.querySelector(".bingo-column-"+column.toString());
    if (cellDiv.dataset.selected == "true" || forceUnselected) {
        cellDiv.dataset.selected = "false";
        cellDiv.style.backgroundColor = "var(--bg-colour)";
        cellDiv.style.fontWeight = "normal";
    } else {
        cellDiv.dataset.selected = "true";
        cellDiv.style.backgroundColor = "var(--light-grey)";
        cellDiv.style.fontWeight = "bold";
    }

    if (checkForBingo) {
        checkBingo()
    }
}

function checkBingo() {
    let hasBingo = false;

    // Check columns
    for (let i=0; i<NUM_ROWS; i++) {
        for (let j=0; j<NUM_COLUMNS; j++) {
            const rowDiv = document.querySelector("#bingo-row-"+j.toString());
            const cellDiv = rowDiv.querySelector(".bingo-column-"+i.toString());
            if (cellDiv.dataset.selected == "false") {
                break;
            } else if (j == NUM_COLUMNS - 1) {
                hasBingo = true;
            }
        }
    }

    // Check rows
    if (!hasBingo) {
        for (let i=0; i<NUM_ROWS; i++) {
            const rowDiv = document.getElementById("bingo-row-"+i.toString());
            const cells = rowDiv.querySelectorAll(".bingo-space");
            hasBingo = true;
            console.log("ROW")
            for (cell of cells) {
                console.log(cell.innerHTML)
                if (cell.dataset.selected == "false") {
                    hasBingo = false;
                    break;
                }
            }
            if (hasBingo) {
                break;
            }
        }
    }

    // Check diagonals
    if (!hasBingo && NUM_ROWS == NUM_COLUMNS) {
        let diagonal1Bingo = true;
        let diagonal2Bingo = true;
        for (let i=0; i<NUM_ROWS; i++) {
            const rowDiv = document.getElementById("bingo-row-"+i.toString());
            const cell1 = rowDiv.querySelector(".bingo-column-"+i.toString());
            const cell2 = rowDiv.querySelector(".bingo-column-"+(NUM_ROWS-1-i).toString());
            if (cell1.dataset.selected == "false") {
                diagonal1Bingo = false;
            }
            if (cell2.dataset.selected == "false") {
                diagonal2Bingo = false;
            }
        }
        if (diagonal1Bingo || diagonal2Bingo) {
            hasBingo = true;
        }
    }

    // Show bingo
    if (hasBingo) {
        if (!hasAlerted) {
            alert("Bingo!");
            hasAlerted = true;
        }
        hasAlerted = true;
        document.getElementById("wiki-frame").hidden = true;
        document.getElementById("bingo-image").hidden = false;
    } else {
        document.getElementById("wiki-frame").hidden = false;
        document.getElementById("bingo-image").hidden = true;
    }
}