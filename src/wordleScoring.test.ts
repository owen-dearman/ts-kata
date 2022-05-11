import {markWordleGuess} from "./wordleScoring"

test("returns all green when word is correct", () => {
    expect(markWordleGuess("PLATE", "PLATE")).toStrictEqual({guess: "PLATE", mark :{1: "DIRECT_MATCH", 2: "DIRECT_MATCH", 3: "DIRECT_MATCH", 4: "DIRECT_MATCH", 5: "DIRECT_MATCH"}});
    expect(markWordleGuess("SCORE", "score")).toStrictEqual({guess: "SCORE", mark:{1: "DIRECT_MATCH", 2: "DIRECT_MATCH", 3: "DIRECT_MATCH", 4: "DIRECT_MATCH", 5: "DIRECT_MATCH"}});
  });

test ("return all red when no matches between guess and target", () => {
    expect(markWordleGuess("PUPPY", "SCORE")).toStrictEqual({guess: "PUPPY", mark:{1: "NO_MATCH", 2: "NO_MATCH", 3: "NO_MATCH", 4: "NO_MATCH", 5: "NO_MATCH"}});
})
  
test("Words with the right letter in the wrong place are assigned yellow", () => {
    expect(markWordleGuess("TIMES", "SLACK")).toStrictEqual({guess: "TIMES", mark:{1:"NO_MATCH", 2:"NO_MATCH", 3:"NO_MATCH", 4:"NO_MATCH", 5:"PARTIAL_MATCH"}});
    expect(markWordleGuess("leach", "SLEEP")).toStrictEqual({guess: "LEACH", mark: {1:"PARTIAL_MATCH", 2:"PARTIAL_MATCH", 3:"NO_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}});
})

test("imitating a game", () => {
    expect(markWordleGuess("GIANT", "PEARL")).toStrictEqual({guess: "GIANT", mark:{1:"NO_MATCH", 2:"NO_MATCH", 3:"DIRECT_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("PRAMS", "PEARL")).toStrictEqual({guess: "PRAMS", mark: {1:"DIRECT_MATCH", 2:"PARTIAL_MATCH", 3:"DIRECT_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("PLANK", "PEARL")).toStrictEqual({guess: "PLANK", mark: {1:"DIRECT_MATCH", 2:"PARTIAL_MATCH", 3:"DIRECT_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("PEARL", "PEARL")).toStrictEqual({guess: "PEARL", mark: {1:"DIRECT_MATCH", 2:"DIRECT_MATCH", 3:"DIRECT_MATCH", 4:"DIRECT_MATCH", 5:"DIRECT_MATCH"}})
})

test("more expansive tests", () => {
    expect(markWordleGuess("PURSE", "PUPPY")).toStrictEqual({guess: "PURSE", mark:{1:"DIRECT_MATCH", 2:"DIRECT_MATCH", 3:"NO_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("PUPPY", "PURSE")).toStrictEqual({guess: "PUPPY", mark: {1:"DIRECT_MATCH", 2:"DIRECT_MATCH", 3:"NO_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("YUMMY", "AYINM")).toStrictEqual({guess: "YUMMY", mark: {1:"PARTIAL_MATCH", 2:"NO_MATCH", 3:"PARTIAL_MATCH", 4:"NO_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("GUMMY", "MAMMA")).toStrictEqual({guess: "GUMMY", mark: {1:"NO_MATCH", 2:"NO_MATCH", 3:"DIRECT_MATCH", 4:"DIRECT_MATCH", 5:"NO_MATCH"}})
    expect(markWordleGuess("FLIES", "SLEEP")).toStrictEqual({guess: "FLIES", mark: {1:"NO_MATCH", 2:"DIRECT_MATCH", 3:"NO_MATCH", 4:"DIRECT_MATCH", 5:"PARTIAL_MATCH"}})
    expect(markWordleGuess("FLEES", "SLAEP")).toStrictEqual({guess: "FLEES", mark: {1:"NO_MATCH", 2:"DIRECT_MATCH", 3:"NO_MATCH", 4:"DIRECT_MATCH", 5:"PARTIAL_MATCH"}})
})