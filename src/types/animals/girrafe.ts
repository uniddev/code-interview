// girrafe.ts

import { Animal } from "../animal";
import { Fruit } from "../fruits";

export class Giraffe implements Animal {
    name: string;
    quantity: number;
  
    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }
  
    eat(fruits: Fruit[]): number {
      let totalFruits = 0;
      const uniqueFruits = Object.keys(fruits[0]).length - 1; 
      
      
      for (const fruit of fruits) {
        const fruitsArray = Object.values(fruit);
        fruitsArray.pop(); 
        const maxFruits = Math.max(...fruitsArray);
        totalFruits += maxFruits;
      }
      
      return Math.ceil(totalFruits / uniqueFruits);
    }
}
