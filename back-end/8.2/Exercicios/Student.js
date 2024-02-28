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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "testsGrades", {
        get: function () {
            return this._testsGrades;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
            }
            this._testsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        get: function () {
            return this._assignmentGrades;
        },
        set: function (value) {
            if (value.length > 2) {
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
            }
            this._assignmentGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.finalGrade = function () {
        return __spreadArray(__spreadArray([], this.assignmentsGrades, true), this.testsGrades, true).reduce(function (acc, curr) { return acc + curr; }, 0);
    };
    Student.prototype.finalAverage = function () {
        var average = this.finalGrade() / __spreadArray(__spreadArray([], this.assignmentsGrades, true), this.testsGrades, true).length;
        return Number(average.toFixed(1));
    };
    Student.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU".concat(randomStr);
    };
    return Student;
}(Person_1.default));
exports.default = Student;
