import React, { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Mines() {
  const { money, addMoney } = useContext(GameContext);
  const [bet, setBet] = useState(100);
  const [mines] = useState(5);
  const [grid, setGrid] = useState(Array(25).fill(null));
  const [active, setActive] = useState(false);
  const [hits, setHits] = useState(0);

  const start = () => {
    if (bet > money) return;
    setActive(true);
    setGrid(Array(25).fill(null));
    setHits(0);
  };

  const pick = (i) => {
    if (!active) return;

    const isMine = Math.random() < mines / 25;

    if (isMine) {
      setGrid((g) => g.map((v, idx) => (idx === i ? "💣" : v)));
      setActive(false);
    } else {
      setGrid((g) => g.map((v, idx) => (idx === i ? "💎" : v)));
      setHits(hits + 1);
    }
  };

  const cashout = () => {
    const win = bet * (1 + hits * 0.35);
    addMoney(win);
    setActive(false);
  };

  return (
    <div className="page">
      <h1>Мины</h1>

      <div className="card">
        <p>Баланс: {money}</p>
        <input
          type="number"
          value={bet}
          onChange={(e) => setBet(Number(e.target.value))}
        />
        <button onClick={start}>Начать</button>
        <button onClick={cashout}>Забрать</button>
      </div>

      <div className="mines-grid">
        {grid.map((cell, i) => (
          <div key={i} className="mines-cell" onClick={() => pick(i)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}
