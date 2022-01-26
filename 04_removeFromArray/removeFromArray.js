const removeFromArray = function(arr, value) {
    let args = Array.from(arguments)
    let forDeletion = args.splice(1, arr.length)
  
    arr = arr.filter(item=> !forDeletion.includes(item))
    console.log(arr)

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
