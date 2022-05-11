function inList(numArr: number[], searchNum: number): boolean {
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] === searchNum) {
      return true;
    }
  }
  return false;
}

export default inList;


