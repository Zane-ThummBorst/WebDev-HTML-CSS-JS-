let myStringArray = ["Hello", "world", "my", "name", "is", "Zane"];
let myNumArray = [1,2,3,4];

let mixedArray = [
    1,
    "hello",
    true
    {a: 1, b: 2 },
    (message) => {
        return message;
    }
];
console.log(mixedArray[4]('Hi there'));