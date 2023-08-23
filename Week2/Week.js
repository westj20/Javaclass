// Declare variables and constant
const textVariable = "Hello and Welcome";
let numberVariable = 4;
const constantVariable = 3;

// Function to update for textVariable
function updateTargetWithText() {
    const target = document.getElementById('target');
    target.textContent = textVariable;
}

// Function to update for numberVariable
function updateTargetWithNumber() {
    const target = document.getElementById('target');
    target.textContent = numberVariable;
}


function updateTargetWithSum() {
    const target = document.getElementById('target');
    const sum = numberVariable + constantVariable;
    target.textContent = sum;
}
