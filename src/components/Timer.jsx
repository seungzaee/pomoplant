import useTimer from "../hooks/useTimer";

function Timer({ studyMinutes }) {
  const initialTime = studyMinutes * 60;

  const { formattedTime, startTimer, pauseTimer, resetTimer } =
    useTimer(initialTime);

  return (
    <section className="timer-card">
      <h2>{formattedTime}</h2>

      <div className="button-group">
        <button onClick={startTimer}>START</button>
        <button onClick={pauseTimer}>PAUSE</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </section>
  );
}

export default Timer;
