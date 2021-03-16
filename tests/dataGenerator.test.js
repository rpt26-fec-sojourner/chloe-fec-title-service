import seeder from '../database/seed.js';

test('generateAdj returns a word from the spaceAdjectives array', () => {
  let inArray = seeder.spaceAdjectives.includes(seeder.generateAdj());

  expect(inArray).toBe(true);

  inArray = seeder.spaceAdjectives.includes('chloe');
  expect(inArray).toBe(false);
});


test('generateNoun returns a word from the spaceNouns array', () => {
  let inArray = seeder.spaceNouns.includes(seeder.generateNoun());

  expect(inArray).toBe(true);

  inArray = seeder.spaceNouns.includes('chloe');
  expect(inArray).toBe(false);
});