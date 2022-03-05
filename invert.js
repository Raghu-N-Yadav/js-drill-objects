function invert(object){
    let copyObject = {};
    for(let property in object){
        copyObject[object[property]] = property;
    }
    return copyObject;
}

module.exports = invert;