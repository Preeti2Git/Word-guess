const words = ["apple", "banana", "grape", "orange", "melon"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let displayWord = chosenWord.replace(/./g, "_");
let remainingTries = 5;

document.getElementById('word-display').textContent = displayWord;

document.getElementById('guess-button').addEventListener('click', makeGuess);
document.getElementById('reset-button').addEventListener('click', resetGame);

function makeGuess() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    if (guess && guess.length === 1) {
        let newDisplayWord = "";
        let correctGuess = false;
        
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === guess) {
                newDisplayWord += guess;
                correctGuess = true;
            } else {
                newDisplayWord += displayWord[i];
            }
        }

        if (!correctGuess) {
            remainingTries--;
            document.getElementById('remaining-tries').textContent = remainingTries;
        }

        displayWord = newDisplayWord;
        document.getElementById('word-display').textContent = displayWord;
        document.getElementById('guess-input').value = '';

        if (displayWord === chosenWord) {
            document.getElementById('message').textContent = "You win!";
            document.getElementById('guess-button').disabled = true;
        } else if (remainingTries === 0) {
            document.getElementById('message').textContent = `You lose! The word was: ${chosenWord}`;
            document.getElementById('guess-button').disabled = true;
        }
    }
}

function resetGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayWord = chosenWord.replace(/./g, "_");
    remainingTries = 5;
    document.getElementById('word-display').textContent = displayWord;
    document.getElementById('remaining-tries').textContent = remainingTries;
    document.getElementById('message').textContent = "";
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-button').disabled = false;
}
