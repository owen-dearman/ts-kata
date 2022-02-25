import bmi from "./bmi-calc";

test("logs BMI result", () => {
  expect(bmi(80, 1.85)).toBe(
    "Your BMI is 23.37 and this is the category: normal.",
  );
  expect(bmi(54, 1.8)).toBe(
    "Your BMI is 16.67 and this is the category: underweight.",
  );
  expect(bmi(100, 1.5)).toBe(
    "Your BMI is 44.44 and this is the category: obese.",
  );
  expect(bmi(90, 1.75)).toBe(
    "Your BMI is 29.39 and this is the category: overweight.",
  );
});
