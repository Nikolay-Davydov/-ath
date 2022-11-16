import MathCharacter from './mathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defense = 40;
  }
}
