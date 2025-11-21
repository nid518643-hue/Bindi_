import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Profile() {
  const { money, level, xp } = useContext(GameContext);

  return (
    <div className="page">
      <h1>Профиль</h1>

      <div className="card">
        <h2>Уровень: {level} ⭐</h2>
        <h2>Опыт: {xp}</h2>
        <h2>Баланс: {money} 💰</h2>

        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{ width: `${(xp / (level * 100)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
