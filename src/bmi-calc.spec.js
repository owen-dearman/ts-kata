"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bmi_calc_1 = __importDefault(require("./bmi-calc"));
test("logs BMI result", () => {
    expect(bmi_calc_1.default(80, 1.85)).toBe("Your BMI is 23.37 and this is the category: normal.");
    expect(bmi_calc_1.default(54, 1.8)).toBe("Your BMI is 16.67 and this is the category: underweight.");
    expect(bmi_calc_1.default(100, 1.5)).toBe("Your BMI is 44.44 and this is the category: obese.");
    expect(bmi_calc_1.default(90, 1.75)).toBe("Your BMI is 29.39 and this is the category: overweight.");
});
//# sourceMappingURL=bmi-calc.spec.js.map