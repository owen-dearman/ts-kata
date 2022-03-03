"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skeleton_1 = __importDefault(require("./skeleton"));
test("sum adds two numbers", () => {
    expect(skeleton_1.default(4, 3)).toBe(7);
});
//# sourceMappingURL=skeleton.test.js.map