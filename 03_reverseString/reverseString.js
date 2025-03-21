const reverseString = function(string) {
    let reverseString = '';

    // new solution:
    for (const char of string) {
        reverseString = char + reverseString;
    }
    
    // looping through the string from the end (!) to the beginning:
    // for (let i = string.length - 1; i >= 0; i--) {
    //     reverseString += string[i];
    // };

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
