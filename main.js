// Task 1
// Write a JavaScript function to split a string and convert it into an array of words.Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

function newArr(str){
    return str.split(" ");
}
//console.log(newArr("Robin Singh Dell"));


// Task 2
// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function sliceStr(str, count){
    return str.slice(str[0], count);
}
//console.log(sliceStr("Robin gosens", 4));


// Task 3
// Write a JavaScript function that hides email addresses to prevent unauthorized access. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protectEmail(email) {
    if (typeof email !== 'string') {
      return "Invalid email format.";
    }
  
    const protectedEmail = email.replace(/(.{4})(.*)(@)/, (match, visiblePart, hiddenPart, atSymbol) => {
      return visiblePart + '...' + atSymbol;
    });
  
    return protectedEmail;
  }
  
// console.log(protectEmail("robin_singh@example.com"));
  
  



// Task 4
// Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeatStr(val, count){
    if (typeof val !== 'string' || typeof count !== 'number' || count < 0) {
        return "Error in string or count.";
      }

    return val.repeat(count);
}
// console.log(repeatStr("b",3));


// Task 5
// Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

function findWord(str, value){
    let newArr = str.split(" ");
    let count = 0;
    for (const item of newArr) {
        if (item === value) {
            count++;
        }
    }

    console.log(`'${value}' was found ${count} times.`);
}
// findWord("The quick brown to fox to", "to")