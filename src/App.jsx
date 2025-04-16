import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import DiceGame from "./components/DiceGame/DiceGame";
import Rules from "./components/Rules/Rules";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dice-game" element={<DiceGame />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
}
