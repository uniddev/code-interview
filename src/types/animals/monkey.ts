// monkey.ts
import { Animal } from "../animal";
import { Fruit } from "../fruits";

export class Monkey implements Animal {
    name: string;
    quantity: number;
  
    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
      }
    
    
    eat(fruits: Fruit[]): number {
      let totalFruits = 0;
      for (const fruit of fruits) {
        totalFruits += fruit.apple + fruit.strawberry + fruit.banana + fruit.orange;
      }
      return Math.ceil(totalFruits / 3);
    }
  }
  