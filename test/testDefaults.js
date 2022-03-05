const defaults = require("../defaults");

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham',
    villain : undefined
}

const defaultObject = {
    name: 'Bruce',
    age: 36,
    location: 'Gotham',
    superHero : 'Batman',
    villain : 'Joker'
}

const expectedOutput = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham',
    villain : 'Joker',
    superHero : 'Batman'
}

const functionOutput = defaults(testObject, defaultObject);

//testing
function testing(expectedOutput, functionOutput){
    for(let property in expectedOutput){
        if(functionOutput[property] === undefined){
            return ('There is some issue');
        }
    }
    return ('Code is working fine');
}

console.log(testing(expectedOutput, functionOutput));