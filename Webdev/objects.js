let myObj = {
    hello: "world",
    num: 1,
    bool: true,
    myFn: (message) => {
        return message;
    }
}
console.log(myObj);

myObj ["new-key1"] = "I've been added";

console.log(myObj);

myObj.directlyAddedKey = "I was added dynamic";

console.log(myObj);

let newKey = "I-am-a-new-key";

myObj[newKey] = "Test";

console.log(myObj);

myObj[7] = "I am a key that is a number, but I'm actually a string";

console.log(myObj);

console.log(myObj['hello']);

//for lab1 do not do obj. *number* (will not work!)

let myObj2 = {a: 1, b: 2, c: 3};
let myObj3 = {b: 2, c: 3, a: 1};

if (myObj2 === myObj3){
console.log("EQUAL")
} else{
    console.log("NEGATIVE");
}

//the order of the keys of an object DO NOT MATTER