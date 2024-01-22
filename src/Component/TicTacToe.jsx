import React, { useCallback, useEffect, useRef, useState } from "react";
import cls from "../assets/Style/style.module.css";
import circle from "../assets/Img/circle.png";
import cross from "../assets/Img/cross.png";
let data = [];
const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [isStop, setIsStop] = useState(false);
  const [winnerName, setWinnerName] = useState(null);
  const box_1 = useRef();
  const box_2 = useRef();
  const box_3 = useRef();
  const box_4 = useRef();
  const box_5 = useRef();
  const box_6 = useRef();
  const box_7 = useRef();
  const box_8 = useRef();
  const box_9 = useRef();
  const boxArray = [
    box_1,
    box_2,
    box_3,
    box_4,
    box_5,
    box_6,
    box_7,
    box_8,
    box_9,
  ];
  const toggle = (e, num) => {
    if (isStop) return;
    if (count % 2 == 0) {
      e.target.innerHTML = `<img src="${circle}"/>`;
      data[num] = "o";
      setCount((precount) => precount + 1);
    } else {
      e.target.innerHTML = `<img src="${cross}"/>`;
      data[num] = "x";
      setCount((precount) => precount + 1);
    }
    winningCheck();
  };


  const winningCheck = () => {
    if (
      data[0] === data[3] &&
      data[3] === data[6] &&
      data[6] !== "" &&
      data[0] != undefined &&
      data[3] != undefined &&
      data[6] != undefined
    ) {
      winner(data[6]);
    } else if (
      data[0] === data[1] &&
      data[1] === data[2] &&
      data[2] !== "" &&
      data[0] != undefined &&
      data[1] != undefined &&
      data[2] != undefined
    ) {
      winner(data[2]);
    } else if (
      data[2] === data[5] &&
      data[5] === data[8] &&
      data[8] !== "" &&
      data[2] != undefined &&
      data[5] != undefined &&
      data[8] != undefined
    ) {
      winner(data[8]);
    } else if (
      data[6] === data[7] &&
      data[7] === data[8] &&
      data[8] !== "" &&
      data[6] != undefined &&
      data[7] != undefined &&
      data[8] != undefined
    ) {
      winner(data[8]);
    } else if (
      data[0] === data[4] &&
      data[4] === data[8] &&
      data[8] !== "" &&
      data[0] != undefined &&
      data[4] != undefined &&
      data[8] != undefined
    ) {
      winner(data[8]);
    } else if (
      data[2] === data[4] &&
      data[4] === data[6] &&
      data[6] !== "" &&
      data[2] != undefined &&
      data[4] != undefined &&
      data[6] != undefined
    ) {
      winner(data[6]);
    } else if (
      data[3] === data[4] &&
      data[4] === data[5] &&
      data[5] !== "" &&
      data[3] != undefined &&
      data[4] != undefined &&
      data[5] != undefined
    ) {
      winner(data[5]);
    } else if (
      data[1] === data[4] &&
      data[4] === data[7] &&
      data[7] !== "" &&
      data[1] != undefined &&
      data[4] != undefined &&
      data[7] != undefined
    ) {
      winner(data[7]);
    }
  };
  const winner = (winnerData) => {
    setIsStop(true);
    if (winnerData == "x") {
      setWinnerName(cross);
    } else if (winnerData == "o") {
      setWinnerName(circle);
    }
  };
  const resetGame = () => {
    setWinnerName(null);
    setCount(0);
    setIsStop(false);
    data = ["", "", "", "", "", "", "", "", ""];
    boxArray.forEach((box) => {
      box.current.innerHTML = "";
    });
  };
  let title = (
    <h2 className={cls.title}>
      Tic Tac Toe Game Is <span>React</span>
    </h2>
  );
  return (
    <>
      {winnerName ? (
        <h2 className={cls.title}>
          The Winner Is <img src={winnerName} className={cls.winning_img} />
        </h2>
      ) : (
        title
      )}
      <div className={cls.gameArea}>
        <div className={cls.row}>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 0)}
            ref={box_1}
          ></div>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 1)}
            ref={box_2}
          ></div>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 2)}
            ref={box_3}
          ></div>
        </div>
        <div className={cls.row}>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 3)}
            ref={box_4}
          ></div>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 4)}
            ref={box_5}
          ></div>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 5)}
            ref={box_6}
          ></div>
        </div>
        <div className={cls.row}>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 6)}
            ref={box_7}
          ></div>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 7)}
            ref={box_8}
          ></div>
          <div
            className={cls.col}
            onClick={(e) => toggle(e, 8)}
            ref={box_9}
          ></div>
        </div>
      </div>
      <button type="button" onClick={resetGame} className={cls.reset_btn}>
        Reset
      </button>
    </>
  );
};

export default TicTacToe;
