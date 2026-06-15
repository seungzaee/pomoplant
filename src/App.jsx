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

  const handleEndStudy = (studySession) => {
    const savedSessions =
      JSON.parse(localStorage.getItem("pomoplant-sessions")) || [];

    const updatedSessions = [studySession, ...savedSessions];

    localStorage.setItem("pomoplant-sessions", JSON.stringify(updatedSessions));

    console.log("저장된 공부 세션:", studySession);

    setScreen("start");
  };

  return (
    <>
      {screen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <StudyScreen
          studyMinutes={studyConfig.studyMinutes}
          selectedPlant={studyConfig.selectedPlant}
          onEndStudy={handleEndStudy}
        />
      )}
    </>
  );
}

export default App;
