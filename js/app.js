"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("utilities linked up");
var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    return Database;
}());
/// <reference path="./utilities.ts" />
console.log("models linked up");
var ToDo = /** @class */ (function (_super) {
    __extends(ToDo, _super);
    function ToDo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ToDo;
}(Model));
var ToDoList = /** @class */ (function (_super) {
    __extends(ToDoList, _super);
    function ToDoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ToDoList;
}(Model));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(Model));
console.log("dummybase linked up");
// implement database w/ models 
console.log("seeding dummybase");
// seed dummybase 
/// <reference path="./modules/models.ts" />
/// <reference path="./modules/dummybase.ts" />
/// <reference path="./modules/seed.ts" />
console.log("app.ts linked up");
