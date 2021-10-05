/*
Zane ThummBorst
I pledge my honor that I have abided by the Stevens Honor System.
*/
const people = require("./people");
const stocks = require("./stocks");

async function main(){
    try{
        const peopledata = await people.getPersonById('person');
       // const peopledata = await people.getPeople();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameStreet('streetway','streetway');
       // const peopledata = await people.getPeople();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
       const peopledata = await people.manipulateSsn();
       // const peopledata = await people.getPeople();
       console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameBirthday('number','day');
       // const peopledata = await people.getPeople();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const stocksdata = await stocks.listShareholders('');
       // const peopledata = await people.getPeople();
    console.log (stocksdata);
    }catch(e){
        console.log (e);
    }
    try{
        const stocksdata = await stocks.topShareholder('the share');
       // const peopledata = await people.getPeople();
       console.log (stocksdata);
    }catch(e){
        console.log (e);
    }

    try{
        const stocksdata = await stocks.listStocks('stocks','person');
       // const peopledata = await people.getPeople();
        console.log (stocksdata);
    }catch(e){
        console.log (e);
    }
    try{
        const stocksdata = await stocks.getStockById('id');
       // const peopledata = await people.getPeople();
        console.log (stocksdata);
    }catch(e){
        console.log (e);
    }
}
//call main
main();