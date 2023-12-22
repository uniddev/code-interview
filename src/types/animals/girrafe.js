"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Giraffe = void 0;
var Giraffe = /** @class */ (function () {
    function Giraffe(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    Giraffe.prototype.eat = function (fruits) {
        var totalEaten = 0;
        for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
            var fruitBox = fruits_1[_i];
            var fruitNames = Object.keys(fruitBox);
            for (var _a = 0, fruitNames_1 = fruitNames; _a < fruitNames_1.length; _a++) {
                var fruitName = fruitNames_1[_a];
                var fruitCount = fruitBox[fruitName];
                while (fruitCount > 0) {
                    totalEaten++;
                    if (fruitCount >= 5) {
                        fruitCount -= 5;
                    }
                    else {
                        fruitCount = 0;
                    }
                }
            }
        }
        return totalEaten;
    };
    return Giraffe;
}());
exports.Giraffe = Giraffe;
