"use strict";
//test1.ts
Object.defineProperty(exports, "__esModule", { value: true });
var elephant_1 = require("../../types/animals/elephant");
var girrafe_1 = require("../../types/animals/girrafe");
var monkey_1 = require("../../types/animals/monkey");
var Test1 = [
    { apple: 15, strawberry: 20, banana: 6, orange: 10 },
    { apple: 15, strawberry: 20, banana: 6, orange: 10 },
    { apple: 15, strawberry: 20, banana: 6, orange: 10 },
];
var elephantTest1 = new elephant_1.Elephant("Elephant", 1);
var giraffeTest1 = new girrafe_1.Giraffe("Giraffe", 1);
var monkeyTest1 = new monkey_1.Monkey("Monkey", 1);
var elephantFeedings = elephantTest1.eat(Test1);
var giraffeFeedings = giraffeTest1.eat(Test1);
var monkeyFeedings = monkeyTest1.eat(Test1);
console.log("\uCF54\uB07C\uB9AC(".concat(elephantTest1.quantity, "\uB9C8\uB9AC)\uB294 ").concat(elephantFeedings, "\uBC88 \uBA39\uC5B4\uC57C \uD569\uB2C8\uB2E4."));
console.log("\uAE30\uB9B0(".concat(giraffeTest1.quantity, "\uB9C8\uB9AC)\uB294 ").concat(giraffeFeedings, "\uBC88 \uBA39\uC5B4\uC57C \uD569\uB2C8\uB2E4."));
console.log("\uC6D0\uC22D\uC774(".concat(monkeyTest1.quantity, "\uB9C8\uB9AC)\uB294 ").concat(monkeyFeedings, "\uBC88 \uBA39\uC5B4\uC57C \uD569\uB2C8\uB2E4."));
