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

  async function getStocks(){
    try{
        const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
        return data;
    }catch(e){
        console.log(e);
    }
  }



 let holders_helper1 =  (e,p)=> {
    let arr = e['shareholders'];
    let objArr = [];
    for(let i = 0; i < arr.length; i++){
        let newId = arr[i]['userId'];
        //console.log(newId);
        objArr.push({'first_name': p[newId][0], 'last_name': p[newId][1], 'number_of_shares': arr[i]["number_of_shares"]})
    }
    e['shareholders'] = objArr;
}

async function listShareholders(){
    if(arguments.length > 0){
        throw "no arguements needed";
    }
    const people = await getPeople();
    const stocks = await getStocks();
    let obj = {};
    people.forEach(element => obj[element['id']] =[element['first_name'], element['last_name']]);

    stocks.forEach(element =>holders_helper1(element,obj));
    return stocks;
}

    let findTop = (e,obj,stockName) =>{
            let arr = e['shareholders'];
            let appearance = 0;
            if(arr.length == 0){
                return stockName + " currently has no shareholders.";
            }
            let topId = "";
            let numberShares = 0;
            for(let i = 0; i < arr.length; i++){
                if(appearance > 0 && topId == arr[i]['userId']){
                    numberShares += arr[i]['number_of_shares'];
                    appearance++;
                }
                else if(arr[i]['number_of_shares'] > numberShares){
                    topId = arr[i]['userId'];
                    numberShares = arr[i]['number_of_shares'];
                    appearance = 1;
                }else{
                
                }
            }

            let fullName = obj[topId][0] + ' ' + obj[topId][1];
            //console.log(numberShares);
            return "With " + numberShares + " shares in " + stockName + ', ' + fullName +" is the top shareholder."
}
let errCheckShare = (string) =>{
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
async function topShareholder(stockName){
    const people = await getPeople();
    const stocks = await getStocks();
    errCheckShare(stockName);
    stockName = stockName.trim();
    let obj = {};
    people.forEach(element => obj[element['id']] =[element['first_name'], element['last_name']]);

    for (let i = 0; i < stocks.length; i++){
        if(stockName == stocks[i]['stock_name']){
            return findTop(stocks[i], obj,stockName);
        }
    }
    throw "No stock with that name";
}
let findStocks = (e,obj,first,last,shares) =>{
    let id = obj[[first,last]];
    if(id === undefined){
        throw "This Person does not exist";
    }
    let arr = e['shareholders'];
    for (let i = 0; i < arr.length; i++){
        if(arr[i]['userId'] == id){
           shares.push({'stock_name': e['stock_name'], 'number_of_shares': arr[i]['number_of_shares'] });
        }
    }
}
async function listStocks(firstName, lastName){
    const people = await getPeople();
    const stocks = await getStocks();
    errCheckShare(firstName);
    errCheckShare(lastName);
    let obj = {};
    people.forEach(element => obj[[element['first_name'], element['last_name']]] = element['id']);

    let shares = [];
    stocks.forEach(element => findStocks(element,obj,firstName,lastName,shares));
    if(shares.length == 0){
        throw "This person has no shares."
    }
    return shares;
}

let idCompare = (e,id) =>{
    if(e['id'] == id){
        return true;
    }
}
async function getStockById(id){
    errCheckShare(id);
    const stocks = await getStocks();
    for(let i = 0; i < stocks.length; i++){
        if(idCompare(stocks[i], id)){
            return stocks[i];
        }
    }
    return "stock not found";
}
module.exports  ={
    listShareholders,
    topShareholder,
    listStocks,
    getStockById

}