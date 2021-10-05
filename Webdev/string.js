const constString = "I'm a constant string, I cannot be changed, I'm free as a bird";
console.log(constString);

// constString = "THis is not allowed";

//console.log(constString);

let letstring = "I'm a string defined with let";

console.log(letstring);
letstring = "I've been changed";

console.log(letstring);

let blankSpaceString ='       ';
console.log(blankSpaceString.length);

console.log(blankSpaceString.trim().length);

console.log(letstring.toLowerCase());

console.log(letstring.indexOf('n'));

let myConcatString = letstring + letstring;
console.log(myConcatString);

let concat2 = `I'm letString ${letstring}, and I'm also letstring ${letstring}`;
console.log(concat2);

let string1 = "hello there, how are you? My name is Zane ThummBorst.";

console.log (string1.split("?"));

