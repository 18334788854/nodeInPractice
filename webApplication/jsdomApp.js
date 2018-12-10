let jsdom = require("jsdom");
let fs = require("fs");
let {JSDOM} = jsdom;

let dom = new JSDOM("", {url:"http://127.0.0.1:8080/"});
console.log(dom.window.document.querySelector("h1"));