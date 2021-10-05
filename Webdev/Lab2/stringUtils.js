//I pledge my honor that I have abided by the Stevens Honor System.
let errCheck = (string) =>{
    if(string === undefined){  throw "No value entered"; }
    if(typeof string != "string"){ throw "Must be String value";}
    if(string.length == 0){ throw "String must have values inside";}
    let blank = true;
    for (let i = 0; i < string.length; i++){
        if(string[i] != ' '){
            blank = false;
        }
    }
    if(blank){
        throw "String must be more than just empty spaces"
    }
}

let errCheck2 = (string) =>{
    if(string === undefined){  throw "No value entered"; }
    if(typeof string != "string"){ throw "Must be String value";}
    //if(string.length == 0){ throw "String must have values inside";}
    let blank = true;
    for (let i = 0; i < string.length; i++){
        if(string[i] != ' '){
            blank = false;
        }
    }
    if(blank){
        throw "String must be more than just empty spaces"
    }
}

//check
const sortString = (string) =>{
    errCheck(string);

    let numString = '';
    let normString = '';
    let blankString = '';
    let specialString = '';

    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i < string.length; i++){
        if(!isNaN(string[i]) && string[i] != ' '){
            numString += string[i];
        }else if (typeof string[i] == "string"  && alpha.indexOf(string[i].toLowerCase()) != -1 && string[i] != ' '){
            normString += string[i];
        }else if (string[i] == ' '){
            blankString += ' ';
        }else{
            specialString += string[i];
        }
    }
    let num =  numString.split('').sort().join('');
    let norm =  normString.split('').sort().join('');
    let special =  specialString.split('').sort().join('');
    let final = norm + special + num + blankString;
    return final;
}
//https://www.techiedelight.com/replace-character-specified-index-javascript/
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}


let indexCheck = (string, idx) =>{
    if(typeof idx != 'number'){
        throw "index must be a number";
    }
    if(idx < 0 || idx >= string.length){
        throw "Invalid index";
    }
    if(idx == 0 || idx > string.length -2){
        throw "index must be greater than zero and less than the length of the string -2";
    }

}
//check
const replaceChar = (string, idx) => {
    errCheck(string);
    indexCheck(string, idx);
    //let c = string[idx];
    let bef = string[idx-1];
    let aft = string[idx+1];
    let turn = true;

    for(let i = 0; i < string.length; i++){
        if(i != idx && string[i] == string[idx]){
            if(turn){
                string = string.replaceAt(i, bef);
                turn = false;
            }else{
                string = string.replaceAt(i, aft);
                turn = true;
            }
        }
    }
    return string;
    
}
// can a string just be empty space?
//fix around errors
const mashUp = (string1, string2, char) =>{
    errCheck2(string1);
    errCheck2(string2)
    errCheck(char);
    if(char.length > 1){ throw "char cannot be greater than 1";}
    let l1 = string1.length;
    let l2 = string2.length;
    //let bool = true;
    let s = '';

    //looking back, I don't think the != is necessary but it works and I'm checking everything else.
    while(l1 != l2 && l1 > l2){
        string2 += char;
        l2++;
    }
    while(l1 != l2 && l1 < l2){
        string1 += char;
        l1++;
    }

    for(let i = 0; i < l1; i++){
        s += string1[i] + string2[i];
    }
    return s;
}

module.exports = {
    sortString,
    replaceChar,
    mashUp
}