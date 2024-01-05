// src/redux/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";

const generateRandomNumber = () => {
  let randomNumber = "";
  const uniqueDigits = new Set();

  // İlk basamak (0 olamaz, 1-9 arası)
  const firstDigit = Math.floor(Math.random() * 9) + 1;
  randomNumber += firstDigit;
  uniqueDigits.add(firstDigit);

  // Diğer basamaklar (0-9 arası, farklı olmalı)
  for (let i = 1; i < 4; i++) {
    let digit;
    do {
      digit = Math.floor(Math.random() * 10);
    } while (uniqueDigits.has(digit));

    randomNumber += digit;
    uniqueDigits.add(digit);
  }

  return randomNumber;
};
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    targetNumber: generateRandomNumber(),
    userGuess: "",
    results: [], // Tüm tahminleri ve sonuçları tutan dizi
    steps: 0,
  },
  reducers: {
    setUserGuess: (state, action) => {
      state.userGuess = action.payload;
    },
    submitGuess: (state) => {
      const result = calculateResult(state.targetNumber, state.userGuess);
      const { blueDots, redDots } = calculateDots(
        result,
        state.targetNumber,
        state.userGuess
      );
      state.results.push({ guess: state.userGuess, blueDots, redDots });
      state.userGuess = "";
      state.steps += 1;
    },
    resetGame: (state) => {
      state.targetNumber = generateRandomNumber();
      state.userGuess = "";
      state.results = [];
      state.steps = 0;
    },
  },
});

const calculateResult = (targetNumber, userGuess) => {
  let result = 0;
  for (let i = 0; i < targetNumber.length; i++) {
    if (targetNumber[i] === userGuess[i]) {
      result += 1;
    } else if (targetNumber.includes(userGuess[i])) {
      result -= 1;
    }
  }
  return result;
};

const calculateDots = (result, targetNumber, userGuess) => {
  const targetDigits = Array.from(targetNumber);
  const userDigits = Array.from(userGuess);

  let blueDots = 0;
  let redDots = 0;

  // Doğru konumda olanları bul
  for (let i = 0; i < targetDigits.length; i++) {
    if (targetDigits[i] === userDigits[i]) {
      blueDots += 1;
      // Kullanılan rakamı işaretle
      targetDigits[i] = "X";
      userDigits[i] = "Y";
    }
  }

  // Yanlış konumda olanları bul
  for (let i = 0; i < targetDigits.length; i++) {
    const foundIndex = userDigits.indexOf(targetDigits[i]);
    if (foundIndex !== -1) {
      redDots += 1;
      // Kullanılan rakamı işaretle
      userDigits[foundIndex] = "Y";
    }
  }

  return { blueDots, redDots };
};

export const { setUserGuess, submitGuess, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
