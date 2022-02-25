const Employee = require("../lib/employee");

describe("Employee", () => {
  const employee1 = new Employee("Dakota", 1, "something@yahoo.com");
  test("employee", () => {
    expect(employee1.getName()).toEqual("Dakota");
    expect(employee1.getId()).toEqual(1);
    expect(employee1.getEmail()).toEqual("something@yahoo.com");
    expect(employee1.getRole()).toEqual("Employee");
  });
  test("is object", () => {
    expect(typeof employee1).toBe("object");
  });
});
