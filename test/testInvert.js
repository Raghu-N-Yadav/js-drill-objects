const invert = require('../invert');

const testObject = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham',
}

const expectedOutput = {'Bruce Wayne' : 'name', 36 : 'age', 'Gotham' : 'location'};

const functionOutput = invert(testObject);

//tseting
if(JSON.stringify(expectedOutput) === JSON.stringify(functionOutput)){
    console.log('Code is working fine');
}else {
    console.log('There is some issue');
}