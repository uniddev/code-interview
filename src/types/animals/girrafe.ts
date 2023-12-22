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
    let totalEaten = 0;


    for (const fruitBox of fruits) {
      const fruitNames = Object.keys(fruitBox) as Array<keyof Fruit>;

      for (const fruitName of fruitNames) {
        let fruitCount: number = fruitBox[fruitName] as number;
        while (fruitCount > 0) {
          totalEaten++;
          if (fruitCount >= 5) {
            fruitCount -= 5;
          } else {
            fruitCount = 0;
          }
        }
      }
    }

    return totalEaten;
  }
}
