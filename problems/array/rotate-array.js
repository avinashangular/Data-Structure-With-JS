import { Array } from '../../src/array.js';

function RotateArray(arr, d){
    let arry = new Array(arr);
    
    let temp = new Array();
    for(let i = d; i < arry.length(); i++){        
        temp.push(arry.getElementByIndex(i));
    }
    for(let i = 0; i < d; i++){        
        temp.push(arry.getElementByIndex(i));
    }

    return temp;
}

let result = RotateArray([10,20,30,40,50],2);
console.log(result);

export { RotateArray };