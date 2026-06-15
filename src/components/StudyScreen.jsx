import useTimer from "../hooks/useTimer";
import PlantVine from "./PlantVine";
import Timer from "./Timer";
import StatusPanel from "./StatusPanel";

function StudyScreen({ studyMinutes, selectedPlant }) {
  const initialTime = studyMinutes * 60;

  const {
    timeLeft,
    isRunning,
    formattedTime,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer(initialTime);

  const progress = Math.floor(((initialTime - timeLeft) / initialTime) * 100);

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
