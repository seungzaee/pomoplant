import { useState } from "react";
import useTimer from "../hooks/useTimer";
import PlantVine from "./PlantVine";
import Timer from "./Timer";
import StatusPanel from "./StatusPanel";

function StudyScreen({ studyMinutes, selectedPlant, onEndStudy }) {
  const initialTime = studyMinutes * 60;
  const [startedAt] = useState(new Date().toISOString());

  const {
    timeLeft,
    isRunning,
    formattedTime,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer(initialTime);

  const progress = Math.floor(((initialTime - timeLeft) / initialTime) * 100);
  const studiedSeconds = initialTime - timeLeft;
  const studiedMinutes = Math.floor(studiedSeconds / 60);

  const handleEndStudy = () => {
    const endedAt = new Date().toISOString();

    const studySession = {
      targetMinutes: studyMinutes,
      studiedMinutes,
      studiedSeconds,
      selectedPlant: {
        id: selectedPlant.id,
        name: selectedPlant.name,
        emoji: selectedPlant.emoji,
      },
      progress,
      completed: progress >= 100,
      focusScore: progress,
      awayCount: 0,
      gestureCount: 0,
      startedAt,
      endedAt,
    };

    onEndStudy(studySession);
  };

  return (
    <main className="study-screen">
      <PlantVine selectedPlant={selectedPlant} progress={progress} />

      <section className="study-panel">
        <p className="game-label">STUDY MODE</p>

        <h1>POMOPLANT</h1>

        <p className="study-message">
          선택한 식물: {selectedPlant.name} / 성장률: {progress}%
        </p>

        <Timer
          formattedTime={formattedTime}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
        />

        <button type="button" className="end-button" onClick={handleEndStudy}>
          END STUDY
        </button>

        <StatusPanel isRunning={isRunning} progress={progress} />
      </section>

      <section className="camera-preview">
        <p>CAMERA</p>
        <div className="camera-placeholder">READY</div>
      </section>
    </main>
  );
}

export default StudyScreen;
