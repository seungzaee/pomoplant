import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import StudyScreen from "./components/StudyScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [studyConfig, setStudyConfig] = useState({
    studyMinutes: 25,
    selectedPlant: {
      id: "sprout",
      emoji: "🌱",
      name: "SPROUT",
    },
  });

  const handleStart = (config) => {
    setStudyConfig(config);
    setScreen("study");
  };

  return (
    <>
      {screen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <StudyScreen
          studyMinutes={studyConfig.studyMinutes}
          selectedPlant={studyConfig.selectedPlant}
        />
      )}
    </>
  );
}

export default App;
