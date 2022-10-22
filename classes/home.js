"use strict";
exports.__esModule = true;
exports.Home = void 0;
var Home = /** @class */ (function () {
    function Home(num) {
        this.number1 = 45;
        this.number2 = 55;
        console.log(num);
    }
    Home.prototype.getSum = function () {
        return this.number1 + this.number2;
    };
    Home.prototype.Add = function () {
        return this.name1 + this.name2;
    };
    return Home;
}());
exports.Home = Home;
