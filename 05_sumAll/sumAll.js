const sumAll = function(start, end) {
    let totalSum = 0


    if (start <= end) {
        for (let begin = start; start <= end; begin++) {

            totalSum += start

        }
    } 
    /*
    else if (start >= end) {
        for (start; start >= end; start--) {

            totalSum += start

    }
    return totalSum
}*/
return totalSum
};

// Do not edit below this line
module.exports = sumAll;
