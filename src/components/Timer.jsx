import useTimer from "../hooks/useTimer";

function Timer() {
  const { formattedTime, startTimer, pauseTimer, resetTimer } = useTimer();

  return (
    <section className="timer-card">
      <h2>{formattedTime}</h2>

      <div className="button-group">
        <button onClick={startTimer}>시작</button>
        <button onClick={pauseTimer}>일시정지</button>
        <button onClick={resetTimer}>리셋</button>
      </div>
    </section>
  );
}

export default Timer;
