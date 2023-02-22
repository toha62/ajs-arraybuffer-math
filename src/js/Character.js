export default class Character {
  constructor(name, type) {
    const charactersType = [
      'Magician',
      'Daemon',
    ];
    if (!(typeof (name) === 'string')) {
      throw new Error('"name" is not a string');
    }
    if (!charactersType.includes(type)) {
      throw new Error('type of character not correct');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Length of "name" does not match expected value: from 2 to 10 symbols');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  get attackDistance() {
    return this._attackDistance;
  }

  set attackDistance(distance) {
    if (distance < 1 || distance > 11) {
      throw new Error('Distance must in range from 1 to 11');
    }
    this._attackDistance = distance;
  }

  get attack() {
    return this._attack * (1 - (this.attackDistance - 1) / 10);
  }

  set attack(attack) {
    this._attack = attack;
  }

  // Методы из ДЗ «Классы, наследование»
  levelUp() {
    if (!this.health) {
      throw new Error('You can`t level up this character, because he is dead');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (!this.health) {
      throw new Error('You can`t damage this character, because he is dead');
    }
    const health = this.health - Math.round(points * (1 - this.defence / 100));
    this.health = health > 0 ? health : 0;
  }
}
