import Magician from './Magician';

export default class Daemon extends Magician {
  constructor(name) {
    super(name);
    this.damage = 100;
  }
}
