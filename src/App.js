import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserGuess,
  submitGuess,
  resetGame,
  setGameOver,
} from "./redux/gameSlice";
import "./App.css";
import BasicTooltip from "./Tooltip";

function App() {
  const dispatch = useDispatch();
  const { results, steps, gameOver } = useSelector((state) => state.game);
  const [guessInput, setGuessInput] = useState("");

  const handleInputChange = (e) => {
    setGuessInput(e.target.value);
  };

  const handleGuessSubmit = () => {
    if (guessInput.length === 4 && /^\d+$/.test(guessInput)) {
      const uniqueDigits = new Set(guessInput);

      if (uniqueDigits.size === 4 && guessInput[0] !== "0") {
        dispatch(setUserGuess(guessInput));
        dispatch(submitGuess());
        setGuessInput("");
      } else {
        alert(
          "Please enter a number consisting of 4 different digits and the number must not start with 0."
        );
      }
    } else {
      alert("Please enter a 4 digit number");
    }
  };

  const handleResetGame = () => {
    dispatch(resetGame());
    setGuessInput("");
    dispatch(setGameOver(false));
  };
  if (gameOver) {
    // return (
    //   <div className="container">
    //     <h1>Game Over!</h1>
    //     <p>Congratulations, You guessed the correct number in {steps} steps!</p>
    //     <button onClick={handleResetGame}>Play Again</button>
    //   </div>
    // );
    return (
      <div className="container">
        <h1>Game Over!</h1>
        <p>
          Congratulations! You guessed the number correctly in {steps} steps!
          Here is your guesses:
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {index + 1}. Step - Guess: {result.guess} - Balls:
              {Array(result.blueDots).fill("🔵").join(" ")}{" "}
              {Array(result.redDots).fill("🔴").join(" ")}
            </li>
          ))}
        </ul>
        <button className="button-reset" onClick={handleResetGame}>
          Play Again
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>
        4 Digit Number Guessing Game <BasicTooltip />
      </h1>
      {/* <p>Target Number: {targetNumber}</p> */}
      {/* <p>Your guess: {userGuess || "-"}</p> */}

      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {index + 1}. Step - Your Guess: {result.guess} - Balls:
            {Array(result.blueDots).fill("🔵").join(" ")}
            {Array(result.redDots).fill("🔴").join(" ")}
          </li>
        ))}
      </ul>
      <p>Number of Steps: {steps}</p>
      <input
        type="text"
        value={guessInput}
        onChange={handleInputChange}
        maxLength={4}
        pattern="\d*"
      />
      <button onClick={handleGuessSubmit}>Guess</button>
      <button className="button-reset" onClick={handleResetGame}>
        Reset The Game
      </button>
    </div>
  );
}

export default App;
