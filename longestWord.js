function longestWord(arr) {
    let word = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > word) {
            word = arr[i].length
            
        }
    }
    return word

}
console.log(longestWord(["hi", 'hello', 'babushka']))

 //Time Complexity: O(n)
 //Space Complexity: O(1)