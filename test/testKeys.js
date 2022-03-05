const keys = require("../keys");

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
}

const expectedOutput = ['name', 'age', 'location'];

//calling function
const functionOutput = keys(testObject);

//testing
if(JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)){
    console.log('Code is running');
}else {
    console.log('There is some issue');   
}