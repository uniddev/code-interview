// animal.d.ts
import { Fruit } from "./fruits";

export interface Animal {
    name: string;
    quantity: number;
    eat: (fruits: Fruit[]) => number;
}


  