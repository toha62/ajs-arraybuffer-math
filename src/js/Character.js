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
    this.stoned = false;
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

  get damagePoints() {
    return this.attack * (1 - (this.attackDistance - 1) / 10 - Math.log2(this.attackDistance) * 0.05 * this.stoned);
  }

  get stoned() {
    if (this.attackDistance > 9 || !this._stoned) {
      return 0;
    }
    return 1;
  }

  set stoned(value) {
    this._stoned = value;
  }

  // Методы из ДЗ «Классы, наследование»
  levelUp() {
    if (!this.health) {
      throw new Error('You can`t level up this character, because he is dead');
    }
    this.level += 1;
    this.damagePoints = Math.round(this.damagePoints * 1.2);
    this.defense = Math.round(this.defense * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (!this.health) {
      throw new Error('You can`t damage this character, because he is dead');
    }
    const health = this.health - Math.round(points * (1 - this.defense / 100));
    this.health = health > 0 ? health : 0;
  }
}
