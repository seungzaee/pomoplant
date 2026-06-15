function StartScreen({ onStart }) {
  return (
    <main className="start-screen">
      <section className="start-panel">
        <p className="game-label">RETRO STUDY GAME</p>

        <h1>POMOPLANT</h1>

        <p className="start-subtitle">공부하면 자라나는 나만의 픽셀 화분</p>

        <div className="setting-box">
          <label htmlFor="study-time">STUDY TIME</label>
          <select id="study-time" defaultValue="25">
            <option value="15">15 MIN</option>
            <option value="25">25 MIN</option>
            <option value="30">30 MIN</option>
            <option value="50">50 MIN</option>
          </select>
        </div>

        <div className="plant-select-box">
          <p>SELECT PLANT</p>

          <div className="plant-options">
            <button type="button" className="plant-option selected">
              🌱
            </button>
            <button type="button" className="plant-option">
              🌿
            </button>
            <button type="button" className="plant-option">
              🪴
            </button>
          </div>
        </div>

        <button type="button" className="start-button" onClick={onStart}>
          START
        </button>
      </section>
    </main>
  );
}

export default StartScreen;
