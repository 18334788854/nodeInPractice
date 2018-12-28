function myCoolFunction() {
    if (arguments.length == 2 && Array.isArray(arguments[1])) {
        var f1 = arguments[0];
        var arr1 = arguments[1];
        f1(arr1);
        // console.log("1");
    } else {
        // console.log("2");
        var f2 = arguments[0];
        var arr2 = Array.prototype.slice.call(arguments, 1, arguments.length);
        f2(arr2);
    }
}

myCoolFunction(function (x) {
    console.log(x)
}, [1, 2, 3, 4]);
myCoolFunction(function (x) {
    console.log(x)
}, 1, 2, 3, 4);