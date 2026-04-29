// 1. Variable declarations and data types
const inputField = document.getElementById("passcode");
const btn = document.getElementById("loginBtn");
const statusText = document.getElementById("typingStatus");
const output = document.getElementById("systemMessage");

let loginAttempts = 0; // Number data type

// 2. Keyboard Event: Shows a live indicator when the user is typing
inputField.addEventListener("keyup", function(event) {
    statusText.innerText = "System detects typing... (Last key: " + event.key + ")";
});

// 3. Button Click Event
btn.addEventListener("click", function() {
    statusText.innerText = ""; // Clear the typing status when clicked
    
    let code = inputField.value.toLowerCase().trim(); // String data type
    
    // 4. if-else statement: Check for empty input
    if (code === "") {
        output.innerText = "Error: Passcode cannot be empty!";
        output.style.color = "red";
    } else {
        loginAttempts++; // Increment attempt counter
        
        // 5. switch statement: Process the specific secret codes
        switch (code) {
            case "admin":
                output.innerText = "Access Granted. Welcome back, Admin.";
                output.style.color = "green";
                break;
            case "guest":
                output.innerText = "Limited Access Granted. Welcome, Guest.";
                output.style.color = "blue";
                break;
            case "1234":
                output.innerText = "Warning: That password is too weak!";
                output.style.color = "orange";
                break;
            default:
                output.innerText = "Access Denied. Attempt #" + loginAttempts;
                output.style.color = "red";
        }
    }
});