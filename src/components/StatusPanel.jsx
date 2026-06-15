function StatusPanel({ isRunning, progress }) {
  const statusText = isRunning ? "집중 중" : "대기 중";

  return (
    <section className="status-card">
      <p>현재 상태: {statusText}</p>
      <p>성장률: {progress}%</p>
      <p>인식된 동작: 없음</p>
    </section>
  );
}

export default StatusPanel;
