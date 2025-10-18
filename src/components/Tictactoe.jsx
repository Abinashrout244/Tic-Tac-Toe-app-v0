import { Circle, X } from "lucide-react";
import React, { useRef } from "react";
let data = ["", "", "", "", "", "", "", "", ""];
import { useState } from "react";

const Tictactoe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const titleref = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (data[num] !== "") return;
    if (lock) {
      return 0;
    } else if (count % 2 === 0) {
      e.target.innerHTML = "";
      const icon = document.createElement("div");
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" stroke="red" stroke-width="3" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12"/></svg>`;
      e.target.appendChild(icon);
      data[num] = "X";
      setCount(++count);
    } else {
      e.target.innerHTML = "";
      const icon = document.createElement("div");
      icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" stroke="lightblue"/>
    </svg>
  `;
      e.target.appendChild(icon);
      data[num] = "O";
      setCount(count++);
    }

    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "X") {
      titleref.current.innerHTML = `Congrasulation:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" stroke="red" stroke-width="3" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12"/></svg> win`;
    } else {
      titleref.current.innerHTML = ` Congrasulation:
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" stroke="lightblue"/>
    </svg> win`;
    }
  };
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleref.current.innerHTML = "Tic Tac Toe Game In React";
    box_array.map((e) => {
      e.current.innerHTML = " ";
    });
  };
  return (
    <div className="space-y-10 ">
      <p
        className="text-3xl md:text-5xl font-bold flex flex-row items-center justify-center gap-2"
        ref={titleref}
      >
        Tic <span className="text-yellow-300 ">Tac</span> Toe Game In React
      </p>

      <div className="flex flex-col gap-1">
        <div className="board flex flex-col gap-3 justify-center items-center">
          <div className="row-1 flex flex-row gap-2">
            <div
              ref={box1}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              ref={box2}
              className="h-[100px] w-[100px] bg-gray-800  flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              ref={box3}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row-1 flex flex-row gap-2">
            <div
              ref={box4}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              ref={box5}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              ref={box6}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row-1 flex flex-row gap-2">
            <div
              ref={box7}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              ref={box8}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              ref={box9}
              className="h-[100px] w-[100px] bg-gray-800 flex justify-center items-center rounded-lg"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <p className="text-slate-500 text-sm">Mi Shadow</p>
      </div>
      <button
        className="px-10 py-4 text-sm font-semibold rounded-full bg-slate-500 w-fit "
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Tictactoe;
