import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.smoke = false;
    this.distance = 1;
  }

  get stoned() {
    return this.smoke;
  }

  set stoned(value) {
    this.smoke = value;
  }

  get attack() {
    let superAttack = this.powerAttack * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      superAttack -= Math.log2(this.distance) * 5;
    }

    return superAttack > 0 ? Math.round(superAttack) : 0;
  }

  set attack(value) {
    this.powerAttack = value;
  }
}
