import Daemon from '../daemon';

test('get object Daemon', () => {
  const description = new Daemon('Man', 'Daemon');
  const result = {
    name: 'Man',
    type: 'Daemon',
    health: 100,
    level: 1,
    defense: 40,
    distance: 1,
    powerAttack: 10,
    smoke: false,
  };
  expect(description).toEqual(result);
});
