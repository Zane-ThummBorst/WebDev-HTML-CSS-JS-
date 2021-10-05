//I pledge my honor that I have abided by the Stevens Honor System.

const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let myObj = {};
    if(arr === undefined){
        return myObj;
    }
    for(let i = 0; i < arr.length; i++){
        let b = true;
        let x = (arr[i]*arr[i]) - 7;
        let a = Math.abs(x);
         for(let i = 2; i < a; i++){
            if(a%i == 0){
                b = false;
                break;
            }
        }
    myObj[a] = b;
    }
    return myObj;
}

const questionTwo = function questionTwo(arr) { 
    // Implement question 2 here
    for(let i = 0; i < arr.length; i++){
        for(let k = i+1; k < arr.length; k++){
            if(arr[i] === arr[k]){
                arr.splice(k,1);
                k--;
            }
        }  
    }
    return arr;
}
    // does not work since oversight that different letters can even out(lol)
    //easier to just sort both strings and compare anyway. 

    //const questionThreeHelper = (s1,s2) => {
    //takes the ascii total of each string (if they are equal in length)
    //subtracts the two totals, if they are anagrams then their difference would be zero
    // let x = 0, y = 0;
    // if(s1.length != s2.length){
    //     return -1;
    // }
    // else{
    //     for( let i = 0; i < s1.length; i++){
    //         x += s1[i].charCodeAt(0);
    //         y += s2[i].charCodeAt(0);
    //     }
    // }
    // return x - y;


//}
const questionThree = function questionThree(arr) {
    //sort string 1 and put it into the object if not done so already.
    //traverse array to compare sorted string 1 to a different sorted string 2.
    // if they are equal, place in the array for that key (initial unsorted word is accounted for)
    let myObj = {};
    for (let i = 0; i <arr.length; i++){
        //https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function
        let sort = arr[i].split('').sort().join('');
        if(!(sort in myObj)){
            myObj[sort] = [];
            for (let k = i; k <arr.length; k++){
                let sort2 = arr[k].split('').sort().join('');
                if(sort === sort2){
                    myObj[sort].push(arr[k]);  
                }
            }
            //call this to shrink our array of repeats, then checks to see if any are one value
            myObj[sort] = questionTwo(myObj[sort]);
            if(myObj[sort].length <=1){
                delete myObj[sort];
            }
        }
    }
    return myObj;
}

let factorial = (x) =>{
    if (x!=0){
        return x * factorial(x-1);
    }else{
        return 1;
    }
}

const questionFour = function questionFour(num1, num2, num3) {
    factTotal = factorial(num1) + factorial(num2) + factorial(num3);
    average = (num1+num2+num3)/3;
    return Math.floor(factTotal/average);
    
}

module.exports = {
    firstName: "Zane", 
    lastName: "ThummBorst", 
    studentId: "10445110",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};