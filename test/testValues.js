const values = require("../values");

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham',
    add : (a,b) => {
        return a + b;
    }
}

const expectedOutput = ['Bruce Wayne', 36, 'Gotham'];

const functionOutput = values(testObject);

//testing
if(JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)){
    console.log('Code is running');
} else {
    console.log('There is some issue');
}