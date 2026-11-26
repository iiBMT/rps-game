# Rock Paper Scissors (Console)

A console-based Rock Paper Scissors game built as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

The game runs entirely in the browser console no UI, no clicks. You answer a `prompt` each round, the computer picks randomly, and the result of each round is logged to the console. After all rounds are played, the final winner is announced.

## How to play

1. Open `index.html` in a web browser.
2. Open the browser's developer console:
   - **Chrome / Firefox:** `F12` or `Ctrl+Shift+J`
3. Reload the page. You'll be asked how many rounds to play.
4. Type your choice each round: `rock`, `paper`, or `scissors` (case-insensitive).
5. Watch the console for round results and the final score.

## Rules

- Each round, both players choose rock, paper, or scissors.
- Rock beats scissors, scissors beats paper, paper beats rock.
- The winner of a round scores 1 point.
- **Ties award no points** to either player.
- After all rounds, whoever has the higher score wins. Equal scores are a draw.

## Features

- Randomised computer choice using `Math.random()`
- Case-insensitive and whitespace-tolerant human input (`"  RoCk "` works)
- Customisable number of rounds
- Per-round feedback and final score in the console

## Known limitations

- Input is assumed to be valid. Invalid choices are not re-prompted and simply result in a round with no winner.
- Cancelling a prompt (`Esc` / Cancel button) is not handled and will throw an error.
- The number-of-rounds prompt is parsed with `parseInt` and does not reject non-numeric input.
- Played entirely via `prompt` and `console.log` no graphical interface, Yet..

## What this project practises

- Writing and calling functions with parameters and return values
- Using `Math.random()` to make choices
- Reading user input with `prompt()` and normalising it (`.toLowerCase()`, `.trim()`)
- Variable scope (scores and round logic live inside `playGame`)
- Control flow with `if / else if / else` and `for` loops