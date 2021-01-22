import { Array } from '../../src/array.js';

/**
 * Rotate Array element by using temp array;
 * @param {Array} arr Source array.
 * @param {number} d Number of element thar is need to be rotate.
 * @returns {Array} Returns New Array
 * @author Avinash Kumar
 */
function RotateArray_method_one(arr, d){
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


/**
 * Rotate Array element by using temp variable;
 * @param {Array} arr Source array.
 * @param {number} d Number of element thar is need to be rotate.
 * @returns {Array} Returns New Array
 * @author Avinash Kumar
 */
function RotateArray_method_two(arr, d){
    let arry = new Array(arr);

    for(let i = 0; i < d; i++){
        arry.push(arry.shift());
    }

    return arry;
}

let rotatedArray = RotateArray_method_two([10,20,30,40,50],2);
console.log(rotatedArray);

export { RotateArray_method_one, RotateArray_method_two};