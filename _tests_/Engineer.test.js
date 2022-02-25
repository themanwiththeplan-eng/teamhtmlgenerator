const Engineer = require("../lib/engineer");
describe("Engineer", () => {
  const engineer1 = new Engineer();
  engineer1.name = "James";
  engineer1.id = 2;
  engineer1.email = "something@gmail.com";
  engineer1.github = "github.com/themanwiththeplan-eng";
  test("engineer", () => {
    expect(engineer1.getName()).toBe("James");
    expect(engineer1.getRole()).toBe("Engineer");
    expect(engineer1.getId()).toBe(2);
    expect(engineer1.getEmail()).toBe("something@gmail.com");
    expect(engineer1.getGithub()).toBe("github.com/themanwiththeplan-eng");
  });
  test("is object", () => {
    expect(typeof engineer1).toBe("object");
  });
});

