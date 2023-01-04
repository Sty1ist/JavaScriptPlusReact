"use strict"

// function calculateVolumeAndArea(num) {

//     if (Number.isInteger(num) && num >= 0) {
//         let vol = num * num * num;
//         let S = num * num * 6;
    
//         return `Объем куба: ${vol}, площадь всей поверхности: ${S}`
//     } else {
//         return 'При вычислении произошла ошибка'
//     }

// }

// calculateVolumeAndArea(12);

// Место для второй задачи
// function getCoupeNumber(num) {

//     if (Number.isInteger(num) && (num > 0 && num <= 36)) {

//         if( num <= 4) {
//             return 1;
//         } else if (num <= 8) {
//             return 2;
//         } else if (num <= 12) {
//             return 3;
//         } else if (num <= 16) {
//             return 4;
//         } else if (num <= 20) {
//             return 5;
//         } else if (num <= 24) {
//             return 6;
//         } else if (num <= 28) {
//             return 7;
//         } else if (num <= 32) {
//             return 8;
//         } else if (num <= 36) {
//             return 9;
//         }
//     } else if (Number.isInteger(num) && (num === 0 || num > 36)){
//         return "Таких мест в вагоне не существует";
//     } else {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

// }

// getCoupeNumber('Hello');

// Место для первой задачи
function getTimeFromMinutes(num) {

    if (Number.isInteger(num) && (num > 0 && num <= 36)) {
        console.log(num / 60 );
    } else {
        return  "Ошибка, проверьте данные";
    }
}

getTimeFromMinutes(2);
