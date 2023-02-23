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
    const distanceDecrease = 1 - (this.attackDistance - 1) / 10;
    const stonedDecrease = Math.log2(this.attackDistance) * 0.05 * this.stoned;

    return this.attack * (distanceDecrease - stonedDecrease);
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
}
