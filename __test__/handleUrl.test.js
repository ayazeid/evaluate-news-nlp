//tofix  ReferenceError: regeneratorRuntime is not defined
import '@babel/polyfill'

//1-import js file to test
import {handleURL} from '../src/client/js/handleURL.js'

//2-define input
//3-define output
//4-check if function produce expected output


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the URL functionality", () => {
        test("Testing the handleUrl() function", () => {
           expect(handleURL).toBeDefined();
})});