/*
To rotate string by K characters means to cut these characters from the beginning and transfer them to the end. 
If K is negative, characters, on contrary should be transferred from the end to the beginning. K will not exceed half 
the length of S

Test Cases = 
rotateString([[1,"abc"]]) //=> "bca" 
rotateString([[-1,"abc"]]) //=> "cab"
rotateString([[0,"abc"]]) //=> "abc"
rotateString([[3,"Nobeen"]]) //=> "eenNob"
rotateString([[1,"cat"], [-1, "cat"]]) //=> "atc tca"
rotateString([[2,"1234"], [3, "banana"]]) //=> "3412 anaban" 
rotateString([[4, "a b c d e"], [-2, "elephant"], [1, "lego"]]) //=> "c d ea b c  ntelepha egol"
rotateString([[1, "   "]]) //=> "   "

 PSEUDOCODE ********************************************
Function: rotateString
Parameters: TO-BE-ROTATED (array of arrays containing number and string)
Returns: ROTATED-STRINGS (string)

function RotateString
    set ROTATED-STRINGS-ARRAY to an empty array
    for each ARRAY in TO-BE-ROTATED do
        set OPERATION to first element in ARRAY
        set ORIGINAL-STRING to second element in ARRAY
        SET ORIGINAL-STRING-AS-ARRAY to an array of ORIGINAL-STRING split on each letter
        if OPERATION is a positive integer then
            set MOVED-LETTERS to spliced letters from beginning of ORIGINAL-STRING-AS-ARRAY equal to the length of OPERATION
            set CURRENT-ROTATION to a array of MOVED-LETTERS to end of ORIGINAL-STRING-AS-ARRAY
            set CURRENT-ROTATED-STRING to a string of CURRENT-ROTATION
        else if OPERATION is a negative integer then
            set MOVED-LETTERS to spliced letters from end of ORIGINAL-STRING-AS-ARRAY equal to the length of OPERATION
            set CURRENT-ROTATION to a array of MOVED-LETTERS to beginning OF ORIGINAL-STRING-AS-ARRAY
            set CURRENT-ROTATED-STRING to a string of CURRENT-ROTATION
        endif
        push CURRENT-ROTATED-STRING to ROTATED-STRINGS-ARRAY
    endfor
    set ROTATED-STRINGS to a string of ROTATED-STRINGS-ARRAY separated by space
return ROTATED-STRINGS
*/

function rotateString(toBeRotated: [number, string][]): string {
  let rotatedArray: string[] = toBeRotated.map(rotateSingleString);
  let rotatedStrings: string = rotatedArray.join(" ");
  return rotatedStrings;
}

function rotateSingleString(array: [number, string]): string {
  const operation: number = array[0];
  const originalStringAsArray: string[] = array[1].split("");
  if (operation >= 0) {
    const movedLetters: string[] = originalStringAsArray.splice(0, operation);
    const currentRotation: string[] =
      originalStringAsArray.concat(movedLetters);
    const currentRotatedString: string = currentRotation.join("");
    return currentRotatedString;
  } else {
    const movedLetters: string[] = originalStringAsArray.splice(operation);
    const currentRotation: string[] = movedLetters.concat(
      originalStringAsArray,
    );
    const currentRotatedString: string = currentRotation.join("");
    return currentRotatedString;
  }
}

console.log(rotateString([[1, "abc"]]), " ---> bca");
console.log(rotateString([[-1, "abc"]]), " ---> cab");
console.log(rotateString([[0, "abc"]]), " ---> abc");
console.log(rotateString([[3, "Nobeen"]]), " ---> eenNob");
console.log(
  rotateString([
    [1, "cat"],
    [-1, "cat"],
  ]),
  " ---> atc tca",
);
console.log(
  rotateString([
    [2, "1234"],
    [3, "banana"],
  ]),
  " ---> 3412 anaban",
);
console.log(
  rotateString([
    [4, "a_b_c_d_e"],
    [-2, "elephant"],
    [1, "lego"],
  ]),
  " ---> c_d_ea_b_  ntelepha egol",
);
console.log(rotateString([[1, "   "]]), "   ");
