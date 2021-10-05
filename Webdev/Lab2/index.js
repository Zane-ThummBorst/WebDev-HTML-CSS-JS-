//I pledge my honor that I have abided by the Stevens Honor System.

const arrayUtils= require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");


try{
    const average1 = arrayUtils.average([[1,4],[1,2,2]])
    console.log("Average passed successfully");
}catch(e){
    console.log("Average failed testcase");
}

try{
    const average2 = arrayUtils.average([[1,2,3], [4,'mambo',2]]);
    console.log("Average did not Error");
}catch(e){
    console.log("Average errored successfully");
}
////////////////////////////////////////////////////////////////////////////////////////

try{
    const mode1 = arrayUtils.modeSquared([1,2,3,3,4]);
    console.log("modeSquared passed successfully");
}catch(e){
    console.log("modeSquared failed testcase");
}

try{
    const mode2 = arrayUtils.modeSquared([1,2,3,'squared']);
    console.log("modeSquared did not Error");
}catch(e){
    console.log("modeSquared errored successfully");
}

/////////////////////////////////////////////////////////////////////////////////////////

try{
    const median1 = arrayUtils.medianElement([1,2,3,3,4]);
    console.log("medianElement passed successfully");
}catch(e){
    console.log("medianElement failed testcase");
}

try{
    const median2 = arrayUtils.medianElement([1,2,3,'squared']);
    console.log("medianElement did not Error");
}catch(e){
    console.log("medianElement errored successfully");
}

///////////////////////////////////////////////////////////////////////////////////////
try{
    const merge1 = arrayUtils.merge([1,2,3,'a','A'],[4,'B','c']);
    console.log("merge passed successfully");
}catch(e){
    console.log("merge failed testcase");
}

try{
    const merge2 = arrayUtils.merge([1,2,3,'a','A'],[4,'B','c',true]);
    console.log("merge did not Error");
}catch(e){
    console.log("merge errored successfully");
}

////////////////////////////////////////////////////////////////////////////////////////

try{
    const sort1 = stringUtils.sortString('123 FOO BAR!');
    console.log("sortString passed successfully");
}catch(e){
    console.log("sortString failed testcase");
}

try{
    const sort2 = stringUtils.sortString(24);
    console.log("sortString did not Error");
}catch(e){
    console.log("sortString errored successfully");
}


/////////////////////////////////////////////////////////////////////////////////////////////

try{
    const replace1 = stringUtils.replaceChar('Daddy', 2);
    console.log("replaceChar passed successfully");
}catch(e){
    console.log("replaceChar failed testcase");
}

try{
    const replace2 = stringUtils.replaceChar('pappa', 'pls');
    console.log("replaceChar did not Error");
}catch(e){
    console.log("replaceChar errored successfully");
}


///////////////////////////////////////////////////////////////////////////////////////////////
try{
    const mash1 = stringUtils.mashUp('Zane','ThummBorst', '#');
    console.log("mashUp passed successfully");
}catch(e){
    console.log("mashUp failed testcase");
}

try{
    const mash2 = stringUtils.mashUp('pappa', 'pls', 'FARTOOLONGFORACHARNO?');
    console.log("mashUp did not Error");
}catch(e){
    console.log("mashUp errored successfully");
}


/////////////////////////////////////////////////////////////////////////////////////////////
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
const fourth = {x: 2, y: 3, z: 2};
const fifth = {x: 'm'};
const sixth= {x: true};

try{
    const compute1 = objUtils.computeObjects([first, second], x => x * 2);
    console.log("computeObjects passed successfully");
}catch(e){
    console.log("computeObjects failed testcase");
}

try{
    const compute2 = objUtils.computeObjects([], x=> x*2);
    console.log("computeObjects did not Error");
}catch(e){
    console.log("computeObjects errored successfully");
}

/////////////////////////////////////////////////////////////////////////////////////////////

try{
    const common1 = objUtils.commonKeys(first,fourth);
    console.log("commonKeys passed successfully");
}catch(e){
    console.log("commonKeys failed testcase");
}

try{
    const common2 = objUtils.commonKeys();
    console.log("commonKeys did not Error");
}catch(e){
    console.log("commonKeys errored successfully");
}
//////////////////////////////////////////////////////////////////////////////////////////////
try{
    const flip1 = objUtils.flipObject(first);
    console.log("flipObject passed successfully");
}catch(e){
    console.log("commonKeys failed testcase");
}

try{
    const flip2 = objUtils.flipObject({});
    console.log("flipObject did not Error");
}catch(e){
    console.log("commonKeys errored successfully");
}

console.log(arrayUtils.medianElement([3,20,6,8,9]))
