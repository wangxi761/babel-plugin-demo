"use strict";

let functionCalls = new Map();
function add(x, y) {
  functionCalls.set(0, (functionCalls.get(0) || 0) + 1);
  console.log("method:" + 0);
  return x + y;
}
function subtract(x, y) {
  functionCalls.set(1, (functionCalls.get(1) || 0) + 1);
  console.log("method:" + 1);
  return x - y;
}
function multiply(x, y) {
  functionCalls.set(2, (functionCalls.get(2) || 0) + 1);
  console.log("method:" + 2);
  return x * y;
}
function foo() {
  functionCalls.set(3, (functionCalls.get(3) || 0) + 1);
  console.log("method:" + 3);
  return add(1, 2);
}
function bar() {
  functionCalls.set(4, (functionCalls.get(4) || 0) + 1);
  console.log("method:" + 4);
  return subtract(2, 1);
}
var listener = function listener(event) {
  functionCalls.set(5, (functionCalls.get(5) || 0) + 1);
  console.log("method:" + 5);
};
function main() {
  functionCalls.set(6, (functionCalls.get(6) || 0) + 1);
  console.log("method:" + 6);
  listener({
    "event": "event"
  });
  return multiply(foo(), bar());
}
main();