import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

const deamon = new Daemon('Petya');

deamon.attackDistance = 5;

console.log('attack = ', deamon.attack);