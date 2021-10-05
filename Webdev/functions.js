function myNameFunc (){
    return "hi";
}

console.log(myNameFunc());

function printMessage (message) {
    return message;
}

console.log(printMessage('hi'));

let doubleUp = function (x){
    return x*x;
}

console.log(doubleUp(5));

let doubleupArrow = (x) => {
    return x*x;
}
console.log(doubleupArrow(5));

let addToTheNumber = (num)=>{
    let numToAdd = num;

    return (addThisMuch) =>{
        return numToAdd + addThisMuch;
    };
};

let addToTwelve = addToTheNumber(12);
console.log(addToTwelve);
console.log(addToTwelve(0));

function haveInnerFunction() {
    function myInnerFunction() {
        return "hello! I'm the inner function";
    }
    if(true){
        myInnerFunction();
    }
}

haveInnerFunction();
//myInnerFunction();
