//1-import js file to test
import {checkUrl} from '../src/client/js/checkUrl'


//2-define input
//3-define output
//4-check if function produce expected output

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the checkUrl functionality", () => {
    test("Testing the checkUrl() function", () => {
           expect(checkUrl).toBeDefined();
})});