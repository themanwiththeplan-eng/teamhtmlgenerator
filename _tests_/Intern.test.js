const Intern = require("../lib/intern");

describe("Intern", () => {
  const intern1 = new Intern();
  intern1.name = "Sam";
  intern1.id = 3;
  intern1.email = "intern@something.com";
  intern1.school = "UCLA";

  test("intern", () => {
    expect(intern1.getName()).toBe("Sam");
    expect(intern1.getRole()).toBe("Intern");
    expect(intern1.getId()).toBe(3);
    expect(intern1.getEmail()).toBe("intern@something.com");
    expect(intern1.getSchool()).toBe("UCLA");
  });
  test("is object", () => {
    expect(typeof intern1).toBe("object");
  });
});
