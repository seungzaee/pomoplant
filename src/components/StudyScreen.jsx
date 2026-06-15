import Timer from "./Timer";
import StatusPanel from "./StatusPanel";

function StudyScreen({ studyMinutes, selectedPlant }) {
  return (
    <main className="study-screen">
      <aside className="vine-area">
        <div className="vine-piece">{selectedPlant.emoji}</div>
        <div className="vine-piece">{selectedPlant.emoji}</div>
        <div className="vine-piece">{selectedPlant.emoji}</div>
      </aside>

      <section className="study-panel">
        <p className="game-label">STUDY MODE</p>

        <h1>POMOPLANT</h1>

        <p className="study-message">선택한 식물: {selectedPlant.name}</p>

        <Timer studyMinutes={studyMinutes} />

        <StatusPanel />
      </section>

      <section className="camera-preview">
        <p>CAMERA</p>
        <div className="camera-placeholder">READY</div>
      </section>
    </main>
  );
}

export default StudyScreen;
