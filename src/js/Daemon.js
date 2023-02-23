import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 100;
    this.defense = 40;
  }
}

// const deamon = new Daemon('Petya');

// deamon.attackDistance = 4;
// deamon.stoned = true;

// console.log('attack = ', deamon.damagePoints);
// console.log('stoned = ', deamon.stoned);
