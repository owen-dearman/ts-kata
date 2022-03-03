"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playingWithDigits_1 = __importDefault(require("./playingWithDigits"));
// test('finds the correct number', () => {
//     expect(playingWithDigits(695, 2).toBe(2))
// })
test("returns the correct number with the power", () => {
    expect(playingWithDigits_1.default(695, 2)).toStrictEqual(1390);
});
//# sourceMappingURL=playingWithDigits.spec.js.map