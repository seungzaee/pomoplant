import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="app">
      <h1>POMOPLANT 🌱</h1>

      <section className="plant-card">
        <div className="plant">🌱</div>
        <p className="plant-message">오늘도 같이 공부하자!</p>
      </section>

      <Timer />

      <section className="status-card">
        <p>현재 상태: 대기 중</p>
        <p>인식된 동작: 없음</p>
      </section>
    </div>
  );
}

export default App;
