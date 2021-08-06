var Manager = require('../lib/Manager.js');

test('', () => {
  var manager = new Manager('Shea', `040`, 'BestBelieveItsNotButter@shea.com');

  expect(manager.name).toBe('Shea');
  expect(manager.id).toBe(`040`);
  expect(manager.email).toBe('BestBelieveItsNotButter@shea.com');
  expect(manager.getName()).toBe('Shea');
  expect(manager.getId()).toBe(`040`);
  expect(manager.getEmail()).toBe('BestBelieveItsNotButter@shea.com');
});

test('', () => {
  var manager = new Manager(
    'Shea',
    `040`,
    'BestBelieveItsNotButter@shea.com',
    `2058`
  );

  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test('', () => {
  var manager = new Manager(
    'Shea',
    `040`,
    'BestBelieveItsNotButter@shea.com',
    `2058`
  );

  expect(manager.role).toBe('Manager');
});
