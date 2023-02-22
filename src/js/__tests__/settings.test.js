import Settings from '../Settings';

const resultSettings1 = new Map();
const resultSettings2 = new Map();
const resultSettings3 = new Map();
const defaultSettings = new Settings();

resultSettings1.set('theme', 'gray');
resultSettings1.set('music', 'pop');
resultSettings1.set('difficulty', 'hard');

resultSettings2.set('theme', 'gray');
resultSettings2.set('music', 'trance');
resultSettings2.set('difficulty', 'hard');

resultSettings3.set('theme', 'gray');
resultSettings3.set('music', 'trance');
resultSettings3.set('difficulty', 'easy');

test('should to throw, when assigned value not a Object', () => {
  const settings = new Settings();

  expect(() => {
    settings.settings = ['theme', 'gray'];
  }).toThrow();
});

test.each([
  [{ theme: 'gray', music: 'pop', difficulty: 'hard' }, resultSettings1],
  [{ theme: 'gray', difficulty: 'hard' }, resultSettings2],
  [{ theme: 'gray' }, resultSettings3],
  [{ theme: 'gray', music: 'trance', difficulty: 'easy' }, resultSettings3],
  [{}, defaultSettings.defaultSettings],
])('when user assine settings with %s should get resulting settings %s', (userSettings, result) => {
  const settings = new Settings();

  settings.settings = userSettings;
  expect(settings.settings).toEqual(result);
});
