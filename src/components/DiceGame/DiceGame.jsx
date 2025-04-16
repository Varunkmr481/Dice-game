import { useNavigate } from "react-router";
import styles from "./DiceGame.module.css";

export default function DiceGame() {
  const navigate = useNavigate();

  const {
    container,
    navbar,
    content,
    score_box,
    score_value,
    score_label,
    selection_box,
    number_options,
    number_label,
    dice_section,
    dice_image,
    dice_label,
    button_group,
    reset_btn,
    rules_btn,
  } = styles;

  return (
    <div className={container}>
      <div className={navbar}>
        <div className={score_box}>
          <div className={score_value}>
            <span>0</span>
          </div>
          <div className={score_label}>Total Score</div>
        </div>

        <div className={selection_box}>
          <div className={number_options}>
            <ul>
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <button>5</button>
              </li>
              <li>
                <button>6</button>
              </li>
            </ul>
          </div>
          <div className={number_label}>
            <span>Select Number</span>
          </div>
        </div>
      </div>
      <div className={content}>
        <div className={dice_section}>
          <div className={dice_image}>
            <img src="./dice_1.png" alt="dice" />
          </div>
          <div className={dice_label}>Click on dice to roll</div>
        </div>
        <div className={button_group}>
          <button className={reset_btn}>Reset Score</button>
          <button className={rules_btn} onClick={() => navigate("/rules")}>
            Show Rules
          </button>
        </div>
      </div>
    </div>
  );
}
