//animal.ts
import { furits } from "./fruits";

interface Animal {
    name: string;
    quanity: number;
    eat: (fruits: number) => number;
}
