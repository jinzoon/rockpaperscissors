# Rock Paper Scissors (Console Game)

This is a simple **Rock Paper Scissors** game built with JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum. The game is played entirely in the browser console, where the user competes against the computer over five rounds.

## How to Play

1. Clone or download the project and open the `.html` or `.js` file in your browser.
2. Open the **DevTools Console** (`F12` or `Ctrl+Shift+I` → Console tab).
3. When prompted, enter your move: `rock`, `paper`, or `scissors`.
4. The computer will randomly select a move.
5. The result of each round and current scores will be shown in the console.
6. After five rounds, the final winner is announced.

## Game Logic

- Rock beats Scissors  
- Scissors beats Paper  
- Paper beats Rock  
- Ties are possible  
- First to win the majority of 5 rounds is the winner

## Features

- Prompt-based user input
- Randomized computer choice
- Score tracking
- Console-based interface
- Final results after 5 rounds

## Example Output

```text
Rock, paper, scissors?
> rock
You win! Rock beats scissors!
Your score is 1 My score is 0

Rock, paper, scissors?
> paper
I win! Scissors beats paper!
Your score is 1 My score is 1

...

You win!
```

## Technologies Used

- JavaScript (Vanilla)
- `prompt()` for input
- `console.log()` for output
- `Math.random()` for random number generation


## Notes

- This game is designed to run in the browser **console**.
- Inputs are converted to lowercase, so case doesn’t matter.
- It does not include input validation — unexpected inputs may cause errors.

## License

This project is for learning purposes only. No license is applied.