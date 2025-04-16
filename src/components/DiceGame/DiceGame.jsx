import { useNavigate } from "react-router";
import styles from "./DiceGame.module.css";
import { useState } from "react";

export default function DiceGame() {
  const [userNo, setUserNo] = useState(0);
  const [random, setRandom] = useState(1);
  const [score, setScore] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleResetScore() {
    setUserNo(() => 0);
    setRandom(() => 1);
    setScore(() => 0);
  }

  function handleUserNumberChange(val) {
    setErrorMsg(() => "");
    setUserNo(() => val);
  }

  function handleRollDice() {
    if (userNo === 0) {
      setErrorMsg(() => "You have not selected any number!");
      console.log(errorMsg);
      return;
    }

    const randomNo = Math.ceil(Math.random() * 6);
    setRandom(() => randomNo);
    console.log(random);

    if (userNo === randomNo) {
      setScore((prev) => prev + randomNo);
    } else {
      setScore((prev) => prev - 2);
    }
  }

  const {
    container,
    navbar,
    content,
    score_box,
    score_value,
    score_label,
    selection_box,
    number_options,
    active,
    error,
    number_label,
    dice_section,
    dice_image,
    dice_label,
    button_group,
    reset_btn,
    rules_btn,
  } = styles;

  console.log(active);

  return (
    <div className={container}>
      <div className={navbar}>
        <div className={score_box}>
          <div className={score_value}>
            <span>{score}</span>
          </div>
          <div className={score_label}>Total Score</div>
        </div>

        <div className={selection_box}>
          <div className={error}>{errorMsg}</div>
          <div className={number_options}>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((val, index) => {
                return (
                  <li key={`${val}${index}`}>
                    <button
                      className={userNo === val ? active : null}
                      onClick={() => {
                        console.log(val);
                        handleUserNumberChange(val);
                      }}
                    >
                      {val}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={number_label}>
            <span>Select Number</span>
          </div>
        </div>
      </div>
      <div className={content}>
        <div className={dice_section}>
          <div className={dice_image} onClick={() => handleRollDice()}>
            <img src={`./dice_${random}.png`} alt="dice" />
          </div>
          <div className={dice_label}>Click on dice to roll</div>
        </div>
        <div className={button_group}>
          <button className={reset_btn} onClick={() => handleResetScore()}>
            Reset Game
          </button>
          <button className={rules_btn} onClick={() => navigate("/rules")}>
            Show Rules
          </button>
        </div>
      </div>
    </div>
  );
}
