import Person from "./Person";

export default class Student extends Person {
  private _enrollment!: string;
  private _testsGrades!: number[];
  private _assignmentGrades!: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment()
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
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

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

}