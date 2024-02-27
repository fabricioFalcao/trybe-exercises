class Student {
  private _enrollment: string;
  private _name: string;
  private _testsGrades: number[];
  private _assignmentGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._testsGrades = [];
    this._assignmentGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get testsGrades(): number[] {
    return this._testsGrades;
  }

  set testsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._testsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._assignmentGrades = value;
  }

  finalGrade() {
    return [...this.assignmentsGrades, ...this.testsGrades]
      .reduce((acc, curr) => acc + curr, 0);
  }

  finalAverage() {
    const average = this.finalGrade() / [...this.assignmentsGrades, ...this.testsGrades].length
    return Number(average.toFixed(1))
  }

}

const personOne = new Student('202001011', 'Maria da Silva');
const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);

personOne.testsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.finalGrade());
console.log('Média de todas as notas: ', personOne.finalAverage());
