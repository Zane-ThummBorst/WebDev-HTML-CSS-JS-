/*
Zane ThummBorst
I pledge my honor that I have abided by the Stevens Honor System.
*/
const axios = require('axios');

async function getPeople(){
    try{
        const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
        return data;
    }catch(e){
        console.log(e);
    }
  }
  
let findId = (e,id,obj) =>{
    //console.log(e['id']);
    if(e['id'] === id){
        return e;
    }else{
        return obj;
    }
}

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
async function getPersonById(id){
    errCheck(id);
    const arr = await getPeople();
    let obj = {};
    arr.forEach(element => obj = findId(element,id,obj));
    if(Object.keys(obj) == 0){
        throw "person not found";
    }
    return obj;
 }

let sameStreet_helper = (arr,e,n,s) =>{
    let home = e['address']['home']['street_name'];
    let work = e['address']['work']['street_name'];
    let homes = e['address']['home']['street_suffix'];
    let works = e['address']['work']['street_suffix'];
    //console.log(works);
    if((home.toLowerCase() == n && homes.toLowerCase() == s) || (work.toLowerCase() == n && works.toLowerCase() == s)){
        arr.push(e);
    }
    return arr;
}

async function sameStreet(streetName,streetSuffix){
    errCheck(streetName);
    errCheck(streetSuffix);
    streetName = streetName.trim();
    streetSuffix = streetSuffix.trim();
    //https://flexiple.com/javascript-capitalize-first-letter/
    streetName= streetName.toLowerCase()
    streetSuffix =  streetSuffix.toLowerCase();
    const arr = await getPeople();
    let pplArr = [];
    arr.forEach(element => sameStreet_helper(pplArr,element,streetName,streetSuffix));
    if(pplArr.length >= 2 ){
        return pplArr;
    }else{
        throw "Number of people with same street must be greater than 2"
    }
}

let highLow = (e,obj,str) =>{
    let sorted = convert(str);
    if(sorted > obj['big']){
        obj['highest'] = {'firstName': e['first_name'], 'lastName': e['last_name']};
        obj['big'] = sorted;

    }else if(sorted < obj['smol']){
        //console.log(sorted);
        obj['lowest'] = {'firstName': e['first_name'], 'lastName': e['last_name']};
        obj['smol'] = sorted;
    }
    obj['average'] = obj['average'] + sorted;
    //console.log(obj['average']);
}

let convert = (str) =>{
    let str2 = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] != '-'){
            str2 += str[i];
        }
    }
    //console.log(str2);
    return parseInt(str2.split('').sort().join(''));
}

async function manipulateSsn(){
    if(arguments.length > 0){
        throw ' too many arguments friend';
    }
    const arr = await getPeople();
    let temp = convert(arr[0]['ssn']);
    let obj = {'highest': {}, 'lowest': {}, 'average': 0, 'big': temp, 'smol': temp};
    arr.forEach(element => highLow(element, obj, element['ssn']));
    obj['average'] = Math.floor(obj['average']/arr.length);

    delete obj['big'];
    delete obj['smol'];
    return obj;
}

let getBirthday = (birth,e,m,d) =>{
    let birthday = e['date_of_birth'];
    let person = e['first_name'] + ' ' + e['last_name'];
    let month = parseInt(birthday[0] + birthday[1]);
    let day = parseInt(birthday[3] + birthday[4]);
    if(month == m && day == d){
        birth.push(person);
    }
}
let errCheckBirth = (month,day) =>{
    if(typeof month === 'string'){
        month = parseInt(month);
    }

    if(typeof day === 'string'){
        day = parseInt(day);
    }
    
    if(month === undefined || day === undefined){
        throw "month and day must have values";
    }else if((typeof month !== 'number' || isNaN(month)) || (typeof day !== 'number' || isNaN(day))){
        throw "month and day must be of type numbers";
    }else if(typeof day !== 'number' || isNaN(day)){

    }else if( month < 1 || month > 12){
        throw "must be a real month 1-12";
    }else if(day < 1 || day > 31){
        throw "day must be a valid input";
    }
    if(month == 2 && day > 28){
        throw "the month of February has 28 days no more";
}else if((month == 4 || month == 6 || month == 9 || month == 11) && day > 30){
        throw "April, June, September, and Novmeber have 30 days no more";
    }
}
async function sameBirthday(month, day){
    errCheckBirth(month,day);
    const arr = await getPeople();
    let birth = [];
    arr.forEach(element => getBirthday(birth,element,month,day));
    if(birth.length == 0){
        throw "Nobody in the entire world is born on this date."
    }
    return birth;
}
module.exports ={
    getPeople,
    getPersonById,
    sameStreet,
    manipulateSsn,
    sameBirthday
}