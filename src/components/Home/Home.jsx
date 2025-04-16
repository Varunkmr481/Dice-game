import { Link, useNavigate } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const { home, image_wrapper, content, title, button_wrapper } = styles;

  return (
    <div className={home}>
      <div className={image_wrapper}>
        <img src="./dices_1.png" alt="dices image" />
      </div>

      <div className={content}>
        <div className={title}>
          <h1>DICE GAME</h1>
          <div className={button_wrapper}>
            <button onClick={() => navigate("/dice-game")}>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
