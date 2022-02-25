/**
function description - given an integer number, determine if it's a square number.
   @param - n : number - input number
   @return : Boolean - is n a square number?
*/

function isSquare(n: number): boolean {
  const root = Math.sqrt(n);
  if (n >= 0 && Number.isInteger(root)) {
    return true;
  }
  return false;
}
export default isSquare;
