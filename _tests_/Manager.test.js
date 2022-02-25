const Manager = require("../lib/manager");

describe("Manager", () => {
  const manager1 = new Manager();

  manager1.name = "Florence";
  manager1.id = 4;
  manager1.email = "wowzers@something.com";
  manager1.officeNumber = 626;

  test("manager", () => {
    expect(manager1.getName()).toBe("Florence");
    expect(manager1.getRole()).toBe("Manager");
    expect(manager1.getEmail()).toBe("wowzers@something.com");
    expect(manager1.getOfficeNumber()).toBe(626);
  });
  test("is object", () => {
    expect(typeof manager1).toBe("object");
  });
});
