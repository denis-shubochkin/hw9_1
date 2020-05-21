/* eslint-disable no-param-reassign */
export default class Magician {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.damage = 100;
    this.distance = 2;
  }


  attack(obj = '') {
    if (obj !== '') {
      if (obj.health > 0) {
        obj.health -= this.damage * ((100 - ((this.distance - 1) * 10)) / 100);
        return this.damage * ((100 - ((this.distance - 1) * 10)) / 100);
      }
      throw new Error('Персонаж уничтожен');
    } else {
      return this.damage * ((100 - ((this.distance - 1) * 10)) / 100);
    }
  }

  stoned(obj) {
    obj.health -= (this.attack() - Math.log2(this.distance) * 5);
  }
}
