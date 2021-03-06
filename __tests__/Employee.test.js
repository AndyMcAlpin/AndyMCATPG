const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('nombre', '2', '123@abc.com');

    expect(employee.name).toBe('nombre');
    expect(employee.id).toEqual('2');
    expect(employee.email).toBe('123@abc.com');

});

test('gets the employees name', () => {
    const employee = new Employee('nombre', '2', '123@abc.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test('gets the employees id', () => {
    const employee = new Employee('nombre', '2', '123@abc.com');

    expect(employee.getID()).toEqual(expect.stringContaining(employee.id.toString()));
})

test('gets the employees email', () => {
    const employee = new Employee('nombre', '2', '123@abc.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('gets the employees role', () => {
    const employee = new Employee('nombre', '2', '123@abc.com');

    expect(employee.getRole()).toBe('Employee');
})


