const pairs = require("../pairs");

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
}

const expectedOutput = [ [ 'name', 'Bruce Wayne' ], [ 'age', 36 ], [ 'location', 'Gotham' ] ];

const functionOutput = pairs(testObject);

//testing
if(JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)){
    console.log('Code is working fine');
} else {
    console.log('There is some issue');
}