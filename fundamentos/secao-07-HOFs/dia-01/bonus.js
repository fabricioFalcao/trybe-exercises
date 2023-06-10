const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

const warriorAttack = () => Math.floor(Math.random() * (warrior.strength + 1)) + warrior.strength;

const mageAttack = () => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente'
  }
  return {
    damageDealt: Math.floor(Math.random() * (mage.intelligence + 1) + mage.intelligence),
    manaSpent: 15,
  }
}

const gameActions = {
  warriorTurn: () => {
    const warriorDamage = warriorAttack();
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },

  mageTurn: () => {
    const mageDamage = mageAttack();
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
    mage.mana -= 15;
  },

  dragonTurn: () => {
    const dragonDamage = dragonAttack();
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();

console.log(gameActions.turnResults());
