import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import StudyScreen from "./components/StudyScreen";

function App() {
  const [screen, setScreen] = useState("start");

  const handleStart = () => {
    setScreen("study");
  };

  return (
    <>
      {screen === "start" ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <StudyScreen />
      )}
    </>
  );
}

export default App;
