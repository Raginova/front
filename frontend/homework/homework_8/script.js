'use strict'

function makeFibonaccifunction() {
    let x = 0;
    let y = 0;
    let result = 0;
    
    return function() {
        if (x===0) {
            x += 1;
            result = x;
            x = result;
        } else if (x===1) {
            result = x + y;
            y = x
            x = result;
        } else if (y===0) {
            y += 1;
            y = x;
            x = result;
        } else {
            result = x + y;
            y = x
            x = result;
        }
            
        console.log (result);
    }

}

const fibonacci = makeFibonaccifunction();

fibonacci(); 
fibonacci(); 
fibonacci();
fibonacci();
fibonacci();
