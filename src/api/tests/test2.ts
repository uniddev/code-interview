//test2.ts

import { Elephant } from "../../types/animals/elephant";
import { Giraffe } from "../../types/animals/girrafe";
import { Monkey } from "../../types/animals/monkey";
import { Fruit } from "../../types/fruits";

const boxes2: Fruit[] = [
    { apple: 26, strawberry: 27, banana: 61, orange: 138 },
    { apple: 26, strawberry: 27, banana: 61, orange: 138 },
    { apple: 26, strawberry: 27, banana: 61, orange: 138 },
];

const elephantTest2 = new Elephant("Elephant", 1);
const giraffeTest2 = new Giraffe("Giraffe", 2);
const monkeyTest2 = new Monkey("Monkey", 3);

const elephantFeedings2 = elephantTest2.eat(boxes2);
const giraffeFeedings2 = giraffeTest2.eat(boxes2);
const monkeyFeedings2 = monkeyTest2.eat(boxes2);

console.log(`코끼리(${elephantTest2.quantity}마리)는 ${Math.ceil(elephantFeedings2 / elephantTest2.quantity)}씩 먹어야 합니다.`);
console.log(`기린(${giraffeTest2.quantity}마리)는 ${Math.ceil(giraffeFeedings2 / giraffeTest2.quantity)}씩 먹어야 합니다.`);
console.log(`원숭이(${monkeyTest2.quantity}마리)는 ${Math.ceil(monkeyFeedings2 / monkeyTest2.quantity)}씩 먹어야 합니다.`);
