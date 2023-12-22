//test1.ts

import { Elephant } from "../../types/animals/elephant";
import { Giraffe } from "../../types/animals/girrafe";
import { Monkey } from "../../types/animals/monkey";
import { Fruit } from "../../types/fruits";

const Test1: Fruit[] = [
    { apple: 15, strawberry: 20, banana: 6, orange: 10 },
  ];
  
  const elephantTest1 = new Elephant("Elephant", 1);
  const giraffeTest1 = new Giraffe("Giraffe", 1);
  const monkeyTest1 = new Monkey("Monkey", 1);
    
  const elephantFeedings = elephantTest1.eat(Test1);
  const giraffeFeedings = giraffeTest1.eat(Test1);
  const monkeyFeedings = monkeyTest1.eat(Test1);
  
  console.log(`코끼리(${elephantTest1.quantity}마리) ${elephantFeedings}번 먹어야 합니다.`);
  console.log(`기린(${giraffeTest1.quantity}마리) ${giraffeFeedings}번 먹어야 합니다.`);
  console.log(`원숭이(${monkeyTest1.quantity}마리)는 ${monkeyFeedings}번 먹어야 합니다.`);
  