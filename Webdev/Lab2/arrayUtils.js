//I pledge my honor that I have abided by the Stevens Honor System.
let errCheck = (array) =>{
    if(array === undefined){  throw "No value entered"; }
    if(!Array.isArray(array)){ throw "Must be an Array value";}
    if(array.length == 0){ throw "Array must have values inside";}
    for (let i = 0; i < array.length; i++){
        if(typeof array[i] != 'number') { throw "array values must be numbers"}
    }
}
//https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
function compareNumbers(a, b){
    return a - b;
}

//numArray.sort(compareNumbers);

// check
const average = (arr) =>{
    if(arr === undefined){  throw "No value entered"; }
    if(!Array.isArray(arr)){ throw "Must be an Array value";}
    if(arr.length == 0){ throw "Array must have values inside";}

    let t = 0;
    let d = 0
    for (let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){ throw "Must be an Array value";}
        if(arr[i].length == 0){ throw "Array must have values inside";}
        for (let k = 0; k < arr[i].length; k++){
            if(typeof arr[i][k] != 'number') { throw "Sub array values must be numbers";}
            t += arr[i][k];
            d++;
        }
    }
    return t/d;
}

//check
const modeSquared = (array) =>{
    errCheck(array);
    let arrModes = [];
    let occur = 0;

    for(let i = 0; i < array.length; i++){
       let temp1 = array[i];
       let temp2 = 0;
        for (let k = 0; k < array.length; k++){
            if(array[i] === array[k]){
                temp2++;
            }
        }
        if(temp2 > occur && temp2 > 1){
            arrModes = [temp1];
            occur = temp2;
        } else if(temp2 == occur && temp2 > 1 && arrModes.indexOf(temp1) == -1){
            arrModes.push(temp1);
        }
    }
    let sum = 0;
    for (let i = 0;i < arrModes.length; i++){
        sum += arrModes[i]*arrModes[i];
    }
    return sum;
}

//check
const medianElement = (array) =>{
    errCheck(array);
    let array2 = [];
    for(let i = 0; i < array.length; i++){
        array2[i] = array[i];
    }
    let myobj = {};
    
    let i = 0;
    let k = array.length -1;
    if(array.length % 2 != 0){
        while(i != k){
            i++;
            k--;
        }
        let num = array[i];
        myobj[num] = array2.indexOf(num);
        return myobj;
    }else{
        while(k-i != 1){
            i++;
            k--;
        }
        if(array[i] == array[k]){
            let num = array[i];
            myobj[num] = array2.indexOf(num);
            return myobj;
        }else{
            let num = (array[i]+array[k])/2;
            if(array2.lastIndexOf(array[i]) > array2.lastIndexOf(array[k])){
                myobj[num] = array2.lastIndexOf(array[i])
            }else{
                myobj[num] = array2.lastIndexOf(array[k])
            }
            return myobj;
        }
    }
}

let errCheck2 = (array) =>{
    if(array === undefined){  throw "No value entered"; }
    if(!Array.isArray(array)){ throw "Must be an Array value";}
    if(array.length == 0){ throw "Array must have values inside";}
    for (let i = 0; i < array.length; i++){
        if(typeof array[i] != 'number' && typeof array[i] != 'string') { throw "array values must be numbers or chars"}
        if(typeof array[i] == 'string' && (array[i].length > 1 || array[i].length == 0)){ throw "array values must be numbers or chars"}
        }
    }
//check
const merge = (arrayOne, arrayTwo) =>{
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    errCheck2(arrayOne);
    errCheck2(arrayTwo);
    for (let i = 0; i < arrayOne.length; i++){
        if(typeof arrayOne[i] == "number"){
            arr1.push(arrayOne[i]);
        }else{
            //checks if letter is uppercase
            //https://www.tutorialspoint.com/how-to-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascript
            if(arrayOne[i] == arrayOne[i].toUpperCase())
                arr3.push(arrayOne[i]);
            else{
                arr2.push(arrayOne[i]);  
            }
        }
    }
    for (let i = 0; i < arrayTwo.length; i++){
        if(typeof arrayTwo[i] == "number"){
            arr1.push(arrayTwo[i]);
        }else{
            if(arrayTwo[i] == arrayTwo[i].toUpperCase())
                arr3.push(arrayTwo[i]);
             else{
                arr2.push(arrayTwo[i]);  
        }
        }
    }
    arr1.sort(compareNumbers);
    arr2.sort();
    arr3.sort();
    return arr2.concat(arr3,arr1);
}


module.exports = {
    average,
    modeSquared,
    medianElement,
    merge
}