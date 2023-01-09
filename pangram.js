const isPangram = (string) =>
  new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); //true
console.log(isPangram("The Quick Brown Fox Jumps over the lazy dog")); //true
console.log(isPangram("I like cats, but not mice"));

  //Time Complexity: O(1) 
  //Space Complexity: O(n)