var Employee = require('../lib/Employee');

test('create employee object', () => {
  const employee = new Employee('Bucky', '069', 'wintersoldier@barnes.gov');

  expect(employee.name).toBe('Bucky');
  expect(employee.id).toBe('069');
  expect(employee.email).toBe('wintersoldier@barnes.gov');
  expect(employee.role).toBe('Employee');
});

test('get employees name', () => {
  const employee = new Employee('Bucky', '069', 'wintersoldier@barnes.gov');

  expect(employee.getName()).toBe('Bucky');
  expect(employee.getId()).toBe('069');
  expect(employee.getEmail()).toBe('wintwintersoldier@barnes.gov');
  expect(employee.getRole()).toBe('Employee');
});

test('get employees id', () => {
  const employee = new Employee('Bucky', '069', 'wintersoldier@barnes.gov');
  expect(employee.getId()).toEqual(expect.stringContaining('069'));
  expect(employee.getId()).toEqual(expect.any(String));
});

test('get employees email address', () => {
  const employee = new Employee('Bucky', '069', 'wintersoldier@barnes.gov');
  expect(employee.getEmail()).toEqual(
    expect.stringContaining('wintersoldier@barnes.gov')
  );
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employees job role', () => {
  const employee = new Employee('Bucky', '069', 'wintersoldier@barnes.gov');
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  expect(employee.getRole()).toEqual(expect.any(String));
});
