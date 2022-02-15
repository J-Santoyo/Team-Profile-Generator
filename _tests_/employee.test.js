// // const { expect } = require("@jest/globals");
// // const { test } = require("picomatch");
// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
// const Employee = require("../lib/Employee");

// test("Can create an instance for Employee instance", () => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object");
// });

// test("Can set a name from constructor arguments", () => {
//     const name = "Florencia";
//     const e = new Employee(name);
//     expect(e.name).toBe(name);
// });

// test("Can set id from constructor argument", () => {
//     const testValue = 100;
//     const e = new Employee("Florencia", testValue);
//     expect(e.id).toBe(testValue);
// });

// test("Can set an email from a constructor argument", () => {
//     const testValue = "test@test.com";
//     const e = new Employee("Florencia", 1, testValue);
//     expect(e.email).toBe(testValue);
// });

// test("Can get name from getName()", () => {
//     const testValue = "Florencia";
//     const e = new Employee(testValue);
//     expect(e.getName()).toBe(testValue);
// });

// test("Can get an id from getId()", () => {
//     const testValue = 100;
//     const e = new Employee("Florencia", testValue);
//     expect(e.getId()).toBe(testValue);
// });

// test("Can get email from getEmail()", () => {
//     const testValue = "test@test.com";
//     const e = new Employee("Michael", 1, testValue);
//     expect(e.getEmail()).toBe(testValue);
// })

// test()

// const { TestWatcher } = require("jest");
// const { TestWatcher } = require("jest");

const { expect } = require("@jest/globals");
const { test } = require("picomatch");
const Employee = require("../lib/Employee");

test("Can creat an employee object", () => {
    const empl = new Employee('name', 1, 'email');

    expect(empl.name).toBe(expect.any(String));
    expect(empl.id).toBe(expect.any(Number));
    expect(emp.email).toBe(expect.any(String));
});


test("Can get name from getName()", () => {
    const testName = "Michael";
    const empl = new Employee(testName);
    expect(empl.getName()).toBe(testName);
});

test("Can get id from getID()", () => {
    const testId = 100;
    const epl = new Employee("Michael", testId);
    expect(emp.getID()).toBe(testId);
});

test("Can get email from getEmail()", () => {
    const testEmail = "test@me.com"
    const empl = new Employee("Michael", 1, testEmail);
    expect(empl.getEmail()).toBe(testEmail);
});

test("getPosition() should return \"Employee\"", () => {
    const testPosition = "Employee";
    const empl = new Employee("Joana", 1, "test@me.com");
    expect(empl.getRole()).toBe(testPosition);
});