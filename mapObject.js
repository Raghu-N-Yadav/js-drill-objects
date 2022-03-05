function mapObject(object,callback) {
    for(let value in object){
        object[value] = callback(object[value])
    }
    return object;
}

module.exports = mapObject;