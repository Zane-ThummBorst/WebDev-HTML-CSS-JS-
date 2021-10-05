//I pledge my honor that I have abided by the Stevens Honor System.
let errCheck = (objects) =>{
    if(objects === undefined){  throw "No value entered"; }
    if(!Array.isArray(objects)){ throw "Must be an Array value";}
    if(objects.length == 0){ throw "Array must have values inside";}
    for(let i = 0; i < objects.length; i++){
        if(typeof objects[i] === 'object' && !Array.isArray(objects[i]) && objects[i] !== null){
            if(Object.keys(objects[i]) != 0){
                let arr = Object.keys(objects[i]);
                let obj = objects[i];
                for (let k = 0; k <arr.length; k++){
                    if(typeof obj[arr[i]] != "number"){
                        throw "all object values must be of type number";
                    }
                }
            }else{
                throw "Objects must have at least 1 value";
            }
        }else{
            throw "ALL elements must be of type object";
        }
    }

}

const computeObjects = (objects, func) =>{
    errCheck(objects);
    if(typeof func != 'function'){
        throw "not a function";
    }
    bestObj = {};
    for(let i = 0; i < objects.length; i++){
        arr = Object.keys(objects[i]);
        for(let k = 0; k < arr.length; k++){
            let key = arr[k];
            if(key in bestObj){
                bestObj[key] = bestObj[key] + func(objects[i][key]);
            }else{
            bestObj[key] =  func(objects[i][key]);
            }
        }
    }
    return bestObj;
}


let errKeys = (obj) =>{
    if(obj === undefined){ throw "must input a value";}
    if(!(typeof obj === 'object' && !Array.isArray(obj) && obj !== null)){
        throw "Values must be objects";
    }
}
const commonKeys = (obj1,obj2) =>{
    errKeys(obj1);
    errKeys(obj2);
    let bestObj = {};
    let list = Object.keys(obj1);

    for(let i = 0; i < list.length; i++){
        let key = list[i];
        if(key in obj1 && key in obj2){
            if(typeof obj1[key] == 'object' && typeof obj2[key] == 'object'){
                bestObj[key] = commonKeys(obj1[key], obj2[key]);
            }
            if(obj1[key] == obj2[key]){
                bestObj[key] = obj1[key];
            }
        }
    }
    return bestObj;

}
let objCheck = (obj) =>{
    if(obj === undefined){ throw "must input a value";}
    if(!(typeof obj === 'object' && !Array.isArray(obj) && obj !== null)){
        throw "Values must be objects";
    }
    if(!(Object.keys(obj).length >= 1)){
        throw "object must have at least 1 value"
    }
}
const flipObject = (object) =>{
    objCheck(object);
    let flip = {};
    let key = Object.keys(object);
    for(let i = 0; i < key.length; i++){
        if(Array.isArray(object[key[i]])){
            let l = object[key[i]];
            for(let k = 0; k < l.length; k++){
                if(typeof l[k] === "object"){
                    throw "cannot have a nested object in an array";
                   }
                flip[l[k]] = key[i];
            }
        }
        else if(typeof object[key[i]] == "object"){
            flip[key[i]] = flipObject(object[key[i]]);
        }else{
            flip[object[key[i]]] = key[i];
        }
    }
    return flip;
}

module.exports ={
    computeObjects,
    commonKeys,
    flipObject
}