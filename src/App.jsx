// "use client";
import { useEffect, useState } from "react";
import "./App.css";

const jsonLink = "./data.json";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(jsonLink).then((res) => res.json());
      setList(data);
    })();
  }, []);

  return (
    <div className="app__container">
      <div className="app__container-left bg-gradient">
        <h2>Your Result</h2>
        <div className="app__container-left__score bg-circle-gradient">
          <div id="score">76</div>
          <div>of 100</div>
        </div>
        <div className="app__container-left__text">
          <div>Great</div>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="app__container-right">
        <h2>Summary</h2>
        <ul className="app__container-right__list">
          {list.map((item, index) => (
            <li
              key={index}
              className={`app__container-right__list_${item.category}`}
            >
              <div>
                <img src={item.icon} alt={item.category} />
                <span>{item.category}</span>
              </div>
              <div>
                <span>{item.score}</span> / 100
              </div>
            </li>
          ))}
        </ul>
        <button className="app__container-right__button">Continue</button>
      </div>
    </div>
  );
}
