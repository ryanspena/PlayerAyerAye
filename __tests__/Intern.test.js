var Intern = require('../lib/Intern.js');

test('', () => {
  var intern = new Intern('Amy Lee', `8`, 'wakemeupinside@evanescence.com');

  expect(intern.name).toBe('Amy Lee');
  expect(intern.id).toBe(`8`);
  expect(intern.email).toBe('wakemeupinside@evanescence.com');
  expect(intern.getName()).toBe();
  expect(intern.getId()).toBe(`8`);
  expect(intern.getEmail()).toBe('wakemeupinside@evanescence.com');
});

test('', () => {
  var intern = new Intern(
    'Ebba Nelson',
    `9`,
    'discotits@tovelo.com',
    'Habits (Stay High)'
  );

  expect(intern.school).toBe('Habits (Stay High)');
  expect(intern.getSchool()).toBe('Habits (Stay High)');
});

test('', () => {
  var intern = new Intern(
    "Roman's Revenge",
    `10`,
    'psrated@gmail.com',
    "Developer's Dark Side"
  );

  expect(intern.role).toBe('Intern');
  expect(intern.getRole()).toBe('Intern');
});
