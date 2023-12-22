"use strict";
//test2.ts
Object.defineProperty(exports, "__esModule", { value: true });
var elephant_1 = require("../../types/animals/elephant");
var girrafe_1 = require("../../types/animals/girrafe");
var monkey_1 = require("../../types/animals/monkey");
var boxes2 = [
    { apple: 26, strawberry: 27, banana: 61, orange: 138 },
    { apple: 26, strawberry: 27, banana: 61, orange: 138 },
    { apple: 26, strawberry: 27, banana: 61, orange: 138 },
];
var elephantTest2 = new elephant_1.Elephant("Elephant", 1);
var giraffeTest2 = new girrafe_1.Giraffe("Giraffe", 2);
var monkeyTest2 = new monkey_1.Monkey("Monkey", 3);
var elephantFeedings2 = elephantTest2.eat(boxes2);
var giraffeFeedings2 = giraffeTest2.eat(boxes2);
var monkeyFeedings2 = monkeyTest2.eat(boxes2);
console.log("\uCF54\uB07C\uB9AC(".concat(elephantTest2.quantity, "\uB9C8\uB9AC)\uB294 ").concat(Math.ceil(elephantFeedings2 / elephantTest2.quantity), "\uC529 \uBA39\uC5B4\uC57C \uD569\uB2C8\uB2E4."));
console.log("\uAE30\uB9B0(".concat(giraffeTest2.quantity, "\uB9C8\uB9AC)\uB294 ").concat(Math.ceil(giraffeFeedings2 / giraffeTest2.quantity), "\uC529 \uBA39\uC5B4\uC57C \uD569\uB2C8\uB2E4."));
console.log("\uC6D0\uC22D\uC774(".concat(monkeyTest2.quantity, "\uB9C8\uB9AC)\uB294 ").concat(Math.ceil(monkeyFeedings2 / monkeyTest2.quantity), "\uC529 \uBA39\uC5B4\uC57C \uD569\uB2C8\uB2E4."));
