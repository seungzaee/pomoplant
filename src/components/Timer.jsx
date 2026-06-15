function Timer({ formattedTime, startTimer, pauseTimer, resetTimer }) {
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
