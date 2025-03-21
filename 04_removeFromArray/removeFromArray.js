const removeFromArray = function(array, ...valuesToRemove) {
    const result = array.filter(item => !valuesToRemove.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;