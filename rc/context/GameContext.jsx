import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const load = (key, def) => {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : def;
  };

  const [money, setMoney] = useState(load("money", 1000));
  const [xp, setXp] = useState(load("xp", 0));
  const [level, setLevel] = useState(load("level", 1));
  const [upgrades, setUpgrades] = useState(load("upgrades", {}));
  const [clickPower, setClickPower] = useState(load("clickPower", 1));

  const levelUp = () => {
    while (xp >= level * 100) {
      setLevel(prev => prev + 1);
      setXp(prev => prev - level * 100);
    }
  };

  const addMoney = (amount) => {
    setMoney(prev => prev + amount);
    setXp(prev => prev + amount * 0.2);
  };

  const buyUpgrade = (id, cost, bonus) => {
    if (money >= cost) {
      setMoney(money - cost);
      setClickPower(clickPower + bonus);
      setUpgrades({ ...upgrades, [id]: true });
    }
  };

  useEffect(() => localStorage.setItem("money", JSON.stringify(money)), [money]);
  useEffect(() => localStorage.setItem("xp", JSON.stringify(xp)), [xp]);
  useEffect(() => localStorage.setItem("level", JSON.stringify(level)), [level]);
  useEffect(() => localStorage.setItem("upgrades", JSON.stringify(upgrades)), [upgrades]);
  useEffect(() => localStorage.setItem("clickPower", JSON.stringify(clickPower)), [clickPower]);
  useEffect(() => levelUp(), [xp]);

  return (
    <GameContext.Provider
      value={{
        money,
        xp,
        level,
        clickPower,
        upgrades,
        addMoney,
        buyUpgrade
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
