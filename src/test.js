function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function foo() {
    return add(1, 2);
}

function bar() {
    return subtract(2, 1);
}

var listener = function (event) {
    
}
function main() {
    listener({
        "event": "event"
    });
    return multiply(foo(), bar());
}

main();