// function hasUniqueChars(str) {
   
//    return new Set(str).size == str.length;
// }

// console.log(hasUniqueChars("Monday"));
// // -> True

// console.log(hasUniqueChars("Moonday"));
// // -> False


//Time Complexity: O(1) 
//Space Complexity: O(n)

function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars('monday'))
//time complexity: O(n^2)
//space complexity: O(n)
