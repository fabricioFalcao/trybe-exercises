// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  let x = frase.split(' ');
  x[1] = nome;
  return x.join(' ')
};

const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let mensagem = `${func}
  Minhas três principais habilidades são:
  ${skills.join(' ')}`;
  return mensagem;
}
console.log(minhasSkills(substituaX('Bebeto')));



// const frase = 'Tryber x aqui!';
// let fraseX = frase.split(' ');
// console.log(fraseX);