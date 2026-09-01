
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



window.onload = function() {

};

function refreshWikiFrame() {
    document.getElementById("wiki-frame").src = document.getElementById("wiki-frame").src
}

function toggleSpace(row, column) {
    const rowDiv = document.querySelector("#bingo-row-"+row.toString());
    const cellDiv = rowDiv.querySelector(".bingo-column-"+column.toString());
    if (cellDiv.dataset.selected == "true") {
        cellDiv.dataset.selected = "false";
        cellDiv.style.backgroundColor = "var(--bg-colour)";
        cellDiv.style.fontWeight = "normal";
    } else {
        cellDiv.dataset.selected = "true";
        cellDiv.style.backgroundColor = "var(--light-grey)";
        cellDiv.style.fontWeight = "bold";
    }
}