import Timer from "./Timer";
import StatusPanel from "./StatusPanel";

function StudyScreen() {
  return (
    <main className="study-screen">
      <aside className="vine-area">
        <div className="vine-piece">🌱</div>
        <div className="vine-piece">🌿</div>
        <div className="vine-piece">🌿</div>
      </aside>

      <section className="study-panel">
        <p className="game-label">STUDY MODE</p>

        <h1>POMOPLANT</h1>

        <p className="study-message">집중할수록 왼쪽의 식물이 자라나요.</p>

        <Timer />

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
