function defaults(object, defautProps) {
    for(let property in defautProps){
        if(object[property] === undefined){
            object[property] = defautProps[property];
        }
    }
    return object;
}

module.exports = defaults;