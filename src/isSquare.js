"use strict";
/**
function description - given an integer number, determine if it's a square number.
   @param - n : number - input number
   @return : Boolean - is n a square number?
*/
Object.defineProperty(exports, "__esModule", { value: true });
function isSquare(n) {
    const root = Math.sqrt(n);
    if (n >= 0 && Number.isInteger(root)) {
        return true;
    }
    return false;
}
exports.default = isSquare;
//# sourceMappingURL=isSquare.js.map