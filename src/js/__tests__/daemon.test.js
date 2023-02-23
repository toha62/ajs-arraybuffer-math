import Daemon from '../Daemon';
import Character from '../Character';

test('should create instance of class Daemon', () => {
  const result = new Daemon('Baltazar');

  expect(result).toBeInstanceOf(Daemon);
});

test('should create instance of class Character', () => {
  const result = new Daemon('Baltazar');

  expect(result).toBeInstanceOf(Character);
});

test('should create instance of class Daemon with initial value', () => {
  const result = new Daemon('Baltazar');

  expect(result).toEqual({
    name: 'Baltazar',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 100,
    defense: 40,
    _stoned: false,
  });
});

test.each([
  [321321],
  [''],
  ['D'],
  ['Dark Knight'],
])('should throws on uncorrect name: %s', name => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Daemon(name);
  }).toThrow();
});

test.each([
  [0],
  [12],
  [-5],
])('should throws on uncorrect distance range', distance => {
  expect(() => {
    // eslint-disable-next-line no-new
    const deamon = new Daemon('Baltazar');
    deamon.attackDistance = distance;
  }).toThrow();
});

test.each([
  [1, true, 100],
  [1, false, 100],
  [2, true, 85],
  [2, false, 90],
])('when distance %i cells and stoned = %s should return %i point damage', (distance, stoned, result) => {
  expect(() => {
    // eslint-disable-next-line no-new
    const deamon = new Daemon('Baltazar');
    deamon.attackDistance = distance;
    deamon.stoned = stoned;

    expect(result).toBe(deamon.damagePoints);
  });
});
