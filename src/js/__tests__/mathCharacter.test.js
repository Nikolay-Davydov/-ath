import Daemon from '../daemon';
import Magician from '../magicain';

test('powerAttack < 0', () => {
  const balrog = new Daemon('balrog');
  balrog.powerAttack = -20;
  balrog.distance = 3;
  balrog.smoke = false;
  expect(balrog.attack).toBe(0);
});

test('powerAttack < 0 and smoke', () => {
  const balrog = new Daemon('balrog');
  balrog.stoned = true;
  balrog.distance = 3;
  expect(balrog.attack).toBe(0);
});

test('powerAttack > 0', () => {
  const balrog = new Daemon('balrog');
  balrog.powerAttack = 100;
  balrog.distance = 3;
  balrog.smoke = false;
  expect(balrog.attack).toBe(80);
});

test('powerAttack > 0 and smoke', () => {
  const gendalf = new Magician('gendalf');
  gendalf.stoned = true;
  expect(gendalf.stoned).toBeTruthy();
});

test('powerAttack > 0 and smoke', () => {
  const gendalf = new Magician('gendalf');
  gendalf.powerAttack = 200;
  gendalf.distance = 2;
  gendalf.stoned = true;
  expect(gendalf.attack).toBe(175);
});
