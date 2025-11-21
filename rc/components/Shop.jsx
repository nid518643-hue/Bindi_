import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Shop() {
  const { money, clickPower, buyUpgrade } = useContext(GameContext);

  const items = [
    { id: "u1", name: "Клик x2", cost: 500, bonus: 1 },
    { id: "u2", name: "Клик x5", cost: 2000, bonus: 5 },
    { id: "u3", name: "Автоклик PRO", cost: 10000, bonus: 15 },
    { id: "u4", name: "Фиолетовый бафф", cost: 25000, bonus: 30 }
  ];

  return (
    <div className="page">
      <h1>Магазин улучшений</h1>
      <h2>Баланс: {money} 💰</h2>
      <h2>Сила клика: {clickPower}</h2>

      <div className="shop-grid">
        {items.map((item) => (
          <div className="shop-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Цена: {item.cost}</p>
            <button onClick={() => buyUpgrade(item.id, item.cost, item.bonus)}>
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
