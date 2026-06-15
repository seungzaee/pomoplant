import { useState } from "react";

const PLANT_OPTIONS = [
  {
    id: "sprout",
    emoji: "🌱",
    name: "SPROUT",
  },
  {
    id: "herb",
    emoji: "🌿",
    name: "HERB",
  },
  {
    id: "pot",
    emoji: "🪴",
    name: "POT",
  },
];

function StartScreen({ onStart }) {
  const [studyMinutes, setStudyMinutes] = useState(25);
  const [selectedPlant, setSelectedPlant] = useState(PLANT_OPTIONS[0]);

  const handleStart = () => {
    onStart({
      studyMinutes,
      selectedPlant,
    });
  };

  return (
    <main className="start-screen">
      <section className="start-panel">
        <p className="game-label">RETRO STUDY GAME</p>

        <h1>POMOPLANT</h1>

        <p className="start-subtitle">공부하면 자라나는 나만의 픽셀 화분</p>

        <div className="setting-box">
          <label htmlFor="study-time">STUDY TIME</label>
          <select
            id="study-time"
            value={studyMinutes}
            onChange={(event) => setStudyMinutes(Number(event.target.value))}
          >
            <option value="1">1 MIN</option>
            <option value="15">15 MIN</option>
            <option value="25">25 MIN</option>
            <option value="30">30 MIN</option>
            <option value="50">50 MIN</option>
          </select>
        </div>

        <div className="plant-select-box">
          <p>SELECT PLANT</p>

          <div className="plant-options">
            {PLANT_OPTIONS.map((plant) => (
              <button
                key={plant.id}
                type="button"
                className={`plant-option ${
                  selectedPlant.id === plant.id ? "selected" : ""
                }`}
                onClick={() => setSelectedPlant(plant)}
              >
                <span className="plant-option-emoji">{plant.emoji}</span>
                <span className="plant-option-name">{plant.name}</span>
              </button>
            ))}
          </div>
        </div>

        <button type="button" className="start-button" onClick={handleStart}>
          START
        </button>
      </section>
    </main>
  );
}

export default StartScreen;
