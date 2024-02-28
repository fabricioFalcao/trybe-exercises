"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student_1 = require("./Student");
var Subject_1 = require("./Subject");
var Teacher_1 = require("./Teacher");
var maria = new Person_1.default('Maria da Consolação', new Date('1980/01/25'));
var luiza = new Person_1.default('Luiza Andrade', new Date('2005/10/02'));
console.log(maria);
console.log(luiza);
var carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
var jessica = new Student_1.default('Jéssica Bianca Nunes', new Date('2004/06/06'));
var tamires = new Student_1.default('Tamires Santos Bastos', new Date('2005/11/05'));
var fernando = new Student_1.default('Fernando Gonçalves', new Date('2006/09/11'));
carolina.testsGrades = [25, 20, 25, 23];
lucas.testsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
var testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration: function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "FNC".concat(randomStr);
    },
};
var math = new Subject_1.default('Matemática');
var history = new Subject_1.default('História');
var philosophy = new Subject_1.default('Filosofia');
console.log(math);
console.log(history);
console.log(philosophy);
var marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
var joao = new Teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
var lucio = new Teacher_1.default('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);
console.log(marta);
console.log(joao);
console.log(lucio);
