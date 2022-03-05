function values(object) {
    let valueArray = [];
    for(let value in object) {
        if(typeof object[value] !== 'function'){
            valueArray.push(object[value]);
        }
    }
    return valueArray;
}

module.exports = values;