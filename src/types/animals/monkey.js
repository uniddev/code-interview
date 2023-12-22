"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monkey = void 0;
var Monkey = /** @class */ (function () {
    function Monkey(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    Monkey.prototype.eat = function (fruits) {
        var totalFruits = 0;
        for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
            var fruit = fruits_1[_i];
            totalFruits += fruit.apple + fruit.strawberry + fruit.banana + fruit.orange;
        }
        return Math.ceil(totalFruits / 3);
    };
    return Monkey;
}());
exports.Monkey = Monkey;
