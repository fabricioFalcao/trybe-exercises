let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightShift(objeto, chave, valor) {
  objeto[chave] = valor;
}
addNightShift(lesson2, 'turno', 'noite');

function listKeys(objeto) {
  return Object.keys(objeto);
}

function objectSize(objeto) {
  return Object.keys(objeto).length;
}

function listValues(objeto) {
  return Object.values(objeto);
}

let allLessons = Object.assign({}, {
  Lesson1: lesson1,
  Lesson2: lesson2,
  Lesson3: lesson3,
});

console.log(allLessons);

function sumStudents(objeto) {
  let total = 0;

  let keys = Object.keys(objeto);

  for (let index in keys) {
    total += objeto[keys[index]].numeroEstudantes;
  }
  return total
};

function getValueByIndex(objeto, indice) {
  return Object.values(objeto)[indice];
}

function verificaPar(objeto, chave, valor) {
  for (let key in objeto) {
    if (key === chave && objeto[key] === valor) {
      return true;
    }
  }
  return false;
}
console.log(verificaPar(lesson1, 'professor', 'Maria Clara'));
