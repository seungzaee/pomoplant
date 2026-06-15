function PlantVine({ selectedPlant, progress }) {
  const maxPieces = 8;
  const grownPieces = Math.max(1, Math.ceil((progress / 100) * maxPieces));

  return (
    <aside className="vine-area">
      {Array.from({ length: grownPieces }).map((_, index) => {
        const isLastPiece = index === grownPieces - 1;
        const isCompleted = progress >= 100;

        return (
          <div key={index} className="vine-piece">
            {isCompleted && isLastPiece ? "🌸" : selectedPlant.emoji}
          </div>
        );
      })}
    </aside>
  );
}

export default PlantVine;
