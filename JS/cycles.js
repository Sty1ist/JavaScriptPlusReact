"use strict"

let num = 20;
let x = 51;

// // while ( num < x ) {
// //     console.log(num);
// //     ++num;
// // }

// // do {
// //     console.log(num);
// //     ++num;
// // } while (num < x);

// for ( let i = 1; i < num; i++ ) {
//     if( i === 15 ) {
//         break
//     }
//     console.log(i);
// }


// let result = '';
// let length = 7;

// for( let i = 1; i < length; i++) {

//     for( let j = 0; j < i; j++) {
//         result += '*'
//     }
// 2
//     result += '\n';
// }

// console.log(result);


// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for ( let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//     }

//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }

// firstTask();


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут

//     for (let i = 0; i < data.length; i++) {
//         // console.log(data[i]);

//         if( typeof data[i] === 'number') {
//             data[i] = data[i] * 2
//         } else if( typeof data[i] === 'string') {
//             data[i] = data[i] + " - done"   
//         }
//     }
    
//     console.log(data);
    
//     // Не трогаем
//     return result;
// }
// thirdTask() 


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++ ) {
//         result.unshift(data[i]);
//     }
    
//     // Не трогаем
//     console.log(result)
//     return result;
// }

// thirdTask()


// *
// ***
// *****
// *******
// *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

// Это похоже на то, что было в одном из уроков недавно, но сложнее. Задача непростая для новичков, так что с первого раза может не получится.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу.

// Ответ с кодом этой задачи можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂


const lines = 5;
// let result = '';
// Проверяется именно переменная result, формируйте строку в ней


let result = '';
let length = 7;

for( let i = 1; i < length; i++) {
        result.length = 10;
    for( let k = 6; k > i; k--) {
        result += ' '
    }

    for( let j = 0; j < i; j++) {

        if (j === 0) {
            result += '*'
        } else {
            result += '**'
        }
    }
    result += '\n';
}

console.log(result);
