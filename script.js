let lastClickedBracket = null;
let lastClickedType = null;
let FirstClickedType = null;

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

document.querySelectorAll('.multiply').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        if (lastClickedType !== 'number') {
            alert("Invalid Format."); // Alert if no preceding number input
            return;
        } 
        // Append the clicked operation/percentage to the textarea
        textArea.value += " " + "*" + " ";
        lastClickedType = 'multiply'; // Update lastClickedType
    });
});


document.querySelectorAll('.cancel').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        let currentValue = textArea.value.trim();

        // Delete the last character in the display area
        // textArea.value = currentValue.slice(0, -1);

        textArea.value = '';
        lastClickedBracket = null; // Reset the lastClickedBracket when clear button is clicked
        lastClickedType = null; // Reset the lastClickedType when clear button is clicked
        FirstClickedType = null;
    });
});

document.querySelectorAll('.brackets').forEach(button => {
    button.addEventListener('click', function() {
        var textArea = document.getElementById("displayText");
        if (lastClickedBracket === this.innerText) {
            textArea.value += ")" + " " + "*" + " ";
            lastClickedBracket = null; // Reset lastClickedBracket after adding closing bracket
        } else {
            textArea.value += "(";
            lastClickedBracket = this.innerText; // Update lastClickedBracket to the current bracket
        }
        lastClickedType = 'brackets'; // Update lastClickedType
    });
});

document.querySelectorAll('.plusMinus').forEach(button => {
    button.addEventListener('click', function() {
        const textArea = document.getElementById("displayText");
        let currentValue = textArea.value.trim();

        if (currentValue === "(-") {
            // If display area contains only "(-", reset to empty
            textArea.value = "";
            lastClickedType = null;
            FirstClickedType = null;
        } else if (FirstClickedType !== 'plusMinus') {
            // Toggle the sign if not already toggled
            textArea.value = "(-" + currentValue;
            FirstClickedType = 'plusMinus';
            lastClickedType = 'plusMinus';
        } else if (lastClickedType !== currentValue) {
             // If display area contains only "(-111111", reset to empty
            textArea.value = "";
            lastClickedType = null;
            FirstClickedType = null;
        }
    
    });
});

// Add event listener to equals button to calculate result
document.getElementById("equals").addEventListener('click', function() {
    var textArea = document.getElementById("displayText");
    var expression = textArea.value.trim();
    
    // Replace '%' with '/100' for percentage calculation
    expression = expression.replace(/%/g, '/100');
    
    try {
        var result = eval(expression); // Evaluate the corrected expression to calculate the result
        textArea.value = expression + " = " + result; // Display the corrected equation and result in the textarea
    } catch (error) {
        textArea.value = ""; // Display an error message if the expression is invalid
    }
});

// Add event listener to the refresh button
document.getElementById("refreshButton").addEventListener('click', function() {
    // Reload the page
    location.reload();
});





