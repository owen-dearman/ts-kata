//Function that calculates BMI from height and weight

/*
Function: bmi
Parameters:
- WEIGHT (number)
- HEIGHT (number)
Returns:
- BMI-RESULT (string)

set BMI-NUMBER to WEIGHT / HEIGHT ^2
if bmi <= 18.5 then
    set BMI-CATEGORY to "underweight";
else if bmi <= 25.0 then
    set BMI-CATEGORY to "normal";
else if bmi <= 30.0 then
    set BMI-CATEGORY to "overweight";
else if bmi > 30 then
    set BMI-CATEGORY to "obese";
endif

return `Your BMI is BMI-NUMBER and this is the category - BMI-CATEGORY`

*/

/**
 *
 * @param weight - weight in kg
 * @param height - height in m
 * @returns
 */

function bmi(weight: number, height: number): string {
  const bmiNumber = weight / height ** 2;
  let bmiCat = "xyz";
  switch (true) {
    case bmiNumber <= 18.5:
      bmiCat = "underweight";
      break;
    case bmiNumber <= 25:
      bmiCat = "normal";
      break;
    case bmiNumber <= 30:
      bmiCat = "overweight";
      break;
    case bmiNumber > 30:
      bmiCat = "obese";
      break;
  }
  return `Your BMI is ${bmiNumber.toFixed(2,)} and this is the category: ${bmiCat}.`;
}

export default bmi;
