const mapObject = require("../mapObject");

const cb = arg =>{
    if(typeof arg === 'string'){
        return (arg+' '+ 'hello');
    }else {
        return arg*arg;
    }
}

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
}


const expectedOutput = {
    name: 'Bruce Wayne hello',
    age: 1296,
    location: 'Gotham hello'}

const functionOutput = mapObject(testObject,cb);

//testing
if(JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)) {
    console.log('Code is working fine');
} else {
    console.log('There is some issue');
}