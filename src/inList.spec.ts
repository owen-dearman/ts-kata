import inList from "./inList";

test("searchNum in list returns true", () => {
  expect(inList([1, 2, 3, 4], 1)).toBe(true);
  expect(inList([300, 20, 45, 77], 77)).toBe(true);
  expect(inList([-1, -2, -3, -4, -5], -3)).toBe(true);
  expect(inList([4, 4, 4, 4, 4], 4)).toBe(true);
});

test("searchNum not in list returns false", () => {
  expect(inList([1, 2, 3, 4], 5)).toBe(false);
  expect(inList([100, 450, 765, 2000], 90)).toBe(false);
  expect(inList([], 1)).toBe(false);
});


