// Select DOM elements
const input = document.getElementById('pass');
const enciption = document.querySelector('.encription');
const submitBtn = document.querySelector('.submit');
const genrateBtn = document.querySelector('.gen');

// Function to handle password display
function PasswordEncription() {
    input.addEventListener('keypress', (e) => {
        enciption.style.display = 'block';
    });
}

PasswordEncription();

// Function to generate a random password
function GeneratePassword(passLen = 13, includeSymbols = true, includeNumbers = true) {
    let AlahbelList = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    let NumberList = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    let SymbolList = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '/', '?', '|', '{', '}', '[', ']', '`', '~'
    ];

    let passList = [];

    // Ensure at least one character from each selected category
    passList.push(AlahbelList[Math.floor(Math.random() * AlahbelList.length)]);

    if (includeNumbers) {
        passList.push(NumberList[Math.floor(Math.random() * NumberList.length)]);
    }

    if (includeSymbols) {
        passList.push(SymbolList[Math.floor(Math.random() * SymbolList.length)]);
    }

    // Fill the rest of the password length
    for (let i = passList.length; i < passLen; i++) {
        let choice;

        if (includeNumbers && includeSymbols) {
            choice = Math.floor(Math.random() * 3); // 0: Letter, 1: Number, 2: Symbol
        } else if (includeNumbers) {
            choice = Math.floor(Math.random() * 2); // 0: Letter, 1: Number
        } else if (includeSymbols) {
            choice = Math.floor(Math.random() * 2) * 2; // 0: Letter, 2: Symbol
        } else {
            choice = 0; // Only letters
        }

        switch (choice) {
            case 0: // Choose a letter
                passList.push(AlahbelList[Math.floor(Math.random() * AlahbelList.length)]);
                break;
            case 1: // Choose a number
                passList.push(NumberList[Math.floor(Math.random() * NumberList.length)]);
                break;
            case 2: // Choose a symbol
                passList.push(SymbolList[Math.floor(Math.random() * SymbolList.length)]);
                break;
        }
    }

    // Shuffle the array to ensure random distribution of characters
    passList = passList.sort(() => Math.random() - 0.5);

    // Combine passList into a string
    let password = passList.join(''); 

    return password;
}

// Event listener for the generate button
genrateBtn.addEventListener('click', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Generate a new password
    let val = GeneratePassword(13, true, true); // Call the function with desired parameters

    // Set the generated password as the input value
    input.value = val;
    
    // Show the encryption display
    enciption.style.display = 'block';

});
