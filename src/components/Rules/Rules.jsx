import { useNavigate } from "react-router";
import styles from "./Rules.module.css";

export default function Rules() {
  const navigate = useNavigate();
  const { container, container_bg, heading, rules, rules_btn } = styles;

  return (
    <div className={container}>
      <div className={container_bg}>
        <div className={heading}>How to play dice game ?</div>

        <ol className={rules}>
          <li>Select any number from above given number.</li>
          <li>Click on dice image to roll it.</li>
          <li>
            If selected number is equals to dice number you will get same point
            as dice
          </li>
          <li>If you get wrong guess then 2 points will be dedcuted.</li>
        </ol>

        <button className={rules_btn} onClick={() => navigate("/dice-game")}>
          Start Game
        </button>
      </div>
    </div>
  );
}
