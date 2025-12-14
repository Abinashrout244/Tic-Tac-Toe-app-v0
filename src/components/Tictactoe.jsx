import React, { useState } from "react";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [xTurn, setXTurn] = useState(true);

  const winnerpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!xTurn);

    handleWinner(newBoard);
  };

  const handleWinner = (currvalue) => {
    for (let pattern of winnerpattern) {
      let [a, b, c] = pattern;

      if (
        currvalue[a] &&
        currvalue[a] === currvalue[b] &&
        currvalue[a] === currvalue[c]
      ) {
        setWinner(currvalue[a]);
        return;
      }
    }
    if (!currvalue.includes("") && !winner) {
      setWinner("Draw");
    }
  };
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setXTurn(true);
    setWinner(null);
  };
  const renderIcon = (value) => {
    if (value === "X") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          stroke="red"
          strokeWidth="3"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 6L6 18M6 6l12 12"
          />
        </svg>
      );
    } else if (value === "O") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" stroke="lightblue" />
        </svg>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-10 mt-10">
      <p className="text-3xl md:text-5xl font-bold flex gap-2 items-center">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Congratulations: ${winner} wins!`
          : "Tic Tac Toe Game in React"}
      </p>

      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-700"
          >
            {renderIcon(value)}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="px-10 py-4 text-sm font-semibold rounded-full bg-slate-500 hover:bg-slate-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Tictactoe;
