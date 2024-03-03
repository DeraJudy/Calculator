let lastClickedBracket = null;
let lastClickedType = null;

// Add event listeners to all number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        // Append the clicked number to the button text content
        button.innerText = button.innerText;
        // Append the clicked number to the textarea
        textArea.value += button.innerText;
        lastClickedType = 'number'; // Update lastClickedType
    });
});


// Add event listeners to all operations and percentage buttons
document.querySelectorAll('.percentage').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        if (lastClickedType !== 'number') {
            alert("Invalid Format."); // Alert if no preceding number input
            return;
        }
        // Append the clicked operation/percentage to the textarea
        textArea.value += button.innerText + " ";
        lastClickedType = 'operation'; // Update lastClickedType
    });
});

// Add event listeners to all operations buttons
document.querySelectorAll('.operations').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        if (lastClickedType !== 'number') {
            alert("Invalid Format."); // Alert if no preceding number input
            return;
        }
        // Append the clicked operation/percentage to the textarea
        textArea.value += " " + button.innerText + " ";
        lastClickedType = 'operation'; // Update lastClickedType
    });
});


document.querySelectorAll('.cancel').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        textArea.value = ""; // Clearing the textarea content
        lastClickedBracket = null; // Reset the lastClickedBracket when clear button is clicked
        lastClickedType = null; // Reset the lastClickedType when clear button is clicked
    });
});

document.querySelectorAll('.brackets').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        if (lastClickedBracket === this.innerText) {
            textArea.value += ")" + " " + "X" + " ";
            lastClickedBracket = null; // Reset lastClickedBracket after adding closing bracket
        } else {
            textArea.value += "(";
            lastClickedBracket = this.innerText; // Update lastClickedBracket to the current bracket
        }
        lastClickedType = 'brackets'; // Update lastClickedType
    });
});




// My code
// document.querySelectorAll('.number').forEach(button => {
//     button.addEventListener('click', function() {
//         var textArea = document.getElementById("displayText");
//         textArea.value += this.innerText;
//     });
// });

// document.querySelectorAll('.operations').forEach(button => {
//     button.addEventListener('click', function() {
//         var textArea = document.getElementById("displayText");
//         textArea.value += " " + this.innerText + " ";
//     });
// });


// document.querySelectorAll('.percentage').forEach(button => {
//     button.addEventListener('click', function() {
//         var textArea = document.getElementById("displayText");
//         textArea.value += this.innerText;
//     });
// });

// document.querySelectorAll('.cancel').forEach(button => {
//     button.addEventListener('click', function() {
//         var textArea = document.getElementById("displayText");
//         textArea.value = ""; // Clearing the textarea content
        
//     });
// });

// document.querySelectorAll('.brackets').forEach(button => {
//     button.addEventListener('click', function() {
//         var textArea = document.getElementById("displayText");
//         textArea.value = "("; // Clearing the textarea content
        
//     });
// });


