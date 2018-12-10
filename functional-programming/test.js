

// function sum(list) {
//     "use strict";
//     var total = 0,
//         arr = list.slice();
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i]) {
//             arr[i] = 0;
//         }
//         total = total + arr[i];
//     }
//     return total;
// }
//
// var nums = [1, 3, 9, 27, , 84];
// console.log(sum(nums), nums);



// function findPropIn(propname, obj) {
//     "use strict";
//     if (obj == undefined || typeof obj != "object") {
//         return;
//     }
//     if (propname in obj) {
//         return obj[propname];
//     } else {
//         var props = Object.keys(obj);
//         for (let i = 0; i < props.length; i++) {
//             let ret = findPropIn(propname, obj[props[i]]);
//             if (ret != undefined) {
//                 return ret;
//             }
//         }
//     }
// }
// var obj1 = {
//     "a": 1,
//     "b": {
//         "c": {
//             "d": {
//                 "e": 2
//             }
//         }
//     }
// };
// console.log(findPropIn("e", obj1));

//ES6的bind如何实现闭包
// function multi(x, y) {
//     "use strict";
//         return x * y;
// }
// var multi_1=multi.bind(undefined,4);
// console.log(multi_1(5));