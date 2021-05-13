"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creature = /** @class */ (function () {
    function Creature(hand_num, feet_num) {
        this.hands = hand_num;
        this.feets = feet_num;
    }
    return Creature;
}());
var creature = new Creature(5, 2);
console.log(creature);
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(bark) {
        var _this = _super.call(this, 0, 4) || this;
        _this.bark = bark;
        return _this;
    }
    Cat.prototype.barking = function () {
        console.log(this.bark + "!");
    };
    return Cat;
}(Creature));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        var _this = _super.call(this, 2, 2) || this;
        _this.name = name;
        return _this;
    }
    Human.prototype.greet = function () {
        console.log("Hello I'm " + this.name);
    };
    return Human;
}(Creature));
var cat = new Cat('nyaaaa');
cat.barking();
var human = new Human('Taro');
human.greet();
