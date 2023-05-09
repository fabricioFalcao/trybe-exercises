let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem);

console.log('________________');

info['recorrente'] = 'Sim';
console.log(info);

console.log('________________');

for (let keys in info) {
  console.log(keys);
};

console.log('________________');


for (let keys in info) {
  console.log(info[keys])
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let keys in info) {
  if (keys === 'recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[keys] + ' e ' + info2[keys]);
  }
};
console.log(Object.keys(info));