"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elephant = void 0;
var Elephant = /** @class */ (function () {
    function Elephant(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    Elephant.prototype.eat = function (fruits) {
        var totalFruits = 0;
        for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
            var fruit = fruits_1[_i];
            totalFruits += fruit.apple + fruit.strawberry + fruit.banana + fruit.orange;
        }
        return Math.ceil(totalFruits / 9);
    };
    return Elephant;
}());
exports.Elephant = Elephant;
