import playingWithDigits from "./playingWithDigits";

// test('finds the correct number', () => {
//     expect(playingWithDigits(695, 2).toBe(2))
// })

test("returns the correct number with the power", () => {
  expect(playingWithDigits(695, 2)).toStrictEqual(1390);
});
