import validParen from "./validParen";

test("Equal number of open and closing brackets in order equals true", () => {
  expect(validParen("()")).toBe(true);
  expect(validParen("(())")).toBe(true);
  expect(validParen("(()())")).toBe(true);
});

test("unequal number of open and closing brackets equals false, eg ()))", () => {
  expect(validParen("))")).toBe(false);
  expect(validParen("((")).toBe(false);
  expect(validParen("(())(")).toBe(false);
});

test("non-bracket items are ignored", () => {
  expect(validParen("(bananas)")).toBe(true);
  expect(validParen("123)")).toBe(false);
  expect(validParen("abc")).toBe(true);
  expect(validParen("(((/)))g()()")).toBe(true);
  expect(validParen("The quick brown (fox jumps over the )fence")).toBe(true);
});

test("empty string equals true", () => {
  expect(validParen("")).toBe(true);
});

test("unbalanced brackets equal false, eg. ())(", () => {
  expect(validParen(")(")).toBe(false);
  expect(validParen("())(")).toBe(false);
  expect(validParen("()()()())")).toBe(false);
  expect(validParen("(()()")).toBe(false);
});
