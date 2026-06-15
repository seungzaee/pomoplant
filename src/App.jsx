import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>POMOPLANT 🌱</h1>

      <section className="plant-card">
        <div className="plant">🌱</div>
        <p className="plant-message">오늘도 같이 공부하자!</p>
      </section>

      <section className="timer-card">
        <h2>25:00</h2>

        <div className="button-group">
          <button>시작</button>
          <button>일시정지</button>
          <button>리셋</button>
        </div>
      </section>

      <section className="status-card">
        <p>현재 상태: 대기 중</p>
        <p>인식된 동작: 없음</p>
      </section>
    </div>
  );
}

export default App;
