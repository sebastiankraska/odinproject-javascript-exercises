const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) { 
        return 'ERROR'; // error for non-integer input
    };
    if (first < 0 || second < 0) {
        return 'ERROR'; // error for negative input
    };
    // making it work for larger number first (sumAll(123, 1)):
    const lower = Math.min(first, second);
    const higher = Math.max(first, second);

    let result = 0;
    for (let i = lower; i <= higher; i++) {
        result += i;
    };
    return result;
};

// Do not edit below this line
module.exports = sumAll;
