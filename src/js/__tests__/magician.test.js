import Magician from '../magicain';

test('get object Magician', () => {
  const description = new Magician('Man', 'Magician');
  const result = {
    name: 'Man',
    type: 'Magician',
    health: 100,
    level: 1,
    defense: 40,
    distance: 1,
    powerAttack: 10,
    smoke: false,
  };
  expect(description).toEqual(result);
});
