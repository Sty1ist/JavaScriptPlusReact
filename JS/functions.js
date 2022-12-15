"use strict"

function getMathResult(base, repeat) {

    if( typeof repeat  === 'number' &&  repeat > 0) {

        let num = +base;
        let result = [];

        for( let i = 0; i < repeat; i++) {
            result.push(num);
            num += base
        }

        return result.join('---');

    } else {
        return base
    }

}

console.log(getMathResult(5, 3));


