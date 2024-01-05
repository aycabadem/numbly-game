// src/App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserGuess, submitGuess, resetGame } from "./redux/gameSlice";

function App() {
  const dispatch = useDispatch();
  const { targetNumber, userGuess, results, steps } = useSelector(
    (state) => state.game
  );
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
      } else {
        alert(
          "Lütfen 4 farklı rakamdan oluşan bir sayı giriniz ve sayı 0 ile başlamamalıdır."
        );
      }
    } else {
      alert("Lütfen 4 basamaklı bir sayı giriniz.");
    }
  };

  const handleResetGame = () => {
    dispatch(resetGame());
    setGuessInput("");
  };

  return (
    <div>
      <h1>4 Basamakli Sayi Tahmin Oyunu</h1>
      <p>Hedef Sayi: {targetNumber}</p>
      <p>Tahmininiz: {userGuess || "-"}</p>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {index + 1}. Adim - Tahmin: {result.guess} - Toplar:
            {Array(result.blueDots).fill("🔵").join(" ")}{" "}
            {Array(result.redDots).fill("🔴").join(" ")}
          </li>
        ))}
      </ul>
      <p>adim sayisi: {steps}</p>
      <input
        type="text"
        value={guessInput}
        onChange={handleInputChange}
        maxLength={4}
        pattern="\d*"
      />
      <button onClick={handleGuessSubmit}>Tahmin Et</button>
      <button onClick={handleResetGame}>Oyunu sifirla</button>
    </div>
  );
}

export default App;
