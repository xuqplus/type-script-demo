import {sayHello} from "./greet";

function showHello(divId: string, name: string) {
    var element = document.getElementById(divId);
    element.innerHTML = sayHello(name);
}

showHello('id', '许小群');