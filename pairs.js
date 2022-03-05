function pairs(object) {
    let pairsArray = [];
    for(let property in object){
        let testArray = [];
        testArray.push(property);
        testArray.push(object[property]);
        pairsArray.push(testArray);
    }
    return pairsArray;
}
module.exports = pairs;