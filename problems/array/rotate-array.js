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

/**
 * Array rotation using block swap algoithm.
 * @param {Array} arr Source array.
 * @param {number} d Number of element thar is need to be rotate.
 * @returns {Array} Returns New Array
 * @author Aviansh Kumar
 */
function RotateArray_method_three(arr, d){
    let tempArray = new Array(arr);
    let A = tempArray.slice(0,d);
    let B = tempArray.slice(d, tempArray.length);
    
    while(A.length != B.length){
        if(A.length < B.length){
            let Bl = B.slice(0, A.length);
            let Br = B.slice(A.length, B.length);
        }
    }
}

export { RotateArray_method_one, RotateArray_method_two};