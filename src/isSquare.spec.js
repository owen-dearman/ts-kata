"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSquare_1 = __importDefault(require("./isSquare"));
test("n is a square", () => {
    expect(isSquare_1.default(-1)).toBe(false);
    expect(isSquare_1.default(0)).toBe(true);
    expect(isSquare_1.default(3)).toBe(false);
    expect(isSquare_1.default(4)).toBe(true);
    expect(isSquare_1.default(25)).toBe(true);
    expect(isSquare_1.default(26)).toBe(false);
});
//# sourceMappingURL=isSquare.spec.js.map