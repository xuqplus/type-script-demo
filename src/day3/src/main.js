"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divId, name) {
    var element = document.getElementById(divId);
    element.innerHTML = greet_1.sayHello(name);
}
showHello('id', '许小群');
