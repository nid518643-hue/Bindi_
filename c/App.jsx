import React, { useState } from "react";
import { GameProvider } from "./context/GameContext";
import "./styles/main.css";

import AutoClicker from "./components/AutoClicker";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import Mines from "./components/Mines";
import Crash100 from "./components/Crash100";
import Aviator from "./components/Aviator";
import Roulette from "./components/Roulette";
import Wheel from "./components/Wheel";
import Fishing from "./components/Fishing";
import League from "./components/League";

export default function App() {
  const [page, setPage] = useState("menu");

  const renderPage = () => {
    switch (page) {
      case "auto": return <AutoClicker />;
      case "profile": return <Profile />;
      case "shop": return <Shop />;
      case "mines": return <Mines />;
      case "crash": return <Crash100 />;
      case "aviator": return <Aviator />;
      case "roulette": return <Roulette />;
      case "wheel": return <Wheel />;
      case "fish": return <Fishing />;
      case "league": return <League />;
      default: return menu();
    }
  };

  const menu = () => (
    <div className="menu">
      <h1 className="title">Bindi_tm</h1>

      <button onClick={() => setPage("auto")}>Авто кликер</button>
      <button onClick={() => setPage("shop")}>Магазин улучшений</button>
      <button onClick={() => setPage("profile")}>Профиль</button>

      <h2>Игры</h2>
      <button onClick={() => setPage("mines")}>Мины</button>
      <button onClick={() => setPage("crash")}>Crash x100</button>
      <button onClick={() => setPage("aviator")}>Авиатор</button>
      <button onClick={() => setPage("roulette")}>Рулетка</button>
      <button onClick={() => setPage("wheel")}>Колесо фортуны</button>
      <button onClick={() => setPage("fish")}>Рыбалка</button>

      <h2>Сообщество</h2>
      <button onClick={() => setPage("league")}>Лига игроков</button>

      <footer className="footer">by Bindi</footer>
    </div>
  );

  return (
    <GameProvider>
      <div className="app">{renderPage()}</div>
    </GameProvider>
  );
}
