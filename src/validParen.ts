function validParen(parens: string): boolean {
  let parenthesesBalance: number = 0;
  for (let i: number = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      parenthesesBalance++;
    } else if (parens[i] === ")") {
      parenthesesBalance--;
    }
    if (parenthesesBalance < 0) {
      return false;
    }
  }
  return parenthesesBalance === 0;
}

export default validParen;
