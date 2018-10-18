// factorial
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

function factorial2(num) {
    let result = 1;

    for (let i = num; i > 0; i-- ) {
        result *= i;
    }

    return result;
}

// console.log(factorial(10));
// console.log(factorial2(10));


// collectOddValues
function collectOddValues(arr) {

    let result = [];

    function helper(arr) {
        if(arr.length === 0) return;

        if(arr[0] % 2 !== 0) {
            result.push(arr[0])
        }

        helper(arr.slice(1));
    }
    helper(arr);

    return result;

}


function collectOddValues2(arr) {
    let res = arr.filter(e => e % 2 !== 0 );
    return res;
}
// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


function linearSearch(arr, value) {

    for (let i = 1; i < arr.length; i++ ) {
        if( arr[i] === value ) return i;
    }
    return -1;

}
// console.log(linearSearch([10, 20, 30, 40, 50], 30));



function binarySearch(arr, el) {
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end) / 2);

    while (arr[middle] !== el && start <= end) {
        if( el < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    // if( arr[middle] === el) {
    //     return middle;
    // }
    // return -1;

    return ( arr[middle] === el ) ? middle : -1;

}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 6));



function naiveSearch(string, el) {
    let count = 0;
    // string = string.replace(/ /g, '');
    for ( let i = 0; i < string.length; i++ ) {
        for ( let j = 0; j < el.length; j++ ) {
            console.log(el[j], string[i + j]);
            if(el[j] !== string[i + j]) {
                // console.log('BREAK');
                break;
            }
            if(j === el.length - 1) {
                // console.log('found');
                count++;
            }

        }
    }
    return count;
}
// console.log(naiveSearch('testsdsd', 'te'));


let arr = [1,28,334,0];
// console.log(arr);
// let newArr = arr.sort(() => Math.random() - 0.5 );
// console.log(newArr);


function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log(arr);
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[ j + 1 ];
                arr[ j+ 1 ] = temp;
                noSwaps = false;

            }
        }
        if(noSwaps) break;
    }
    return arr;
}
// console.log(bubbleSort(arr));





function selectionSort(arr) {

    for(let i = 0; i < arr.length; i++ ) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if( arr[j] < arr[min] ) {
                min = j;
            }
        }
        if( i !== min ) {
            console.log(i, min);
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
// console.log(selectionSort([10,5,1,3]));




