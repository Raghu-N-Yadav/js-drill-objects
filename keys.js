function keys(object){
    let keysArray = [];
    for(let key in object){
        keysArray.push(key);
    }
    return keysArray;
}

module.exports = keys;