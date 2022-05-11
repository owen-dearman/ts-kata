/*
Wordle Scoring.


*/

interface MarkObject {
    guess: string,
    mark: {[key: number ]: string}
}
    
export function markWordleGuess(guess: string, hiddenTarget: string): MarkObject{
    hiddenTarget = hiddenTarget.toUpperCase()
    guess = guess.toUpperCase()
    let markedGuess = {guess: guess, mark: {}}
    let markingSequence:{[key: number]: string} = {}
    let targetMod = hiddenTarget.split("")

    for (let i=0; i<=4; i++){
        const guessedLetter = guess[i]
        const targetLetter =hiddenTarget[i]
        if (guessedLetter === targetLetter){
            markingSequence[i+1] = "DIRECT_MATCH"
           targetMod.splice(i,1, "*")
        }else {
            markingSequence[i+1] = "*"
        }
    }

    for (let i=0; i<=4; i++){
        const guessedLetter = guess[i]
         if (targetMod.includes(guessedLetter) && markingSequence[i+1] === "*"){
            markingSequence[i+1] = "PARTIAL_MATCH"
            const index = targetMod.findIndex((letter) => letter === guessedLetter)
            index !== -1 && targetMod.splice(index, 1, "*")
        }else if (markingSequence[i+1] === "*"){
            markingSequence[i+1] = "NO_MATCH"
        }
    }
    markedGuess.mark = markingSequence
    return markedGuess
}