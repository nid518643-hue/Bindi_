import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

export default function AutoClicker() {
  const { money, clickPower, addMoney } = useContext(GameContext);

  useEffect(() => {
    const interval = setInterval(() => {
      addMoney(clickPower);
    }, 1000);

    return () => clearInterval(interval);
  }, [clickPower]);

  return (
    <div className="page">
      <h1>Авто кликер</h1>

      <div className="card">
        <h2>Текущая мощность клика: +{clickPower} монет/сек</h2>
        <h2>Баланс: {money} 💰</h2>

        <button
          className="big-btn"
          onClick={() => addMoney(clickPower * 2)}
        >
          Нажми чтобы заработать
        </button>
      </div>
    </div>
  );
}
