const reverseString = function(str) {
    let letters = str.split("")
    const len = str.length
    let reversed = ''

    for (let i=0; i<len; i++) {
        reversed += letters.pop();
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
