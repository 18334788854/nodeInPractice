// const {file, parse} = require("./global");
import _ from "lodash";
// import "./style.css";
// import Psu from "./psu.jpg";
// import Data from "./data.xml";
import printMe from "./print";

function component() {
    // "use strict";
    var element = document.createElement("div");
    var btn = document.createElement("button");
    element.innerHTML = _.join(["Hello", "Webpack12345"], " ");
    btn.innerHTML = `Click me and check the console!`;
    btn.onclick = printMe;
    element.appendChild(btn);
    // this.alert("123!");
    // console.log(file);
    // parse();
    // element.classList.add("hello");
    // var myImage = new Image();
    // myImage.src=Psu;
    // element.appendChild(myImage);
    // console.log(Data);
    return element;
}

let element = component();
document.body.appendChild(element);
console.log(module.hot);

if (module.hot) {
    console.log(module.hot.status());
    module.hot.accept("./print.js", function () {
        // "use strict";
        console.log(module.hot.status());
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
//         console.log(json)
//     })
//     .catch(error => console.error('Something went wrong when fetching this data: ', error))
// function getComponent(){
//     "use strict";
//     return import(/* webpackChunkName:'lodash'*/"lodash").then(function(_){
//         var element = document.createElement("div");
//         element.innerHTML=_.join(["Hello","Webpack12345"]," ");
//         return element;
//     })
// }
//
// getComponent().then(function(component){
//     "use strict";
//     document.body.appendChild(component);
// });
